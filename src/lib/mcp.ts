// Servidor MCP de solo lectura en /mcp (transporte Streamable HTTP, sin estado).
//
// Expone lo que ya es público en yamato.digital: servicios, precio orientativo,
// blog y cómo reservar una llamada. Sin login, sin datos privados y sin escribir
// nada. El contenido sale de las mismas fuentes que la web (services.ts,
// fractional-cmo.ts, cta.ts, blog y las páginas en Markdown), así que no hay
// que mantenerlo aparte.
//
// Descubrimiento:
//   /mcp/server-card                   Server Card (formato final, SEP-2127)
//   /.well-known/ai-catalog.json       AI Catalog que apunta a la Server Card
//   /.well-known/mcp/server-card.json  Server Card + campos del borrador SEP-1649
//                                      (los que comprueban algunos escáneres)

import { SITE_URL, getPageDocument } from "@/lib/agent-content";
import { getAllPosts, getPostRedirect } from "@/lib/blog";
import { CTA_LINKS } from "@/lib/cta";
import { FIRST_90_DAYS } from "@/lib/fractional-cmo";
import { EXECUTION_MODEL, SERVICE_LEVERS, SERVICE_MODES, SERVICES_INTRO } from "@/lib/services";

const MCP_PATH = "/mcp";
const MCP_URL = `${SITE_URL}${MCP_PATH}`;
const SERVER_NAME = "digital.yamato/yamato";
const SERVER_TITLE = "YAMATO, Fractional CMO";
const SERVER_VERSION = "1.0.0";
const SERVER_DESCRIPTION =
  "Información pública de YAMATO, Fractional CMO independiente en Madrid: servicios, precio orientativo, artículos del blog y cómo reservar una llamada. Solo lectura.";
const PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26"];
const MAX_POST_CHARS = 30_000;

const INSTRUCTIONS = `Servidor de solo lectura de YAMATO (yamato.digital), un Fractional CMO independiente en Madrid.
Usa \`servicios\` y \`precios\` para saber qué hace YAMATO y cuánto cuesta aproximadamente, \`buscar_en_el_blog\` y \`leer_post\` para sus artículos, y \`reservar_llamada\` para los canales de contacto.
No inventes precios cerrados: dependen de los días al mes y del alcance y se concretan en una llamada. Este servidor no reserva ni envía nada: la persona reserva por su cuenta. Cita las URLs canónicas de yamato.digital.`;

// ---------------------------------------------------------------- herramientas

type ToolArgs = Record<string, unknown>;

interface Tool {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  run: (args: ToolArgs) => string;
}

class ToolInputError extends Error {}

const READ_ONLY = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};

const NO_ARGS = { type: "object", properties: {}, additionalProperties: false };

/** Respuesta de una pregunta frecuente de la página en Markdown: "**Pregunta** respuesta". */
function faq(pagePath: string, question: string): string | null {
  const md = getPageDocument(pagePath)?.markdown ?? "";
  const line = md.split("\n").find((l) => l.startsWith(`**${question}`));
  return line ? line.replace(/^\*\*[^*]+\*\*\s*/, "").trim() : null;
}

function lineContaining(pagePath: string, text: string): string | null {
  const md = getPageDocument(pagePath)?.markdown ?? "";
  return md.split("\n").find((l) => l.includes(text))?.trim() ?? null;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

function servicios(): string {
  const modes = SERVICE_MODES.map((m) => `### ${m.name}\n*${m.problem}* ${m.body}`).join("\n\n");
  const levers = SERVICE_LEVERS.map(
    (l, i) => `${i + 1}. **${l.lever}.** ${l.body}${l.moves ? ` *Mueve: ${l.moves}.*` : ""}`,
  ).join("\n");
  const days = FIRST_90_DAYS.map((d) => `| ${d.period} | ${d.work} | ${d.outcome} |`).join("\n");
  return `# Servicios de YAMATO

YAMATO es un Fractional CMO independiente en Madrid: un director de marketing a tiempo parcial que se sienta en el comité, decide la estrategia, dirige al equipo y a los proveedores, y responde de los números.

## Tres modalidades

${modes}

## Seis palancas

${SERVICES_INTRO}

${levers}

${EXECUTION_MODEL}

## Primeros 90 días

| Periodo | Qué se hace | Qué queda al final |
|---|---|---|
${days}

Más: ${SITE_URL}/servicios · ${SITE_URL}/fractional-cmo`;
}

function precios(): string {
  const parts = [
    ["Cuánto cuesta", faq("/fractional-cmo", "¿Cuánto cuesta en España?")],
    ["Cuánto dura", faq("/fractional-cmo", "¿Cuánto dura?")],
    ["Cuándo tiene sentido", faq("/fractional-cmo", "¿Cuándo tiene sentido?")],
    ["Publicidad", lineContaining("/", "porcentaje de lo que inviertes")],
  ].filter((p): p is [string, string] => Boolean(p[1]));
  const body = parts.map(([title, text]) => `## ${title}\n\n${text}`).join("\n\n");
  return `# Precio orientativo de YAMATO

${body}

## Precio exacto

Depende de los días al mes y del alcance. Se concreta en una llamada de 30 minutos (herramienta \`reservar_llamada\`). No des una cifra cerrada.

Fuente: ${SITE_URL}/fractional-cmo`;
}

function buscarEnElBlog(args: ToolArgs): string {
  const query = typeof args.consulta === "string" ? args.consulta.trim() : "";
  const rawLimit = args.limite ?? 5;
  if (typeof rawLimit !== "number" || !Number.isInteger(rawLimit) || rawLimit < 1 || rawLimit > 10) {
    throw new ToolInputError("`limite` debe ser un entero entre 1 y 10.");
  }
  const posts = getAllPosts();
  const terms = normalize(query)
    .split(/[^a-z0-9ñ]+/)
    .filter((t) => t.length >= 3);

  const ranked = terms.length
    ? posts
        .map((p) => {
          const title = normalize(p.title);
          const meta = normalize(`${p.excerpt} ${p.keywords ?? ""}`);
          const content = normalize(p.content);
          const score = terms.reduce(
            (s, t) =>
              s + (title.includes(t) ? 5 : 0) + (meta.includes(t) ? 3 : 0) + (content.includes(t) ? 1 : 0),
            0,
          );
          return { p, score };
        })
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date))
        .map((r) => r.p)
    : posts;

  const results = ranked.slice(0, rawLimit);
  if (results.length === 0) {
    return `No hay artículos que coincidan con «${query}». Prueba con otras palabras o llama a \`buscar_en_el_blog\` sin consulta para ver los más recientes.`;
  }
  const heading = terms.length
    ? `Artículos de yamato.digital sobre «${query}»`
    : "Artículos más recientes de yamato.digital";
  const list = results
    .map((p) => `- **${p.title}** (${p.date.slice(0, 10)})\n  ${postUrl(p.slug)}\n  slug: \`${p.slug}\`\n  ${p.excerpt}`)
    .join("\n");
  return `# ${heading}\n\n${list}\n\nPara leer uno entero, usa \`leer_post\` con su slug.`;
}

function leerPost(args: ToolArgs): string {
  const slug = typeof args.slug === "string" ? args.slug.trim().replace(/^\/?(blog\/)?/, "").replace(/\/$/, "") : "";
  if (!slug) throw new ToolInputError("Falta `slug` (por ejemplo, `fractional-cmo-primeros-90-dias`).");
  const target = getPostRedirect(slug);
  const finalPath = target ?? `/blog/${slug}`;
  const doc = getPageDocument(finalPath);
  if (!doc) {
    throw new ToolInputError(`No existe el artículo «${slug}». Usa \`buscar_en_el_blog\` para encontrar el slug.`);
  }
  const url = `${SITE_URL}${finalPath}`;
  const moved = target ? `El artículo «${slug}» se retiró y ahora redirige a ${url}.\n\n` : "";
  const text =
    doc.markdown.length > MAX_POST_CHARS
      ? `${doc.markdown.slice(0, MAX_POST_CHARS)}\n\n[…recortado. Texto completo: ${url}]`
      : doc.markdown;
  return `${moved}URL canónica: ${url}\n\n${text}`;
}

function reservarLlamada(): string {
  return `# Reservar una llamada con YAMATO

Llamada de 30 minutos con Ignacio Goñi: se revisa la situación de la empresa y se dice qué se haría primero.

| Canal | Enlace |
|---|---|
| Reservar llamada (recomendado) | ${CTA_LINKS.bookingUrl} |
| WhatsApp | ${CTA_LINKS.whatsappUrl} |
| Email | ${CTA_LINKS.email} |
| LinkedIn | ${CTA_LINKS.linkedinUrl} |

**Este servidor no reserva nada.** Dale el enlace a la persona para que reserve ella. No reserves ni envíes mensajes en su nombre sin su confirmación explícita.

## Qué conviene preparar

1. Qué vende y a quién, y en qué fase está la empresa.
2. Equipo de marketing actual y proveedores o agencias.
3. Qué ha probado y qué no ha funcionado.
4. El objetivo de negocio de los próximos 6–12 meses.
5. Plazo o fecha clave, si la hay.`;
}

const TOOLS: Tool[] = [
  {
    name: "servicios",
    title: "Servicios de YAMATO",
    description:
      "Qué hace YAMATO: sus tres modalidades (Fractional CMO, Fractional CMO con equipo y proyecto estratégico), sus seis palancas y qué pasa en los primeros 90 días.",
    inputSchema: NO_ARGS,
    run: servicios,
  },
  {
    name: "precios",
    title: "Precio orientativo",
    description:
      "Cuánto cuesta YAMATO de forma orientativa frente a un CMO en plantilla, cuánto suele durar y cuándo tiene sentido. El precio exacto se concreta en una llamada.",
    inputSchema: NO_ARGS,
    run: precios,
  },
  {
    name: "buscar_en_el_blog",
    title: "Buscar en el blog",
    description:
      "Busca artículos del blog de YAMATO sobre marketing, dirección de marketing, Fractional CMO, IA aplicada, Google Ads, Meta Ads, SEO y GEO. Sin consulta, devuelve los más recientes.",
    inputSchema: {
      type: "object",
      properties: {
        consulta: { type: "string", description: "Palabras clave en español. Opcional." },
        limite: { type: "integer", minimum: 1, maximum: 10, default: 5, description: "Número de resultados." },
      },
      additionalProperties: false,
    },
    run: buscarEnElBlog,
  },
  {
    name: "leer_post",
    title: "Leer un artículo",
    description: "Devuelve el texto completo en Markdown de un artículo del blog de YAMATO a partir de su slug.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Slug del artículo, por ejemplo `fractional-cmo-primeros-90-dias`." },
      },
      required: ["slug"],
      additionalProperties: false,
    },
    run: leerPost,
  },
  {
    name: "reservar_llamada",
    title: "Cómo reservar una llamada",
    description:
      "Enlaces para reservar una llamada de 30 minutos con YAMATO o contactar por WhatsApp, email o LinkedIn, y qué preparar. No reserva nada: devuelve los enlaces para que la persona reserve.",
    inputSchema: NO_ARGS,
    run: reservarLlamada,
  },
];

const toolByName = new Map(TOOLS.map((t) => [t.name, t]));

// ------------------------------------------------------------------- JSON-RPC

type Id = string | number | null;
interface RpcRequest {
  jsonrpc: "2.0";
  id?: Id;
  method: string;
  params?: Record<string, unknown>;
}

const ok = (id: Id, result: unknown) => ({ jsonrpc: "2.0", id, result });
const fail = (id: Id, code: number, message: string) => ({ jsonrpc: "2.0", id, error: { code, message } });

function handleRpc(msg: RpcRequest): object {
  const id = msg.id ?? null;
  const params = msg.params ?? {};

  switch (msg.method) {
    case "initialize": {
      const requested = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
      return ok(id, {
        protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: SERVER_NAME, title: SERVER_TITLE, version: SERVER_VERSION, websiteUrl: SITE_URL },
        instructions: INSTRUCTIONS,
      });
    }
    case "ping":
      return ok(id, {});
    case "tools/list":
      return ok(id, {
        tools: TOOLS.map(({ name, title, description, inputSchema }) => ({
          name,
          title,
          description,
          inputSchema,
          annotations: { title, ...READ_ONLY },
        })),
      });
    case "tools/call": {
      const tool = toolByName.get(String(params.name ?? ""));
      if (!tool) return fail(id, -32602, `Herramienta desconocida: ${String(params.name)}`);
      const args = params.arguments ?? {};
      if (typeof args !== "object" || args === null || Array.isArray(args)) {
        return fail(id, -32602, "`arguments` debe ser un objeto.");
      }
      try {
        return ok(id, { content: [{ type: "text", text: tool.run(args as ToolArgs) }], isError: false });
      } catch (error) {
        if (error instanceof ToolInputError) {
          return ok(id, { content: [{ type: "text", text: error.message }], isError: true });
        }
        throw error;
      }
    }
    default:
      return fail(id, -32601, `Método no soportado: ${msg.method}`);
  }
}

// ----------------------------------------------------------------------- HTTP

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Accept, Authorization, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID, If-None-Match",
  "Access-Control-Expose-Headers": "Mcp-Session-Id, Mcp-Protocol-Version",
};

function json(body: unknown, status = 200, contentType = "application/json; charset=utf-8", cache = "no-store") {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: { ...CORS, "Content-Type": contentType, "Cache-Control": cache },
  });
}

const serverCard = {
  $schema: "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
  name: SERVER_NAME,
  version: SERVER_VERSION,
  title: SERVER_TITLE,
  description: SERVER_DESCRIPTION,
  websiteUrl: SITE_URL,
  icons: [{ src: `${SITE_URL}/icon-512.png`, mimeType: "image/png", sizes: ["512x512"] }],
  remotes: [{ type: "streamable-http", url: MCP_URL, supportedProtocolVersions: PROTOCOL_VERSIONS }],
};

// Campos del borrador SEP-1649, que es lo que siguen comprobando algunos escáneres.
const legacyServerCard = {
  ...serverCard,
  serverInfo: { name: SERVER_NAME, title: SERVER_TITLE, version: SERVER_VERSION },
  url: MCP_URL,
  transport: { type: "streamable-http", endpoint: MCP_PATH },
  protocolVersion: PROTOCOL_VERSIONS[0],
  capabilities: { tools: { listChanged: false } },
};

const aiCatalog = {
  specVersion: "1.0",
  entries: [
    {
      identifier: "urn:air:yamato.digital:mcp:yamato",
      type: "application/mcp-server-card+json",
      url: `${MCP_URL}/server-card`,
    },
  ],
};

function cardResponse(request: Request, card: object): Response {
  // Se devuelve el tipo específico solo si el cliente lo pide; si no, JSON normal.
  const wantsCardType = (request.headers.get("accept") ?? "").includes("application/mcp-server-card+json");
  const type = wantsCardType ? "application/mcp-server-card+json" : "application/json; charset=utf-8";
  return json(card, 200, type, "public, max-age=3600");
}

async function handlePost(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(fail(null, -32700, "JSON no válido."), 400);
  }
  if (Array.isArray(body)) {
    return json(fail(null, -32600, "Este servidor no acepta lotes JSON-RPC."), 400);
  }
  const msg = body as Partial<RpcRequest>;
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    // Una respuesta JSON-RPC enviada por el cliente: no hay nada que contestar.
    if (msg && msg.jsonrpc === "2.0" && ("result" in msg || "error" in msg)) {
      return new Response(null, { status: 202, headers: CORS });
    }
    return json(fail(null, -32600, "Petición JSON-RPC no válida."), 400);
  }
  // Notificaciones (sin id): se aceptan sin cuerpo.
  if (!("id" in msg) || msg.id === undefined) {
    return new Response(null, { status: 202, headers: CORS });
  }
  try {
    return json(handleRpc(msg as RpcRequest));
  } catch (error) {
    console.error(error);
    return json(fail(msg.id ?? null, -32603, "Error interno."), 500);
  }
}

/** Atiende /mcp, la Server Card y el AI Catalog. Devuelve null si la ruta no es suya. */
export async function handleMcpRequest(request: Request): Promise<Response | null> {
  const { pathname } = new URL(request.url);
  const method = request.method;
  const isGetLike = method === "GET" || method === "HEAD";

  if (pathname === `${MCP_PATH}/server-card` && isGetLike) return cardResponse(request, serverCard);
  if (
    (pathname === "/.well-known/mcp/server-card.json" || pathname === "/.well-known/mcp.json") &&
    isGetLike
  ) {
    return cardResponse(request, legacyServerCard);
  }
  if (pathname === "/.well-known/ai-catalog.json" && isGetLike) {
    return json(aiCatalog, 200, "application/ai-catalog+json", "public, max-age=3600");
  }

  if (pathname !== MCP_PATH && pathname !== `${MCP_PATH}/`) return null;

  if (method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (method === "POST") return handlePost(request);
  // Sin stream SSE ni sesiones: GET y DELETE no aplican en un servidor sin estado.
  return new Response("Este servidor MCP solo acepta POST (Streamable HTTP, sin estado).\n", {
    status: 405,
    headers: { ...CORS, Allow: "POST, OPTIONS", "Content-Type": "text/plain; charset=utf-8" },
  });
}
