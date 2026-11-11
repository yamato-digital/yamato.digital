// Definición pública de las herramientas MCP de YAMATO (nombre, descripción y
// parámetros). La comparten el servidor (/mcp, en src/lib/mcp.ts) y WebMCP en el
// navegador (src/components/WebMcp.tsx). No importa nada del servidor, así que
// puede ir en el bundle del cliente.

export interface McpToolDef {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

const NO_ARGS = { type: "object", properties: {}, additionalProperties: false };

export const MCP_TOOL_DEFS: McpToolDef[] = [
  {
    name: "servicios",
    title: "Servicios de YAMATO",
    description:
      "Qué hace YAMATO: sus tres modalidades (Fractional CMO, Fractional CMO con equipo y proyecto estratégico), sus seis palancas y qué pasa en los primeros 90 días.",
    inputSchema: NO_ARGS,
  },
  {
    name: "precios",
    title: "Precio orientativo",
    description:
      "Cuánto cuesta YAMATO de forma orientativa frente a un CMO en plantilla, cuánto suele durar y cuándo tiene sentido. El precio exacto se concreta en una llamada.",
    inputSchema: NO_ARGS,
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
  },
  {
    name: "reservar_llamada",
    title: "Cómo reservar una llamada",
    description:
      "Enlaces para reservar una llamada de 30 minutos con YAMATO o contactar por WhatsApp, email o LinkedIn, y qué preparar. No reserva nada: devuelve los enlaces para que la persona reserve.",
    inputSchema: NO_ARGS,
  },
];
