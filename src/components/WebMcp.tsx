import { useEffect } from "react";

import { MCP_TOOL_DEFS } from "@/lib/mcp-tools";

// WebMCP (https://webmachinelearning.github.io/webmcp/): expone en el navegador las
// mismas herramientas que el servidor MCP de /mcp, para agentes que navegan la web.
// Cada herramienta llama a /mcp, así que no hay una segunda implementación.
// En navegadores sin la API no hace nada.

interface ModelContextTool {
  name: string;
  title?: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
}

interface ModelContext {
  registerTool: (tool: ModelContextTool, options?: { signal?: AbortSignal }) => unknown;
}

function getModelContext(): ModelContext | undefined {
  // Las versiones antiguas de Chrome la exponen en navigator.modelContext.
  const fromDocument = (document as unknown as { modelContext?: ModelContext }).modelContext;
  const fromNavigator = (navigator as unknown as { modelContext?: ModelContext }).modelContext;
  const ctx = fromDocument ?? fromNavigator;
  return typeof ctx?.registerTool === "function" ? ctx : undefined;
}

let requestId = 0;

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  const response = await fetch("/mcp", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: ++requestId,
      method: "tools/call",
      params: { name, arguments: args ?? {} },
    }),
  });
  const data = (await response.json()) as { result?: unknown; error?: { message: string } };
  if (data.error) {
    return { content: [{ type: "text", text: data.error.message }], isError: true };
  }
  return data.result;
}

export function WebMcp() {
  useEffect(() => {
    const ctx = getModelContext();
    if (!ctx) return;

    const controller = new AbortController();
    for (const def of MCP_TOOL_DEFS) {
      try {
        const registered = ctx.registerTool(
          {
            ...def,
            annotations: { readOnlyHint: true, destructiveHint: false, openWorldHint: false },
            execute: (input) => callTool(def.name, input),
          },
          { signal: controller.signal },
        );
        // registerTool devuelve una Promise; un rechazo no debe romper la página.
        if (registered instanceof Promise) registered.catch(() => {});
      } catch {
        // Implementaciones experimentales con otra firma: se ignora sin afectar a la web.
      }
    }
    return () => controller.abort();
  }, []);

  return null;
}
