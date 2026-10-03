import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SERVICE_LEVERS, SERVICE_MODES, SERVICES_INTRO } from "@/lib/services";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — YAMATO" },
      {
        name: "description",
        content:
          "Seis cosas. Bien hechas. Estrategia, mentoría, Go-to-Market, Growth, IA aplicada y ejecución para empresas que quieren resultados.",
      },
      { property: "og:title", content: "Servicios — YAMATO" },
      {
        property: "og:description",
        content: "Seis cosas. Bien hechas. Estrategia, mentoría, Go-to-Market, Growth, IA aplicada y ejecución.",
      },
      { property: "og:url", content: "https://yamato.digital/servicios" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/servicios" }],
    scripts: [
      ...SERVICE_MODES.map((m) => ({ name: m.name, description: `${m.problem} ${m.body}` })),
      ...SERVICE_LEVERS.map((s) => ({ name: s.serviceName, description: `${s.problem} ${s.body}` })),
    ].map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@type": "Organization", name: "YAMATO" },
      }),
    })),
  }),
  component: ServiciosPage,
});

function ItemLabel({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-base font-semibold text-ink">
        <span className="tabular-nums">{String(n).padStart(2, "0")}</span> · {children}
      </p>
      <span className="mt-3 block h-[2px] w-10 bg-current" />
    </div>
  );
}

function ServiciosPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* Manifesto */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Tres formas de trabajar. Seis palancas.
            </h1>
            <div className="mt-10 space-y-7 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
              <p>
                No hacemos de todo. Hacemos lo que mueve el negocio. Estrategia, equipos, lanzamientos, crecimiento, IA y
                ejecución.
              </p>
              <p>
                Hacemos seis cosas y las hacemos a fondo. Y te decimos la verdad por el camino.
              </p>
              {/* Pendiente de la decisión sobre paid: ver TODO(Ignacio) en src/lib/services.ts. */}
              <p>
                Y si lo único que necesitas es hacer campañas de Paid Media, te ponemos en contacto con nuestros
                partners.
              </p>
              <p>
                ¿Buscas quien dirija todo esto sin contratar a un CMO en plantilla?{" "}
                <Link to="/fractional-cmo" className="link-underline link-underline-hover text-ink">
                  Así trabajamos como Fractional CMO
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* What we actually do */}
        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Vale. ¿Pero qué hacéis exactamente?
            </h2>

            <p className="mt-8 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
              Tres formas de trabajar, según lo que ya tienes.
            </p>

            <ol className="mt-14">
              {SERVICE_MODES.map((m, i) => (
                <li key={m.id} id={m.id} className="scroll-mt-24 py-10">
                  <ItemLabel n={i + 1}>{m.name}</ItemLabel>
                  <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em]">
                    {m.problem}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-ink md:text-xl">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Las palancas
            </h2>

            <p className="mt-8 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
              {SERVICES_INTRO}
            </p>

            <ol className="mt-14">
              {SERVICE_LEVERS.map((s, i) => (
                <li key={s.lever} className="py-10">
                  <ItemLabel n={i + 1}>{s.lever}</ItemLabel>
                  <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em]">
                    {s.problem}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-ink md:text-xl">{s.body}</p>
                  {s.moves ? (
                    <p className="mt-4 text-base">
                      <span className="font-semibold">Mueve:</span> <span className="font-serif text-xl">{s.moves}</span>
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
