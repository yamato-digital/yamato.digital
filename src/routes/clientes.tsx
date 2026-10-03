import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DIRECTION_CASES, OTHER_PROJECTS } from "@/lib/clients";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — YAMATO" },
      {
        name: "description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:title", content: "Clientes — YAMATO" },
      {
        property: "og:description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:url", content: "https://yamato.digital/clientes" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/clientes" }],
  }),
  component: ClientesPage,
});

function CaseRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-ink/15 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-ink">{label}</dt>
      <dd className="text-lg leading-relaxed md:text-xl">{children}</dd>
    </div>
  );
}

function ClientesPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
            Clientes
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-muted-ink md:text-xl">
            Algunos de ellos.
          </p>
        </div>

        <section aria-labelledby="casos-direccion" className="mx-auto mt-16 max-w-5xl md:mt-24">
          <h2
            id="casos-direccion"
            className="text-base font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Donde dirigimos
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />

          <div className="mt-12 space-y-20">
            {DIRECTION_CASES.map((c) => (
              <article key={c.name} className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-ink">{c.context}</p>
                </div>
                <dl className="md:col-span-8">
                  <CaseRow label="Reto">{c.challenge}</CaseRow>
                  <CaseRow label="Decisión">{c.decision}</CaseRow>
                  {c.result ? (
                    <CaseRow label="Resultado">
                      <span className="font-serif text-[clamp(1.25rem,2vw,1.75rem)]">{c.result}</span>
                    </CaseRow>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="otros-proyectos" className="mx-auto mt-24 max-w-5xl md:mt-32">
          <h2
            id="otros-proyectos"
            className="text-base font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Otros proyectos
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PROJECTS.map((p) => (
              <li key={p.name} className="border-t border-ink/15 pt-4">
                <p className="font-serif text-2xl leading-tight">{p.name}</p>
                <p className="mt-2 leading-relaxed text-muted-ink">{p.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
            ¿No ves tu nombre?
          </h2>

          <p className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
            Muy sencillo, llámanos y cambiemos eso.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
