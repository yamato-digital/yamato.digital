import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import ignacioAsset from "@/assets/ignacio-goni-yamato.webp.asset.json";

const elenaAsset = { url: "/assets/elena-gonzalez-blanco-advisor.jpeg" };
const ASSET_ORIGIN = "https://yamato-digital.lovable.app";
const assetUrl = (url: string) => `${ASSET_ORIGIN}${url}`;

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — YAMATO" },
      {
        name: "description",
        content:
          "Un CMO que firma lo que piensa y un equipo senior que no tienes que fichar. Consultora de marketing independiente.",
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
          "description": "Ingeniero industrial con más de 15 años dirigiendo marketing. Ex-LOEWE.",
        }),
      },
    ],
  }),
  component: QuienesSomos,
});

function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
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

const PRINCIPLES = [
  {
    n: "01",
    title: "Te decimos las tres cosas.",
    body: "Lo que haces bien, lo que no haces tan bien y lo que directamente no haces. Sin adornos. Pagas por una opinión, no por una palmadita en la espalda.",
  },
  {
    n: "02",
    title: "Cinco cosas, no cuarenta.",
    body: "No hacemos de todo. Hacemos lo que mueve la aguja y dejamos fuera lo que solo engorda la factura. Si alguien te ofrece cuarenta servicios, no hace ninguno bien.",
  },
  {
    n: "03",
    title: "Independientes de verdad.",
    body: "No cobramos un porcentaje de lo que inviertes en publicidad. Cuanto más gastas, no ganamos más. Trabajamos como Growth Partner: solo ganamos cuando tú ganas. Punto.",
  },
  {
    n: "04",
    title: "Quien piensa, firma.",
    body: "El que diseña la estrategia es el que la ejecuta. No te vendemos un PowerPoint en la reunión de ventas para luego desaparecer y mandar al becario.",
  },
  {
    n: "05",
    title: "La IA es para lo aburrido.",
    body: "La usamos para automatizar análisis, métricas y reporting. El tiempo humano lo dedicamos a pensar. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.",
  },
  {
    n: "06",
    title: "Solo ejecutamos lo que hemos marcado.",
    body: "Hacemos Google Ads, SEO, CRM, web. Lo mismo que las agencias, con un pero: solo ejecutamos la estrategia que hemos definido nosotros. Ejecutar a ciegas el plan de otro es como operar con los ojos cerrados.",
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
            con buen producto pagando a agencias que vendían humo y delegaban el trabajo en un becario. Nadie pensaba el
            marketing más allá del mes que viene. Y cuando alguien lo pensaba, no era quien lo ejecutaba.
          </p>
          <p>Así que montamos lo contrario.</p>
          <p className="text-muted-ink">
            Somos una <span className="font-serif">consultora de marketing independiente</span>. Entramos en tu empresa como
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
    <section className="border-t border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-24 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Quién dirige esto</Eyebrow>
            <figure className="mt-10">
              <img
                src={assetUrl(ignacioAsset.url)}
                alt="Ignacio Goñi, fundador de YAMATO"
                width="1600"
                height="1600"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 36vw, (min-width: 768px) 42vw, 100vw"
                className="aspect-[4/5] w-full max-h-[520px] object-cover object-center grayscale"
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
                Ingeniero industrial que viene del sector aeronáutico, ha pasado por la expansión global de LOEWE y está
                metido en la IA hasta las entrañas, he pasado más de quince años dirigiendo marketing dentro de empresas,
                no asesorándolas desde fuera. He cometido los errores caros en presupuestos que no eran míos, lo cual
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
          Aquí es donde la mayoría de webs mienten.
        </h3>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed md:text-xl">
            <p className="text-muted-ink">
              Montan una cuadrícula de treinta caras sonrientes y la llaman “nuestro equipo”. Nosotros no vamos a hacer
              eso.
            </p>
            <p className="text-muted-ink">
              YAMATO funciona con una <span className="font-serif">red de más de 50 colaboradores senior</span>{" "}
              —especialistas en SEO, CRM, contenido, datos, desarrollo, IA, redes sociales— que entran en cada proyecto
              según lo que ese proyecto necesita. No son una plantilla. Son los mejores en lo suyo, y solo trabajan
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
          Una agencia te vende su organigrama. Nosotros te vendemos exactamente el talento que tu problema requiere,
          dirigido por alguien que responde con su nombre.
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
          Si alguna te chirría, probablemente no somos para ti. Y no pasa nada.
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
        <div className="mt-12">
          <a
            href="mailto:hola@yamato.digital"
            className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover"
          >
            Pide tu Radiografía gratis
            <Arrow />
          </a>
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
      <Founder />
      <Team />
      <Advisor />
      <Code />
      <Closing />
      <Footer />
    </main>
  );
}
