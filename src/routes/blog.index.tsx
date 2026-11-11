import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";

const PAGE_SIZE = 6;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — YAMATO" },
      {
        name: "description",
        content:
          "Ideas, opiniones y notas sobre marketing, dirección, IA aplicada y ejecución. Publicado semanalmente.",
      },
      { property: "og:title", content: "Blog — YAMATO" },
      {
        property: "og:description",
        content:
          "Ideas, opiniones y notas sobre marketing, dirección, IA aplicada y ejecución.",
      },
      { property: "og:url", content: "https://yamato.digital/blog" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog — YAMATO",
          url: "https://yamato.digital/blog",
          inLanguage: "es",
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = getAllPosts();
  const [visible, setVisible] = useState(PAGE_SIZE);
  const hasMore = visible < posts.length;

  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em]">
              Blog
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-ink md:text-xl">
              Ideas, opiniones y notas sobre marketing, dirección, IA aplicada
              y ejecución.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <p className="text-muted-ink">Pronto habrá algo aquí.</p>
            ) : (
              <ul className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
                {/*
                  Todos los posts van en el HTML para que Google, Bing y los rastreadores
                  de IA los encuentren (no pulsan "Cargar más"). Los que aún no se han
                  cargado se ocultan con `hidden`; el visitante ve lo mismo que antes.
                */}
                {posts.map((post, i) => (
                  <li key={post.slug} hidden={i >= visible}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="group block"
                    >
                      {post.cover ? (
                        <div className="aspect-[16/10] w-full overflow-hidden bg-hairline">
                          <img
                            src={post.cover}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/10] w-full bg-hairline" />
                      )}
                      <div className="mt-5">
                        <div className="text-xs uppercase tracking-[0.14em] text-muted-ink">
                          {formatDate(post.date)} · {post.readingMinutes} min
                        </div>
                        <h2 className="mt-3 font-serif text-2xl leading-[1.15] tracking-[-0.01em] text-ink group-hover:underline underline-offset-4 decoration-1">
                          {post.title}
                        </h2>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {hasMore ? (
              <div className="mt-16 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-full bg-ink px-8 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                >
                  Cargar más
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
