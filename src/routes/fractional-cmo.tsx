import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const URL = "https://yamato.digital/fractional-cmo";

const FAQ = [
  {
    q: "¿Qué es un Fractional CMO?",
    a: "Un Fractional CMO es un director de marketing externo que trabaja para tu empresa a tiempo parcial, con responsabilidad real sobre la estrategia, el equipo y los resultados. No es un consultor que entrega un PDF: dirige.",
  },
  {
    q: "¿Cuánto cuesta un Fractional CMO en España?",
    a: "Un CMO en plantilla en España cuesta entre 80.000 y 140.000 € al año más variable. Un Fractional CMO se contrata por días al mes, lo que suele situar la inversión entre el 20% y el 40% de ese coste, sin indemnizaciones ni proceso de selección.",
  },
  {
    q: "¿Cuándo tiene sentido y cuándo no?",
    a: "Tiene sentido si facturas lo suficiente para invertir en marketing pero no para pagar un CMO senior, si tienes equipo que ejecuta sin dirección, o si vas a lanzar producto o mercado. No tiene sentido si lo que necesitas son manos para ejecutar campañas: eso es una agencia, no un director.",
  },
  {
    q: "¿En qué se diferencia de una agencia?",
    a: "Una agencia ejecuta lo que le pides. Un Fractional CMO decide qué hay que pedir, a quién y por qué — y responde del número. Nosotros dirigimos también a tus agencias y proveedores actuales.",
  },
  {
    q: "¿Cuánto dura la colaboración?",
    a: "Lo normal son entre 6 y 12 meses: el tiempo de fijar estrategia, montar el sistema y dejar al equipo funcionando. Si a los 12 meses seguimos siendo imprescindibles, algo hemos hecho mal.",
  },
];

export const Route = createFileRoute("/fractional-cmo")({
  head: () => ({
    meta: [
      { title: "Fractional CMO en España — Dirección de marketing externa | YAMATO" },
      {
        name: "description",
        content:
          "Qué es un Fractional CMO, cuánto cuesta en España y cuándo compensa frente a un CMO en plantilla o una agencia. Dirección de marketing externa desde Madrid.",
      },
      {
        name: "keywords",
        content:
          "fractional CMO, CMO as a service, director de marketing externo, dirección de marketing externa, CMO externo España, cuánto cuesta un CMO",
      },
      { property: "og:title", content: "Fractional CMO en España — Dirección de marketing externa" },
      {
        property: "og:description",
        content:
          "Un director de marketing senior por una fracción del coste. Qué es, cuánto cuesta y cuándo compensa.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fractional CMO",
          serviceType: "Dirección de marketing externa",
          areaServed: "ES",
          description:
            "Dirección de marketing externa a tiempo parcial: estrategia, KPIs, dirección de equipo y proveedores, con responsabilidad sobre el resultado.",
          provider: {
            "@type": "Organization",
            name: "YAMATO",
            url: "https://yamato.digital",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FractionalCmoPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-ink">{children}</h2>
      <span className="mt-3 block h-[2px] w-10 bg-current" />
    </div>
  );
}

function FractionalCmoPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* Hero */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.01em]">
              Fractional CMO. Dirección de marketing sin contratar a un CMO.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-ink md:text-xl">
              Un Fractional CMO es un director de marketing externo que trabaja para tu empresa unos días
              al mes, con responsabilidad real sobre la estrategia, el equipo y los números. Ni un consultor
              que entrega un informe, ni una agencia que ejecuta lo que le mandas: alguien que dirige.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Cuéntanos tu caso
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* El problema */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>El problema</Eyebrow>
            <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.01em]">
              Tienes marketing. No tienes dirección de marketing.
            </h3>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-ink md:text-xl">
              <p>
                Hay campañas, hay redes, hay una agencia y puede que hasta un junior espabilado. Lo que no hay
                es nadie decidiendo qué se hace, qué no se hace y por qué. Así, el marketing se convierte en una
                lista de tareas que nadie sabe si funciona.
              </p>
              <p>
                Contratar un CMO senior en plantilla cuesta entre 80.000 y 140.000 € al año, tarda meses en
                cerrarse y es una apuesta cara si no aciertas. Por eso cada vez más empresas contratan la
                dirección, no la nómina.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* Qué hace */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Qué hace un Fractional CMO</Eyebrow>
            <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.01em]">
              Lo mismo que un CMO. Menos días al mes.
            </h3>
            <div className="mt-10 max-w-xl space-y-8 text-lg leading-relaxed text-muted-ink md:text-xl">
              <p>
                <strong className="font-semibold text-ink">Diagnóstico y estrategia.</strong> Auditamos lo que
                hay, tiramos lo que no aporta y fijamos un plan con objetivos y plazos.
              </p>
              <p>
                <strong className="font-semibold text-ink">KPIs y reporting.</strong> Un cuadro de mando que
                entiende el comité de dirección, no un informe de impresiones.
              </p>
              <p>
                <strong className="font-semibold text-ink">Dirección de equipo.</strong> Tu gente deja de
                ejecutar a ciegas: foco, prioridades y backlog ordenado por impacto en negocio.
              </p>
              <p>
                <strong className="font-semibold text-ink">Gestión de agencias y proveedores.</strong> Elegimos,
                briefamos y exigimos. Un CMO no mueve pujas: dirige al que las mueve.
              </p>
              <p>
                <strong className="font-semibold text-ink">Visibilidad en Google y en IA.</strong> Que te
                encuentren, da igual dónde busquen: buscadores, ChatGPT, Perplexity o lo que venga.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* Comparativa */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Comparativa</Eyebrow>
            <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.01em]">
              Fractional CMO, CMO en plantilla o agencia.
            </h3>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-base">
                <thead>
                  <tr className="border-b border-ink/20 text-sm uppercase tracking-[0.12em]">
                    <th scope="col" className="py-4 pr-4 font-semibold"></th>
                    <th scope="col" className="py-4 pr-4 font-semibold">Fractional CMO</th>
                    <th scope="col" className="py-4 pr-4 font-semibold">CMO en plantilla</th>
                    <th scope="col" className="py-4 font-semibold">Agencia</th>
                  </tr>
                </thead>
                <tbody className="text-muted-ink">
                  <tr className="border-b border-hairline">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">Coste anual</th>
                    <td className="py-4 pr-4">Fracción del salario</td>
                    <td className="py-4 pr-4">80–140k € + variable</td>
                    <td className="py-4">Fee mensual por ejecución</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">Decide la estrategia</th>
                    <td className="py-4 pr-4">Sí</td>
                    <td className="py-4 pr-4">Sí</td>
                    <td className="py-4">No</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">Dirige a tu equipo</th>
                    <td className="py-4 pr-4">Sí</td>
                    <td className="py-4 pr-4">Sí</td>
                    <td className="py-4">No</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">Tiempo de arranque</th>
                    <td className="py-4 pr-4">Días</td>
                    <td className="py-4 pr-4">3–6 meses</td>
                    <td className="py-4">Semanas</td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">Compromiso</th>
                    <td className="py-4 pr-4">El que necesites</td>
                    <td className="py-4 pr-4">Indefinido</td>
                    <td className="py-4">Permanencia habitual</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* FAQ */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <div className="mt-10 space-y-10">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em]">{f.q}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-ink">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-ink/20" />
        </div>

        {/* CTA */}
        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              ¿Te hace falta un CMO o solo alguien que ejecute?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-ink md:text-xl">
              Nos sentamos, lo miramos y te lo decimos claro. Si no lo necesitas, te lo diremos también.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hablemos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
