<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-28 lg:py-36 relative overflow-hidden border-none">
      <div class="absolute inset-0 bg-grid-pattern opacity-5" />
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-6">
            <h1
              class="text-4xl md:text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400"
            >
              Hi, I'm <span class="font-extrabold">Your Name</span>
            </h1>
            <p
              class="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed"
            >
              Developer & Designer creating beautiful digital experiences with a focus on
              user-centered design and performance
            </p>
            <div class="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                class="group bg-primary hover:bg-primary/90 text-black transition-all duration-300 shadow-lg hover:shadow-primary/25"
                as-child
              >
                <NuxtLink to="/projects" class="flex items-center">
                  <Icon
                    name="lucide:briefcase"
                    class="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                  View My Work
                </NuxtLink>
              </Button>
              <Button
                variant="outline"
                class="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                as-child
              >
                <NuxtLink to="/contact" class="flex items-center">
                  <Icon
                    name="lucide:mail"
                    class="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                  Contact Me
                </NuxtLink>
              </Button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-full blur-md opacity-70 animate-pulse"
              />
              <Avatar class="h-72 w-72 border-4 border-white dark:border-gray-950 relative">
                <AvatarImage src="/your-photo.jpg" alt="Your Name" />
                <AvatarFallback
                  class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                  >YN</AvatarFallback
                >
              </Avatar>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center mt-16">
          <button
            class="animate-bounce rounded-full bg-muted p-2 transition-colors hover:bg-muted-foreground/10"
            aria-label="Scroll to projects"
            @click="scrollToProjects"
          >
            <Icon name="lucide:chevron-down" class="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- Featured Projects Section -->
    <section id="projects" class="py-16 md:py-24 with-bg">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400"
              >Featured Projects</span
            >
            <span
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"
            />
          </h2>
          <p class="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            Check out some of my recent work
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            v-for="project in featuredProjects"
            :key="project.id"
            class="overflow-hidden group border-0 bg-card shadow-md hover:shadow-xl transition-all duration-300 card-hover"
          >
            <AspectRatio :ratio="16 / 9">
              <div class="overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AspectRatio>
            <CardHeader>
              <CardTitle class="text-xl font-bold">{{ project.title }}</CardTitle>
              <CardDescription>{{ project.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tag in project.tags"
                  :key="tag"
                  variant="secondary"
                  class="bg-muted text-muted-foreground"
                >
                  {{ tag }}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" class="p-0 text-primary group-hover:underline" as-child>
                <NuxtLink :to="project.link" class="flex items-center">
                  View Project
                  <Icon
                    name="lucide:arrow-right"
                    class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </NuxtLink>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div class="flex justify-center mt-12">
          <Button
            variant="outline"
            class="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            as-child
          >
            <NuxtLink to="/projects" class="flex items-center">
              View All Projects
              <Icon
                name="lucide:arrow-right"
                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- Skills Section -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400"
              >Skills & Technologies</span
            >
            <span
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"
            />
          </h2>
          <p class="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            Tools and technologies I work with
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(skill, index) in skillsWithIcons"
            :key="index"
            class="flex flex-col items-center p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Icon :name="skill.icon" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="font-medium text-center">{{ skill.name }}</h3>
          </div>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <Badge
            v-for="skill in additionalSkills"
            :key="skill"
            variant="outline"
            class="text-sm py-2 px-4 border bg-card hover:bg-muted transition-colors duration-200"
          >
            {{ skill }}
          </Badge>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 with-bg">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400"
              >Client Testimonials</span
            >
            <span
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"
            />
          </h2>
          <p class="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            What people say about working with me
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <CardContent class="pt-6">
              <div class="flex justify-center mb-4">
                <div class="flex text-amber-400">
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    name="lucide:star"
                    class="h-5 w-5"
                    :class="i <= testimonial.rating ? 'fill-current' : 'text-muted'"
                  />
                </div>
              </div>
              <blockquote class="text-center mb-6">
                <p class="text-muted-foreground italic">"{{ testimonial.text }}"</p>
              </blockquote>
              <div class="flex items-center justify-center gap-4">
                <Avatar class="h-12 w-12">
                  <AvatarImage :src="testimonial.avatar" :alt="testimonial.name" />
                  <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                </Avatar>
                <div class="text-center">
                  <h4 class="font-medium">{{ testimonial.name }}</h4>
                  <p class="text-sm text-muted-foreground">{{ testimonial.title }}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-violet-600/90 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Let's work together to bring your vision to life with stunning design and flawless
          functionality.
        </p>
        <Button
          size="lg"
          variant="secondary"
          class="glass font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25"
          as-child
        >
          <NuxtLink to="/contact" class="flex items-center">
            <Icon name="lucide:mail" class="mr-2 h-5 w-5" />
            Get in Touch
          </NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import functions
import { onMounted } from 'vue'

// Scroll function
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Featured Projects Data
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with Vue 3 and Node.js',
    image: '/projects/project1.jpg',
    tags: ['Vue 3', 'Node.js', 'MongoDB'],
    link: '/projects',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop functionality',
    image: '/projects/project2.jpg',
    tags: ['Vue 3', 'Firebase', 'Tailwind CSS'],
    link: '/projects',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive charts',
    image: '/projects/project3.jpg',
    tags: ['Vue 3', 'API Integration', 'Chart.js'],
    link: '/projects',
  },
]

// Skills with Icons
const skillsWithIcons = [
  { name: 'Vue.js', icon: 'lucide:code' },
  { name: 'Nuxt.js', icon: 'lucide:box' },
  { name: 'JavaScript', icon: 'lucide:file-code' },
  { name: 'TypeScript', icon: 'lucide:file-type' },
  { name: 'Tailwind CSS', icon: 'lucide:palette' },
  { name: 'UI/UX Design', icon: 'lucide:layout' },
  { name: 'Responsive Design', icon: 'lucide:smartphone' },
  { name: 'API Integration', icon: 'lucide:database' },
]

// Additional Skills
const additionalSkills = [
  'HTML5',
  'CSS3',
  'Git',
  'RESTful APIs',
  'Node.js',
  'Firebase',
  'Figma',
  'Adobe XD',
  'Animation',
  'Performance Optimization',
]

// Testimonials
const testimonials = [
  {
    name: 'Jane Smith',
    title: 'CEO at TechStart',
    text: 'Working with this developer was a game-changer for our startup. The attention to detail and commitment to quality exceeded our expectations.',
    avatar: '/testimonials/person1.jpg',
    initials: 'JS',
    rating: 5,
  },
  {
    name: 'John Doe',
    title: 'Marketing Director',
    text: "The website redesign completely transformed our online presence. We've seen a significant increase in engagement and conversion rates.",
    avatar: '/testimonials/person2.jpg',
    initials: 'JD',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    title: 'Product Manager',
    text: 'The developer delivered our app on time and within budget. Their technical skills and communication made the project run smoothly.',
    avatar: '/testimonials/person3.jpg',
    initials: 'EC',
    rating: 5,
  },
]

// Add background grid pattern after component is mounted
onMounted(() => {
  const style = document.createElement('style')
  style.innerHTML = `
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
    }
  `
  document.head.appendChild(style)
})
</script>

<style>
/* Custom styles that can't be handled by Tailwind */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.float-animation {
  animation: float 4s ease-in-out infinite;
}
</style>
