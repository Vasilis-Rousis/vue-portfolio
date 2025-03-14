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
    '@nuxtjs/seo',
  ],
  site: {
    name: 'Vasilis Rousis - Software Developer',
    description:
      'Software developer creating beautiful digital experiences with a focus on user-centered design and performance',
    url: 'https://www.vasilis-rousis.com',
    defaultLocale: 'en',
  },
  robots: {
    enabled: true,
    allow: ['/'],
    disallow: [], // Empty array to not disallow anything
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
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
      icon: 40,
      icon2x: 80,
      icon3x: 120,
      icon4x: 160,
      '1': 1,
      '2': 2,
      '4': 4,
      '8': 8,
      '10': 10,
      '16': 16,
      '32': 32,
      '48': 48,
      '64': 64,
      '96': 96,
      '100': 100,
      '200': 200,
      '360': 360,
      '400': 400,
      '720': 720,
      '800': 800,
      '1200': 1200,
      '1600': 1600,
      '2000': 2000,
      '2400': 2400,
      '2800': 2800,
      '3200': 3200,
    },

    // Add domains if you're loading external images
    domains: [],

    // Set default image provider
    provider: 'vercel',

    // Enable image preloading for critical images
    preload: true,
  },

  // Add performance optimization
  app: {
    head: {
      link: [
        // Preload the hero image
        {
          as: 'image',
          href: '/images/avatar.jpg',
          type: 'image/jpeg',
        },
      ],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`,
          async: true,
          defer: true,
        },
      ],
    },
  },
  // Add runtime config for environment variables
  runtimeConfig: {
    // Server-side environment variables
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailSecure: process.env.EMAIL_SECURE,
    emailRecipient: process.env.EMAIL_RECIPIENT,
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,

    // Public variables (if needed)
    public: {
      // Variables exposed to the client
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    },
  },
})
