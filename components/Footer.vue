<!-- components/Footer.vue -->
<template>
  <footer class="border-t py-8 bg-muted/30 mt-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Your Name</h3>
          <p class="text-sm text-muted-foreground max-w-xs">
            A passionate developer focused on creating beautiful, functional digital experiences.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Connect</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Icon name="lucide:github" class="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Icon name="lucide:linkedin" class="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Icon name="lucide:twitter" class="h-4 w-4" />
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Contact</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:your.email@example.com"
                class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Icon name="lucide:mail" class="h-4 w-4" />
                your.email@example.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Icon name="lucide:phone" class="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-center text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} Your Name. All rights reserved.
        </p>
        <div>
          <Button variant="outline" size="sm" class="h-8" @click="scrollToTop">
            Back to top
            <Icon name="lucide:chevron-up" class="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
