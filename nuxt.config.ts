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
  }
})
