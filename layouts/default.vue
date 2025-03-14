<!-- layouts/default.vue -->
<template>
  <div
    class="min-h-screen bg-background text-foreground flex flex-col antialiased transition-colors duration-300"
  >
    <NavBar />
    <main class="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </main>
    <Footer />
    <Analytics />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>
