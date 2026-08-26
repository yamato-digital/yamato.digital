import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import heroVideoMp4 from "@/assets/yamato-hero.mp4.asset.json";
import heroPoster from "@/assets/yamato-hero-poster.jpg.asset.json";

const SITE_URL = "https://yamato.digital";
const ASSET_ORIGIN = "https://yamato-digital.lovable.app";
const assetUrl = (url: string) => `${ASSET_ORIGIN}${url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YAMATO — Consultora de marketing independiente" },
      {
        name: "description",
        content:
          "YAMATO es una consultora de marketing independiente (y sincera): dirección de marketing externa y Fractional CMO desde Madrid. Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio.",
      },
      { property: "og:site_name", content: "YAMATO" },
      { property: "og:title", content: "YAMATO — Consultora de marketing independiente" },
      {
        property: "og:description",
        content:
          "YAMATO es una consultora de marketing independiente (y sincera): dirección de marketing externa y Fractional CMO desde Madrid. Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio.",
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
          name: "YAMATO — Consultora de marketing independiente",
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

const SERVICES = [
  "Estrategia y dirección",
  "Mentoría y gestión de equipos",
  "Go-to-Market",
  "IA aplicada al marketing",
  "Ejecución",
];

const FIT_YES = [
  "Quieres crecer y nadie piensa tu marketing a nivel estratégico.",
  "Estás harto de agencias que prometen la luna y entregan un PowerPoint.",
  "Prefieres honestidad brutal a informes bonitos que no dicen nada.",
  "Tienes equipo y presupuesto, pero los proyectos importantes nunca tienen dueño.",
  "Quieres ganar dinero.",
];

const FIT_NO = [
  "Buscas marketing barato.",
  "Necesitas una agencia para poner en marcha las campañas de Paid.",
  "Quieres resultados mágicos en 2 semanas.",
  "Te ofende que te digan lo que no funciona.",
  "Regateas. No somos un mercadillo.",
];

function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function Cta({ children, href = "/contacto" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight italic link-underline link-underline-hover"
    >
      {children}
      <Arrow />
    </a>
  );
}

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
        Hola. Somos una consultora de marketing independiente (y sincera).
      </Reveal>
      <Reveal as="p" delay={150} className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
        Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.
      </Reveal>
      <Reveal delay={300} className="mt-10 mb-20">
        <Cta>Llamar es gratis (aún)</Cta>
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
          alt="YAMATO — Consultora de marketing independiente"
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
          aria-label="YAMATO — Consultora de marketing independiente"
        >
          <source src={assetUrl(heroVideoMp4.url)} type="video/mp4" />
        </video>
      </Reveal>
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
          className="mt-10 font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight italic"
        >
          Tu dirección de marketing.
          <br />
          Tu Fractional CMO.
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-relaxed md:text-xl text-muted-ink">
          <Reveal as="p" delay={200}>
            La cabeza de un CMO con más de una década dirigiendo + las manos de un equipo senior. Dentro de tu empresa,
            las horas que necesites. Ni un freelance que hace campañas sueltas, ni un consultor que suelta el informe y
            desaparece.
          </Reveal>
          <Reveal as="p" delay={280}>
            No somos una agencia. Nadie te venderá la moto en la primera reunión para pasarte luego con un junior: quien
            piensa tu estrategia es quien la firma, y se sienta en tu comité de dirección.
          </Reveal>
          <Reveal as="p" delay={360}>
            Trabajamos como <em className="font-serif">Growth Partner</em>: solo ganamos cuando tú ganas. Incómodo para
            el resto del sector. Cómodo para ti.
          </Reveal>
        </div>
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
          <ol className="md:col-span-8 md:col-start-5">
            {SERVICES.map((s, i) => (
              <Reveal
                as="li"
                delay={i * 80}
                key={s}
                className="flex items-baseline gap-6 border-t border-ink/15 py-6 last:border-b"
              >
                <span className="text-sm tabular-nums text-muted-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-tight">{s}</span>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 md:col-span-8 md:col-start-5">
            <Link
              to="/servicios"
              className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight italic link-underline link-underline-hover"
            >
              Ver en detalle
              <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
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
      body: "Analizamos tu marketing de arriba a abajo y te presentamos qué cambiaríamos y por qué.",
    },
    {
      n: "03",
      title: "Arrancamos",
      body: "Si aceptas, cosa que suele ser lo habitual, estamos trabajando en tu proyecto en 1 semana.",
    },
  ];

  return (
    <section id="proceso">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>Cómo lo hacemos</Eyebrow>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
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
          className="mt-20 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-tight italic"
        >
          “Te diremos 3 cosas: lo que haces bien, lo que no haces tan bien y, sobre todo, lo que no haces.”
        </Reveal>
        <Reveal delay={150} className="mt-16">
          <Cta>¿Nos sentamos?</Cta>
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
          Un CMO por el precio de un <span className="italic text-muted-ink">junior</span>.
        </Reveal>
        <Reveal as="p" delay={220} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Por lo mismo que te cuesta un perfil junior, YAMATO te pone un CMO con más de una década dirigiendo marketing.
          Menos horas, sí. Pero ninguna se pierde en que un junior aprenda a tu costa.
        </Reveal>
        <Reveal delay={320} className="mt-10">
          <Cta>Si llamas, respondemos</Cta>
        </Reveal>
      </div>
    </section>
  );
}

function EnterpriseBlock() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal variant="fade-right" className="md:col-span-4">
            <Eyebrow>Para empresas grandes</Eyebrow>
            <h3 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
              ¿Y si ya tienes un <span className="italic">CMO?</span>
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
              liderar, la unidad de negocio sin foco, la IA de la que todo el comité habla y nadie implanta, la segunda
              opinión que tu agencia no te va a dar…
            </p>
            <p className="text-muted-ink">
              Proyectos con principio, fin y resultado. No nos quedamos a vivir en tu nómina.
            </p>
            <p className="text-muted-ink">
              Sí, suena a lo que te prometió la gran consultora. La diferencia: aquí, el que te lo vende es el que
              trabaja.
            </p>
            <div className="pt-4">
              <Cta>Cuéntanos el proyecto</Cta>
            </div>
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
          Encajarás con YAMATO <span className="italic">si…</span>
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
            <Reveal as="p" className="font-serif text-2xl italic text-muted-ink">
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
          <a
            href="/contacto"
            className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight italic link-underline link-underline-hover"
          >
            Hablemos pues
            <Arrow />
          </a>
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
      <div className="mt-24" />
      <Marquee />
      <About />
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
