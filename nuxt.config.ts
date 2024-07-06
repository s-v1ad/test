export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  postcss: {
    plugins: { autoprefixer: { overrideBrowserslist: ['last 4 versions'], cascade: false } }
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
