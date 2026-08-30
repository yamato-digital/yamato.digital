import { createStart, createMiddleware } from "@tanstack/react-start";

import { handleAgentRequest, withDiscoveryHeaders } from "./lib/agent-request";
import { renderErrorPage } from "./lib/error-page";

const agentMiddleware = createMiddleware().server(async ({ next, request }) => {
  const early = handleAgentRequest(request);
  if (early) return early;
  const result = await next();
  const response = result instanceof Response ? result : result.response;
  const headed = withDiscoveryHeaders(request, response);
  if (result instanceof Response) return headed;
  return { ...result, response: headed };
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [agentMiddleware, errorMiddleware],
}));
