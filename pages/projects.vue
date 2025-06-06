<!-- pages/projects.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text mb-6">
            My Projects
          </h1>
          <p class="text-xl text-muted-foreground">
            Showcasing my best work and creative solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="pb-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            :variant="activeFilter === 'all' ? 'default' : 'outline'"
            @click="activeFilter = 'all'"
          >
            All Projects
          </Button>
          <Button
            :variant="activeFilter === 'web' ? 'default' : 'outline'"
            @click="activeFilter = 'web'"
          >
            Web
          </Button>
          <Button
            :variant="activeFilter === 'mobile' ? 'default' : 'outline'"
            @click="activeFilter = 'mobile'"
          >
            Mobile
          </Button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12 bg-muted/30">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in filteredProjects" :key="project.id" class="group">
            <Card
              class="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div class="relative">
                <AspectRatio :ratio="4 / 3" class="overflow-hidden">
                  <NuxtImg
                    :src="project.image"
                    :alt="project.title"
                    width="400"
                    height="300"
                    format="webp"
                    placeholder
                    loading="lazy"
                    class="object-cover w-full h-full"
                  />
                  <div
                    class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/100 to-transparent"
                  />
                </AspectRatio>
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                >
                  <Button variant="secondary" size="sm" class="backdrop-blur-sm mr-1" as-child>
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                      View Repo
                    </a>
                  </Button>
                  <Button
                    v-if="project.siteLink"
                    variant="secondary"
                    size="sm"
                    class="backdrop-blur-sm"
                    as-child
                  >
                    <a :href="project.siteLink" target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div class="flex items-center justify-between">
                  <CardTitle class="text-xl font-bold">{{ project.title }}</CardTitle>
                  <HoverCard v-if="project.longDescription">
                    <HoverCardTrigger as-child>
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:info" class="h-4 w-4" />
                        <span class="sr-only">Project Info</span>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div class="space-y-2">
                        <h4 class="text-sm font-semibold">About this project</h4>
                        <p class="text-xs">{{ project.longDescription }}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <CardDescription class="text-sm text-muted-foreground line-clamp-2">
                  {{ project.description }}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="tag in project.tags"
                    :key="tag"
                    variant="secondary"
                    class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs"
                  >
                    {{ tag }}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- CTA Section -->
    <section class="py-16 md:py-24 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold tracking-tight mb-4">Have a project in mind?</h2>
          <p class="text-lg text-muted-foreground mb-8">
            I'm always looking for interesting projects to work on. Let's discuss how I can help
            bring your ideas to life.
          </p>
          <Button size="lg" as-child>
            <NuxtLink to="/contact">Let's Talk</NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineOgImageComponent('NuxtSeo')

const activeFilter = ref('all')

const projects = [
  {
    id: 1,
    title: 'WonderGuide',
    description:
      'A Virtual travel guide using ChatGPT API to suggest amazing travel itineraries 🌴☀️🌊',
    image: '/images/wonderguide.jpg',
    tags: ['Nuxt 3', 'Supabase', 'ChatGPT API'],
    link: 'https://github.com/Vasilis-Rousis/wonderguide-app',
    longDescription:
      'WonderGuide is an innovative virtual travel assistant that leverages the ChatGPT API to create personalized travel itineraries. Users can specify their destination, travel duration, interests, and budget, and the app generates detailed day-by-day itineraries with recommendations for attractions, restaurants, and activities. Built with Nuxt 3 for the frontend and Supabase for backend services including user authentication and data storage. The integration with ChatGPT API enables natural language interaction and tailored travel suggestions that feel like recommendations from a knowledgeable local guide. This project showcases my skills in API integration, modern frontend development, and creating intuitive user experiences.',
    category: 'web',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description:
      'Showcasing my journey in web development, featuring projects that highlight my expertise in modern web technologies',
    image: '/images/portfolio-website.jpg',
    tags: ['Nuxt 3', 'Tailwind', 'Vite'],
    link: 'https://github.com/Vasilis-Rousis/vue-portfolio',
    longDescription:
      'This portfolio website serves as a digital showcase of my development skills and professional journey. Built with Nuxt 3 and styled with Tailwind CSS, it features a responsive design that looks great on all devices. The site includes sections for my projects, skills, experience, and contact information, all optimized for performance using Vite as the build tool. I implemented modern UI components with smooth animations and transitions to create an engaging user experience. The project demonstrates my proficiency in frontend development, UI/UX design principles, and ability to create clean, maintainable code. The site also serves as a practical example of my approach to building modern web applications with a focus on performance and accessibility.',
    category: 'web',
  },
  {
    id: 3,
    title: 'Weatheroo',
    description:
      'Modern weather app built with Nuxt 3, featuring interactive maps, geolocation, and Redis caching',
    image: '/images/weatheroo.jpg',
    tags: ['Nuxt 3', 'Tailwind', 'Redis', 'OpenWeather API'],
    link: 'https://github.com/Vasilis-Rousis/weatheroo',
    siteLink: 'https://weatheroo-three.vercel.app',
    longDescription:
      'A comprehensive weather application built with Nuxt 3 and TypeScript, showcasing full-stack development skills. Features include real-time weather data from OpenWeatherMap API, interactive weather maps powered by Leaflet, and intelligent geolocation services with user preference management. The app implements Redis-based caching and rate limiting for optimal performance, animated weather conditions, and responsive design using Tailwind CSS and shadcn/ui components. Additional features include dark/light mode theming, progressive loading states, local timezone detection, and a polished user experience with smooth transitions. Deployed with proper error handling, admin monitoring, and scalable architecture patterns.',
    category: 'web',
  },
  {
    id: 4,
    title: 'Warehouse Management App',
    description: 'Android app for managing warehouse inventory and tracking shipments',
    image: '/images/warehouse-management.jpg',
    tags: ['Java', 'SQLite', 'OkHttp3'],
    link: 'https://github.com/Vasilis-Rousis/warehouse-management-app',
    longDescription:
      'The Warehouse Management App is a comprehensive Android application developed to streamline inventory management and shipment tracking in warehouse environments. Built with Java and utilizing SQLite for local data storage, the app enables warehouse staff to scan barcodes, track inventory levels, manage product locations, and process incoming and outgoing shipments. OkHttp3 is used to communicate with backend systems, ensuring real-time data synchronization. The app features an offline mode that allows continued operation during network outages, with automatic syncing when connectivity is restored. Key functionalities include inventory auditing, shipment status updates, low stock alerts, and comprehensive reporting capabilities. This project demonstrates my ability to develop mobile solutions for complex business requirements.',
    category: 'mobile',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter((project) => project.category === activeFilter.value)
})
</script>
