<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header class="sticky top-0 z-40 w-full border-b bg-background">
      <div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div class="flex gap-6 md:gap-10">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="font-bold text-xl">Your Name</span>
          </NuxtLink>
        </div>
        <nav class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-sm font-medium hover:text-primary">Home</NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium hover:text-primary">About</NuxtLink>
          <NuxtLink to="/projects" class="text-sm font-medium hover:text-primary">Projects</NuxtLink>
          <NuxtLink to="/contact" class="text-sm font-medium hover:text-primary">Contact</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="container py-8">
      <slot />
    </main>
    <footer class="border-t py-6">
      <div class="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground">
          © {{ new Date().getFullYear() }} Your Name. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <!-- Social links here -->
        </div>
      </div>
    </footer>
  </div>
</template>