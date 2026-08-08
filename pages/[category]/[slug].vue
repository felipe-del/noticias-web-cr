<script setup>
const route = useRoute()
const path = route.path

const categoriasValidas = ['sucesos', 'deportes', 'espectaculos']
if (!categoriasValidas.includes(route.params.category)) {
  throw createError({ statusCode: 404, statusMessage: 'Página no encontrada' })
}

const { data: page } = await useAsyncData(`page-${path}`, () => {
  return queryCollection('noticias').path(path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Noticia no encontrada' })
}

useHead({ title: `${page.value.title} - Noticias CR` })

// Punto 3: anterior / siguiente restringido a la misma categoría,
// usando queryCollectionItemSurroundings.
// La versión instalada de @nuxt/content no admite un filtro `query` dentro
// de las opciones de queryCollectionItemSurroundings, así que se solicita
// un rango amplio y luego se filtra en el cliente, apoyándonos en un mapa
// de categorías (path -> category) obtenido con una consulta liviana.
const { data: mapaCategoria } = await useAsyncData('mapa-categoria', () => {
  return queryCollection('noticias').all()
})

const { data: surround } = await useAsyncData(`surround-${path}`, () => {
  return queryCollectionItemSurroundings('noticias', path, {
    before: 10,
    after: 10
  })
})

function categoriaDe(itemPath) {
  return mapaCategoria.value?.find(n => n.path === itemPath)?.category
}

// queryCollectionItemSurroundings devuelve un arreglo donde los primeros
// "before" elementos preceden a la posición actual y los siguientes
// "after" elementos la suceden, en orden.
const before = computed(() =>
  (surround.value || [])
    .slice(0, 10)
    .filter(item => item && categoriaDe(item.path) === page.value.category)
)

const after = computed(() =>
  (surround.value || [])
    .slice(10)
    .filter(item => item && categoriaDe(item.path) === page.value.category)
)

// El más cercano anterior es el último del bloque "before" filtrado;
// el más cercano siguiente es el primero del bloque "after" filtrado.
const prev = computed(() => before.value[before.value.length - 1] || null)
const next = computed(() => after.value[0] || null)
</script>

<template>
  <div class="container" v-if="page">
    <NuxtLink :to="`/categoria/${page.category}`">← Volver a {{ page.category }}</NuxtLink>

    <article>
      <span class="badge">{{ page.category }}</span>
      <h1>{{ page.title }}</h1>

      <div class="author">
        <img :src="page.author.image" :alt="page.author.name" class="avatar-lg" />
        <div>
          <strong>{{ page.author.name }}</strong>
          <p>{{ page.author.bio }}</p>
          <small>Publicado el {{ page.date }}</small>
        </div>
      </div>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>
    </article>

    <nav class="prev-next">
      <NuxtLink v-if="prev" :to="prev.path" class="prev">
        ← {{ prev.title }}
      </NuxtLink>
      <span v-else class="disabled">No hay noticia anterior</span>

      <NuxtLink v-if="next" :to="next.path" class="next">
        {{ next.title }} →
      </NuxtLink>
      <span v-else class="disabled">No hay noticia siguiente</span>
    </nav>
  </div>
</template>
