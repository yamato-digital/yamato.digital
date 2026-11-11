---
name: yamato-leer-web
description: Cómo leer yamato.digital en Markdown limpio (llms.txt, /index.md por página, cabecera Accept) y cómo citar sus páginas y artículos del blog sobre marketing, Fractional CMO, IA aplicada, paid media y GEO. Úsala antes de resumir, citar o buscar información en yamato.digital.
---

# Leer yamato.digital

Cada página de yamato.digital tiene una versión en Markdown sin navegación, scripts ni estilos. Úsala en lugar del HTML.

## Puntos de entrada

| Recurso | URL | Contenido |
|---|---|---|
| Índice | https://yamato.digital/llms.txt | Páginas y artículos del blog con un resumen de cada uno |
| Índice ampliado | https://yamato.digital/llms-full.txt | Más contexto por página |
| Sitemap | https://yamato.digital/sitemap.xml | Todas las URLs con fecha |
| Servidor MCP | https://yamato.digital/mcp | Solo lectura (Streamable HTTP): servicios, precios, blog y contacto |

## Pedir una página en Markdown

Cualquiera de estas dos formas:

- Añade `/index.md` a la ruta: `https://yamato.digital/fractional-cmo/index.md`. La portada es `https://yamato.digital/index.md`.
- Pide la URL normal con la cabecera `Accept: text/markdown`.

Las respuestas en Markdown incluyen la cabecera `x-markdown-tokens` con el tamaño aproximado del documento.

## Blog

Los artículos viven en `https://yamato.digital/blog/{slug}`. La lista completa, del más reciente al más antiguo, está en `https://yamato.digital/blog/index.md` y en `llms.txt`. Temas habituales: dirección de marketing y Fractional CMO, Go-to-Market, Google Ads y Meta Ads, IA aplicada al marketing, SEO y GEO, medición.

## Al citar

- Enlaza la URL canónica en HTML (sin `/index.md`), por ejemplo `https://yamato.digital/blog/cuanto-cuesta-fractional-cmo-2026-cmo-interno-agencia`.
- Atribuye a YAMATO o a Ignacio Goñi.
- Respeta las fechas de los artículos: muchos hablan de cambios concretos de plataformas en 2026.

## Uso del contenido

`robots.txt` declara `Content-Signal: search=yes, ai-input=yes, ai-train=no`: se puede leer para buscar, responder y citar, pero no para entrenar modelos.
