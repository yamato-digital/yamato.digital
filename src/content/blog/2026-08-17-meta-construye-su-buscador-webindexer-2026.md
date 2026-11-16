---
slug: "meta-construye-su-buscador-webindexer-2026"
title: "Meta está construyendo su propio buscador. Tu robots.txt ya está votando."
date: "2026-08-17"
cover: "/assets/blog/meta-esta-construyendo-su-propio-buscador-tu-robots-txt-ya-esta-votando.webp"
excerpt: "En agosto de 2026 Meta-WebIndexer pasó del 2% al 38% del rastreo de IA. Meta monta su propio buscador y tu robots.txt decide si apareces."
keywords: "Meta-WebIndexer, buscador de Meta, Meta AI, robots.txt, rastreadores de IA, GEO, visibilidad en IA, SEO 2026"
---

Llevas dos años oyendo que hay que optimizar para ChatGPT. De acuerdo.

Mientras tanto, Meta ha empezado a construir su propio índice de la web. Sin keynote, sin nota de prensa, sin nombre comercial. Solo un rastreador machacando servidores a un ritmo que no se explica de otra manera.

Y la decisión de si tu empresa entra en ese índice ya está tomada. La tomó tu robots.txt. Probablemente sin que nadie la revisara.

## Qué ha pasado en las últimas cuatro semanas

A mediados de julio de 2026, un rastreador llamado `meta-webindexer` representaba el 2,2% de las peticiones de rastreadores de IA registradas por <a href="https://promptwatch.com/data/meta-web-indexer" target="_blank" rel="noopener noreferrer">Promptwatch</a>. El 9 de agosto ya era el 37,8%.

Más de un tercio de todo el rastreo de IA. Un solo bot. Multiplicado por diecisiete en menos de un mes.

No es un dato aislado. El informe <a href="https://datadome.co/threat-research/ai-traffic-report-q2-2026/" target="_blank" rel="noopener noreferrer">AI Traffic Report del segundo trimestre de 2026 de DataDome</a>, que analiza 17.700 millones de peticiones de agentes de IA (un 45% más que el trimestre anterior), cuenta la misma historia con otros números: `meta-webindexer` creció un 163% trimestre contra trimestre, de 1.400 a 3.750 millones de peticiones. Y en junio de 2026 superó por primera vez a `meta-externalagent`, el bot con el que Meta entrena sus modelos.

Ese último detalle es el que importa. Son dos bots con dos trabajos distintos: uno lee la web para aprender, el otro la lee para responder. Cuando el segundo adelanta al primero, la empresa ha dejado de estudiar y ha empezado a indexar.

Eso no se hace para entrenar un modelo. Se hace para montar un buscador.

## Por qué Meta quiere su propio índice

Hoy, cada vez que Meta AI busca algo en la web, se apoya en índices que no son suyos. Es decir: le está contando a un competidor lo que preguntan sus 3.600 millones de usuarios diarios. Esa cifra sale de la <a href="https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx" target="_blank" rel="noopener noreferrer">presentación de resultados del segundo trimestre de 2026 de Meta</a>, no de la estimación de nadie.

Para una empresa que factura por atención, regalar esa señal es sangrar. El 6 de agosto, el fundador Pieter Levels (@levelsio) publicó que gente de Meta le había dicho que la compañía está construyendo su propio índice, y que el rastreo le estaba disparando alertas de carga en sus servidores. La curva de datos encaja con el rumor. No es confirmación oficial, pero la aritmética es difícil de leer de otra forma.

Y aquí está la parte que a las empresas españolas les debería quitar el sueño más que a nadie: este buscador no va a vivir en una pestaña del navegador. Va a vivir dentro de WhatsApp e Instagram. Donde tu cliente ya está. Donde no hay diez resultados azules que comparar, sino una respuesta.

## El detalle incómodo: Meta te rastrea y no te devuelve nada

Ahora la parte que no sale en los titulares.

Según el mismo informe de DataDome, los dos bots de Meta generaron 9.100 millones de peticiones en un trimestre, más de la mitad de todo el tráfico de IA de su red, y devolvieron prácticamente cero visitantes reales a esas webs.

Compáralo con ChatGPT: su rastreador visitó un 6% menos, pero las personas usando ChatGPT hicieron clic un 17% más, y concentra entre el 80% y el 88% de todo el tráfico de referencia de IA.

Traducción para tu factura de hosting: el bot que más te consume no es el que más te trae. Todavía.

Y ese "todavía" es toda la discusión. Hoy Meta te cuesta ancho de banda y no te da tráfico. Pero <a href="https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers" target="_blank" rel="noopener noreferrer">la propia documentación de Meta</a> lo dice sin rodeos: permitir `meta-webindexer` en tu robots.txt es lo que hace que Meta pueda citar y enlazar tu contenido en las respuestas de Meta AI.

O sea: estás pagando la obra de un índice en el que puedes salir o no salir. Y lo decides ahora, no cuando se lance.

Es el mismo patrón del que hablábamos cuando [Google confirmó que el clic se estaba muriendo](https://yamato.digital/blog/el-clic-ha-muerto-google-ai-mode-2026). La visibilidad se separa del tráfico, y quien mide solo tráfico se queda ciego justo en el momento en que se reparten las posiciones.

## Nuestro propio robots.txt tenía el agujero

Antes de darte consejos, la confesión.

El robots.txt de yamato.digital bloquea `meta-externalagent` desde hace meses. Decisión consciente: no queríamos regalar contenido para entrenar modelos. Bien.

Pero no dice absolutamente nada de `meta-webindexer`, porque cuando lo escribimos ese bot no era relevante. Lo hemos descubierto documentando este artículo.

Nos hemos librado por cómo funciona el estándar: lo que no está prohibido, está permitido. Podría haber sido al contrario. Si hubiéramos hecho lo que hace media internet, un `Disallow: /` genérico para todo lo que huela a Meta, nos habríamos autoexcluido de un buscador entero por copiar y pegar una regla de 2024.

Eso es exactamente el problema. No es un problema técnico. Es que nadie en la mayoría de las empresas es dueño de esa decisión.

## Qué hacer esta semana

Se hace en una tarde. No hace falta contratar a nadie.

1. **Mira tus logs.** Busca `meta-webindexer`, `meta-externalagent`, `meta-externalfetcher` y `FacebookBot`. Cuánto te visitan y qué te cuesta. Si tu hosting factura por peticiones, esto ya es una línea de gasto.
2. **Abre tu robots.txt y léelo de verdad.** Bot por bot. No "creo que está bien": léelo. La mayoría de robots.txt de empresa se escribieron una vez y nunca se volvieron a tocar.
3. **Decide, y que la decisión tenga dueño.** Entrenamiento e indexación son cosas distintas y merecen respuestas distintas. Bloquear el que aprende y permitir el que cita es una postura perfectamente defendible. Bloquear los dos por inercia, no.
4. **Empieza a medir Meta como canal.** Si ya montaste el seguimiento del tráfico de IA, y si no, [aquí está por dónde empezar](https://yamato.digital/blog/ga4-canal-ia-medir-trafico-chatgpt-2026), añade Meta a la lista antes de que haga falta.

## Lo que esto deja al descubierto

Cada seis meses aparece una superficie nueva donde tu marca existe o no existe. AI Overviews. [ChatGPT como canal de marketing](https://yamato.digital/blog/marketing-en-chatgpt). Perplexity. Ahora un buscador de Meta que ni siquiera se ha anunciado.

Ninguna de esas decisiones es difícil por separado. Lo difícil es que alguien las esté mirando. Y en la mayoría de empresas con las que hablamos, nadie las mira: marketing cree que es cosa de tecnología, tecnología cree que es cosa de marketing, y el fichero de texto que decide en qué buscadores existes lleva dos años sin abrirse.

Eso no se arregla con más herramientas. Se arregla con alguien que tenga el criterio y el mandato para decidir. Que es, literalmente, el trabajo.

La IA no va a acabar con el marketing. Va a acabar con el marketing que no tiene a nadie al mando.

## Fuentes

- Promptwatch, "Meta Is Crawling the Web Like It's Building a Search Index" — <a href="https://promptwatch.com/data/meta-web-indexer" target="_blank" rel="noopener noreferrer">promptwatch.com</a> (10 de agosto de 2026)
- DataDome, "The AI Traffic Report Q2 2026" — <a href="https://datadome.co/threat-research/ai-traffic-report-q2-2026/" target="_blank" rel="noopener noreferrer">datadome.co</a> (16 de julio de 2026)
- Meta for Developers, "Meta Web Crawlers" — <a href="https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers" target="_blank" rel="noopener noreferrer">developers.facebook.com</a> (consultado el 17 de agosto de 2026)
- Meta Investor Relations, "Meta Reports Second Quarter 2026 Results" — <a href="https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx" target="_blank" rel="noopener noreferrer">investor.atmeta.com</a> (29 de julio de 2026)

[¿Hablamos?](https://yamato.digital/contacto)

*Escrito por el equipo de YAMATO. Con IA, sí. Y con un humano que fue a mirar el robots.txt, porque eso la IA no lo iba a hacer sola.*