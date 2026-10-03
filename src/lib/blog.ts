// Minimal frontmatter parser (browser + worker safe, no Node Buffer).
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[m[1]] = value;
  }
  return { data, content: match[2] };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  cover?: string;
  keywords?: string;
  content: string;
  readingMinutes: number;
}

// Load all markdown files as raw strings at build time.
const modules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  const noExt = file.replace(/\.md$/, "");
  // Strip leading YYYY-MM-DD- if present
  return noExt.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || slugFromPath(path);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      cover: data.cover || undefined,
      keywords: data.keywords || undefined,
      content,
      readingMinutes: readingTime(content),
    } satisfies BlogPost;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Posts retirados: el slug antiguo responde con 301 al destino para no perder enlaces ni posicionamiento.
const REDIRECTED_POSTS: Record<string, string> = {
  "cmo-as-a-service": "/fractional-cmo",
};

export function getPostRedirect(slug: string): string | undefined {
  return REDIRECTED_POSTS[slug];
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}
