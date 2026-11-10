#!/usr/bin/env node
// Avisa a IndexNow (Bing, Yandex, Seznam, Naver…) de las URLs que han cambiado
// entre dos commits. Lo lanza .github/workflows/indexnow.yml cuando Vercel
// termina un despliegue de producción, así las URLs ya están vivas al avisar.
//
// Uso:
//   node scripts/indexnow.mjs <commit-base> <commit-nuevo> [--dry-run]
//
// --dry-run solo imprime las URLs, no envía nada.

import { execFileSync } from "node:child_process";

const HOST = "yamato.digital";
const BASE_URL = `https://${HOST}`;
// La clave es pública por diseño: IndexNow la comprueba en /<clave>.txt.
const KEY = "1ef500d511aac096e2659acf788c7579";
const ENDPOINT = "https://api.indexnow.org/indexnow";

// Páginas fijas. Si cambia algo compartido (componentes, estilos, layout),
// se avisa de todas: son pocas y todas pueden haber cambiado.
const STATIC_PAGES = [
  "/",
  "/servicios",
  "/fractional-cmo",
  "/quienes-somos",
  "/clientes",
  "/partners",
  "/blog",
  "/contacto",
];

// Archivo de ruta → URL. Las que no aparecen aquí no generan aviso por sí solas.
const ROUTE_FILES = {
  "index.tsx": "/",
  "blog.index.tsx": "/blog",
  "servicios.tsx": "/servicios",
  "fractional-cmo.tsx": "/fractional-cmo",
  "quienes-somos.tsx": "/quienes-somos",
  "clientes.tsx": "/clientes",
  "partners.tsx": "/partners",
  "contacto.tsx": "/contacto",
};

const SHARED_PREFIXES = ["src/components/", "src/styles", "src/routes/__root.tsx"];

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

function slugOf(path, commit) {
  // Mismo criterio que src/lib/blog.ts: slug del frontmatter o, si no hay,
  // el nombre del archivo sin la fecha delante.
  let raw = "";
  try {
    raw = git("show", `${commit}:${path}`);
  } catch {
    /* el archivo no existe en ese commit */
  }
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fromFm = fm?.[1].match(/^slug:\s*["']?([^"'\r\n]+?)["']?\s*$/m)?.[1];
  if (fromFm) return fromFm;
  const file = path.split("/").pop().replace(/\.md$/, "");
  return file.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function changedUrls(base, head) {
  const lines = git("diff", "--name-status", "--no-renames", base, head)
    .split("\n")
    .filter(Boolean);
  const urls = new Set();

  for (const line of lines) {
    const [status, path] = line.split("\t");

    const post = path.match(/^src\/content\/blog\/([^/_][^/]*)\.md$/);
    if (post) {
      // Un post borrado también se avisa: así Bing ve antes el 404/301.
      urls.add(`/blog/${slugOf(path, status === "D" ? base : head)}`);
      urls.add("/blog");
      urls.add("/");
      continue;
    }

    const route = path.match(/^src\/routes\/([^/]+)$/);
    if (route && ROUTE_FILES[route[1]]) {
      urls.add(ROUTE_FILES[route[1]]);
      continue;
    }

    if (SHARED_PREFIXES.some((p) => path.startsWith(p))) {
      STATIC_PAGES.forEach((p) => urls.add(p));
    }
  }

  return [...urls].map((p) => BASE_URL + p);
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList,
    }),
  });
  const body = await res.text();
  // 200 = recibido, 202 = recibido y la clave se validará después.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow respondió ${res.status}: ${body}`);
  }
  return res.status;
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const [base, head] = args.filter((a) => !a.startsWith("--"));

if (!base || !head) {
  console.error("Uso: node scripts/indexnow.mjs <commit-base> <commit-nuevo> [--dry-run]");
  process.exit(1);
}

const urls = changedUrls(base, head);
if (urls.length === 0) {
  console.log("Ningún cambio con URL pública. No se avisa a IndexNow.");
  process.exit(0);
}

console.log(`URLs (${urls.length}):\n  ${urls.join("\n  ")}`);
if (dryRun) {
  console.log("--dry-run: no se envía nada.");
} else {
  const status = await submit(urls);
  console.log(`IndexNow OK (${status}).`);
}
