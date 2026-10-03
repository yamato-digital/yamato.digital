export const SERVICES_INTRO = "Primero entra el CMO. Luego decide qué hace falta: tu equipo, el nuestro o nada.";

export interface ServiceLever {
  /** Titular: el problema que resuelve. */
  problem: string;
  /** Etiqueta corta de la palanca. */
  lever: string;
  /** Nombre del servicio en JSON-LD. */
  serviceName: string;
  body: string;
  /** Métrica de negocio que mueve la palanca. Sin valor, no se pinta. */
  moves?: string;
}

export const SERVICE_LEVERS: ServiceLever[] = [
  {
    problem: "Nadie piensa tu marketing más allá del mes que viene.",
    lever: "Estrategia y dirección",
    serviceName: "Estrategia y dirección",
    body: "Entramos como tu director: auditamos, fijamos estrategia, marcamos KPIs y lideramos la operación.",
    moves: "GMV o ARR, según tu modelo",
  },
  {
    problem: "Tu equipo ejecuta mucho y avanza poco.",
    lever: "Mentoría y gestión de equipos",
    serviceName: "Mentoría y gestión de equipos",
    body: "No despedimos a nadie: les damos dirección, foco y un backlog priorizado por negocio.",
    moves: "lo que de verdad mueve tu aguja. Lo definimos contigo, y no siempre es lo que crees",
  },
  {
    problem: "Hay fecha de lanzamiento y nadie ha pensado el cómo.",
    lever: "Go-to-Market",
    serviceName: "Go-to-Market",
    body: "Diseñamos y ejecutamos la entrada al mercado. Con plan y con plazos.",
    moves: "pipeline",
  },
  {
    problem: "Todo el comité habla de IA y nadie la implanta.",
    lever: "IA aplicada",
    serviceName: "IA aplicada al marketing",
    body: "La metemos donde ahorra dinero de verdad: automatizaciones, agentes, análisis, reporting. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.",
    moves: "CAC",
  },
  {
    problem: "Solo ejecutamos lo que hemos marcado.",
    lever: "Ejecución",
    serviceName: "Ejecución",
    body: "SEO, GEO, CRM, web, automatización. Lo ejecutamos nosotros — y solo si la estrategia la hemos marcado nosotros. ¿Google Ads y Social Ads? Los dirigimos y elegimos a quién los toca. Un CMO no mueve pujas: dirige al que las mueve.",
    moves: "conversión",
  },
];
