import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { RadiografiaCta } from "@/components/RadiografiaCta";
import { SERVICE_LEVERS, SERVICE_MODES, SERVICES_INTRO } from "@/lib/services";
import heroVideoMp4 from "@/assets/yamato-hero.mp4.asset.json";
import heroPoster from "@/assets/yamato-hero-poster.jpg.asset.json";
import { IGNACIO_PHOTO } from "@/lib/images";

const SITE_URL = "https://yamato.digital";
const ASSET_ORIGIN = "https://yamato-digital.lovable.app";
const assetUrl = (url: string) => `${ASSET_ORIGIN}${url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fractional CMO independiente | YAMATO" },
      {
        name: "description",
        content:
          "Fractional CMO independiente en Madrid. Un director de marketing a tiempo parcial que se sienta en tu comité y responde del número. Sin nómina, sin comisiones.",
      },
      { property: "og:site_name", content: "YAMATO" },
      { property: "og:title", content: "Fractional CMO independiente | YAMATO" },
      {
        property: "og:description",
        content:
          "Fractional CMO independiente en Madrid. Un director de marketing a tiempo parcial que se sienta en tu comité y responde del número. Sin nómina, sin comisiones.",
      },


      { property: "og:url", content: SITE_URL },
      { property: "og:video", content: `${SITE_URL}${heroVideoMp4.url}` },
      { property: "og:video:secure_url", content: `${SITE_URL}${heroVideoMp4.url}` },
      { property: "og:video:type", content: "video/mp4" },
      { property: "og:video:width", content: "1920" },
      { property: "og:video:height", content: "1080" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: assetUrl(heroPoster.url), fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "YAMATO | Fractional CMO independiente en Madrid",
          description: "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.",
          thumbnailUrl: assetUrl(heroPoster.url),
          contentUrl: assetUrl(heroVideoMp4.url),
          uploadDate: "2026-06-23",
          duration: "PT10S",
          width: 1920,
          height: 1080,
        }),
      },
    ],
  }),
  component: Home,
});

const CLIENTS_ROW_1 = ["LOEWE", "Cedrion", "Kincode", "Bindu Events", "Beedigital", "Cegid"];
const CLIENTS_ROW_2 = ["APODEMIA", "Airamana", "1forAll", "IEB", "Grupo Alquila"];
const CLIENTS_ROW_3 = ["Clicollege", "Vivas Psicología", "SomosNLP", "Rem83"];

const FIT_YES = [
  "Quieres crecer y nadie piensa tu marketing a nivel estratégico.",
  "Quieres un plan con números y alguien que responda de ellos.",
  "Prefieres honestidad brutal a informes bonitos que no dicen nada.",
  "Tienes equipo y presupuesto, pero los proyectos importantes nunca tienen dueño.",
  "Quieres ganar dinero.",
];

const FIT_NO = [
  "Buscas marketing barato.",
  // Pendiente de la decisión sobre paid: ver TODO(Ignacio) en src/lib/services.ts.
  "Necesitas una agencia para poner en marcha las campañas de Paid.",
  "Quieres resultados mágicos en 2 semanas.",
  "Te ofende que te digan lo que no funciona.",
  "Regateas.",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold uppercase tracking-[0.14em] text-ink">{children}</h2>
      <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="px-6 sm:px-10 lg:px-20 xl:px-28">
      <Reveal
        as="h1"
        className="mt-16 max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em] md:mt-24"
      >
        Tu Fractional CMO independiente.
      </Reveal>
      <Reveal as="p" delay={150} className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
        Un director de marketing senior dentro de tu comité. Decide la estrategia, dirige a tu equipo y responde de los
        números. Las horas que necesites.
      </Reveal>
      <Reveal delay={300} className="mt-10 mb-20">
        <RadiografiaCta location="hero" microcopy="Llamar es gratis (aún)." />
      </Reveal>
    </section>
  );
}

function HeroMedia() {
  return (
    <section>
      <Reveal variant="scale" className="relative aspect-[16/9] w-full overflow-hidden bg-ink/95">
        <img
          src={assetUrl(heroPoster.url)}
          alt="YAMATO | Fractional CMO independiente en Madrid"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <video
          className="relative z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
          poster={assetUrl(heroPoster.url)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="YAMATO | Fractional CMO independiente en Madrid"
        >
          <source src={assetUrl(heroVideoMp4.url)} type="video/mp4" />
        </video>
      </Reveal>
    </section>
  );
}

function DoorArrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function Doors() {
  const cardClass =
    "group flex h-full flex-col justify-between gap-10 border border-ink/15 p-6 transition-colors hover:bg-cream sm:p-8 md:p-10";
  return (
    <section aria-label="Por dónde entrar" className="mt-16 px-6 sm:px-10 lg:px-20 xl:px-28">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="h-full">
          <Link to="/fractional-cmo" data-door="sin-cmo" className={cardClass}>
            <div>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] tracking-tight">
                No tienes director de marketing.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                Hay campañas, hay agencia, hay hasta un junior espabilado. Falta quien decida. Ese es el hueco que
                ocupamos.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-ink">
                Para empresas que ya venden y tienen con qué ejecutar. Si aún buscas tu primer cliente, no te hace falta
                un CMO: te hace falta vender.
              </p>
            </div>
            <span className="font-serif text-xl link-underline link-underline-hover self-start">
              Así funciona un Fractional CMO
              <DoorArrow />
            </span>
          </Link>
        </Reveal>
        <Reveal delay={120} className="h-full">
          <Link to="/servicios" hash="proyecto-estrategico" data-door="con-cmo" className={cardClass}>
            <div>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] tracking-tight">
                Ya tienes CMO.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                No venimos a quitarle la silla a nadie. Entramos donde la estructura no llega.
              </p>
            </div>
            <span className="font-serif text-xl link-underline link-underline-hover self-start">
              Qué hacemos con él
              <DoorArrow />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const rows = [
    { items: CLIENTS_ROW_1, reverse: false },
    { items: CLIENTS_ROW_2, reverse: true },
    { items: CLIENTS_ROW_3, reverse: false },
  ];
  return (
    <section aria-label="Trabajamos con" className="py-12">
      <div>
        {rows.map((row, idx) => {
          const doubled = [...row.items, ...row.items, ...row.items, ...row.items];
          const isLast = idx === rows.length - 1;
          return (
            <div key={idx} className={`overflow-hidden py-4 ${isLast ? "" : "border-b border-ink/15"}`}>
              <div
                className={`${row.reverse ? "marquee-track-reverse" : "marquee-track"} font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.2] whitespace-nowrap py-1`}
              >
                {doubled.map((c, i) => (
                  <span key={i} className="flex items-center gap-10">
                    {c}
                    <span aria-hidden className="text-muted-ink">
                      ◦
                    </span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-28 px-6 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Qué es YAMATO</Eyebrow>
        </Reveal>
        <Reveal
          as="h3"
          delay={120}
          className="mt-10 font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight"
        >
          Tu dirección de marketing.
          <br />
          Tu Fractional CMO.
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-relaxed md:text-xl text-muted-ink">
          <Reveal as="p" delay={200}>
            La cabeza de un CMO con más de una década dirigiendo + las manos de un equipo senior. Dentro de tu empresa,
            las horas que necesites.
          </Reveal>
          <Reveal as="p" delay={280}>
            Quien piensa tu estrategia es quien la firma, y se sienta en tu comité de dirección.
          </Reveal>
          <Reveal as="p" delay={360}>
            Nos medimos por lo que mueves en tu negocio.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="border-t border-hairline px-6 py-28 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <img
            src={IGNACIO_PHOTO.src}
            srcSet={IGNACIO_PHOTO.srcSet}
            sizes="(min-width: 768px) 360px, 280px"
            alt={IGNACIO_PHOTO.alt}
            width={IGNACIO_PHOTO.width}
            height={IGNACIO_PHOTO.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full max-w-[280px] object-cover object-center md:max-w-[360px]"
          />
        </Reveal>
        <Reveal delay={120} className="md:col-span-7 md:col-start-6">
          <Eyebrow>Quién firma tu estrategia</Eyebrow>
          <h3 className="mt-10 font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
            Una persona, con nombre y apellido.
          </h3>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-ink md:text-xl">
            <p>
              Tu CMO. Senior, independiente y con su firma en cada decisión. Las importantes, además, pasan por el
              consenso interno de YAMATO: nadie decide solo lo que te juegas.
            </p>
            <p>Detrás, el especialista que tu problema necesita.</p>
          </div>
          <div className="mt-10 border-t border-ink/15 pt-6">
            <p className="font-serif text-2xl">Ignacio Goñi, fundador</p>
            <p className="mt-3 text-lg leading-relaxed text-muted-ink">
              Ingeniero industrial que viene del sector aeronáutico y ha pasado por la expansión global de LOEWE.
              <br />
              Más de quince años dirigiendo marketing dentro de empresas, no asesorándolas desde fuera.
            </p>
          </div>
          <Link
            to="/quienes-somos"
            className="group mt-8 inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover"
          >
            Quiénes somos
            <DoorArrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Nuestros servicios</Eyebrow>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-tight text-muted-ink">
              Tres formas de trabajar, según lo que ya tienes.
            </p>
            <ol className="mt-12">
              {SERVICE_MODES.map((m, i) => (
                <Reveal as="li" delay={i * 80} key={m.id} className="border-t border-ink/15 py-6 last:border-b">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-ink">
                    <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span> · {m.name}
                  </span>
                  <span className="mt-2 block font-serif text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.1]">
                    {m.problem}
                  </span>
                </Reveal>
              ))}
            </ol>
            <p className="mt-10 text-lg leading-relaxed text-muted-ink md:text-xl">{SERVICES_INTRO}</p>
            <p className="mt-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted-ink">
              {SERVICE_LEVERS.map((s) => s.lever).join(" · ")}
            </p>
          </div>
          <div className="mt-10 md:col-span-8 md:col-start-5">
            <Link
              to="/servicios"
              className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover"
            >
              Ver en detalle
              <DoorArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Llamada",
      body: "Llamada de 30 minutos. Si en ese tiempo no te convencemos de trabajar juntos, YAMATO no es para ti.",
    },
    {
      n: "02",
      title: "Radiografía (gratis)",
      // TODO(Ignacio): confirmar alcance de la Radiografía (30 minutos y tres conclusiones por escrito).
      body: "30 minutos y tres conclusiones por escrito: lo que haces bien, lo que no tanto y lo que todavía no haces. La auditoría con tus datos es la primera fase del trabajo.",
    },
    {
      n: "03",
      title: "Arrancamos",
      body: "Si aceptas, cosa que suele ser lo habitual, estamos trabajando en tu proyecto en 1 semana.",
    },
    {
      n: "04",
      title: "Nos vamos",
      body: "Cuando sobremos, te lo diremos nosotros. Y te ayudamos a fichar a quien nos sustituya.",
    },
  ];

  return (
    <section id="proceso">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>Cómo lo hacemos</Eyebrow>
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <span className="font-serif text-5xl text-muted-ink">{s.n}</span>
              <h3 className="mt-4 font-serif text-3xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-ink">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal
          as="p"
          className="mt-20 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-tight"
        >
          “Te diremos 3 cosas: lo que haces bien, lo que no haces tan bien y, sobre todo, lo que no haces.”
        </Reveal>
        <Reveal delay={150} className="mt-16">
          <RadiografiaCta location="proceso" microcopy="¿Nos sentamos?" microcopyPosition="before" />
        </Reveal>
      </div>
    </section>
  );
}

function PriceQuote() {
  return (
    <section className="border-y border-hairline bg-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Reveal>
          <Eyebrow>Inversión</Eyebrow>
        </Reveal>
        <Reveal
          as="h3"
          delay={120}
          className="mt-6 max-w-4xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight"
        >
          Un CMO por el precio de un <span className="text-muted-ink">junior</span>.
        </Reveal>
        <Reveal as="p" delay={220} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Por lo mismo que te cuesta un perfil junior, YAMATO te pone un CMO con más de una década dirigiendo marketing.
          Menos horas, sí. Pero ninguna se pierde en que un junior aprenda a tu costa.
        </Reveal>
      </div>
    </section>
  );
}

function EnterpriseBlock() {
  return (
    <section id="ya-tienes-cmo" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal variant="fade-right" className="md:col-span-4">
            <Eyebrow>Para empresas grandes</Eyebrow>
            <h3 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
              ¿Y si ya tienes un CMO?
            </h3>
          </Reveal>
          <Reveal
            variant="fade-left"
            delay={150}
            className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-6 md:text-xl"
          >
            <p className="text-muted-ink">No venimos a quitarle la silla a nadie.</p>
            <p className="text-muted-ink">
              En empresas grandes entramos donde la estructura no llega: el lanzamiento que nadie tiene tiempo de
              liderar, la unidad de negocio sin foco, la IA de la que todo el comité habla y nadie implanta, una segunda
              opinión independiente sobre lo que ya haces…
            </p>
            <p className="text-muted-ink">
              Proyectos con principio, fin y resultado. No nos quedamos a vivir en tu nómina.
            </p>
            <p className="text-muted-ink">
              Sí, suena a lo que te prometió la gran consultora. La diferencia: aquí, el que te lo vende es el que
              trabaja.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>No perdamos el tiempo</Eyebrow>
        <h3 className="mt-6 max-w-3xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
          Encajarás con YAMATO si…
        </h3>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <ul className="space-y-5 text-muted-ink">
            {FIT_YES.map((t, i) => (
              <Reveal as="li" delay={i * 70} key={t} className="flex gap-4 text-lg leading-relaxed md:text-xl">
                <span aria-hidden className="mt-[0.7em] inline-block h-[2px] w-6 shrink-0 bg-current" />
                <span>{t}</span>
              </Reveal>
            ))}
          </ul>
          <div>
            <Reveal as="p" className="font-serif text-2xl text-muted-ink">
              No encajarás si…
            </Reveal>
            <ul className="mt-6 space-y-5">
              {FIT_NO.map((t, i) => (
                <Reveal
                  as="li"
                  delay={i * 70}
                  key={t}
                  className="flex gap-4 text-lg leading-relaxed text-muted-ink md:text-xl"
                >
                  <span aria-hidden className="mt-[0.7em] inline-block h-[2px] w-6 shrink-0 bg-current" />
                  <span>{t}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contacto" className="bg-ink text-paper">
      <div className="px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <Reveal>
          <Eyebrow>
            <span className="text-paper/60">Y colorín colorado…</span>
          </Eyebrow>
        </Reveal>
        <Reveal
          as="h3"
          delay={150}
          className="mt-8 max-w-5xl font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-tight"
        >
          ¿Qué tal si hacemos una, o dos, cosas juntos?
        </Reveal>
        <Reveal delay={300} className="mt-12">
          <RadiografiaCta
            location="cierre"
            microcopy="Hablemos pues."
            microcopyPosition="before"
            microcopyClassName="text-paper/60"
            whatsapp
          />
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <HeroMedia />
      <Doors />
      <div className="mt-24" />
      <Marquee />
      <About />
      <Signature />
      <Services />
      <Process />
      <PriceQuote />
      <EnterpriseBlock />
      <div className="border-t border-hairline" />
      <Fit />
      <Closing />

      <Footer />
    </main>
  );
}
