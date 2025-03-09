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
          <Button
            :variant="activeFilter === 'design' ? 'default' : 'outline'"
            @click="activeFilter = 'design'"
          >
            Design
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
                <AspectRatio :ratio="16 / 9">
                  <nuxt-img
                    :src="project.image"
                    :alt="project.title"
                    class="object-cover w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                >
                  <Button variant="secondary" size="sm" class="backdrop-blur-sm" as-child>
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div class="flex items-center justify-between">
                  <CardTitle class="text-xl font-bold">{{ project.title }}</CardTitle>
                  <HoverCard>
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

const activeFilter = ref('all')

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with Vue 3 and Node.js',
    longDescription:
      'This project involved creating a comprehensive e-commerce solution from scratch. It includes user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with Vue 3, Nuxt.js, Node.js, and MongoDB.',
    image: '/projects/project1.jpg',
    tags: ['Vue 3', 'Node.js', 'MongoDB'],
    category: 'web',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop functionality',
    longDescription:
      'A powerful task management application designed to boost productivity. Features include task categories, due dates, drag-and-drop organization, progress tracking, and data visualization. Built with Vue.js, Firebase, and Tailwind CSS.',
    image: '/projects/project2.jpg',
    tags: ['Vue 3', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive charts',
    longDescription:
      'An interactive weather dashboard that provides real-time weather data and forecasts. Features include location search, interactive charts, historical data comparison, and severe weather alerts. Built with Vue.js, Chart.js, and a Weather API.',
    image: '/projects/project3.jpg',
    tags: ['Vue 3', 'API Integration', 'Chart.js'],
    category: 'web',
    link: '#',
  },
  {
    id: 4,
    title: 'Fitness Tracking Mobile App',
    description: 'A mobile app for tracking workouts and nutrition',
    longDescription:
      'A comprehensive fitness tracking mobile application that helps users monitor their workouts, nutrition, and overall health. Features include workout plans, progress tracking, nutrition logging, and personalized recommendations.',
    image: '/projects/project4.jpg',
    tags: ['React Native', 'Firebase', 'Health API'],
    category: 'mobile',
    link: '#',
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    description: 'Interactive financial analytics platform',
    longDescription:
      'A sophisticated financial dashboard providing comprehensive analytics and visualization tools for personal and business finance management. Includes expense tracking, budget planning, investment monitoring, and financial goal setting.',
    image: '/projects/project5.jpg',
    tags: ['Vue', 'D3.js', 'Express'],
    category: 'web',
    link: '#',
  },
  {
    id: 6,
    title: 'Brand Identity Design',
    description: 'Complete brand identity for a local business',
    longDescription:
      'A complete brand identity design project for a local cafe, including logo design, color palette, typography selection, brand guidelines, packaging design, and marketing materials. Created using Adobe Creative Suite.',
    image: '/projects/project6.jpg',
    tags: ['Branding', 'Logo Design', 'Typography'],
    category: 'design',
    link: '#',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter((project) => project.category === activeFilter.value)
})
</script>
