<script setup>
useHead({ title: 'Buscar noticias - Noticias CR' })

const term = ref('')
const results = ref([])
const loading = ref(false)
const searched = ref(false)

// Traemos todas las noticias de todas las categorías (sin .where por categoría)
const { data: todas } = await useAsyncData('todas-las-noticias', () => {
  return queryCollection('noticias').all()
})

function textoDelCuerpo(noticia) {
  // El body se guarda como AST; lo serializamos para poder
  // buscar también dentro del contenido del artículo, no solo el título.
  try {
    return JSON.stringify(noticia.body || '').toLowerCase()
  } catch {
    return ''
  }
}

function buscar() {
  searched.value = true
  const t = term.value.trim().toLowerCase()
  if (!t) {
    results.value = []
    return
  }
  loading.value = true
  results.value = (todas.value || []).filter((n) => {
    const enTitulo = n.title?.toLowerCase().includes(t)
    const enDescripcion = n.description?.toLowerCase().includes(t)
    const enCuerpo = textoDelCuerpo(n).includes(t)
    return enTitulo || enDescripcion || enCuerpo
  })
  loading.value = false
}
</script>

<template>
  <div class="container">
    <NuxtLink to="/">← Inicio</NuxtLink>
    <h1>🔍 Buscar noticias</h1>
    <p>Busca en todas las categorías, incluyendo el cuerpo de cada artículo.</p>

    <form class="search-form" @submit.prevent="buscar">
      <input v-model="term" placeholder="Ej: gobierno, gol, concierto..." />
      <button type="submit">Buscar</button>
    </form>

    <p v-if="loading">Buscando…</p>
    <p v-else-if="searched && !results.length">
      No se encontraron resultados para "{{ term }}".
    </p>

    <div class="news-list">
      <article v-for="n in results" :key="n.path" class="news-card">
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
