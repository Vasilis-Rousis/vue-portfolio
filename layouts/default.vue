<!-- layouts/default.vue -->
<template>
  <div
    class="min-h-screen bg-background text-foreground flex flex-col font-body antialiased transition-colors duration-300"
  >
    <NavBar />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <Footer />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>
