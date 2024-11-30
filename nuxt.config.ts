import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-file-storage',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/device',
    '@hypernym/nuxt-anime',
    'dayjs-nuxt',
    'nuxt-openapi-docs-module',
    'nuxt-aos',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  fileStorage: {
    mount: './public/uploads',
  },
  anime: {
    composables: true
  },
  
  // googleFonts: {
  //   families: {
  //     Roboto: true
  //   }
  // },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
