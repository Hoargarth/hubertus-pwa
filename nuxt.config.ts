// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/abstract/_variables.scss" as *;
            @use "@/assets/styles/abstract/_mixins.scss" as *;
            `
        }
      }
    }
  },
  modules: [
    '@nuxt/image',
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    workbox: {
      enabled: true
    },
    manifest: {
      name: 'SG Hubertus Pfraundorf e.V.',
      lang: 'de',
      background_color: '#224E00',
      theme_color: '#224E00'
    }
  }
})
