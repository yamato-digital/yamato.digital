import {
  buildLlmsFullTxt,
  buildLlmsTxt,
  getPageDocument,
  markdownPathForPage,
  pagePathFromRequestPath,
} from "@/lib/agent-content";

const MARKDOWN_TYPE = "text/markdown; charset=utf-8";
const TEXT_TYPE = "text/plain; charset=utf-8";

function acceptList(request: Request): string {
  return (request.headers.get("accept") ?? "").toLowerCase();
}

export function prefersMarkdown(request: Request): boolean {
  const accept = acceptList(request);
  const markdownIndex = accept.indexOf("text/markdown");
  if (markdownIndex === -1) return false;
  const htmlIndex = accept.indexOf("text/html");
  if (htmlIndex === -1) return true;
  return markdownIndex < htmlIndex;
}

function prefersJson(request: Request): boolean {
  const accept = acceptList(request);
  const jsonIndex = accept.indexOf("application/json");
  if (jsonIndex === -1) return false;
  const htmlIndex = accept.indexOf("text/html");
  if (htmlIndex === -1) return true;
  return jsonIndex < htmlIndex;
}

function tokenCount(text: string): string {
  return String(text.trim().split(/\s+/).filter(Boolean).length);
}

function withDiscoveryLink(headers: Headers, pagePath: string): void {
  const existing = headers.get("Link") ?? "";
  if (existing.includes("/llms.txt")) return;
  const mdPath = markdownPathForPage(pagePath);
  const links = [
    `</llms.txt>; rel="describedby"; type="text/plain"`,
    `</sitemap.xml>; rel="sitemap"`,
    `<${mdPath}>; rel="alternate"; type="text/markdown"`,
  ];
  headers.set("Link", existing ? `${existing}, ${links.join(", ")}` : links.join(", "));
}

function textResponse(
  body: string,
  contentType: string,
  pagePath: string,
  extraHeaders?: HeadersInit,
): Response {
  const headers = new Headers(extraHeaders);
  headers.set("Content-Type", contentType);
  headers.set("Cache-Control", "public, max-age=3600");
  if (contentType.startsWith("text/markdown")) {
    headers.set("x-markdown-tokens", tokenCount(body));
  }
  withDiscoveryLink(headers, pagePath);
  return new Response(body, { status: 200, headers });
}

function markdownForPath(pathname: string): Response | null {
  const pagePath = pagePathFromRequestPath(pathname);
  if (!pagePath) return null;
  const doc = getPageDocument(pagePath);
  if (!doc) return null;
  return textResponse(doc.markdown, MARKDOWN_TYPE, pagePath);
}

/**
 * Serve agent-facing documents before SSR.
 * Also returns a clean 404 for unknown /.well-known/* so Accept: application/json
 * does not fall through the HTML renderer and 500.
 */
export function handleAgentRequest(request: Request): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;

  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/llms.txt") {
    return textResponse(buildLlmsTxt(), TEXT_TYPE, "/");
  }
  if (pathname === "/llms-full.txt") {
    return textResponse(buildLlmsFullTxt(), TEXT_TYPE, "/");
  }

  const isMarkdownPath = pathname.endsWith(".md");
  if (isMarkdownPath || prefersMarkdown(request)) {
    const md = markdownForPath(pathname);
    if (md) return md;
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": MARKDOWN_TYPE },
    });
  }

  if (pathname.startsWith("/.well-known/")) {
    if (prefersJson(request)) {
      return new Response(JSON.stringify({ error: "not_found" }), {
        status: 404,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
    }
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": TEXT_TYPE },
    });
  }

  return null;
}

export function withDiscoveryHeaders(request: Request, response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const pagePath = pagePathFromRequestPath(new URL(request.url).pathname) ?? "/";
  const headers = new Headers(response.headers);
  withDiscoveryLink(headers, pagePath);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
