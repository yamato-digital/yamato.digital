import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RadiografiaCta } from "@/components/RadiografiaCta";
import {
  SERVICE_LEVERS,
  SERVICE_MODES,
  SERVICES_INTRO,
  STRATEGIC_PROJECT,
  STRATEGIC_PROJECT_ANCHOR,
} from "@/lib/services";

const DESCRIPTION =
  "Tres formas de trabajar y seis palancas. Eliges cómo trabajamos según lo que ya tienes; qué palancas se activan lo decide tu responsable.";

const H2 = "font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]";
const LEAD = "font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink";
const EYEBROW = "text-sm font-semibold uppercase tracking-[0.14em] text-muted-ink";
const ITEM_TITLE = "mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em]";
const BODY = "text-lg leading-relaxed text-muted-ink md:text-xl";
const ARROW_LINK =
  "group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover";

function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="border-t border-ink/20" />
    </div>
  );
}

function Ordinal({ i }: { i: number }) {
  return <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>;
}

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — YAMATO" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Servicios — YAMATO" },
      { property: "og:description", content: DESCRIPTION },
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

function ServiciosPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <h1 className={H2}>Tres formas de trabajar. Seis palancas.</h1>
            <p className={`mt-10 ${LEAD}`}>
              Eliges cómo trabajamos según lo que ya tienes. Qué palancas se activan lo decide tu responsable.
            </p>
            <Link to="/fractional-cmo" className={`mt-12 ${ARROW_LINK}`}>
              Así trabajamos como Fractional CMO
              <Arrow />
            </Link>
          </div>
        </section>

        <Divider />

        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className={H2}>Las tres formas de trabajar</h2>

            <ol className="mt-14">
              {SERVICE_MODES.map((m, i) => (
                <li key={m.id} className="border-t border-ink/15 py-10 last:border-b">
                  <p className={EYEBROW}>
                    <Ordinal i={i} /> · {m.name}
                  </p>
                  <h3 className={ITEM_TITLE}>{m.problem}</h3>
                  <p className={`mt-4 max-w-xl ${BODY}`}>{m.body}</p>
                  <p className="mt-4 max-w-xl text-base italic leading-relaxed text-muted-ink md:text-lg">
                    Ejemplo: {m.example}
                  </p>
                </li>
              ))}
            </ol>

            <Link to="/servicios" hash={STRATEGIC_PROJECT_ANCHOR} className={`mt-12 ${ARROW_LINK}`}>
              Cómo trabajamos un proyecto
              <Arrow />
            </Link>
          </div>
        </section>

        <Divider />

        <section id={STRATEGIC_PROJECT_ANCHOR} className="scroll-mt-24 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className={H2}>{STRATEGIC_PROJECT.title}</h2>
            <p className={`mt-8 ${LEAD}`}>{STRATEGIC_PROJECT.intro}</p>

            <h3 className={`mt-14 ${EYEBROW}`}>Proyectos habituales</h3>
            <ul className="mt-6">
              {STRATEGIC_PROJECT.typical.map((t) => (
                <li key={t} className={`border-t border-ink/15 py-4 last:border-b ${BODY}`}>
                  {t}
                </li>
              ))}
            </ul>

            <h3 className={`mt-14 ${EYEBROW}`}>Cómo funciona</h3>
            <ol className="mt-6">
              {STRATEGIC_PROJECT.steps.map((step, i) => (
                <li key={step} className="grid grid-cols-[3rem_1fr] border-t border-ink/15 py-4 last:border-b">
                  <span className="font-serif text-xl text-muted-ink">
                    <Ordinal i={i} />
                  </span>
                  <span className={BODY}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Divider />

        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className={H2}>Las palancas</h2>
            <p className={`mt-8 ${LEAD}`}>{SERVICES_INTRO}</p>

            <ol className="mt-14">
              {SERVICE_LEVERS.map((s, i) => (
                <li key={s.lever} className="border-t border-ink/15 py-10 last:border-b">
                  <p className={EYEBROW}>
                    <Ordinal i={i} /> · {s.lever}
                  </p>
                  <h3 className={ITEM_TITLE}>{s.problem}</h3>
                  <p className={`mt-4 max-w-xl ${BODY}`}>{s.body}</p>
                  {s.moves ? (
                    <p className="mt-4 text-base">
                      <span className="font-semibold">Mueve:</span>{" "}
                      <span className="font-serif text-xl">{s.moves}.</span>
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Divider />

        <section className="pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-3xl">
            <h2 className={H2}>¿Cuál de las tres es la tuya?</h2>
            <p className={`mt-8 ${LEAD}`}>
              30 minutos y tres conclusiones por escrito. Te decimos qué modalidad encaja y qué palanca activaríamos
              primero.
            </p>
            <RadiografiaCta location="servicios-cierre" className="mt-12" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
