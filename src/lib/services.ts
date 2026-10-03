export const EXECUTION_MODEL =
  "Pensamos nosotros y respondemos nosotros. Ejecuta quien mejor lo haga: tu equipo, nuestros especialistas o partners que elegimos y dirigimos.";

/*
 * TODO(Ignacio): ¿YAMATO ejecuta paid directamente o solo lo dirige?
 * Mientras no se decida, la web usa EXECUTION_MODEL, que no se moja sobre paid. Afecta a tres sitios:
 * la palanca Ejecución (abajo), el principio 06 de /quienes-somos y la línea de paid de "No encajarás si…"
 * en la home.
 *
 * Variante A, ejecutamos paid:
 * - Ejecución: "SEO, GEO, CRM, web, automatización y paid. Lo ejecutamos sobre la estrategia que hemos marcado."
 * - Principio 06: "Ejecutamos Google Ads, SEO, CRM y web, siempre sobre la estrategia que hemos marcado."
 * - No encajarás si: "Quieres campañas de Paid sin una estrategia detrás."
 *
 * Variante B, dirigimos paid:
 * - Ejecución: "SEO, GEO, CRM, web y automatización los ejecutamos. El paid lo dirigimos: elegimos al partner,
 *   fijamos objetivos y respondemos del resultado."
 * - Principio 06: "Ejecutamos SEO, CRM y web. El paid lo lleva un partner que elegimos y dirigimos."
 * - No encajarás si: "Solo necesitas a alguien que lance campañas de Paid."
 */

export interface ServiceMode {
  id: string;
  name: string;
  /** Titular: la situación del cliente. */
  problem: string;
  body: string;
  /** Cliente real que ilustra la modalidad. */
  example: string;
}

export const SERVICE_MODES: ServiceMode[] = [
  {
    id: "fractional-cmo",
    name: "Fractional CMO",
    problem: "Tienes equipo o proveedores y te falta dirección.",
    body: "Un responsable senior que prioriza, lidera y mide. Se sienta en tu comité y responde de los números.",
    example: "1forAll. Dirigimos su estrategia de marketing y comunicación, y su cambio de marca.",
  },
  {
    id: "fractional-cmo-con-equipo",
    name: "Fractional CMO con equipo",
    problem: "Necesitas dirección y manos.",
    body: "Tu CMO y los especialistas que pide el plan, con el alcance definido desde el primer día.",
    example: "Apodemia. Estrategia, paid, SEO, CRM y web, de punta a punta.",
  },
  {
    id: "proyecto-estrategico",
    name: "Proyecto estratégico",
    problem: "Ya tienes liderazgo y un reto concreto.",
    body: "Un lanzamiento, un mercado nuevo, una unidad de negocio sin foco. Entregables, plazo y cierre.",
    example: "Contasimple (Cegid). Diagnóstico y estrategia para abrir canales nuevos y posicionarlo en Verifactu.",
  },
];

/** Ancla de la tarjeta del proyecto estratégico en /servicios; la usa la puerta B de la home. */
export const STRATEGIC_PROJECT_ANCHOR = "proyecto-estrategico";

export const SERVICES_INTRO = "Sea cual sea la modalidad, tu responsable decide qué palancas activar. Y quién las ejecuta.";

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
    body: "Tu equipo se queda. Le damos dirección, foco y un backlog priorizado por negocio.",
    moves: "el resultado que saca tu equipo con la misma gente",
  },
  {
    problem: "Hay fecha de lanzamiento y nadie ha pensado el cómo.",
    lever: "Go-to-Market",
    serviceName: "Go-to-Market",
    body: "Diseñamos y ejecutamos la entrada al mercado. Con plan y con plazos.",
    moves: "pipeline y primeras ventas",
  },
  {
    problem: "Creces, pero no sabes por qué. Ni cómo repetirlo.",
    lever: "Growth",
    serviceName: "Growth",
    body: "Buscamos la palanca que de verdad hace crecer tu negocio, la probamos rápido y escalamos solo lo que funciona. Experimentos con hipótesis y número, no ocurrencias de lunes por la mañana.",
    moves: "adquisición, conversión y retención",
  },
  {
    problem: "Todo el comité habla de IA y nadie la implanta.",
    lever: "IA aplicada",
    serviceName: "IA aplicada al marketing",
    body: "La metemos donde ahorra dinero de verdad: automatizaciones, agentes, análisis y reporting. La IA no va a acabar con el marketing; va a acabar con el marketing mediocre.",
    moves: "horas y coste operativo",
  },
  {
    problem: "Ejecutamos lo que hemos marcado.",
    lever: "Ejecución",
    serviceName: "Ejecución",
    body: `${EXECUTION_MODEL} SEO, GEO, CRM, web y automatización.`,
    moves: "conversión",
  },
];
