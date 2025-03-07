<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
    <div class="md:container md:mx-auto flex h-16 items-center justify-between">
      <div class="flex gap-6 md:gap-10">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="font-bold text-xl pl-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400">
            Vasilis Rousis
          </span>
        </NuxtLink>
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon v-if="!isMenuOpen" name="lucide:menu" class="h-6 w-6" />
        <Icon v-else name="lucide:x" class="h-6 w-6" />
      </button>
      
      <!-- Desktop menu -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.href" 
          :to="item.href" 
          class="relative text-sm font-medium transition-colors hover:text-primary"
          :class="route === item.href ? 'text-primary' : 'text-foreground'"
        >
          {{ item.label }}
          <span 
            v-if="route === item.href"
            class="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary"
          />
        </NuxtLink>
        
        <Button variant="outline" size="sm" class="ml-4" @click="toggleDarkMode">
          <Icon name="lucide:sun" class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon name="lucide:moon" class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </nav>
    </div>
    
    <!-- Mobile menu dropdown -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden px-4 py-3 border-t bg-background"
    >
      <nav class="flex flex-col space-y-3">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.href" 
          :to="item.href" 
          class="text-sm py-1 font-medium transition-colors hover:text-primary"
          :class="route === item.href ? 'text-primary' : 'text-foreground'"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const colorMode = useColorMode();
const route = computed(() => useRoute().path);
const isMenuOpen = ref(false);

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
</script>