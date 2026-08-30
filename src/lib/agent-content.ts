import { getAllPosts, getPost } from "@/lib/blog";

export const SITE_URL = "https://yamato.digital";

export interface AgentDocument {
  markdown: string;
  markdownPath: string;
}

const PAGES: Record<string, { title: string; description: string; body: string }> = {
  "/": {
    title: "YAMATO — Consultora de marketing independiente",
    description:
      "Consultora de marketing independiente (y sincera): dirección de marketing externa y Fractional CMO desde Madrid.",
    body: `# YAMATO — Consultora de marketing independiente

> Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.

Hola. Somos una consultora de marketing independiente (y sincera).

La cabeza de un CMO con más de una década dirigiendo, más las manos de un equipo senior. Dentro de tu empresa, las horas que necesites. Ni un freelance que hace campañas sueltas, ni un consultor que suelta el informe y desaparece.

No somos una agencia. Quien piensa tu estrategia es quien la firma, y se sienta en tu comité de dirección.

Trabajamos como *Growth Partner*: solo ganamos cuando tú ganas.

## Servicios

- Estrategia y dirección
- Mentoría y gestión de equipos
- Go-to-Market
- IA aplicada al marketing
- Ejecución

Más detalle: [Servicios](${SITE_URL}/servicios/index.md) · [Fractional CMO](${SITE_URL}/fractional-cmo/index.md)

## Cómo lo hacemos

1. **Llamada** — 30 minutos. Si en ese tiempo no te convencemos, YAMATO no es para ti.
2. **Radiografía (gratis)** — Analizamos tu marketing y te presentamos qué cambiaríamos y por qué.
3. **Arrancamos** — Si aceptas, estamos en tu proyecto en 1 semana.

## Encajarás si

- Quieres crecer y nadie piensa tu marketing a nivel estratégico.
- Estás harto de agencias que prometen la luna y entregan un PowerPoint.
- Prefieres honestidad brutal a informes bonitos que no dicen nada.
- Tienes equipo y presupuesto, pero los proyectos importantes nunca tienen dueño.
- Quieres ganar dinero.

## No encajarás si

- Buscas marketing barato.
- Necesitas una agencia para poner en marcha las campañas de Paid.
- Quieres resultados mágicos en 2 semanas.
- Te ofende que te digan lo que no funciona.
- Regateas.

## Contacto

- [Reservar consulta](https://tally.so/r/rjgEpL)
- Email: [hola@yamato.digital](mailto:hola@yamato.digital)
- [LinkedIn](https://www.linkedin.com/company/yamatodigital/)
`,
  },
  "/servicios": {
    title: "Servicios — YAMATO",
    description: "Cinco cosas, no cuarenta. Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución.",
    body: `# Servicios — YAMATO

Cinco cosas, *no cuarenta.*

No hacemos de todo. Hacemos lo que mueve el negocio: estrategia, equipos, lanzamientos, IA y ejecución.

Si necesitas a alguien que te haga cuarenta cosas regulares, no somos nosotros. Si quieres a alguien que haga cinco bien y te diga la verdad por el camino, sigue leyendo.

Si lo único que necesitas es Paid Media, te pondremos en contacto con partners que lo hacen mejor que nosotros.

¿Buscas quien dirija todo esto sin contratar a un CMO en plantilla? [Así trabajamos como Fractional CMO](${SITE_URL}/fractional-cmo/index.md).

## Qué hacemos exactamente

**Estrategia y dirección.** Nadie piensa tu marketing más allá del mes que viene. Entramos como tu director: auditamos, fijamos estrategia, marcamos KPIs y lideramos la operación.

**Mentoría y gestión de equipos.** Tienes gente que ejecuta mucho y avanza poco. No despedimos a nadie: les damos dirección, foco y un backlog priorizado por negocio.

**Go-to-Market.** Hay fecha de lanzamiento y nadie ha pensado el cómo. Diseñamos y ejecutamos la entrada al mercado. Con plan y con plazos.

**IA aplicada al marketing.** La metemos donde ahorra dinero de verdad: automatizaciones, agentes, análisis, reporting. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.

**Ejecución.** SEO, GEO, CRM, web, automatización. Lo ejecutamos nosotros — y solo si la estrategia la hemos marcado nosotros. Google Ads y Social Ads: los dirigimos y elegimos a quién los toca. Un CMO no mueve pujas: dirige al que las mueve.
`,
  },
  "/fractional-cmo": {
    title: "Fractional CMO en España — Dirección de marketing externa | YAMATO",
    description:
      "Qué es un Fractional CMO, cuánto cuesta en España y cuándo compensa frente a un CMO en plantilla o una agencia.",
    body: `# Fractional CMO. Dirección de marketing sin contratar a un CMO.

Un Fractional CMO es un director de marketing externo que trabaja para tu empresa unos días al mes, con responsabilidad real sobre la estrategia, el equipo y los números. Ni un consultor que entrega un informe, ni una agencia que ejecuta lo que le mandas: alguien que dirige.

## El problema

Tienes marketing. No tienes dirección de marketing.

Hay campañas, hay redes, hay una agencia y puede que hasta un junior espabilado. Lo que no hay es nadie decidiendo qué se hace, qué no se hace y por qué.

Contratar un CMO senior en plantilla cuesta entre 80.000 y 140.000 € al año, tarda meses en cerrarse y es una apuesta cara si no aciertas.

## Qué hace un Fractional CMO

- **Diagnóstico y estrategia.** Auditamos lo que hay, tiramos lo que no aporta y fijamos un plan con objetivos y plazos.
- **KPIs y reporting.** Un cuadro de mando que entiende el comité de dirección, no un informe de impresiones.
- **Dirección de equipo.** Foco, prioridades y backlog ordenado por impacto en negocio.
- **Gestión de agencias y proveedores.** Elegimos, briefamos y exigimos.
- **Visibilidad en Google y en IA.** Que te encuentren en buscadores, ChatGPT, Perplexity o lo que venga.

## Comparativa

| | Fractional CMO | CMO en plantilla | Agencia |
|---|---|---|---|
| Coste anual | Fracción del salario | 80–140k € + variable | Fee mensual por ejecución |
| Decide la estrategia | Sí | Sí | No |
| Dirige a tu equipo | Sí | Sí | No |
| Tiempo de arranque | Días | 3–6 meses | Semanas |
| Compromiso | El que necesites | Indefinido | Permanencia habitual |

## Preguntas frecuentes

**¿Qué es un Fractional CMO?** Un director de marketing externo a tiempo parcial, con responsabilidad real sobre estrategia, equipo y resultados. No es un consultor que entrega un PDF: dirige.

**¿Cuánto cuesta en España?** Un CMO en plantilla cuesta 80.000–140.000 € al año más variable. Un Fractional CMO se contrata por días al mes, normalmente entre el 20% y el 40% de ese coste, sin indemnizaciones ni proceso de selección.

**¿Cuándo tiene sentido?** Si facturas lo suficiente para invertir en marketing pero no para pagar un CMO senior, si tienes equipo que ejecuta sin dirección, o si vas a lanzar producto o mercado. No tiene sentido si solo necesitas manos para campañas: eso es una agencia.

**¿En qué se diferencia de una agencia?** Una agencia ejecuta lo que le pides. Un Fractional CMO decide qué hay que pedir, a quién y por qué — y responde del número.

**¿Cuánto dura?** Lo normal son 6–12 meses. Si a los 12 meses seguimos siendo imprescindibles, algo hemos hecho mal.

[Hablemos](${SITE_URL}/contacto/index.md) · [Ver servicios](${SITE_URL}/servicios/index.md)
`,
  },
  "/quienes-somos": {
    title: "Quiénes somos — YAMATO",
    description: "Un CMO que firma lo que piensa y un equipo senior que no tienes que fichar.",
    body: `# Quiénes somos — YAMATO

Un CMO que firma lo que piensa. Y un equipo que no tienes que fichar.

YAMATO no nació de una pasión por el marketing. Nació de un cabreo: empresas con buen producto pagando a agencias que vendían humo. Montamos lo contrario.

Somos una consultora de marketing independiente. Entramos como un director de marketing —estrategia, KPIs, operación— sin que tengas que ficharlo ni pagarle 100.000 € al año.

## Quién dirige esto

**Ignacio Goñi**, fundador. Ingeniero industrial, expansión global de LOEWE, más de quince años dirigiendo marketing *dentro* de empresas. YAMATO es bootstrapped: sin inversores a los que rendir cuentas, sin comercial cobrando comisión por venderte horas que no necesitas.

## El equipo

Red de más de 50 colaboradores senior (SEO, CRM, contenido, datos, desarrollo, IA, redes) que entran según lo que el proyecto necesita. No pagas una estructura de 50 personas. Te toca el especialista adecuado.

## Advisor

**Elena González-Blanco.** Head of AI for Digital Natives en Microsoft EMEA. Cofundadora de Clibrain, PhD por Harvard. Nos ayuda a integrar IA donde aporta negocio, no donde hace ruido.

## Código

1. Te decimos las tres cosas: lo que haces bien, lo que no, y lo que no haces.
2. Cinco cosas, no cuarenta.
3. Independientes de verdad: no cobramos un porcentaje de tu inversión publicitaria.
4. Quien piensa, firma.
5. La IA es para lo aburrido.
6. Solo ejecutamos lo que hemos marcado.
7. Sin permanencias.
8. Esto va de ganar dinero.
`,
  },
  "/clientes": {
    title: "Clientes — YAMATO",
    description: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
    body: `# Clientes — YAMATO

Algunos de ellos.

- **APODEMIA** — Marca española de joyería y lifestyle. Marketing de punta a punta: estrategia, Paid Media, SEO, CRM y web. +30% de GMV en 2025.
- **Cegid** — Software de gestión en la nube. Diagnóstico y estrategia de canales para Contasimple, con foco en Verifactu.
- **IEB** — Escuela de finanzas. Auditoría del marketing y la comunicación global.
- **Beedigital** — Lanzamiento de un nuevo programa: propuesta de valor, early adopters, funnel, KPIs y campaña piloto.
- **Fundación Airamana** — Web corporativa y comunicación de Airamana ESCUCHA.
- **Bindu Events** — Rediseño integral de web: diseño, contenidos, UX e implementación.
- **1forAll** — Estrategia de marketing, transición de marca desde Voicegen y CRM.
- **Kincode** — Web bilingüe, propuesta de valor, thought leadership y operación (RACI).
- **Cedrion** — Narrative de fundraising: investor deck, one-pager y pitch.
- **Clicollege** — Campañas digitales en los picos de captación (verano y curso escolar).
- **SomosNLP** — Logo y comunicación del evento SomosNLP.
- **Rem83** — Consultoría estratégica y de comunicación de marca para hardware técnico.
- **Vivas Psicología** — Logo e identidad corporativa.
- **Grupo Alquila** — Paid Media, SEO, landings y dashboard de rendimiento.

¿No ves tu nombre? [Llámanos](${SITE_URL}/contacto/index.md).
`,
  },
  "/partners": {
    title: "Partners — YAMATO",
    description: "Presenta clientes y cobra el 15% de la primera mensualidad. Sin pipeline, sin reuniones.",
    body: `# Partners — YAMATO

Conoces a alguien que necesita un CMO. Nos lo presentas. Cobras. Fin.

Sin pipeline, sin reuniones, sin seguimientos. Tú haces la intro, nosotros el resto. Si firma, te llevas un **15% del primer pago**. Si traes 3 en un trimestre, los 3 van al 20%.

## Cómo funciona

1. **Nos presentas a alguien.** Un email, una llamada, una cena. Una intro real, no un nombre suelto.
2. **Hacemos nuestro trabajo.** Discovery, propuesta, negociación, cierre.
3. **Si firma, cobras.** 15% de la primera mensualidad, al cobro de la segunda factura. 3 o más en un trimestre: todos al 20%.

## Preguntas frecuentes (resumen)

- Cuenta una intro real (email a tres bandas, llamada conjunta, presentación). No un LinkedIn suelto.
- Plazo de atribución: 3 meses desde la intro.
- Primero en registrar, gana.
- Solo la primera mensualidad: no es afiliación recurrente.
- [Apúntate](https://tally.so/r/Pd8dJP).
`,
  },
  "/contacto": {
    title: "Contacto — YAMATO",
    description: "Hablemos. Email, LinkedIn y newsletter.",
    body: `# Contacto — YAMATO

Hablemos.

- [Reservar consulta](https://tally.so/r/rjgEpL)
- Email: [hola@yamato.digital](mailto:hola@yamato.digital)
- [LinkedIn](https://www.linkedin.com/company/yamatodigital/)
- [Newsletter](https://pulsodiario.igonigonzalez.com/)
`,
  },
};

function blogIndexMarkdown(): string {
  const posts = getAllPosts();
  const items = posts
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}/index.md) (${p.date}) — ${p.excerpt}`)
    .join("\n");
  return `# Blog — YAMATO

Ideas, opiniones y notas sobre marketing, dirección, IA aplicada y ejecución. Publicado semanalmente.

${items}
`;
}

function blogPostMarkdown(slug: string): string | null {
  const post = getPost(slug);
  if (!post) return null;
  return `# ${post.title}

${post.date}${post.excerpt ? `\n\n${post.excerpt}` : ""}

${post.content.trim()}
`;
}

/** Canonical page path: "/servicios", "/blog/slug", or "/". */
export function pagePathFromRequestPath(pathname: string): string | null {
  let path = pathname;
  if (path.endsWith("/index.md")) path = path.slice(0, -"/index.md".length);
  else if (path.endsWith(".md")) path = path.slice(0, -".md".length);
  if (path === "" || path === "/") return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}

export function markdownPathForPage(pagePath: string): string {
  return pagePath === "/" ? "/index.md" : `${pagePath}/index.md`;
}

export function getPageDocument(pagePath: string): AgentDocument | null {
  const page = PAGES[pagePath];
  if (page) {
    return { markdown: page.body, markdownPath: markdownPathForPage(pagePath) };
  }
  if (pagePath === "/blog") {
    return { markdown: blogIndexMarkdown(), markdownPath: "/blog/index.md" };
  }
  if (pagePath.startsWith("/blog/")) {
    const slug = pagePath.slice("/blog/".length);
    if (!slug || slug.includes("/")) return null;
    const markdown = blogPostMarkdown(slug);
    if (!markdown) return null;
    return { markdown, markdownPath: `/blog/${slug}/index.md` };
  }
  return null;
}

export function buildLlmsTxt(): string {
  const pages = [
    ["Inicio", "/", PAGES["/"].description],
    ["Servicios", "/servicios", PAGES["/servicios"].description],
    ["Fractional CMO", "/fractional-cmo", PAGES["/fractional-cmo"].description],
    ["Quiénes somos", "/quienes-somos", PAGES["/quienes-somos"].description],
    ["Clientes", "/clientes", PAGES["/clientes"].description],
    ["Partners", "/partners", PAGES["/partners"].description],
    ["Blog", "/blog", "Notas sobre marketing, dirección, IA aplicada y ejecución."],
    ["Contacto", "/contacto", PAGES["/contacto"].description],
  ] as const;

  const pageLines = pages
    .map(([name, path, desc]) => `- [${name}](${SITE_URL}${markdownPathForPage(path)}): ${desc}`)
    .join("\n");

  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}/index.md): ${p.excerpt}`)
    .join("\n");

  return `# YAMATO

> YAMATO es una consultora de marketing independiente que actúa como dirección de marketing (CMO) externa para empresas con producto validado: estrategia, mentoría de equipos, Go-to-Market, IA aplicada y ejecución.

Si eres un agente o un LLM, pide las páginas en Markdown: añade \`/index.md\` a la URL o envía \`Accept: text/markdown\`. Índice ampliado: ${SITE_URL}/llms-full.txt

## Pages

${pageLines}

## Blog

${posts}
`;
}

export function buildLlmsFullTxt(): string {
  const sections = [
    PAGES["/"].body,
    PAGES["/servicios"].body,
    PAGES["/fractional-cmo"].body,
    PAGES["/quienes-somos"].body,
    PAGES["/clientes"].body,
    PAGES["/partners"].body,
    PAGES["/contacto"].body,
    blogIndexMarkdown(),
  ];
  for (const post of getAllPosts()) {
    const doc = blogPostMarkdown(post.slug);
    if (doc) sections.push(doc);
  }
  return `${buildLlmsTxt().trim()}

---

${sections.join("\n\n---\n\n")}
`;
}
