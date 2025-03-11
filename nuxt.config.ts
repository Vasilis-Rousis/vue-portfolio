// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  compatibilityDate: '2025-03-07',

  // Image optimization settings
  image: {
    // Set quality to reduce file size
    quality: 80,

    // Enable image optimization
    format: ['webp', 'avif', 'jpg', 'png'],

    // Define presets for common image sizes
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },

    // Add domains if you're loading external images
    domains: [],

    // Set default image provider
    provider: 'ipx',

    // Enable image preloading for critical images
    preload: true,
  },

  // Add performance optimization
  app: {
    head: {
      link: [
        // Preload the hero image
        {
          rel: 'preload',
          as: 'image',
          href: '/your-photo.jpg',
        },
      ],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
})
