<!-- components/Footer.vue -->
<template>
  <footer class="border-t border-border/40 pt-16 pb-8 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <!-- Brand -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-2">
            <span class="accent-dot" />
            <h3 class="font-display text-lg font-bold tracking-editorial">Vasilis Rousis</h3>
          </div>
          <p class="text-sm text-muted-foreground leading-relaxed max-w-sm">
            A passionate developer focused on creating beautiful, functional digital experiences.
          </p>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-2">
          <h4 class="tracking-wide-caps text-xs font-semibold text-muted-foreground mb-4">Pages</h4>
          <ul class="space-y-2.5">
            <li v-for="item in navItems" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="md:col-span-2">
          <h4 class="tracking-wide-caps text-xs font-semibold text-muted-foreground mb-4">
            Connect
          </h4>
          <ul class="space-y-2.5">
            <li>
              <a
                href="https://github.com/Vasilis-Rousis"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:github" class="h-3.5 w-3.5" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vasilis-rousis/"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:linkedin" class="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/vasilis.r/"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:facebook" class="h-3.5 w-3.5" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vasilis_rousis/"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:instagram" class="h-3.5 w-3.5" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:col-span-3">
          <h4 class="tracking-wide-caps text-xs font-semibold text-muted-foreground mb-4">
            Contact
          </h4>
          <ul class="space-y-2.5">
            <li>
              <a
                href="mailto:vasileios.rousis1@gmail.com"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:mail" class="h-3.5 w-3.5" />
                vasileios.rousis1@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+306971596684"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="lucide:phone" class="h-3.5 w-3.5" />
                +306971596684
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-14 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-xs text-muted-foreground/70">
          &copy; {{ new Date().getFullYear() }} Vasilis Rousis
        </p>
        <button
          class="text-xs text-muted-foreground/70 hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
          @click="scrollToTop"
        >
          Back to top
          <Icon
            name="lucide:arrow-up"
            class="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>
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
