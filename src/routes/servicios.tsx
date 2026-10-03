import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
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

const CONTAINER = "mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28";
const SECTION_TITLE = "mt-6 max-w-4xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight";
const LEAD = "mt-8 max-w-3xl text-lg leading-relaxed text-muted-ink md:text-xl";
const LABEL = "text-sm font-semibold uppercase tracking-[0.14em] text-muted-ink";
const ARROW_LINK =
  "group font-serif text-xl leading-snug box-decoration-clone link-underline link-underline-hover";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div>
      <p className="text-base font-semibold uppercase tracking-[0.14em] text-ink">{children}</p>
      <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function ModeLink({ modeId }: { modeId: string }) {
  if (modeId === STRATEGIC_PROJECT_ANCHOR) {
    return (
      <Link to="/servicios" hash={STRATEGIC_PROJECT_ANCHOR} className={ARROW_LINK}>
        Cómo trabajamos un proyecto
        <Arrow />
      </Link>
    );
  }
  return (
    <Link to="/fractional-cmo" className={ARROW_LINK}>
      Así trabajamos como Fractional CMO
      <Arrow />
    </Link>
  );
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
      <main>
        <section className={`${CONTAINER} pt-16 pb-20 md:pt-24 md:pb-28`}>
          <Eyebrow>Servicios</Eyebrow>
          <h1 className="mt-10 max-w-[18ch] font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
            Tres formas de trabajar. Seis palancas.
          </h1>
          <div className="mt-14 grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className={LABEL}>La forma de trabajar</p>
              <p className="mt-3 font-serif text-2xl leading-snug">La eliges tú, según lo que ya tienes.</p>
            </div>
            <div>
              <p className={LABEL}>Las palancas</p>
              <p className="mt-3 font-serif text-2xl leading-snug">Las decide tu responsable, según lo que pide tu negocio.</p>
            </div>
          </div>
        </section>

        <section className={`${CONTAINER} pb-24 md:pb-32`}>
          <Eyebrow>Lo eliges tú</Eyebrow>
          <h2 className={SECTION_TITLE}>Las tres formas de trabajar</h2>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICE_MODES.map((m, i) => (
              <li key={m.id} className="flex flex-col bg-cream p-8 md:p-10">
                <p className={`${LABEL} md:min-h-[2.75rem]`}>
                  <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span> · {m.name}
                </p>
                <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.1] tracking-[-0.01em]">
                  {m.problem}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-muted-ink">{m.body}</p>
                <p className="mt-6 text-base leading-relaxed text-muted-ink">
                  <span className="font-semibold text-ink">Ejemplo:</span> {m.example}
                </p>
                <div className="mt-auto pt-8">
                  <ModeLink modeId={m.id} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id={STRATEGIC_PROJECT_ANCHOR} className={`${CONTAINER} scroll-mt-24 pb-24 md:pb-32`}>
          <Eyebrow>03 · Proyecto estratégico, en detalle</Eyebrow>
          <h2 className={SECTION_TITLE}>{STRATEGIC_PROJECT.title}</h2>
          <p className={LEAD}>{STRATEGIC_PROJECT.intro}</p>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className={LABEL}>Proyectos habituales</h3>
              <ul className="mt-6 space-y-4">
                {STRATEGIC_PROJECT.typical.map((t) => (
                  <li key={t} className="flex gap-4 text-lg leading-relaxed text-muted-ink">
                    <span aria-hidden className="mt-3.5 inline-block h-px w-6 shrink-0 bg-current" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={LABEL}>Cómo funciona</h3>
              <ol className="mt-6 space-y-4">
                {STRATEGIC_PROJECT.steps.map((step, i) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] text-lg leading-relaxed">
                    <span className="font-serif text-xl text-muted-ink tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-cream">
          <div className={`${CONTAINER} py-24 md:py-32`}>
            <Eyebrow>Lo decide tu responsable</Eyebrow>
            <h2 className={SECTION_TITLE}>Las seis palancas</h2>
            <p className={LEAD}>{SERVICES_INTRO}</p>

            <ul className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
              {SERVICE_LEVERS.map((s) => (
                <li key={s.lever}>
                  <p className={LABEL}>{s.lever}</p>
                  <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.1] tracking-[-0.01em]">
                    {s.problem}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-ink">{s.body}</p>
                  {s.moves ? (
                    <p className="mt-4 text-base">
                      <span className="font-semibold">Mueve:</span>{" "}
                      <span className="font-serif text-xl">{s.moves}.</span>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${CONTAINER} py-24 md:py-32`}>
          <Eyebrow>¿Hablamos?</Eyebrow>
          <h2 className={SECTION_TITLE}>¿Cuál de las tres es la tuya?</h2>
          <p className={LEAD}>
            30 minutos y tres conclusiones por escrito. Te decimos qué modalidad encaja y qué palanca activaríamos
            primero.
          </p>
          <RadiografiaCta location="servicios-cierre" className="mt-12" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
