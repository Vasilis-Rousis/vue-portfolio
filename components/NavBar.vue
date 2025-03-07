<!-- components/NavBar.vue -->
<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex gap-6 md:gap-10">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400">
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
        <div v-for="item in navItems" :key="item.href" class="h-16 flex items-center">
          <div class="relative h-full flex items-center">
            <NuxtLink 
              :to="item.href" 
              class="text-sm font-medium transition-colors hover:text-primary h-full flex items-center"
              :class="$route.path === item.href ? 'text-primary' : 'text-foreground'"
            >
              {{ item.label }}
            </NuxtLink>
            <!-- Underline indicator -->
            <div 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ease-in-out"
              :style="{
                transform: $route.path === item.href ? 'scaleX(1)' : 'scaleX(0)',
                opacity: $route.path === item.href ? 1 : 0,
                transformOrigin: 'left'
              }"
            />
          </div>
        </div>
        
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
        <div v-for="item in navItems" :key="item.href" class="relative">
          <NuxtLink 
            :to="item.href" 
            class="block text-sm py-2 font-medium transition-colors hover:text-primary"
            :class="$route.path === item.href ? 'text-primary' : 'text-foreground'"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
            <div 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ease-in-out"
              :style="{
                transform: $route.path === item.href ? 'scaleX(1)' : 'scaleX(0)',
                opacity: $route.path === item.href ? 1 : 0,
                transformOrigin: 'left'
              }"
            />
          </NuxtLink>
        </div>
        
        <!-- Mobile Dark Mode Toggle -->
        <div class="pt-2 mt-2 border-t border-border">
          <button 
            class="flex w-full items-center justify-between text-sm py-2 font-medium text-foreground hover:text-primary transition-colors" 
            @click="toggleDarkMode"
          >
            <div class="relative">
              <Icon name="lucide:sun" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icon name="lucide:moon" class="absolute top-0 left-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const colorMode = useColorMode();
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