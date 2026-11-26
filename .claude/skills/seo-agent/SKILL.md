---
name: seo-agent
description: Agente SEO semanal de yamato.digital. Lee Google Search Console y Bing Webmaster Tools desde Chrome (sesión de Ignacio), detecta posts del blog con oportunidades (CTR bajo, caídas, consultas sin buena página), revisa por qué hay páginas sin indexar y propone cómo arreglarlo, reescribe title/excerpt (máx. 3 posts por ciclo) con la voz de YAMATO y abre un PR con el informe. Úsalo cuando pidan "pasa el agente SEO", "ciclo SEO semanal", "revisa Search Console", "revisa Bing Webmaster", "páginas sin indexar", "qué posts están cayendo" o desde la tarea programada.
---

# Agente SEO semanal — yamato.digital

Agente de flujo con aprobación humana: **propone en un PR, nunca publica**. Todo lo que llega a `main` se publica (el blog no tiene campo `draft`), así que el merge lo hace siempre Ignacio.

## Reglas duras

- No tocar nunca: `slug`, `date`, `cover`, el nombre del fichero, `REDIRECTED_POSTS`, rutas, `robots`, `sitemap`, canonicals, precios, cifras de clientes ni afirmaciones legales.
- Los valores del frontmatter van en **una sola línea** y entre comillas dobles (el parser de `src/lib/blog.ts` va línea a línea).
- Máximo **3 posts modificados** por ciclo.
- No tocar un post modificado por el agente en las **últimas 8 semanas** (ver `seo-agent/changes.jsonl`) ni posts publicados hace **menos de 4 semanas**.
- No tocar ficheros que ya estén en **otro PR abierto** (`gh pr list --state open --json number,files`), incluido un PR anterior del agente sin mergear. Si el PR del agente de la semana pasada sigue abierto, no abras otro: comenta en el informe que está pendiente de revisión.
- Las páginas que no son del blog (`/`, `/servicios`, `/fractional-cmo`…) solo se **comentan** en el informe; no se editan.
- Nunca push a `main`, nunca merge, nunca `--force`.
- `title` es también el H1, el `og:title` y el schema; `excerpt` es la meta description y la tarjeta del índice. Toda reescritura pasa por la skill **yamato-voice** (español de España, sin clickbait, sin AI slop).
- En Search Console y en Bing Webmaster Tools **solo leer**: no cambiar configuración, usuarios ni sitemaps, no pedir indexación, no enviar URLs, no pulsar «Validar corrección» ni activar IndexNow. Si algo de eso hace falta, se propone en el informe para que lo haga Ignacio.
- Los problemas de indexación (redirecciones, `vercel.json`, `noindex`, sitemap, canonicals) **solo se proponen** en el informe con el cambio exacto; no se aplican en el PR.

## Ciclo

### 1. Datos de Search Console (Claude in Chrome)

Usa Claude in Chrome (lee antes la skill `chrome-browser`). Ignacio ya tiene la sesión de Google iniciada en su Chrome. Si Chrome no está conectado o Search Console pide iniciar sesión, **para** y dilo; no inventes datos.

Propiedad: `sc-domain:yamato.digital`. Search Console va ~3 días por detrás, así que usa dos ventanas de 28 días terminando hace 3 días (fechas `AAAAMMDD`):

- Actual: `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Ayamato.digital&start_date=<INI>&end_date=<FIN>`
- Anterior: los 28 días previos, misma URL con otras fechas.

Añade a la URL `&breakdown=page&metrics=CLICKS%2CIMPRESSIONS%2CCTR%2CPOSITION` para abrir la pestaña de páginas con las cuatro métricas en la tabla.

Es una SPA y tiene sus manías (comprobado el 17/11/2026):

- Abre **una pestaña nueva por cada URL** (`tabs_create_mcp` + `navigate`). Cambiar la URL dentro de la misma pestaña no recarga los datos.
- Espera ~5 s tras cargar. Justo después de navegar, `find` puede fallar con «the page navigated to a different domain» (Google hace una redirección de sesión): reintenta tras esperar o usa `get_page_text`, que sí funciona.
- Comprueba en el texto del gráfico que las fechas son las pedidas antes de leer.

Para cada ventana:

1. **Páginas**: la tabla muestra 10 filas. Busca con `find` el listbox «Número de filas por página», ábrelo con clic, localiza con `read_page` (sobre ese ref) la opción «500», haz clic, espera 2 s y lee con `get_page_text`.
2. **Consultas** (solo en la ventana actual): clic en la pestaña «Consultas» (`find` → tab "Consultas"), espera ~5 s (primero sale «Cargando…») y lee. Ojo: la mayoría de las impresiones son de consultas anónimas que Search Console no muestra.

Para las consultas de un post concreto: en la ventana actual, haz clic en la URL del post en la tabla de páginas (filtra por esa página) y lee la pestaña CONSULTAS.

Cierra las pestañas que hayas abierto al terminar.

### 1b. Indexación en Search Console: «¿Por qué hay páginas que no se indexan?»

En una pestaña nueva abre `https://search.google.com/search-console/index?resource_id=sc-domain%3Ayamato.digital` (Indexación → Páginas), espera ~5 s y lee con `get_page_text`:

1. Los totales de páginas **indexadas** y **sin indexar**.
2. La tabla «¿Por qué hay páginas que no se indexan?»: cada motivo con su origen (Sitio web / Google), el estado de validación y el número de páginas.
3. Para cada motivo con páginas, haz clic en su fila y lee la tabla «Ejemplos» (URL y último rastreo). Si hay más de 10, sube las filas por página igual que en Rendimiento. Vuelve atrás o abre otra pestaña para el siguiente motivo.

Después, **comprueba cada URL de ejemplo en producción** (sin seguir y siguiendo redirecciones), porque el informe de Google suele ir semanas por detrás:

```bash
curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "<url>"
curl -sL -o /dev/null -w '%{http_code} %{url_effective}' -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "<url>"
```

Clasifica cada URL:

- **Ya resuelta** (redirige a una página que responde 200, o vuelve a dar 200): propón a Ignacio pulsar «Validar corrección» en ese motivo si la validación no está iniciada.
- **Esperada, sin acción**: «Página con redirección» de redirecciones que existen a propósito (las de `vercel.json` y `REDIRECTED_POSTS`), «Página alternativa con etiqueta canónica adecuada», `noindex` intencionado, URLs técnicas (parámetros, `/.md` de agentes). Comprueba si ese `noindex` o esa redirección son a propósito en el código antes de darlo por bueno.
- **Problema real**, con propuesta concreta según el motivo:
  - «No encontrada (404)» / «Soft 404»: destino de redirección 301 (busca el equivalente actual en `src/routes/` y en el blog; si hace falta, mira qué era en Wayback Machine con `https://archive.org/wayback/available?url=yamato.digital/<ruta>`) y la línea exacta para `vercel.json`. Si no hay equivalente, propón la home o dejarla en 404/410 y explica por qué.
  - «Rastreada: actualmente sin indexar» / «Descubierta: actualmente sin indexar» en posts o páginas que importan: comprueba que está en `sitemap.xml`, cuántos enlaces internos recibe y si el contenido es corto o duplica otro post; propone enlaces internos concretos (desde qué post y con qué texto) o un refresco.
  - «Duplicada: Google ha elegido una canónica diferente» / «Duplicada sin canónica seleccionada»: qué canónica declara la página y cuál ha elegido Google; propone unificar.
  - «Error de servidor (5xx)», «Bloqueada por robots.txt», «Excluida por etiqueta noindex» no intencionada: causa probable y corrección.
- **Novedades**: compara los recuentos por motivo con el último informe en `seo-agent/reports/` y señala lo que ha aparecido o crecido.

### 1c. Bing Webmaster Tools (Claude in Chrome)

Bing alimenta también a ChatGPT Search, Copilot y DuckDuckGo, así que se revisa cada semana con la misma regla de solo lectura. Usa la sesión de Ignacio en Chrome. Si Bing pide iniciar sesión, el sitio no aparece o no está verificado, **no pares el ciclo**: anótalo en el informe («Bing sin datos: <motivo>») y sigue con el resto.

Entrada: `https://www.bing.com/webmasters/home?siteUrl=https://yamato.digital/` (si el sitio está dado de alta como dominio o con otra URL, elígelo en el selector de sitios). Si alguna URL directa no carga, entra desde el menú lateral. Cuando confirmes las URLs que funcionan, déjalas anotadas en esta sección en el mismo PR (como se hizo con Search Console).

Lee, una pestaña nueva por sección, con `get_page_text`:

1. **Rendimiento de búsqueda** (Search Performance): rango de 1 mes y, si se puede, comparado con el periodo anterior. Totales de clics, impresiones, CTR y posición media, y las pestañas de **Páginas** y **Palabras clave**.
2. **Recomendaciones** (SEO): cada problema con su gravedad y número de páginas afectadas.
3. **Explorador de sitios** (Site Explorer): URLs con errores 4xx/5xx, redirecciones, bloqueadas por robots.txt y excluidas. Comprueba en producción las URLs con error, igual que en 1b.
4. **Mapas del sitio** (Sitemaps): estado del sitemap, fecha del último rastreo y URLs descubiertas.
5. **IndexNow**: si está activo y cuántas URLs ha recibido. Si no lo está, apúntalo como propuesta, no lo actives.

Los datos de Bing complementan a los de Google: una consulta o un post con señal en Bing puede reforzar la elección de los 3 posts, pero no basta por sí sola para tocar uno sin señal en Google. Lo exclusivo de Bing (errores, recomendaciones, sitemap) va al informe con su propuesta.

### 1d. Revisión URL a URL de las páginas sin indexar (Google y Bing)

El informe de páginas de 1b va semanas por detrás y solo enseña ejemplos, así que cada semana se comprueba también, **URL a URL**, qué páginas del sitemap no están todavía en los índices. Solo lectura, como el resto.

1. **Lista de URLs**: descarga `https://yamato.digital/sitemap.xml` y quédate con todas sus `<loc>`. Para no inspeccionar todo cada semana, revisa: las URLs que el último informe no daba como indexadas en Google, las publicadas o añadidas al sitemap desde entonces y, una vez al mes (primer ciclo del mes) o si no hay informe anterior, todas.
2. **Google, Inspección de URLs**: las URLs directas `/search-console/inspect?id=` dan 404; usa el cuadro «Inspeccionar cualquier URL» de la barra superior de Search Console (clic triple, escribe la URL, Enter y espera ~14 s). Lee el estado con `get_page_text`: «La URL está en Google», «La URL no está en Google» con su motivo («Descubierta/Rastreada: actualmente sin indexar», «Google no reconoce esta URL», etc.), último rastreo y canónica elegida por Google. Tras cada inspección cierra el resultado o vuelve a la portada antes de la siguiente para no leer un resultado anterior. **No pulses «Solicitar indexación».**
3. **Bing, Explorador de sitios**: en `https://www.bing.com/webmasters/siteexplorer?siteUrl=https://yamato.digital/&filter=0` abre las carpetas (`blog`, `clientes`…) y saca la lista de URLs indexadas de `document.body.textContent` (la tabla es virtual y no todo sale en `get_page_text`). Cruza con el sitemap: lo que está en el sitemap y no aparece, o aparece sin indexar o con aviso, es «sin indexar en Bing». El operador `site:` de Bing no sirve para esto.
4. **Diagnóstico de cada URL sin indexar** (en Google o en Bing): código en producción con los `curl` de 1b, que esté en el sitemap, canónica propia, sin `noindex`, cuántos enlaces internos recibe (`grep -rl "<slug>" src/content/blog src/routes`) y días desde su publicación. Clasifica:
   - **Reciente** (menos de 14 días publicada): normal, sin acción.
   - **Lista para pedir indexación**: responde 200, canónica propia, enlazada; propón a Ignacio solicitarla en Google (cuota ~10 al día, ordénalas por prioridad: páginas de servicio y posts con impresiones primero) y enviarla en Bing desde «Envío de URL» (`https://www.bing.com/webmasters/submiturl?siteUrl=https://yamato.digital/`).
   - **Con problema**: huérfana o con pocos enlaces, contenido corto o duplicado, canónica distinta, error… con la propuesta concreta (enlaces internos desde qué post y con qué texto, redirección, canonical).
   - **Atascada**: ya se propuso pedir indexación en un informe anterior y sigue fuera tras 3 semanas; señálala aparte y propone mejoras de contenido o enlazado, no repetir la solicitud.

### 2. Detectar oportunidades

El sitio tiene poco volumen (del orden de 300–400 impresiones y 10–20 clics cada 28 días a finales de 2026). Con estos números las caídas semana a semana son ruido: **no actúes por variaciones pequeñas**. Señales que sí cuentan (umbral mínimo: 15 impresiones en la ventana actual):

- **Impresiones sin clics o CTR muy bajo** en posición 3–15 → el title/excerpt no responde a la búsqueda.
- **Consultas con impresiones en posición 8–20** que encajan con un post existente → el post puede ganar con un title/excerpt alineado con esa consulta y 1–2 enlaces internos.
- **Caída clara** (≥ 50 % de impresiones con ≥ 30 en la ventana anterior) → solo informe, con propuesta de refresco.
- **Consultas sin página adecuada** → idea de post para `yamato-blog-semanal`, solo informe.

### 3. Elegir qué tocar

Candidatos = posts del blog (`/blog/<slug>`) con señal. Descarta los que incumplan las reglas de 8 / 4 semanas. Ordena por impresiones. Quédate con 3 como máximo; el resto va al informe como "pendiente".

### 4. Proponer cambios (por post)

Lee el `.md` en `src/content/blog/` y sus consultas.

- `title`: ≤ 55 caracteres (la web añade " | YAMATO"), con la consulta principal al principio si cabe de forma natural.
- Separadores: nunca «—» ni «-» para separar partes del title; si hace falta dividir, dos puntos. La marca va siempre tras « | ».
- `excerpt`: 140–155 caracteres, responde a la intención de la consulta y da un motivo para hacer clic.
- `keywords`: alinéalas con las consultas reales que traen impresiones.
- Enlaces internos: como mucho 1–2, naturales, hacia o desde posts relacionados.
- **No reescribas el cuerpo.** Los refrescos de contenido se proponen en el informe (qué sección, qué dato, qué falta).
- Si no hay una mejora clara, no cambies nada y explícalo.

Usa la skill **yamato-voice** para cada title y excerpt.

### 5. Medir cambios anteriores

Para cada línea de `seo-agent/changes.jsonl` de hace 4–8 semanas, compara `before` con las métricas actuales del post y anota en el informe si mejoró, empeoró o sigue igual (con este volumen, di también si la diferencia es demasiado pequeña para concluir nada).

### 6. Rama, registro y PR

Trabaja en un worktree aislado: la copia del usuario puede tener cambios sin commitear y vive en Google Drive.

```bash
cd "<raíz del repo>"
git fetch origin
FECHA=$(date +%F)
WT="$TEMP/yamato-seo-agent-$FECHA"
git worktree add -b "seo-agent/$FECHA" "$WT" origin/main
```

En el worktree:

- Aplica los cambios a los `.md`.
- Añade una línea por cambio a `seo-agent/changes.jsonl` (créalo si no existe):
  `{"date":"YYYY-MM-DD","slug":"...","field":"title|excerpt|keywords|links","old":"...","new":"...","reason":"...","before":{"clicks":0,"impressions":0,"ctr":0,"position":0}}`
- Escribe `seo-agent/reports/YYYY-MM-DD.md`:
  1. Resumen (clics, impresiones, CTR y posición vs. periodo anterior).
  2. Cambios de este PR (antes → después, motivo, consultas que lo justifican).
  3. Resultado de cambios anteriores.
  4. Indexación en Google: indexadas / sin indexar (vs. el último informe), tabla por motivo con estado en producción de cada URL (ya resuelta, esperada o problema) y la propuesta concreta para cada problema (línea de `vercel.json`, enlaces internos, canonical…), más qué motivos conviene «Validar corrección».
  4b. URLs sin indexar (revisión URL a URL): tabla con URL, estado en Google, estado en Bing, días publicada, enlaces internos, clasificación (reciente, lista para pedir indexación, con problema, atascada) y acción; al final, la lista priorizada de URLs para que Ignacio pida indexación en Google y envíe en Bing.
  5. Bing Webmaster Tools: rendimiento (vs. periodo anterior), páginas y palabras clave destacadas, recomendaciones, errores del explorador de sitios, sitemap e IndexNow, cada problema con su propuesta. O «Bing sin datos: <motivo>».
  6. Pendiente: posts descartados, páginas no-blog, refrescos sugeridos, ideas de posts.

Si hay al menos un cambio en un post:

```bash
git add src/content/blog/<ficheros tocados> seo-agent/changes.jsonl seo-agent/reports/$FECHA.md
git commit -m "SEO agent: ajustes de title/excerpt ($FECHA)"
git push -u origin "seo-agent/$FECHA"
gh pr create --base main --head "seo-agent/$FECHA" --title "SEO agent $FECHA: <n> posts" --body-file seo-agent/reports/$FECHA.md
```

Si no hay cambios en posts pero el informe trae propuestas de indexación (Google o Bing) que requieren acción, abre igualmente el PR solo con el informe:

```bash
git add seo-agent/reports/$FECHA.md
git commit -m "SEO agent: informe de indexación ($FECHA)"
git push -u origin "seo-agent/$FECHA"
gh pr create --base main --head "seo-agent/$FECHA" --title "SEO agent $FECHA: informe sin cambios en posts" --body-file seo-agent/reports/$FECHA.md
```

`git add` solo con rutas explícitas, nunca `-A` ni `.`. Si no hay cambios en posts ni propuestas que requieran acción, no abras PR.

Al terminar: `cd "<raíz del repo>" && git worktree remove "$WT"` (si no hubo PR, borra también la rama local con `git branch -D "seo-agent/$FECHA"`).

### 7. Respuesta final

3–6 líneas: enlace al PR (o "sin cambios"), posts tocados, lo más relevante del informe, cuántas páginas sin indexar hay y qué acciones de indexación quedan para Ignacio (en Google y en Bing).

## Pendiente de configurar

- **Slack**: sin canal definido. Cuando lo haya, publicar el resumen allí tras abrir el PR.
- **Citas en IA (AI Overviews, ChatGPT)**: fuera por ahora; Ahrefs está en plan gratuito y Semrush sin unidades de API.
- **Tráfico desde IA**: el PR #40 añade Vercel Web Analytics. Cuando esté en `main` y tenga datos, añadir al informe las visitas por referrer (chatgpt.com, perplexity.ai, gemini…) con la herramienta `aggregate_pageviews` del conector de Vercel (proyecto `yamato-digital`).
