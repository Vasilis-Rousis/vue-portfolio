// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',    // fallback value if not system preference found
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  compatibilityDate: '2025-03-07'
})