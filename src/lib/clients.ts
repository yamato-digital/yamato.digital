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

// TODO(Ignacio): LOEWE es cliente pero no tiene caso en /clientes. Pasar reto, decisión y resultado (o una línea) para añadirlo.
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
    name: "Cegid · Contasimple",
    context: "Grupo europeo de software de gestión en la nube.",
    challenge: "Abrir nuevos canales para Contasimple y posicionarlo como SaaS de referencia en Verifactu.",
    decision: "Diagnóstico a fondo, detección de oportunidades de crecimiento y estrategia de nuevos canales.",
    // TODO(Ignacio): resultado publicable de Cegid/Contasimple, si lo hay.
  },
  {
    name: "1forAll",
    context: "Plataforma de IA todo-en-uno para generar voz, imagen y vídeo (antes Voice-Gen.ai).",
    challenge: "Hacer crecer el ARR y pasar de Voicegen a 1forAll.",
    decision:
      "Dirigimos su estrategia de marketing y comunicación, pilotamos la transición de marca y montamos su CRM.",
    // TODO(Ignacio): resultado publicable de 1forAll (ARR u otro), si lo hay.
  },
  {
    name: "Kincode",
    context: "Plataforma SaaS que mide y optimiza la cultura organizacional con IA.",
    challenge: "Necesitaba un equipo de marketing estratégico.",
    decision:
      "Hicimos de ese equipo: reestructuramos su web bilingüe y su copy, definimos propuesta de valor e ICP, construimos su thought leadership y ordenamos la operación con RACI y project tracking.",
    // TODO(Ignacio): resultado publicable de Kincode, si lo hay.
  },
  {
    name: "Beedigital",
    context: "Marketing digital para pymes y autónomos (la antigua Páginas Amarillas).",
    challenge: "Lanzar un nuevo programa.",
    decision:
      "Diseñamos y validamos el lanzamiento: propuesta de valor, segmentos early adopter, funnel de validación, KPIs y quick wins, con una campaña piloto para medir CPL.",
    // TODO(Ignacio): resultado publicable del piloto de Beedigital (CPL u otro), si lo hay.
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
