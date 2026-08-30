import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { marked } from "marked";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getPost, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const url = `https://yamato.digital/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} — YAMATO` },
        { name: "description", content: post.excerpt },
        ...(post.keywords ? [{ name: "keywords", content: post.keywords }] : []),
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(post.cover ? [{ property: "og:image", content: post.cover }] : []),
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.cover,
            author: { "@type": "Organization", name: "YAMATO" },
            publisher: { "@type": "Organization", name: "YAMATO" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center sm:px-10">
        <h1 className="font-serif text-4xl">Entrada no encontrada</h1>
        <p className="mt-4 text-muted-ink">
          El artículo que buscas no existe o fue movido.
        </p>
        <Link to="/blog" className="mt-8 inline-block link-underline link-underline-hover">
          Volver al blog
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const html = marked.parse(post.content, { async: false }) as string;

  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        <article className="mx-auto max-w-2xl pt-16 pb-24 md:pt-24 md:pb-32">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-[0.14em] text-muted-ink link-underline link-underline-hover"
          >
            ← Blog
          </Link>
          <div className="mt-8 text-xs uppercase tracking-[0.14em] text-muted-ink">
            {formatDate(post.date)} · {post.readingMinutes} min
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.01em]">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-6 font-serif text-xl leading-relaxed text-muted-ink md:text-2xl">
              {post.excerpt}
            </p>
          ) : null}
          <div
            className="prose-blog mt-12 space-y-6 text-lg leading-relaxed text-ink [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:tracking-[-0.01em] [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-2xl [&_strong]:font-semibold [&_em]:not-italic [&_i]:not-italic [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
