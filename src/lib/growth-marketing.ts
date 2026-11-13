/*
 * Contenido de /growth-marketing. Lo comparten la página y su versión en Markdown para agentes.
 *
 * Esta página no debe competir con /fractional-cmo en buscadores:
 * - "Fractional CMO" no aparece en el title, el H1 ni la meta description.
 * - En el cuerpo solo se menciona dos veces, las dos enlazando a /fractional-cmo.
 * - Qué es un Fractional CMO, cuánto dura y cómo se compara con una agencia se explica allí, no aquí.
 * - Sin precios.
 */

export const GROWTH_PATH = "/growth-marketing";

export const GROWTH_TITLE = "Growth marketing: un sistema, no un truco | YAMATO";

export const GROWTH_DESCRIPTION =
  "Growth marketing como sistema: hipótesis, experimentos y un número de salida. Se escala lo que funciona y se corta lo que no. Sin growth hacking.";

export const GROWTH_OG_TITLE = "Growth marketing: un sistema, no un truco";

export const GROWTH_OG_DESCRIPTION =
  "Hipótesis, experimentos y un número de salida. Se escala lo que funciona y se corta lo que no. Sin growth hacking.";

export const GROWTH_H1 = "Growth marketing para empresas que crecen sin saber por qué.";

export const GROWTH_SUBTITLE =
  "Buscamos la palanca que de verdad hace crecer tu negocio, la probamos rápido y escalamos solo lo que funciona. Lo que no mueve la aguja, se corta. Y te explicamos por qué.";

export const GROWTH_DEFINITION =
  "El growth marketing es un sistema para hacer crecer un negocio de forma repetible: se formula una hipótesis, se prueba en adquisición, conversión o retención, se mide y se escala solo lo que funciona. No es una lista de tácticas ni un canal concreto.";

export const GROWTH_SYMPTOMS = [
  "Cinco canales a medias y ninguno del que puedas decir «este es».",
  "Una táctica nueva cada dos semanas. Ninguna se convierte en sistema.",
  "Informes de impresiones que el comité no entiende.",
  "Presupuesto que sube cada trimestre sin que nadie sepa qué parte funciona.",
  "Cambio de proveedor cada seis meses. El problema no era el proveedor.",
];

export const GROWTH_CYCLE = [
  { step: "Diagnóstico", body: "Dónde entra el dinero, dónde se pierde y qué se está midiendo mal." },
  { step: "Hipótesis", body: "Ordenadas por impacto en el negocio, no por lo fácil que resulte probarlas." },
  { step: "Experimentos", body: "Cada uno con un número de salida y un plazo. Sin número, es una ocurrencia." },
  { step: "Escalar o cortar", body: "Lo que mueve la aguja, se escala. Lo que no, se corta. Y se explica por qué." },
];

export const GROWTH_HYPOTHESIS_EXAMPLE =
  "Pedimos demasiados datos antes de enseñar el producto. Si reducimos el formulario de demo de nueve campos a tres, las solicitudes suben un 25 % en cuatro semanas sin que baje la calidad del lead.";

export const GROWTH_METRICS = [
  {
    phase: "Adquisición",
    question: "¿Cuánto cuesta traer a un cliente y de dónde vienen los buenos?",
    metrics: "Coste por cliente, calidad del lead por canal",
  },
  {
    phase: "Conversión",
    question: "¿Dónde se caen los que ya han llegado?",
    metrics: "Paso de visita a contacto y de contacto a venta",
  },
  {
    phase: "Retención",
    question: "¿Vuelven? ¿Cuánto vale cada uno?",
    metrics: "Repetición, bajas y valor del cliente en el tiempo",
  },
];

/** Casos de /clientes cuyo resultado se cita en la página. Los nombres deben coincidir con DIRECTION_CASES. */
export const GROWTH_CASE_NAMES = ["APODEMIA", "Contasimple by Shine", "1forAll"];

/** Pregunta cuya respuesta enlaza "Fractional CMO" a /fractional-cmo. */
export const GROWTH_FAQ_WHO_LEADS = "¿Quién lo dirige?";

export const GROWTH_WHO_LEADS =
  "Un director de marketing senior de YAMATO, con nombre y apellido, que se sienta en tu comité. Es el mismo modelo con el que trabajamos como Fractional CMO: growth es una de las palancas que activa.";

export const GROWTH_FAQ = [
  { q: "¿Qué es el growth marketing?", a: GROWTH_DEFINITION },
  {
    q: "¿En qué se diferencia del growth hacking?",
    a: "El growth hacking persigue un atajo: un truco, un canal virgen, un hack de un mes. El growth marketing es un sistema que se puede repetir. Lo primero se agota. Lo segundo se dirige.",
  },
  {
    q: "¿En qué se diferencia de una agencia de growth?",
    a: "Una agencia de growth vende ejecución: horas de campaña y, a menudo, un porcentaje de los medios. Aquí el orden es el contrario: primero se decide qué probar, qué parar y por qué, y solo después se ejecuta. Y no cobramos un porcentaje de lo que inviertes en medios.",
  },
  {
    q: "¿Cuánto tarda en notarse?",
    a: "El primer mes es diagnóstico. Los experimentos empiezan en el segundo. Los primeros resultados medidos llegan en el tercero. Por eso empezamos con tres meses y después seguimos mes a mes. Si alguien te promete crecimiento en dos semanas, cuelga.",
  },
  {
    q: "¿Qué métricas se miran?",
    a: "Depende de dónde se pierda el dinero. En adquisición, coste por cliente y calidad del lead. En conversión, cuántas visitas acaban en venta y dónde se caen. En retención, cuántos clientes repiten y cuánto vale cada uno. Impresiones y seguidores no cuentan.",
  },
  {
    q: "¿En qué canales trabajáis?",
    a: "En los que mueva la palanca. No partimos de un canal: partimos de un número. Puede ser captación de pago, SEO, CRM, la web o la retención. A veces el trabajo es dejar de gastar en tres canales y doblar el que sí funciona.",
  },
  {
    q: "¿Necesito tener equipo?",
    a: "No es obligatorio. Si tienes equipo, lo dirigimos. Si tienes una agencia, la briefamos y le exigimos. Si faltan manos, ejecuta quien mejor lo haga: tu gente, especialistas de YAMATO o partners que elegimos y dirigimos.",
  },
  { q: GROWTH_FAQ_WHO_LEADS, a: GROWTH_WHO_LEADS },
];
