import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RadiografiaCta } from "@/components/RadiografiaCta";
import { DIRECTION_CASES } from "@/lib/clients";
import { EXECUTION_MODEL } from "@/lib/services";
import {
  GROWTH_CASE_NAMES,
  GROWTH_CYCLE,
  GROWTH_DEFINITION,
  GROWTH_DESCRIPTION,
  GROWTH_FAQ,
  GROWTH_FAQ_WHO_LEADS,
  GROWTH_H1,
  GROWTH_HYPOTHESIS_EXAMPLE,
  GROWTH_METRICS,
  GROWTH_OG_DESCRIPTION,
  GROWTH_OG_TITLE,
  GROWTH_PATH,
  GROWTH_SUBTITLE,
  GROWTH_SYMPTOMS,
  GROWTH_TITLE,
  GROWTH_WHO_LEADS,
} from "@/lib/growth-marketing";

const SITE_URL = "https://yamato.digital";
const URL = `${SITE_URL}${GROWTH_PATH}`;

const CASES = DIRECTION_CASES.filter((c) => GROWTH_CASE_NAMES.includes(c.name) && c.result);

export const Route = createFileRoute("/growth-marketing")({
  head: () => ({
    meta: [
      { title: GROWTH_TITLE },
      { name: "description", content: GROWTH_DESCRIPTION },
      { property: "og:title", content: GROWTH_OG_TITLE },
      { property: "og:description", content: GROWTH_OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Growth marketing",
          serviceType: "Growth marketing",
          description: GROWTH_DEFINITION,
          url: URL,
          areaServed: "ES",
          provider: { "@type": "Organization", name: "YAMATO", url: SITE_URL },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: GROWTH_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios` },
            { "@type": "ListItem", position: 3, name: "Growth marketing", item: URL },
          ],
        }),
      },
    ],
  }),
  component: GrowthMarketingPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-ink">{children}</h2>
      <span className="mt-3 block h-[2px] w-10 bg-current" />
    </div>
  );
}

/** Pinta el texto enlazando "Fractional CMO" a /fractional-cmo. */
function WithFractionalLink({ text }: { text: string }) {
  const [before, after] = text.split("Fractional CMO");
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <Link to="/fractional-cmo" className="link-underline link-underline-hover text-ink">
        Fractional CMO
      </Link>
      {after}
    </>
  );
}

const H3 = "font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.01em]";
const SECTION = "pt-20 pb-24 md:pt-28 md:pb-28";
const BODY = "text-lg leading-relaxed text-muted-ink md:text-xl";

function GrowthMarketingPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* Hero */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.01em]">
              {GROWTH_H1}
            </h1>
            <p className={`mt-8 ${BODY}`}>{GROWTH_SUBTITLE}</p>
            <RadiografiaCta
              location="growth-hero"
              className="mt-10"
              microcopy="La Radiografía es gratis. Si no encajamos, te lo decimos ahí."
            />
          </div>
        </section>

        {/* Qué es */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Qué es growth marketing</Eyebrow>
            <h3 className={H3}>Un sistema, no un truco.</h3>
            <div className={`mt-8 space-y-6 ${BODY}`}>
              <p>{GROWTH_DEFINITION}</p>
              <p>
                La palabra importante es «repetible». Crecer un trimestre lo consigue cualquiera con presupuesto.
                Saber por qué has crecido, y volver a hacerlo, es otra cosa.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué no funciona */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Por qué casi nunca funciona</Eyebrow>
            <h3 className={H3}>Se compra como ejecución y es un problema de criterio.</h3>
            <ul className={`mt-10 max-w-xl space-y-5 ${BODY}`}>
              {GROWTH_SYMPTOMS.map((s) => (
                <li key={s} className="flex gap-4">
                  <span aria-hidden className="mt-[14px] inline-block h-[2px] w-6 shrink-0 bg-current" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-2xl font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-[-0.01em]">
              Nadie ha decidido qué se prueba, qué se para y con qué número se juzga. Sin eso, lo que tienes es
              actividad.
            </p>
          </div>
        </section>

        {/* Cómo lo hacemos */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Cómo lo hacemos</Eyebrow>
            <h3 className={H3}>Cuatro pasos. Y vuelta a empezar.</h3>
            <ol className={`mt-10 max-w-xl space-y-8 ${BODY}`}>
              {GROWTH_CYCLE.map((c, i) => (
                <li key={c.step}>
                  <strong className="font-semibold text-ink">
                    <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span> · {c.step}.
                  </strong>{" "}
                  {c.body}
                </li>
              ))}
            </ol>

            <h3 className={`mt-20 ${H3}`}>Cómo es una hipótesis de verdad.</h3>
            <div className={`mt-8 space-y-6 ${BODY}`}>
              <p>Una hipótesis no es «vamos a probar TikTok». Es una frase que se puede dar por falsa.</p>
              <blockquote className="border-l-2 border-current pl-6 font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-snug text-ink">
                «{GROWTH_HYPOTHESIS_EXAMPLE}»
              </blockquote>
              <p>
                Tiene una causa, un cambio, un número y un plazo. Si a las cuatro semanas no ha subido, se descarta y
                se pasa a la siguiente.
              </p>
            </div>

            <h3 className={`mt-20 ${H3}`}>Qué se mide en cada fase.</h3>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-base">
                <thead>
                  <tr className="text-sm uppercase tracking-[0.12em]">
                    <th scope="col" className="py-4 pr-4 font-semibold">Fase</th>
                    <th scope="col" className="py-4 pr-4 font-semibold">La pregunta</th>
                    <th scope="col" className="py-4 font-semibold">Lo que se mira</th>
                  </tr>
                </thead>
                <tbody className="text-muted-ink">
                  {GROWTH_METRICS.map((m) => (
                    <tr key={m.phase}>
                      <th scope="row" className="py-4 pr-4 font-semibold text-ink whitespace-nowrap">
                        {m.phase}
                      </th>
                      <td className="py-4 pr-4">{m.question}</td>
                      <td className="py-4">{m.metrics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`mt-8 ${BODY}`}>
              Impresiones, seguidores y «alcance» no están en la tabla. No es un olvido.
            </p>

            <h3 className={`mt-20 ${H3}`}>Quién lo dirige y quién lo ejecuta.</h3>
            <div className={`mt-8 space-y-6 ${BODY}`}>
              <p>
                <WithFractionalLink text={GROWTH_WHO_LEADS} />
              </p>
              <p>{EXECUTION_MODEL}</p>
            </div>
          </div>
        </section>

        {/* Growth hacking */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Growth marketing no es growth hacking</Eyebrow>
            <h3 className={H3}>El truco se agota. El sistema se dirige.</h3>
            <div className={`mt-8 space-y-6 ${BODY}`}>
              <p>
                El growth hacking persigue un atajo: un truco, un canal virgen, un hack de un mes. Funciona hasta que
                lo copia el siguiente.
              </p>
              <p>
                Y tampoco es lo que vende una agencia de growth. Una agencia vende horas de campaña y, a menudo, cobra
                un porcentaje de los medios: gana más cuanto más gastas.
              </p>
            </div>
            <Link
              to="/blog/$slug"
              params={{ slug: "fractional-cmo-vs-agencia-incentivos" }}
              className="group mt-8 inline-flex items-baseline font-serif text-xl link-underline link-underline-hover"
            >
              Por qué importa quién cobra por qué
              <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Casos */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Lo que sí podemos citar</Eyebrow>
            <h3 className={H3}>Tres números. Ninguno redondeado.</h3>
            <ul className="mt-10 space-y-8">
              {CASES.map((c) => (
                <li key={c.name}>
                  <p className="text-base font-semibold text-ink">{c.name}</p>
                  <p className="mt-2 font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-snug">{c.result}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/clientes"
              className="group mt-10 inline-flex items-baseline font-serif text-xl link-underline link-underline-hover"
            >
              Los casos, en su contexto
              <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Tiempo */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Cuánto tiempo hace falta</Eyebrow>
            <h3 className={H3}>Tres meses para empezar. Después, mes a mes.</h3>
            <div className={`mt-8 space-y-6 ${BODY}`}>
              <p>
                Tres meses, porque antes no hay nada que medir. El primer mes es diagnóstico. En el segundo arrancan
                los experimentos. En el tercero hay primeros resultados medidos.
              </p>
              <p>Después, te vas cuando quieras. Y si alguien te promete crecimiento en dos semanas, cuelga.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={SECTION}>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <div className="mt-10 space-y-10">
              {GROWTH_FAQ.map((f) => (
                <div key={f.q}>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em]">{f.q}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                    {f.q === GROWTH_FAQ_WHO_LEADS ? <WithFractionalLink text={f.a} /> : f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              ¿Te hace falta growth marketing o solo más campañas?
            </h2>
            <p className={`mt-6 ${BODY}`}>
              Nos sentamos, lo miramos y te lo decimos claro. Si no lo necesitas, también.
            </p>
            <RadiografiaCta location="growth-cierre" className="mt-10" whatsapp />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
