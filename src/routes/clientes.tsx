import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — YAMATO" },
      {
        name: "description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:title", content: "Clientes — YAMATO" },
      {
        property: "og:description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:url", content: "https://yamato.digital/clientes" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/clientes" }],
  }),
  component: ClientesPage,
});

const clients = [
  {
    name: "APODEMIA",
    description: "Marca española de joyería y lifestyle. Entramos a dirigir su marketing de punta a punta: estrategia, Paid Media, SEO, CRM y desarrollo web, además de acompañar su expansión a nuevos mercados. +34% de GMV en 2025, con el objetivo puesto en duplicarlo en 2026.",
  },
  {
    name: "Cegid",
    description: "Líder europeo de software de gestión en la nube. Trabajamos con su producto Contasimple: diagnóstico a fondo, detección de oportunidades de crecimiento y estrategia para abrir nuevos canales, con foco en posicionarlo como SaaS de referencia en Verifactu.",
  },
  {
    name: "IEB",
    description: "Una de las escuelas de referencia en finanzas y mercados en España, con décadas formando al sector. Hicimos una auditoría completa del estado de su marketing y su comunicación global: qué funciona, qué no y qué falta por hacer.",
  },
  {
    name: "Beedigital",
    description: "Marketing digital para pymes y autónomos (la antigua Páginas Amarillas). Diseñamos y validamos el lanzamiento de un nuevo programa: propuesta de valor, segmentos early adopter, funnel de validación, KPIs y quick wins, incluida una campaña piloto para medir CPL.",
  },
  {
    name: "Fundación Airamana",
    description: "Fundación sin ánimo de lucro de ámbito estatal. Diseñamos, desarrollamos y mantenemos su web corporativa, y llevamos la estrategia integral de comunicación de \"Airamana ESCUCHA\", su proyecto de salud mental para gente joven.",
  },
  {
    name: "Bindu Events",
    description: "Agencia de congresos y eventos corporativos de alto impacto, con base en Málaga. Auditamos su web como canal de marca y conversión, y ejecutamos un rediseño integral: diseño gráfico, contenidos, UX e implementación técnica completa.",
  },
  {
    name: "1forAll",
    description: "Plataforma de IA todo-en-uno para generar voz, imagen y vídeo (antes Voice-Gen.ai). Dirigimos su estrategia de marketing y comunicación para hacer crecer el ARR, pilotamos la transición de marca de Voicegen a 1forAll y montamos su CRM.",
  },
  {
    name: "Kincode",
    description: "Plataforma SaaS que mide y optimiza la cultura organizacional con IA. Hicimos de equipo de marketing estratégico: reestructuramos su web bilingüe y su copy, definimos propuesta de valor e ICP, construimos su thought leadership y ordenamos la operación con RACI y project tracking.",
  },
  {
    name: "Cedrion",
    description: "Deep-tech de refrigeración por plasma frío para aeronáutica, espacio y movilidad eléctrica. Les acompañamos en el levantamiento de capital: tradujimos una tecnología compleja en una narrativa clara y preparamos investor deck, one-pager y el pitch de los fundadores.",
  },
  {
    name: "Clicollege",
    description: "Plataforma de educación cuyo negocio se juega en dos picos muy marcados del calendario. Llevamos sus campañas digitales justo ahí: la captación de verano y el arranque del curso escolar, donde se concentra la demanda y la competencia aprieta.",
  },
  {
    name: "SomosNLP",
    description: "Comunidad hispanohablante de referencia en IA y procesamiento del lenguaje natural, con un evento propio que reúne a investigadores y profesionales del sector. Diseñamos su logo corporativo y gestionamos toda la comunicación de su evento SomosNLP, de principio a fin.",
  },
  {
    name: "Rem83",
    description: "Empresa de hardware con un producto técnico que el mercado no entiende a la primera. Entramos con consultoría estratégica y de comunicación de marca para ordenar el mensaje y traducir la tecnología en una propuesta clara.",
  },
  {
    name: "Vivas Psicología",
    description: "Consulta de psicología que trabaja la marca personal del terapeuta como vía de confianza con el paciente. Diseñamos su logo y su identidad corporativa desde cero: la base visual sobre la que apoyar todo lo demás.",
  },
  {
    name: "Grupo Alquila",
    description: "Inmobiliaria de alquiler garantizado en Madrid. Su partner de Paid Media y captación digital: reconstruimos campañas y segmentación, mejoramos SEO y landings para convertir, y montamos un dashboard en vivo para que dirección viera el rendimiento de cada euro en tiempo real.",
  },
];

function ClientesPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
            Clientes
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-muted-ink md:text-xl">
            Algunos de ellos.
          </p>
        </div>

        <section className="mt-16 md:mt-24">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
            {clients.map((client) => (
              <div key={client.name}>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
                  {client.name}
                </h2>

                <p className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              ¿No ves tu nombre?
            </h2>

            <p className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
              Muy sencillo, llámanos y cambiemos eso.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
