import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — YAMATO" },
      {
        name: "description",
        content:
          "Cinco cosas, no cuarenta. Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución para empresas que quieren resultados.",
      },
      { property: "og:title", content: "Servicios — YAMATO" },
      {
        property: "og:description",
        content: "Cinco cosas, no cuarenta. Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución.",
      },
      { property: "og:url", content: "https://yamato.digital/servicios" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/servicios" }],
    scripts: SERVICES.map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title.replace(/\.$/, ""),
        description: s.body,
        provider: { "@type": "Organization", name: "YAMATO" },
      }),
    })),
  }),
  component: ServiciosPage,
});

const SERVICES = [
  {
    title: "Estrategia y dirección.",
    body: "Nadie piensa tu marketing más allá del mes que viene. Entramos como tu director: auditamos, fijamos estrategia, marcamos KPIs y lideramos la operación.",
  },
  {
    title: "Mentoría y gestión de equipos.",
    body: "Tienes gente que ejecuta mucho y avanza poco. No despedimos a nadie: les damos dirección, foco y un backlog priorizado por negocio.",
  },
  {
    title: "Go-to-Market.",
    body: "Hay fecha de lanzamiento y nadie ha pensado el cómo. Diseñamos y ejecutamos la entrada al mercado. Con plan y con plazos.",
  },
  {
    title: "IA aplicada al marketing.",
    body: "Todos hablan de IA, nadie la implanta. La metemos donde ahorra dinero de verdad: automatizaciones, agentes, análisis, reporting. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.",
  },
  {
    title: "Ejecución.",
    body: "SEO, GEO, CRM, web, automatización. Lo ejecutamos nosotros — y solo si la estrategia la hemos marcado nosotros. ¿Google Ads y Social Ads? Los dirigimos y elegimos a quién los toca. Un CMO no mueve pujas: dirige al que las mueve.",
  },
];

function ServiciosPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* Manifesto */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Cinco cosas, no cuarenta.
            </h1>
            <div className="mt-10 space-y-7 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
              <p>
                No hacemos de todo. Hacemos lo que mueve el negocio. Estrategia, equipos, lanzamientos, IA y ejecución.
              </p>
              <p>
                Si necesitas a alguien que te haga cuarenta cosas regulares, no somos nosotros. Si quieres a alguien que
                haga cinco bien y te diga la verdad por el camino, sigue leyendo.
              </p>
              <p>
                Y si lo único que necesitas en hacer campañas de Paid Media, no te preocupes, te pondremos en contacto
                con nuestros partners. Saben hacerlo mucho mejor que nosotros.
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

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* What we actually do */}
        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Vale. ¿Pero qué hacéis exactamente?
            </h2>

            <div className="mt-12 space-y-8 max-w-xl text-lg leading-relaxed text-muted-ink md:text-xl">
              {SERVICES.map((s) => (
                <p key={s.title}>
                  <strong className="font-semibold text-ink">{s.title}</strong> {s.body}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
