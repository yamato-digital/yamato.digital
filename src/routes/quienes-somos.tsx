import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RadiografiaCta } from "@/components/RadiografiaCta";
import { IGNACIO_PHOTO, PORTRAITS } from "@/lib/images";
import { EXECUTION_MODEL } from "@/lib/services";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — YAMATO" },
      {
        name: "description",
        content:
          "Un CMO que firma lo que piensa y un equipo senior que no tienes que fichar. Fractional CMO independiente en Madrid.",
      },
      { property: "og:title", content: "Quiénes somos — YAMATO" },
      {
        property: "og:description",
        content: "Un CMO que firma lo que piensa y un equipo senior que no tienes que fichar.",
      },
      { property: "og:url", content: "https://yamato.digital/quienes-somos" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/quienes-somos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",

          "name": "Ignacio Goñi",
          "jobTitle": "Fundador, CMO",
          "worksFor": { "@type": "Organization", "name": "YAMATO" },
          "description":
            "Ingeniero mecánico que pasó de diseñar máquinas para fabricar aviones para Airbus y Boeing al marketing. Ha dirigido el marketing global de LOEWE (LVMH) y ha sido CMO de Clibrain y Clidrive. Más de diez años dirigiendo marketing dentro de empresas: lujo, IA, fintech y SaaS.",
          "image": `https://yamato.digital${IGNACIO_PHOTO.src}`,
        }),
      },
    ],
  }),
  component: QuienesSomos,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-ink">{children}</h2>
      <span className="mt-3 block h-[2px] w-10 bg-current" />
    </div>
  );
}

// El orden es el de la galería: el número de cada tarjeta sale de su posición.
const TEAM = [
  {
    name: "Ignacio Goñi",
    role: "Fundador · CMO",
    bio: "Ingeniero mecánico que pasó de Airbus y Boeing al marketing. Ha dirigido el marketing global de LOEWE (LVMH) y ha sido CMO de Clibrain y Clidrive.",
    focus: "Lujo · IA · Fintech · SaaS",
    portrait: PORTRAITS.ignacio,
  },
  {
    name: "Elena González-Blanco",
    role: "Advisor",
    bio: "Head of AI for Digital Natives en Microsoft EMEA. Cofundadora de Clibrain y PhD por Harvard. Nos lleva la contraria cuando nos equivocamos.",
    focus: "Inteligencia artificial",
    portrait: PORTRAITS.elena,
  },
  {
    name: "Pedro Anós",
    role: "Advisor",
    bio: "Global Marketing Director en LOEWE Perfumes. Dirige el marketing de una marca de lujo en todo el mundo, y nos pone el listón ahí.",
    focus: "Lujo · Perfumería · Marca",
    portrait: PORTRAITS.pedro,
  },
  {
    name: "José Luis García Benito",
    role: "Business Development Representative",
    bio: "Senior Associate en PwC. Usa su red y sus contactos para identificar clientes potenciales y agendarles la reunión comercial.",
    focus: "Desarrollo de negocio",
    portrait: PORTRAITS.joseLuis,
  },
] as const;

const SPECIALTIES = ["SEO", "CRM", "Contenido", "Datos", "Desarrollo", "IA", "Redes sociales"];

const NETWORK_REASONS = [
  "No pagas una estructura de 50 personas que alguien tiene que mantener ocupada todo el mes.",
  "No te toca el junior libre, te toca el especialista adecuado.",
  "Cuando tu proyecto cambia, el equipo cambia con él. Sin reuniones para justificar nóminas.",
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Te decimos las tres cosas.",
    body: "Lo que haces bien, lo que no haces tan bien y lo que directamente no haces. Sin adornos. Pagas por una opinión, no por una palmadita en la espalda.",
  },
  {
    n: "02",
    title: "Seis cosas. Bien hechas.",
    body: "Hacemos lo que mueve la aguja y lo hacemos a fondo. Lo que solo engorda la factura se queda fuera.",
  },
  {
    n: "03",
    title: "Independientes de verdad.",
    body: "Nuestros honorarios no dependen de lo que inviertes en medios. Nos medimos por lo que mueves en tu negocio.",
  },
  {
    n: "04",
    title: "Quien piensa, firma.",
    body: "El que diseña la estrategia es el que responde de ella. Y quien te la presenta es quien la defiende en tu comité.",
  },
  {
    n: "05",
    title: "La IA es para lo aburrido.",
    body: "La usamos para automatizar análisis, métricas y reporting. El tiempo humano lo dedicamos a pensar. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.",
  },
  {
    n: "06",
    title: "Solo ejecutamos lo que hemos marcado.",
    // Pendiente de la decisión sobre paid: ver TODO(Ignacio) en src/lib/services.ts.
    body: `${EXECUTION_MODEL} Y siempre sobre la estrategia que hemos definido: ejecutar a ciegas el plan de otro es como operar con los ojos cerrados.`,
  },
  {
    n: "07",
    title: "Sin permanencias.",
    body: "Si te quedas, es porque quieres. El día que dejemos de aportar, te vas sin penalización y sin drama. Atar a un cliente con un contrato es admitir que no lo retienes con resultados.",
  },
  {
    n: "08",
    title: "Esto va de ganar dinero.",
    body: "El tuyo y el nuestro. No lo disfrazamos de “propósito” ni de “impacto”. Es un negocio. Y los clientes que vienen a YAMATO lo agradecen.",
  },
];

function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 xl:px-28">
      <Eyebrow>Quiénes somos</Eyebrow>
      <h1 className="mt-10 max-w-[16ch] font-serif text-[clamp(2.75rem,6.6vw,6rem)] leading-[0.98] tracking-[-0.02em]">
        Un CMO que firma lo que piensa.
        Y un equipo que no tienes que fichar.
      </h1>
      <div className="mt-16 mb-24 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-16">
        <p className="md:col-span-5 font-serif text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
          YAMATO no nació de una pasión por el marketing. Nació de un cabreo.
        </p>
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-muted-ink">
          <p>
            Después de más de una década dirigiendo marketing en cabeza ajena, el patrón siempre era el mismo: empresas
            con buen producto y nadie dirigiendo su marketing. Mucho ejecutar, poco decidir. Nadie pensaba el
            marketing más allá del mes que viene. Y cuando alguien lo pensaba, no era quien lo ejecutaba.
          </p>
          <p className="text-ink">Así que montamos lo contrario.</p>
          <p>
            Somos tu <span className="font-serif">Fractional CMO independiente</span>. Entramos en tu empresa como
            entraría un director de marketing —pensamos la estrategia, marcamos los KPIs, lideramos la operación— pero
            sin que tengas que ficharlo ni pagarle 100.000 € al año. La cabeza de un CMO con las manos de un equipo
            senior. Las horas que necesites. Ni una más.
          </p>
          <p className="font-serif text-[1.375rem] text-ink">De la startup a la corporación.</p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="max-w-xl">
            <Eyebrow>El equipo</Eyebrow>
            <h3 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
              Un equipo con nombre y responsabilidad.
            </h3>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-ink">
            YAMATO no es solo su fundador. Cada uno responde de lo suyo con nombre y apellido: quien dirige tu
            estrategia, quienes nos llevan la contraria y quien te abre la puerta.
          </p>
        </div>
        <ul className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <li key={member.name}>
              <img
                src={member.portrait.src}
                srcSet={member.portrait.srcSet}
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 20vw, (min-width: 640px) 44vw, 100vw"
                alt={member.portrait.alt}
                width={member.portrait.width}
                height={member.portrait.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h4 className="font-serif text-[1.625rem] leading-[1.1] tracking-[-0.01em]">{member.name}</h4>
                <span className="font-serif text-base tabular-nums text-muted-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">{member.role}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-ink">{member.bio}</p>
              <p className="mt-4 text-sm text-ink">{member.focus}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:px-20 xl:px-28 py-28 md:grid-cols-12 md:gap-16 md:py-32">
        <div className="md:col-span-3">
          <Eyebrow>Quién dirige esto</Eyebrow>
        </div>
        <div className="md:col-span-9 max-w-3xl">
          <blockquote className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.2] tracking-[-0.015em]">
            “He cometido los errores caros en presupuestos que no eran míos, lo cual significa una cosa para ti: cuando
            trabajamos juntos, esos errores ya no los pagas tú.”
          </blockquote>
          <p className="mt-8 text-lg leading-relaxed text-muted-ink md:text-xl">
            YAMATO es bootstrapped. Sin inversores a los que rendir cuentas, sin presión por inflar facturación, sin un
            comercial cobrando comisión por venderte horas que no necesitas. Razón por la que te puedo decir la verdad
            aunque no me convenga.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <img
              src={PORTRAITS.ignacio.src}
              alt=""
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="size-16 shrink-0 object-cover object-top"
            />
            <div>
              <p className="font-serif text-[1.375rem] leading-tight">Ignacio Goñi</p>
              <p className="mt-1 text-sm text-muted-ink">Fundador de YAMATO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-serif text-[clamp(7.5rem,15vw,13.75rem)] leading-[0.85] tracking-[-0.04em]">+50</p>
            <p className="mt-5 text-sm font-semibold text-muted-ink">Colaboradores senior en la red</p>
          </div>
          <div className="md:col-span-7">
            <Eyebrow>La red</Eyebrow>
            <h3 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight">
              Llevan años haciendo lo suyo. Y solo trabajan cuando hace falta lo suyo.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-muted-ink md:text-xl">
              Entran en cada proyecto según lo que ese proyecto necesita. No son una plantilla.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 font-serif text-2xl leading-tight">
              {SPECIALTIES.map((s) => (
                <li key={s}>{s}</li>
              ))}
              <li className="text-muted-ink">…y lo que haga falta</li>
            </ul>
            <p className="mt-12 text-lg leading-relaxed">Esto no es un parche. Es el modelo, y es mejor para ti:</p>
            <ul className="mt-5 space-y-4 text-muted-ink">
              {NETWORK_REASONS.map((t) => (
                <li key={t} className="flex gap-4 text-lg leading-relaxed">
                  <span aria-hidden className="mt-3.5 inline-block h-px w-6 shrink-0 bg-current" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-24 max-w-4xl font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2]">
          Te ponemos exactamente el talento que tu problema requiere, dirigido por alguien que responde con su nombre.
        </p>
      </div>
    </section>
  );
}

function Code() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div>
            <Eyebrow>
              <span className="text-paper/60">Nuestro código</span>
            </Eyebrow>
            <h3 className="mt-8 font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Ocho cosas que no negociamos.
            </h3>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-paper/70">
            Si las compartes, vamos a entendernos bien.
          </p>
        </div>
        <ol className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <li key={p.n}>
              <span className="font-serif text-3xl text-paper/50">{p.n}</span>
              <h4 className="mt-4 font-serif text-2xl leading-tight">{p.title}</h4>
              <p className="mt-3 text-base leading-relaxed text-paper/75">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contacto">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 sm:px-10 lg:px-20 xl:px-28 py-32 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Eyebrow>¿Hablamos?</Eyebrow>
          <h3 className="mt-8 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-tight">
            Treinta minutos. Te hacemos una Radiografía gratis de tu marketing.
          </h3>
        </div>
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-muted-ink">
            Las tres cosas, sin compromiso. Si en media hora no te convencemos, te lo diremos nosotros antes de que
            cuelgues.
          </p>
          <RadiografiaCta location="quienes-somos-cierre" className="mt-8" whatsapp />
        </div>
      </div>
    </section>
  );
}

function QuienesSomos() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <div className="mt-16 md:mt-24" />
      <Hero />
      <Team />
      <Founder />
      <Network />
      <Code />
      <Closing />
      <Footer />
    </main>
  );
}
