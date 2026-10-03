import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RadiografiaCta } from "@/components/RadiografiaCta";
import { IGNACIO_PHOTO } from "@/lib/images";
import { EXECUTION_MODEL } from "@/lib/services";

const elenaAsset = { url: "/assets/elena-gonzalez-blanco-advisor.jpeg" };
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
      <h2 className="text-base font-semibold uppercase tracking-[0.14em] text-ink">{children}</h2>
      <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
    </div>
  );
}

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
    body: "El tuyo y el nuestro. No lo disfrazamos de \u201Cpropósito\u201D ni de \u201Cimpacto\u201D. Es un negocio. Y los clientes que vienen a YAMATO lo agradecen.",
  },
];

function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 xl:px-28">
      <Eyebrow>Quiénes somos</Eyebrow>
      <h1 className="mt-10 max-w-[20ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
        Un CMO que firma lo que piensa.
        Y un equipo que no tienes que fichar.
      </h1>
      <div className="mt-16 mb-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed md:text-xl">
          <p>YAMATO no nació de una pasión por el marketing. Nació de un cabreo.</p>
          <p className="text-muted-ink">
            Después de más de una década dirigiendo marketing en cabeza ajena, el patrón siempre era el mismo: empresas
            con buen producto y nadie dirigiendo su marketing. Mucho ejecutar, poco decidir. Nadie pensaba el
            marketing más allá del mes que viene. Y cuando alguien lo pensaba, no era quien lo ejecutaba.
          </p>
          <p>Así que montamos lo contrario.</p>
          <p className="text-muted-ink">
            Somos tu <span className="font-serif">Fractional CMO independiente</span>. Entramos en tu empresa como
            entraría un director de marketing —pensamos la estrategia, marcamos los KPIs, lideramos la operación— pero
            sin que tengas que ficharlo ni pagarle 100.000 € al año. La cabeza de un CMO con las manos de un equipo
            senior. Las horas que necesites. Ni una más.
          </p>
          <p className="font-serif text-2xl">De la startup a la corporación.</p>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-24 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Quién dirige esto</Eyebrow>
            <figure className="mt-10">
              <img
                src={IGNACIO_PHOTO.src}
                srcSet={IGNACIO_PHOTO.srcSet}
                sizes="(min-width: 768px) 456px, 100vw"
                alt={IGNACIO_PHOTO.alt}
                width={IGNACIO_PHOTO.width}
                height={IGNACIO_PHOTO.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-[456px] max-h-[570px] object-cover object-center"
              />
            </figure>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <h3 className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
              Ignacio Goñi
              <span className="block text-muted-ink">Fundador</span>
            </h3>
            <div className="mt-10 space-y-6 text-lg leading-relaxed md:text-xl">
              <p className="text-muted-ink">
                Ingeniero mecánico que pasó de diseñar máquinas para fabricar aviones para Airbus y Boeing al marketing.
                Ha dirigido el marketing global de LOEWE (LVMH) y ha sido CMO de Clibrain y Clidrive.
                Más de diez años dirigiendo marketing dentro de empresas: lujo, IA, fintech y SaaS.
                He cometido los errores caros en presupuestos que no eran míos, lo cual
                significa una cosa para ti: cuando trabajamos juntos, esos errores ya no los pagas tú.
              </p>
              <p className="text-muted-ink">
                YAMATO es bootstrapped. Sin inversores a los que rendir cuentas, sin presión por inflar facturación, sin
                un comercial cobrando comisión por venderte horas que no necesitas. Razón por la que te puedo decir la
                verdad aunque no me convenga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>El equipo de verdad</Eyebrow>
        <h3 className="mt-6 max-w-4xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
          Un equipo con nombre y responsabilidad.
        </h3>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed md:text-xl">
            <p className="text-muted-ink">
              YAMATO no es solo su fundador. Hay más <span className="font-serif">CMO senior, totalmente
              independientes</span>: cada uno firma la estrategia de sus clientes y responde por ella. Las decisiones
              importantes se consensúan dentro de YAMATO. Tu CMO decide; no decide a solas.
            </p>
            <p className="text-muted-ink">
              Y debajo, una <span className="font-serif">red de más de 50 colaboradores senior</span>{" "}
              —especialistas en SEO, CRM, contenido, datos, desarrollo, IA, redes sociales— que entran en cada proyecto
              según lo que ese proyecto necesita. No son una plantilla. Llevan años haciendo lo suyo, y solo trabajan
              cuando hace falta lo suyo.
            </p>
            <p className="text-muted-ink">Esto no es un parche. Es el modelo, y es mejor para ti:</p>
          </div>
          <ul className="md:col-span-5 space-y-5 text-muted-ink">
            {[
              "No pagas una estructura de 50 personas que alguien tiene que mantener ocupada todo el mes.",
              "No te toca el junior libre, te toca el especialista adecuado.",
              "Cuando tu proyecto cambia, el equipo cambia con él. Sin reuniones para justificar nóminas.",
            ].map((t) => (
              <li key={t} className="flex gap-4 text-lg leading-relaxed md:text-xl">
                <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-current" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-20 max-w-4xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2]">
          Te ponemos exactamente el talento que tu problema requiere, dirigido por alguien que responde con su nombre.
        </p>
      </div>
    </section>
  );
}

function Advisor() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Y un advisor que nos para los pies</Eyebrow>
            <img
              src={elenaAsset.url}
              alt="Elena González-Blanco"
              className="mt-8 w-full max-w-[280px] opacity-80 pointer-events-none select-none"
            />
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed md:text-xl">
            <p className="text-muted-ink">
              Tener criterio está bien. Tener a alguien que te lleve la contraria cuando te equivocas, mejor.
            </p>
            <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-tight">
              Elena González-Blanco
              <span className="block text-muted-ink">Advisor</span>
            </h3>
            <p className="text-muted-ink">
              Head of AI for Digital Natives en Microsoft EMEA. Cofundadora de Clibrain, PhD por Harvard y una de las
              voces más reconocidas de la inteligencia artificial en español. Nos ayuda a integrar IA donde aporta
              negocio, no donde hace ruido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Code() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <Eyebrow>
          <span className="text-paper/60">Nuestro código</span>
        </Eyebrow>
        <h3 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          Ocho cosas que no negociamos.
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
          Si las compartes, vamos a entendernos bien.
        </p>
        <ol className="mt-20">
          {PRINCIPLES.map((p) => (
            <li key={p.n} className="grid gap-6 border-t border-paper/15 py-10 last:border-b md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="font-serif text-4xl text-paper/50">{p.n}</span>
                <h3 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{p.title}</h3>
              </div>
              <p className="md:col-span-8 md:col-start-5 text-lg leading-relaxed text-paper/80 md:text-xl">{p.body}</p>
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
      <div className="px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <Eyebrow>¿Hablamos?</Eyebrow>
        <h3 className="mt-8 max-w-5xl font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-tight">
          Treinta minutos. Te hacemos una Radiografía gratis de tu marketing.
        </h3>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Las tres cosas, sin compromiso. Si en media hora no te convencemos, te lo diremos nosotros antes de que
          cuelgues.
        </p>
        <RadiografiaCta location="quienes-somos-cierre" className="mt-12" whatsapp />
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
      <Founder />
      <Team />
      <Advisor />
      <Code />
      <Closing />
      <Footer />
    </main>
  );
}
