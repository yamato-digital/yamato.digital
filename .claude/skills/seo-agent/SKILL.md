---
name: seo-agent
description: Agente SEO semanal de yamato.digital. Lee Google Search Console desde Chrome (sesión de Ignacio), detecta posts del blog con oportunidades (CTR bajo, caídas, consultas sin buena página), reescribe title/excerpt (máx. 3 posts por ciclo) con la voz de YAMATO y abre un PR con el informe. Úsalo cuando pidan "pasa el agente SEO", "ciclo SEO semanal", "revisa Search Console", "qué posts están cayendo" o desde la tarea programada.
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
- En Search Console **solo leer**: no cambiar configuración, usuarios, sitemaps ni pedir indexación.

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
  4. Pendiente: posts descartados, páginas no-blog, refrescos sugeridos, ideas de posts.

Solo si hay al menos un cambio en un post:

```bash
git add src/content/blog/<ficheros tocados> seo-agent/changes.jsonl seo-agent/reports/$FECHA.md
git commit -m "SEO agent: ajustes de title/excerpt ($FECHA)"
git push -u origin "seo-agent/$FECHA"
gh pr create --base main --head "seo-agent/$FECHA" --title "SEO agent $FECHA: <n> posts" --body-file seo-agent/reports/$FECHA.md
```

`git add` solo con rutas explícitas, nunca `-A` ni `.`. Si no hay cambios, no abras PR.

Al terminar: `cd "<raíz del repo>" && git worktree remove "$WT"` (si no hubo PR, borra también la rama local con `git branch -D "seo-agent/$FECHA"`).

### 7. Respuesta final

3–5 líneas: enlace al PR (o "sin cambios"), posts tocados y lo más relevante del informe.

## Pendiente de configurar

- **Slack**: sin canal definido. Cuando lo haya, publicar el resumen allí tras abrir el PR.
- **Citas en IA (AI Overviews, ChatGPT)**: fuera por ahora; Ahrefs está en plan gratuito y Semrush sin unidades de API.
- **Tráfico desde IA**: el PR #40 añade Vercel Web Analytics. Cuando esté en `main` y tenga datos, añadir al informe las visitas por referrer (chatgpt.com, perplexity.ai, gemini…) con la herramienta `aggregate_pageviews` del conector de Vercel (proyecto `yamato-digital`).
