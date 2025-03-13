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
              Hi, I'm <span class="font-extrabold">Vasilis</span>
            </h1>
            <p
              class="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed"
            >
              Software developer creating beautiful digital experiences with a focus on
              user-centered design and performance
            </p>
            <div class="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                class="group bg-primary hover:bg-primary/90 text-white dark:text-black transition-all duration-300 shadow-lg hover:shadow-primary/25"
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
                <AvatarImage
                  src="/images/avatar.jpg"
                  alt="Your Name"
                  width="288"
                  height="288"
                  loading="eager"
                  fetchpriority="high"
                />
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
            class="overflow-hidden group border-0 bg-card shadow-md hover:shadow-xl transition-all duration-300 card-hover flex flex-col"
          >
            <div class="w-full">
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
            </div>

            <!-- Content container -->
            <div class="flex-grow">
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
            </div>
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

    <!-- Certifications Section -->
    <section class="py-16 md:py-24 with-bg">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400"
              >Certifications</span
            >
            <span
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"
            />
          </h2>
          <p class="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            Professional qualifications and achievements
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <Card
            v-for="(certification, index) in certifications"
            :key="index"
            class="bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full"
          >
            <CardContent class="pt-6">
              <div class="flex justify-center mb-4">
                <div class="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon :name="certification.icon" class="h-8 w-8 text-primary" />
                </div>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-xl font-bold mb-2">{{ certification.name }}</h3>
                <p class="text-muted-foreground">{{ certification.issuer }}</p>
                <Badge class="mt-2">{{ certification.date }}</Badge>
              </div>
              <p class="text-center text-muted-foreground">{{ certification.description }}</p>
              <div class="mt-6 flex justify-center">
                <Button variant="outline" size="sm" as-child>
                  <a
                    :href="certification.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center"
                  >
                    <Icon name="lucide:external-link" class="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
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
          Looking for a Developer to Level Up Your Team?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          I bring technical expertise, creative problem-solving, and collaborative energy to every
          project I work on.
        </p>
        <Button
          size="lg"
          variant="secondary"
          class="glass text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25"
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

defineOgImageComponent('NuxtSeo')

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
    title: 'WonderGuide',
    description:
      'A Virtual travel guide using ChatGPT API to suggest amazing travel itineraries 🌴☀️🌊',
    image: '/images/wonderguide.jpg',
    tags: ['Nuxt 3', 'Supabase', 'ChatGPT API'],
    link: '/projects',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description:
      'Showcasing my journey in web development, featuring projects that highlight my expertise in modern web technologies',
    image: '/images/portfolio-website.jpg',
    tags: ['Nuxt 3', 'Tailwind', 'Vite'],
    link: '/projects',
  },
  {
    id: 3,
    title: 'Warehouse Management App',
    description: 'Android app for managing warehouse inventory and tracking shipments',
    image: '/images/warehouse-management.jpg',
    tags: ['Java', 'SQLite', 'OkHttp3'],
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
  'Confluence',
  'CSS3',
  'Git',
  'RESTful APIs',
  'Node.js',
  'Supabase',
  'Figma',
  'Adobe Experience Manager',
  'Jira',
  'Performance Optimization',
]

// Certifications Data
const certifications = [
  {
    name: 'Adobe Certified Expert - Adobe Experience Manager Sites Developer',
    issuer: 'Adobe',
    date: 'January 2024',
    description:
      'The Adobe Experience Manager Sites Developer certification is the industry-recognized validation of ones proficiency in, and successful implementation of Adobe Experience Manager Developer',
    icon: 'lucide:badge-check',
    link: 'https://www.credly.com/badges/90da3cef-7f49-4d77-945a-f4dc3a5cec91/linked_in_profile',
  },
  {
    name: 'Adobe Certified Expert - Adobe Experience Manager Sites Business Practitioner',
    issuer: 'Adobe',
    date: 'December 2022',
    description:
      'The  Adobe Experience Manager Sites Business Practitioner certification is the industry-recognized validation of ones proficiency in Adobe Experience Manager. This certification requires in-depth knowledge of working with the AEM web content management capabilities and mobile capabilities.',
    icon: 'lucide:badge-check',
    link: 'https://www.credly.com/badges/964e0337-98c5-43f0-a1e6-2e97a4e92122/linked_in_profile',
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
