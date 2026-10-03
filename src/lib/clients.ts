export interface DirectionCase {
  name: string;
  context: string;
  challenge: string;
  decision: string;
  /** Solo resultados publicados. Si no hay, se deja vacío y no se pinta. */
  result?: string;
}

export interface OtherProject {
  name: string;
  line: string;
}

export const DIRECTION_CASES: DirectionCase[] = [
  {
    name: "APODEMIA",
    context: "Marca española de joyería y lifestyle.",
    challenge: "Dirigir su marketing mientras se expande a nuevos mercados.",
    decision:
      "Entramos a dirigir su marketing de punta a punta: estrategia, Paid Media, SEO, CRM y desarrollo web.",
    result: "+34% de GMV en 2025, con el objetivo puesto en duplicarlo en 2026.",
  },
  {
    name: "LOEWE",
    context: "Casa española de lujo.",
    challenge: "Entrar en nuevos mercados.",
    decision: "Les ayudamos con la estrategia Go-to-Market de esos nuevos mercados.",
  },
  {
    name: "Cegid · Contasimple",
    context: "Grupo europeo de software de gestión en la nube.",
    challenge: "Abrir nuevos canales para Contasimple y posicionarlo como SaaS de referencia en Verifactu.",
    decision: "Diagnóstico a fondo, detección de oportunidades de crecimiento y estrategia de nuevos canales.",
    result: "Del top 10 al top 3 en clientes entre los SaaS de Verifactu, facturación y finanzas.",
  },
  {
    name: "1forAll",
    context: "Plataforma de IA todo-en-uno para generar voz, imagen y vídeo (antes Voice-Gen.ai).",
    challenge: "Hacer crecer el ARR y pasar de Voicegen a 1forAll.",
    decision:
      "Dirigimos su estrategia de marketing y comunicación, cambiamos el naming y las funcionalidades de la app, pilotamos la transición de marca y montamos su CRM.",
    result: "De unos pocos euros de MRR a más de 20.000 € al mes.",
  },
  {
    name: "Kincode",
    context: "Plataforma SaaS que mide y optimiza la cultura organizacional con IA.",
    challenge: "Vender mejor en B2B.",
    decision:
      "Hicimos de equipo de marketing estratégico: cambiamos su comunicación y su wording, reestructuramos su web bilingüe, definimos propuesta de valor e ICP, construimos su thought leadership y ordenamos la operación con RACI y project tracking.",
  },
  {
    name: "Beedigital",
    context: "Marketing digital para pymes y autónomos (la antigua Páginas Amarillas).",
    challenge: "Lanzar un nuevo programa.",
    decision:
      "Diseñamos y validamos el lanzamiento: propuesta de valor, segmentos early adopter, funnel de validación, KPIs y quick wins, con una campaña piloto para medir CPL.",
    result: "Primera versión de la web de Beesible.",
  },
];

// TODO(Ignacio): IEB, Cedrion y Rem83 no estaban en ninguno de los dos grupos del brief. Van aquí, primero; decidir si alguno sube a casos de dirección.
export const OTHER_PROJECTS: OtherProject[] = [
  { name: "IEB", line: "Auditoría completa de su marketing y su comunicación global." },
  { name: "Cedrion", line: "Narrativa para su levantamiento de capital: investor deck, one-pager y pitch." },
  { name: "Rem83", line: "Consultoría estratégica y de marca para un producto de hardware técnico." },
  { name: "Bindu Events", line: "Auditoría y rediseño integral de su web: diseño, contenidos, UX e implementación." },
  { name: "Fundación Airamana", line: "Web corporativa y comunicación de Airamana ESCUCHA, su proyecto de salud mental joven." },
  { name: "Clicollege", line: "Campañas digitales en sus dos picos: captación de verano y arranque de curso." },
  { name: "Grupo Alquila", line: "Paid Media, SEO, landings y un dashboard en vivo para dirección." },
  { name: "SomosNLP", line: "Logo corporativo y comunicación de su evento, de principio a fin." },
  { name: "Vivas Psicología", line: "Logo e identidad corporativa desde cero." },
];
