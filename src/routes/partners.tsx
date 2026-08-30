import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — YAMATO" },
      {
        name: "description",
        content:
          "Programa de partners de YAMATO: presenta clientes y cobra el 15% de la primera mensualidad. Sin pipeline, sin reuniones, sin seguimientos.",
      },
      { property: "og:title", content: "Partners — YAMATO" },
      {
        property: "og:description",
        content:
          "Una intro, un cobro. 15% del primer pago. Si traes 3 en un trimestre, los 3 van al 20%.",
      },
      { property: "og:url", content: "https://yamato.digital/partners" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/partners" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Partners,
});

const TALLY_URL = "https://tally.so/r/Pd8dJP";

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
      <h2 className="text-base font-semibold uppercase tracking-[0.14em] text-ink">
        {children}
      </h2>
      <div className="mt-2 h-[2px] w-10 bg-current opacity-40" />
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Nos presentas a alguien.",
    body: "Un email, una llamada, una cena. Lo que tú prefieras. Solo te pedimos que sea una intro real — no un nombre suelto en una hoja de cálculo.",
  },
  {
    n: "02",
    title: "Hacemos nuestro trabajo.",
    body: "Discovery, propuesta, negociación, cierre. Tú no tienes que entrar a ninguna reunión. Si te apetece estar, encantados. Si no, también.",
  },
  {
    n: "03",
    title: "Si firma, cobras.",
    body: "15% de la primera mensualidad del cliente. Pago cuando cobramos su segunda factura — así nos aseguramos los dos de que el cliente es real. Si nos presentas a 3 o más en un trimestre y firman, todos se pagan al 20% — incluidos los anteriores. Premiamos red real, no tiros sueltos.",
  },
];

const FAQ = [
  {
    q: "¿Qué cuenta como “lead presentado”?",
    a: "Una intro real: email a tres bandas, llamada conjunta, presentación en persona. No vale mandarnos un nombre y un LinkedIn. Si el lead no sabe quién eres y por qué le hablamos de YAMATO, no cuenta.",
  },
  {
    q: "¿Cuánto tiempo tengo desde que presento al lead hasta que tiene que firmar?",
    a: "3 meses desde el día de la intro. Si en ese plazo el cliente firma, comisión para ti. Si pasa el plazo, el lead deja de estar atribuido.",
  },
  {
    q: "¿Qué pasa si el cliente firma a los 4 meses?",
    a: "Llegaste tarde. Lo sentimos. El plazo está para mantener el sistema sano y evitar discusiones de “te lo presenté yo hace dos años”.",
  },
  {
    q: "¿Y si dos partners nos presentan al mismo lead?",
    a: "Quien lo registra primero, gana. Por eso te pedimos que registres la intro en cuanto la hagas. Si registras un lead que ya estaba en nuestro pipeline o ya lo había registrado otro partner, te lo decimos en el momento.",
  },
  {
    q: "¿Cómo sé en qué estado está mi lead?",
    a: "Te avisamos por email cuando hay novedades importantes: confirmación de registro, primera reunión hecha, propuesta enviada, firma o caducidad. Si quieres saber el estado en cualquier momento, escríbenos y te respondemos en 24h. Cuando el programa crezca, montaremos un panel para que lo veas tú directamente. De momento, lo llevamos a mano y por email. Preferimos hacerlo bien que automatizado a medias.",
  },
  {
    q: "¿Cuándo cobro?",
    a: "Cuando el cliente paga su segunda factura mensual. Te transferimos a final de ese mes. Así nos aseguramos los dos de que el cliente no se ha echado atrás al primer mes.",
  },
  {
    q: "¿Hay tope de comisiones?",
    a: "No. Si nos presentas a 20 clientes y firman, cobras 20 comisiones. Y si presentas a 3 o más en un mismo trimestre, todas las comisiones de ese trimestre suben al 20% — incluidas las anteriores.",
  },
  {
    q: "¿Cobro si presento a un cliente y luego renueva contrato al año siguiente?",
    a: "No. Solo cobras la primera mensualidad. Esto no es un programa de afiliación recurrente, es un finder's fee.",
  },
  {
    q: "¿Qué materiales me dais?",
    a: "Un one-pager (web + PDF) que puedes mandar antes de la intro. Si necesitas algo a medida para un caso concreto, lo preparamos. No vas a ir a vender. Vas a presentar. Pero queremos que el lead llegue caliente.",
  },
  {
    q: "¿Puedo presentar a alguien que ya conoce YAMATO?",
    a: "Si el lead ya está en nuestro pipeline cuando tú lo registras, no hay comisión. Por eso el sistema es “primero en registrar, gana”.",
  },
  {
    q: "¿Y si el cliente cancela al tercer mes?",
    a: "Como cobras al pago de la segunda factura, esa comisión está consolidada. No te la quitamos.",
  },
  {
    q: "¿Cómo me apunto?",
    a: "Rellena el formulario. Te respondemos en 48h. Si encajas, te mandamos el acuerdo y empiezas.",
  },
  {
    q: "¿Cómo funciona el retroactivo del 20%?",
    a: "Imagina que en enero cierras tu primer cliente: cobras 750 €. En febrero, el segundo: otros 750 €. En marzo cierras el tercero del trimestre — ahí los tres pasan al 20%. Cobras los 1.000 € del tercero más el delta de los dos anteriores (250 € × 2 = 500 €) en el mismo pago. Total del trimestre: 3.000 € en lugar de 2.250 €. El trimestre se cuenta natural: enero-marzo, abril-junio, julio-septiembre, octubre-diciembre.",
  },
];

function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 xl:px-28">
      <Eyebrow>Partners</Eyebrow>
      <h1 className="mt-10 max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
        Conoces a alguien que necesita un CMO.
        Nos lo presentas. Cobras. Fin.
      </h1>
      <div className="mt-16 mb-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg leading-relaxed md:text-xl">
          <p>
            Sin pipeline, sin reuniones, sin seguimientos. Tú haces la intro, nosotros hacemos el
            resto. Si firma, te llevas un <span className="font-serif">15% del primer pago</span>. Si
            traes 3 en un trimestre, los 3 van al 20%.
          </p>
          <div>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover"
            >
              Quiero entrar
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Por qué existe esto</Eyebrow>
            <h3 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
              No queremos vendedores.
              <span className="block text-muted-ink">Queremos a gente con contactos.</span>
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed md:text-xl">
            <p>
              Tienes una agenda llena de fundadores, CEOs y directores que en algún momento te van a
              soltar la frase: <span className="font-serif">“necesito a alguien que se ocupe del
              marketing en serio”</span>.
            </p>
            <p>
              Hasta hoy esa frase no te servía para nada. A partir de hoy, sí.
            </p>
            <p>
              Si nos los presentas y firman con nosotros, cobras el 15% de su primera mensualidad.
              Si traes 3 en el mismo trimestre, los 3 suben al 20%. Sin más letra pequeña.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>Cómo funciona</Eyebrow>
        <h3 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          Tres pasos. Nada más.
        </h3>
        <ol className="mt-20">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="grid gap-6 border-t border-ink/15 py-10 last:border-b md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <span className="font-serif text-4xl text-muted-ink">{s.n}</span>
                <h3 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{s.title}</h3>
              </div>
              <p className="md:col-span-8 md:col-start-5 text-lg leading-relaxed md:text-xl">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Money() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <Eyebrow>
          <span className="text-paper/60">Cuánto se gana</span>
        </Eyebrow>
        <h3 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          Las cuentas, claras.
        </h3>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-serif text-5xl md:text-6xl">5.000 €<span className="text-paper/50 text-2xl">/mes</span></p>
            <p className="text-paper/70">Ticket medio de un cliente YAMATO.</p>
          </div>
          <div className="space-y-3">
            <p className="font-serif text-5xl md:text-6xl">750 €</p>
            <p className="text-paper/70">Lo que te llevas por cada cliente que firme. 15% de la primera mensualidad.</p>
          </div>
          <div className="space-y-3">
            <p className="font-serif text-5xl md:text-6xl">1.000 €</p>
            <p className="text-paper/70">Por cliente cuando traes 3 o más en el mismo trimestre. Y los anteriores también suben al 20%.</p>
          </div>
        </div>
        <p className="mt-20 max-w-3xl text-lg leading-relaxed text-paper/80 md:text-xl">
          No hay comisiones recurrentes, no hay residuales, no hay esquemas multinivel.
          <span className="font-serif"> Una intro, un cobro. Limpio.</span>
        </p>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>Quién sí y quién no</Eyebrow>
        <h3 className="mt-6 max-w-4xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
          Esto no es para todo el mundo.
        </h3>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl">Sí encajas si:</p>
            <ul className="mt-6 space-y-5">
              {[
                "Tienes red en startups, scale-ups o empresas con producto validado.",
                "Sabes detectar cuándo a alguien le falta dirección de marketing (y no lo va a admitir hasta que se lo digas).",
                "Te apetece monetizar contactos que ya tienes, sin convertirte en comercial.",
              ].map((t) => (
                <li key={t} className="flex gap-4 text-lg leading-relaxed md:text-xl">
                  <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-ink" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-2xl text-muted-ink">No encajas si:</p>
            <ul className="mt-6 space-y-5">
              {[
                "Quieres pasarnos 50 emails fríos a ver cuál pica.",
                "Estás buscando ingresos pasivos a base de spam en LinkedIn.",
                "Vas a presentarnos a tu cuñado que tiene una pizzería.",
              ].map((t) => (
                <li key={t} className="flex gap-4 text-lg leading-relaxed text-muted-ink md:text-xl">
                  <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-current" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-16 max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2]">
          Si te ofende lo de arriba, este programa no es para ti. Y nuestros clientes tampoco.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 xl:px-28 py-28">
        <Eyebrow>FAQ</Eyebrow>
        <h3 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          Lo que vas a preguntar.
        </h3>
        <dl className="mt-16">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="grid gap-4 border-t border-ink/15 py-8 last:border-b md:grid-cols-12"
            >
              <dt className="md:col-span-5 font-serif text-xl leading-tight md:text-2xl">
                {item.q}
              </dt>
              <dd className="md:col-span-7 text-lg leading-relaxed text-muted-ink md:text-xl">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <Eyebrow>¿Tienes a alguien en mente ahora mismo?</Eyebrow>
        <h3 className="mt-8 max-w-5xl font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-tight">
          Pues no esperes. Cuanto antes registres la intro,{" "}
          antes empieza a contar el reloj.
        </h3>
        <div className="mt-12">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover"
          >
            Quiero entrar
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <div className="mt-16 md:mt-24" />
      <Hero />
      <Why />
      <How />
      <Money />
      <Fit />
      <FaqSection />
      <Closing />
      <Footer />
    </main>
  );
}
