# Tarea 2 — EIF-511 Arquitectura de Información

**Estudiante:** Isaac Brenes
**Curso:** EIF-511 Arquitectura de Información
**Universidad:** Universidad Nacional — Escuela de Informática

**URL del sitio publicado en Netlify:** _(reemplazar con el enlace real una vez publicado, por ejemplo `https://tarea2-brenes-noticias.netlify.app`)_

## Descripción

Blog de noticias nacionales construido con **Nuxt 3** y **Nuxt Content v3**,
con tres categorías (sucesos, deportes, espectáculos), navegación entre
noticias de la misma categoría y buscador general.

## Requisitos cumplidos

1. **9 entradas Markdown** (3 por categoría) en `content/sucesos`,
   `content/deportes` y `content/espectaculos`, cada una con `author`
   (name, bio, image) y `date`, definidos en el schema de `content.config.ts`.
2. **Página principal** (`pages/index.vue`) con enlaces a las tres
   categorías, y **listado por categoría**
   (`pages/categoria/[category]/index.vue`) que usa
   `queryCollection('noticias').where('category', '=', category)`.
3. **Página de detalle** (`pages/categoria/[category]/[slug].vue`) con
   navegación a la noticia anterior/siguiente restringida a la misma
   categoría, usando `queryCollectionItemSurroundings`.
4. **Buscador general** (`pages/buscar.vue`) que consulta todas las
   noticias (sin filtrar por categoría) y busca el término tanto en el
   título/descripción como en el cuerpo del artículo.

## Cómo correr el proyecto localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Cómo probar cada punto

- **Categorías:** desde el home, entrar a "Sucesos", "Deportes" o
  "Espectáculos" y verificar que solo aparecen noticias de esa categoría.
- **Anterior / Siguiente:** entrar a cualquier noticia y usar los enlaces
  al final de la página; deben moverse solo dentro de la misma categoría
  (en el primer/último artículo de la categoría el botón correspondiente
  se deshabilita).
- **Búsqueda:** ir a "Buscar noticias" y probar con la palabra `gobierno`
  (aparece solo en el cuerpo de la noticia "Fuertes lluvias provocan
  inundaciones en Limón", no en su título) para confirmar que la
  búsqueda también revisa el contenido del artículo, no solo el título.

## Publicar en Netlify

1. Crear un repositorio en GitHub con estos archivos (o arrastrar la carpeta
   del proyecto directamente en Netlify, sin `node_modules`).
2. En Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `.output/public`
5. Netlify detectará automáticamente Nuxt 3; si se solicita, agregar el
   plugin `@netlify/plugin-nuxt` (ya incluido en `netlify.toml`).
6. Desplegar y copiar la URL generada por Netlify en la parte superior de
   este README.

## Estructura relevante

```
content.config.ts               # schema de la colección "noticias"
content/sucesos/*.md
content/deportes/*.md
content/espectaculos/*.md
pages/index.vue                 # home con enlaces a categorías
pages/categoria/[category]/index.vue   # listado con .where('category', ...)
pages/categoria/[category]/[slug].vue  # detalle + anterior/siguiente
pages/buscar.vue                # búsqueda general
```
