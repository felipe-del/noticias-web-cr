<script setup>
const route = useRoute()
const category = route.params.category

const categoryNames = {
  sucesos: 'Sucesos',
  deportes: 'Deportes',
  espectaculos: 'Espectáculos'
}

if (!categoryNames[category]) {
  throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada' })
}

// Punto 2: listado por categoría filtrando con .where('category', '=', ...)
const { data: noticias } = await useAsyncData(`categoria-${category}`, () => {
  return queryCollection('noticias')
    .where('category', '=', category)
    .order('date', 'DESC')
    .all()
})

useHead({ title: `${categoryNames[category]} - Noticias CR` })
</script>

<template>
  <div class="container">
    <NuxtLink to="/">← Inicio</NuxtLink>
    <h1>{{ categoryNames[category] }}</h1>

    <p v-if="!noticias?.length">Aún no hay noticias en esta categoría.</p>

    <div class="news-list">
      <article v-for="n in noticias" :key="n.path" class="news-card">
        <NuxtLink :to="n.path">
          <span class="badge">{{ n.category }}</span>
          <h2>{{ n.title }}</h2>
          <p>{{ n.description }}</p>
          <div class="meta">
            <img :src="n.author.image" :alt="n.author.name" class="avatar" />
            <span>{{ n.author.name }} · {{ n.date }}</span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>
