import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    noticias: defineCollection({
      // 'page' genera automáticamente una ruta (path) para cada archivo .md
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['sucesos', 'deportes', 'espectaculos']),
        date: z.string(),
        author: z.object({
          name: z.string(),
          bio: z.string(),
          image: z.string()
        })
      })
    })
  }
})
