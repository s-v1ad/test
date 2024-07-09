export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],

  modules: ['@nuxt/icon'],

  postcss: {
    plugins: { autoprefixer: { overrideBrowserslist: ['last 4 versions'], cascade: false } }
  },

  app: {
    head: {
      title: 'Тестовый Nuxt.js проект',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Описание проекта' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/abstracts/functions.scss"; @import "@/assets/scss/abstracts/mixins.scss";'
        }
      }
    }
  }
})
