---
slug: "ga4-canal-ia-medir-trafico-chatgpt-2026"
title: "GA4 ya mide tu tráfico de ChatGPT. La cifra que te enseña es mentira."
date: "2026-07-27"
cover: "/assets/blog/ga4-ya-mide-tu-trafico-de-chatgpt-la-cifra-que-te-ensena-es-mentira.webp"
excerpt: "GA4 ya tiene un canal para el tráfico de IA, pero parte tus visitas de ChatGPT en tres y se deja Perplexity fuera. Qué mide de verdad y cómo arreglarlo."
---

Llevas dos años oyendo que ChatGPT te está quitando visitas. Ahora Google por fin te deja medirlo dentro de Google Analytics. Y lo primero que descubres es que la cifra que te enseña por defecto es más pequeña que la de verdad. No por un error. Por diseño.

El 13 de mayo de 2026, Google añadió un canal nativo llamado "AI Assistant" al grupo de canales por defecto de GA4. La idea es sencilla: cuando GA4 reconoce que una visita viene de un asistente de IA, la etiqueta y la mete en ese canal. Sin configurar nada, sin regex, sin plugins. Terminó de desplegarse en la mayoría de cuentas a principios de junio. Hasta entonces, ese tráfico caía en "Referral" o directamente se perdía en "Directo".

Si llevabas un año montando reglas manuales para ver cuánta gente te llegaba desde ChatGPT, es una buena noticia. El problema empieza justo después.

## Una fuente, tres canales, un número mal

GA4 no clasifica el tráfico solo por la fuente (de dónde viene), sino por la fuente y el medio a la vez. Y ahí es donde se rompe. La misma fuente, chatgpt.com, aparece repartida en tres canales distintos en el mismo informe. Una parte, la que GA4 reconoce y etiqueta, cae en "AI Assistant". Otra cae en "Referral", porque GA4 no llegó a etiquetarla. Y una tercera cae en "Unassigned", ese cajón que no abre casi nadie. Tres trozos del mismo tráfico, en tres sitios.

¿La consecuencia práctica? Si abres el canal "AI Assistant" y te crees el número, estás contando de menos. Siempre. No hay una sola cifra que te diga cuánta gente llega de ChatGPT; hay tres, y ninguna está completa.

## Perplexity no existe (para GA4)

Aquí viene el segundo problema, y es de los que dan risa hasta que te tocan a ti. La lista de asistentes que Google "reconoce" cambia sola. En el lanzamiento nombraba a ChatGPT, Gemini y Claude. En junio, la documentación ya listaba otro conjunto (ChatGPT, Gemini, DeepSeek, Copilot y Grok), con Claude discretamente eliminado. Y Perplexity, que es uno de los asistentes con la intención de compra más alta, sigue sin aparecer: todo su tráfico cae en "Referral" y no lo verás en el canal de IA.

Traducción: el canal que Google te vende como "tu tráfico de IA" ni siquiera incluye a todos los que envían tráfico de IA. Si construyes un informe con esa lista quemada dentro, mañana estará desactualizado.

## Y lo peor es lo que ni siquiera se ve

Todo lo anterior es un problema de clasificación. Este es un problema de que el dato directamente no llega. Buena parte del tráfico de IA entra sin referente. Las apps móviles de ChatGPT y sus navegadores internos no le pasan a GA4 nada que leer, así que la visita aterriza en "Directo", sin fuente que rastrear. Se estima que el 60-70% de las sesiones de IA llegan así, sin etiqueta posible.

Y por si fuera poco: las visitas que llegan desde los resúmenes de IA de Google (los AI Overviews) y desde AI Mode se cuentan como "Búsqueda orgánica", no como IA. Google lo hace a propósito. Para muchas webs esa es la mayor superficie de IA que tienen, y es invisible como tal en los informes. Lo comentamos cuando [el clic prácticamente desapareció de las búsquedas de Google](https://yamato.digital/blog/el-clic-ha-muerto-google-ai-mode-2026): el tráfico no ha muerto, se ha vuelto opaco.

## ¿Y por qué molestarse en medir bien esto?

Legítima la pregunta. El tráfico de IA todavía es un porcentaje pequeño para casi todas las webs. Pero convierte por encima de su peso: según los datos de clickstream de Similarweb, las visitas desde ChatGPT convierten en torno al 7%, por delante de la búsqueda orgánica y no lejos del tráfico de pago.

Un canal pequeño que convierte así no se mide "a ojo". Se mide bien o no se mide. Y aquí es donde separamos a las marcas que toman decisiones con datos de las que decoran un dashboard: si tu único termómetro es el canal que Google te da por defecto, estás optimizando sobre una cifra que sabes que está incompleta.

## Cómo arreglarlo sin llorar

La solución no es dramática. Es un grupo de canales personalizado que clasifique por fuente, ignorando el medio. En cuanto lo haces, los tres trozos de chatgpt.com se juntan en una sola línea.

Encima te llevas dos regalos. Un grupo personalizado aplica sus reglas de forma retroactiva a todo tu histórico, así que recupera las sesiones antiguas que se quedaron en "Referral". Y como la regla la escribes tú, puedes incluir a los que Google se deja fuera, Perplexity incluido.

Un aviso, porque es donde la gente se sabotea sola: construye el patrón atado a dominios reconocibles (chatgpt.com, perplexity, gemini.google.com, copilot.microsoft.com, claude.ai…) y nunca metas tokens sueltos como "gpt" o "google" a pelo, o te tragarás medio tráfico orgánico por accidente. Y revísalo cada trimestre, porque las plataformas van y vienen.

## La honestidad que ninguna herramienta te da

Aquí es donde toca ser adulto. Un grupo de canales perfecto arregla cómo se clasifica el tráfico, no si se llega a recoger. Y lo que llega a "Directo" sin referente, o lo que Google cuenta como orgánico, no lo va a rescatar ninguna regla.

Así que sé preciso con lo que dices: con este canal montado tienes un número completo y coherente de las fuentes de IA que sí puedes identificar. Lo que no tienes es una medida de la influencia total de la IA sobre tu negocio. Que un asistente te recomiende a alguien que nunca llega a hacer clic es otro problema, y ningún informe de GA4 lo resuelve.

Esto conecta con algo que repetimos hasta aburrir: la comodidad de un dashboard automático casi nunca juega a tu favor. Ya lo vimos cuando [Google puso un agente de IA al mando de tu marketing](https://yamato.digital/blog/google-ask-advisor-marketing-2026). El cuadro por defecto te da el trozo fácil. El trabajo de verdad es saber qué trozos te está escondiendo, y decidir con criterio qué haces con ellos.

Si estás tomando decisiones de marketing mirando el canal de IA que Google te da por defecto, estás decidiendo con la mitad del mapa. Y la mitad que falta es justo la que convierte.

Si quieres que alguien mire tu analítica y te diga qué estás midiendo mal antes de invertir un euro más, hablemos.

[¿Hablamos?](https://yamato.digital/contacto)

*Escrito por el equipo de YAMATO con ayuda de IA. La misma IA que, según GA4, no nos está mandando tráfico. Ya ves tú qué precisión.*
