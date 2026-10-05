import { getAllPosts, getPost } from "@/lib/blog";
import { SERVICE_LEVERS, SERVICE_MODES, SERVICES_INTRO } from "@/lib/services";
import { DIRECTION_CASES, OTHER_PROJECTS } from "@/lib/clients";
import { CONTACT_BOOKING_LABEL, CTA_LINKS } from "@/lib/cta";
import { FIRST_90_DAYS } from "@/lib/fractional-cmo";

export const SITE_URL = "https://yamato.digital";

export interface AgentDocument {
  markdown: string;
  markdownPath: string;
}

const PAGES: Record<string, { title: string; description: string; body: string }> = {
  "/": {
    title: "YAMATO | Agencia de Fractional CMO",
    description:
      "Fractional CMO independiente en Madrid. Un director de marketing a tiempo parcial que se sienta en tu comité y responde del número.",
    body: `# Tu Fractional CMO.

> Un director de marketing senior dentro de tu comité. Decide la estrategia, dirige a tu equipo y responde de los números. Las horas que necesites.

La cabeza de un CMO con más de una década dirigiendo, más las manos de un equipo senior. Dentro de tu empresa, las horas que necesites.

Quien piensa tu estrategia es quien la firma, y se sienta en tu comité de dirección.

Nos medimos por lo que mueves en tu negocio.

No cobramos un porcentaje de lo que inviertes en publicidad. Ganamos cuando tú ganas.

## Servicios

### Tres formas de trabajar, según lo que ya tienes.

${SERVICE_MODES.map((m) => `- **${m.name}.** ${m.problem}`).join("\n")}

${SERVICES_INTRO}

**Palancas:** ${SERVICE_LEVERS.map((s) => s.lever).join(" · ")}.

Más detalle: [Servicios](${SITE_URL}/servicios/index.md) · [Fractional CMO](${SITE_URL}/fractional-cmo/index.md)

## Cómo lo hacemos

1. **Llamada** — 30 minutos. Si en ese tiempo no te convencemos, YAMATO no es para ti.
2. **Radiografía (gratis)** — 30 minutos y tres conclusiones por escrito: lo que haces bien, lo que no tanto y lo que todavía no haces. La auditoría con tus datos es la primera fase del trabajo.
3. **Arrancamos** — Si aceptas, estamos en tu proyecto en 1 semana.
4. **Nos vamos** — Cuando sobremos, te lo diremos nosotros. Y te ayudamos a fichar a quien nos sustituya.

## Encajarás si

- Quieres crecer y nadie piensa tu marketing a nivel estratégico.
- Quieres un plan con números y alguien que responda de ellos.
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

- [${CONTACT_BOOKING_LABEL.replace(/\.$/, "")}](${CTA_LINKS.bookingUrl})
- [WhatsApp](${CTA_LINKS.whatsappUrl})
- Email: [hola@yamato.digital](mailto:hola@yamato.digital)
- [LinkedIn](https://www.linkedin.com/company/yamatodigital/)
`,
  },
  "/servicios": {
    title: "Servicios — YAMATO",
    description: "Seis cosas. Bien hechas. Estrategia, mentoría, Go-to-Market, Growth, IA aplicada y ejecución.",
    body: `# Servicios — YAMATO

Tres formas de trabajar. *Seis palancas.*

No hacemos de todo. Hacemos lo que mueve el negocio: estrategia, equipos, lanzamientos, crecimiento, IA y ejecución.

Hacemos seis cosas y las hacemos a fondo. Y te decimos la verdad por el camino.

Si lo único que necesitas es hacer campañas de Paid Media, te ponemos en contacto con nuestros partners.

¿Buscas quien dirija todo esto sin contratar a un CMO en plantilla? [Así trabajamos como Fractional CMO](${SITE_URL}/fractional-cmo/index.md).

## Tres formas de trabajar, según lo que ya tienes.

${SERVICE_MODES.map((m) => `### ${m.problem}\n\n*${m.name}.* ${m.body}`).join("\n\n")}

## Las palancas

${SERVICES_INTRO}

${SERVICE_LEVERS.map(
  (s) => `### ${s.problem}\n\n*${s.lever}.* ${s.body}${s.moves ? `\n\n**Mueve:** ${s.moves}.` : ""}`,
).join("\n\n")}
`,
  },
  "/fractional-cmo": {
    title: "Fractional CMO en España — Dirección de marketing externa | YAMATO",
    description:
      "Qué es un Fractional CMO, cuánto cuesta en España y cuándo compensa frente a un CMO en plantilla o una agencia.",
    body: `# Fractional CMO. Dirección de marketing sin contratar a un CMO.

Un Fractional CMO es un director de marketing externo que trabaja para tu empresa unos días al mes, con responsabilidad real sobre la estrategia, el equipo y los números. Alguien que dirige: decide qué se hace, con quién y por qué, y responde del resultado.

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

Cada CMO lleva dos clientes como máximo. Con más, nadie piensa tu marketing: solo lo atiende.

## Comparativa

| | Fractional CMO | CMO en plantilla | Agencia |
|---|---|---|---|
| Coste anual | Fracción del salario | 80–140k € + variable | Fee mensual por ejecución |
| Decide la estrategia | Sí | Sí | No |
| Dirige a tu equipo | Sí | Sí | No |
| Tiempo de arranque | Días | 3–6 meses | Semanas |
| Compromiso | El que necesites | Indefinido | Permanencia habitual |

## Los primeros 90 días

| Periodo | Qué hacemos | Qué tienes al final |
|---|---|---|
${FIRST_90_DAYS.map((r) => `| ${r.period} | ${r.work} | ${r.outcome} |`).join("\n")}

## Preguntas frecuentes

**¿Qué es un Fractional CMO?** Un director de marketing externo a tiempo parcial, con responsabilidad real sobre estrategia, equipo y resultados. No es un consultor que entrega un PDF: dirige.

**¿Cuánto cuesta en España?** Un CMO en plantilla cuesta 80.000–140.000 € al año más variable. Un Fractional CMO se contrata por días al mes, normalmente entre el 20% y el 40% de ese coste, sin indemnizaciones ni proceso de selección.

**¿Cuándo tiene sentido?** Si facturas lo suficiente para invertir en marketing pero no para pagar un CMO senior, si tienes equipo que ejecuta sin dirección, o si vas a lanzar producto o mercado. Si solo necesitas manos para campañas, lo que te hace falta es ejecución, y te lo decimos en la primera llamada. ¿Y si ya tienes un CMO? [Así entramos sin quitarle la silla](${SITE_URL}/index.md).

**¿Qué hace un Fractional CMO con mis agencias?** Decide qué hay que pedir, a quién y por qué, y las dirige. También a tus proveedores actuales. Y responde del número.

**¿Cuánto dura?** Lo normal son 6–12 meses. Si a los 12 meses seguimos siendo imprescindibles, algo hemos hecho mal.

[Hablemos](${SITE_URL}/contacto/index.md) · [Ver servicios](${SITE_URL}/servicios/index.md)
`,
  },
  "/quienes-somos": {
    title: "Quiénes somos — YAMATO",
    description: "Un CMO que firma lo que piensa y un equipo senior que no tienes que fichar.",
    body: `# Quiénes somos — YAMATO

Un CMO que firma lo que piensa. Y un equipo que no tienes que fichar.

YAMATO no nació de una pasión por el marketing. Nació de un cabreo: empresas con buen producto y nadie dirigiendo su marketing. Montamos lo contrario.

Somos tu Fractional CMO independiente. Entramos como un director de marketing —estrategia, KPIs, operación— sin que tengas que ficharlo ni pagarle 100.000 € al año.

## Quién dirige esto

**Ignacio Goñi**, fundador. Ingeniero mecánico que pasó de diseñar máquinas para fabricar aviones para Airbus y Boeing al marketing. Ha dirigido el marketing global de LOEWE (LVMH) y ha sido CMO de Clibrain y Clidrive. Más de diez años dirigiendo marketing dentro de empresas: lujo, IA, fintech y SaaS. YAMATO es bootstrapped: sin inversores a los que rendir cuentas, sin comercial cobrando comisión por venderte horas que no necesitas.

## El equipo

YAMATO no es solo su fundador. Cada uno responde de lo suyo con nombre y apellido.

**José Luis García Benito**, Business Development Representative. Senior Associate en PwC. Usa su red y sus contactos para identificar clientes potenciales y agendarles la reunión comercial.

Debajo, una red de más de 50 colaboradores senior (SEO, CRM, contenido, datos, desarrollo, IA, redes) que entran según lo que el proyecto necesita. No pagas una estructura de 50 personas. Te toca el especialista adecuado.

## Advisors

**Elena González-Blanco.** Head of AI for Digital Natives en Microsoft EMEA. Cofundadora de Clibrain, PhD por Harvard. Nos ayuda a integrar IA donde aporta negocio, no donde hace ruido.

**Pedro Anós.** Global Marketing Director en LOEWE Perfumes. Dirige el marketing de una marca de lujo en todo el mundo.

**Mario Garrido Torres.** Vice President, Lead Software Engineer en JPMorgan Chase. Antes, ingeniero senior en Clibrain y tech lead en Ninety Nine.

## Código

1. Te decimos las tres cosas: lo que haces bien, lo que no, y lo que no haces.
2. Seis cosas. Bien hechas.
3. Independientes de verdad: nuestros honorarios no dependen de lo que inviertes en medios. Nos medimos por lo que mueves en tu negocio.
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

## Donde dirigimos

${DIRECTION_CASES.map(
  (c) =>
    `### ${c.name}\n\n${c.context}\n\n- **Reto:** ${c.challenge}\n- **Decisión:** ${c.decision}${c.result ? `\n- **Resultado:** ${c.result}` : ""}`,
).join("\n\n")}

## Otros proyectos

${OTHER_PROJECTS.map((p) => `- **${p.name}** — ${p.line}`).join("\n")}

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
    title: "Contacto | Fractional CMO independiente | YAMATO",
    description: "Hablemos. Reserva, WhatsApp, email y LinkedIn.",
    body: `# Contacto — YAMATO

Hablemos. Te responde Ignacio. En la llamada vemos tu situación y te decimos qué haríamos primero.

- [${CONTACT_BOOKING_LABEL.replace(/\.$/, "")}](${CTA_LINKS.bookingUrl})
- [WhatsApp](${CTA_LINKS.whatsappUrl})
- Email: [hola@yamato.digital](mailto:hola@yamato.digital)
- [LinkedIn](https://www.linkedin.com/company/yamatodigital/)
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

> YAMATO es un Fractional CMO independiente en Madrid: un director de marketing a tiempo parcial para empresas con producto validado. Desde ahí activa lo que haga falta: mentoría de equipos, Go-to-Market, Growth, IA aplicada y ejecución.

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
