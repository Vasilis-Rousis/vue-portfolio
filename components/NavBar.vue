<!-- components/NavBar.vue -->
<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur-xl transition-colors duration-300"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <span class="accent-dot transition-transform duration-300 group-hover:scale-150" />
        <span class="font-display text-lg font-bold tracking-editorial text-foreground">
          Vasilis Rousis
        </span>
      </NuxtLink>

      <!-- Mobile menu button -->
      <button
        class="md:hidden rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon v-if="!isMenuOpen" name="lucide:menu" class="h-5 w-5" />
        <Icon v-else name="lucide:x" class="h-5 w-5" />
      </button>

      <!-- Desktop menu -->
      <nav class="hidden md:flex items-center gap-1">
        <div v-for="item in navItems" :key="item.href" class="relative">
          <NuxtLink
            :to="item.href"
            class="px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 rounded-md"
            :class="
              $route.path === item.href
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            "
          >
            {{ item.label }}
          </NuxtLink>
          <div
            v-if="$route.path === item.href"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
          />
        </div>

        <div class="ml-4 pl-4 border-l border-border/50">
          <button
            class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
            @click="toggleDarkMode"
          >
            <Icon
              name="lucide:sun"
              class="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 dark:absolute"
            />
            <Icon
              name="lucide:moon"
              class="h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 absolute dark:relative"
            />
            <span class="sr-only">Toggle theme</span>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile menu dropdown -->
    <div
      v-if="isMenuOpen"
      class="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
    >
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="flex items-center gap-3 px-3 py-2.5 text-sm font-body font-medium rounded-md transition-colors duration-200"
          :class="
            $route.path === item.href
              ? 'text-accent bg-accent/5'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
          "
          @click="isMenuOpen = false"
        >
          <span v-if="$route.path === item.href" class="w-1 h-1 rounded-full bg-accent" />
          {{ item.label }}
        </NuxtLink>

        <div class="mt-2 pt-3 border-t border-border/40">
          <button
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors w-full rounded-md hover:bg-muted/30"
            @click="toggleDarkMode"
          >
            <Icon
              name="lucide:sun"
              class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden"
            />
            <Icon
              name="lucide:moon"
              class="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block"
            />
            <span class="text-sm">Toggle theme</span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const colorMode = useColorMode()
const isMenuOpen = ref(false)

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]
</script>
