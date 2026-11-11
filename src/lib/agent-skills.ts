// Agent Skills Discovery (RFC v0.2.0): https://github.com/cloudflare/agent-skills-discovery-rfc
//
// Sirve /.well-known/agent-skills/index.json y cada SKILL.md desde
// src/content/agent-skills/<nombre>/SKILL.md. El digest se calcula sobre el
// mismo texto que se envía, así que nunca queda desincronizado al editar.

const SCHEMA = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";
const PREFIX = "/.well-known/agent-skills/";
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const modules = import.meta.glob("../content/agent-skills/*/SKILL.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

interface Skill {
  name: string;
  description: string;
  body: string;
}

function parseSkill(path: string, raw: string): Skill {
  const dir = path.split("/").at(-2) ?? "";
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const field = (key: string) =>
    fm.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, "m"))?.[1]?.replace(/^["']|["']$/g, "");
  const name = field("name");
  const description = field("description");
  if (!name || !description || name !== dir || !NAME_RE.test(name) || name.length > 64) {
    throw new Error(`agent-skills: frontmatter no válido en ${path}`);
  }
  if (description.length > 1024) {
    throw new Error(`agent-skills: description de más de 1024 caracteres en ${path}`);
  }
  return { name, description, body: raw };
}

const skills: Skill[] = Object.entries(modules)
  .map(([path, raw]) => parseSkill(path, raw))
  .sort((a, b) => a.name.localeCompare(b.name));

const skillByName = new Map(skills.map((s) => [s.name, s]));

async function sha256(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}

let indexCache: Promise<string> | undefined;

function buildIndex(): Promise<string> {
  indexCache ??= Promise.all(
    skills.map(async (s) => ({
      name: s.name,
      type: "skill-md",
      description: s.description,
      url: `${PREFIX}${s.name}/SKILL.md`,
      digest: `sha256:${await sha256(s.body)}`,
    })),
  ).then((entries) => JSON.stringify({ $schema: SCHEMA, skills: entries }, null, 2) + "\n");
  return indexCache;
}

function respond(request: Request, body: string, contentType: string): Response {
  return new Response(request.method === "HEAD" ? null : body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

/** Devuelve la respuesta para /.well-known/agent-skills/*, o null si la ruta no es suya. */
export async function handleAgentSkillsRequest(request: Request): Promise<Response | null> {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const { pathname } = new URL(request.url);
  if (!pathname.startsWith(PREFIX)) return null;

  const rest = pathname.slice(PREFIX.length);
  if (rest === "index.json") {
    return respond(request, await buildIndex(), "application/json; charset=utf-8");
  }

  const skill = skillByName.get(rest.match(/^([^/]+)\/SKILL\.md$/)?.[1] ?? "");
  if (skill) return respond(request, skill.body, "text/markdown; charset=utf-8");

  return new Response("Not found\n", {
    status: 404,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
