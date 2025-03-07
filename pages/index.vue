<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="py-16 md:py-28 lg:py-36">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-6">
            <div class="inline-block">
              <Badge variant="secondary" class="mb-6 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-medium">
                Available for hire
              </Badge>
            </div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400">
              Hi, I'm <span class="font-extrabold">Your Name</span>
            </h1>
            <p class="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              Developer & Designer creating beautiful digital experiences with a focus on user-centered design and performance
            </p>
            <div class="flex flex-col gap-3 min-[400px]:flex-row">
              <Button class="group bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-primary/25" as-child>
                <NuxtLink to="/projects" class="flex items-center">
                  <Icon name="lucide:briefcase" class="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  View My Work
                </NuxtLink>
              </Button>
              <Button variant="outline" class="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300" as-child>
                <NuxtLink to="/contact" class="flex items-center">
                  <Icon name="lucide:mail" class="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Contact Me
                </NuxtLink>
              </Button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-full blur-md opacity-70 animate-pulse"/>
              <Avatar class="h-72 w-72 border-4 border-white dark:border-gray-950 relative">
                <AvatarImage src="/your-photo.jpg" alt="Your Name" />
                <AvatarFallback class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">YN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-16 md:py-24">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400">Featured Projects</span>
            <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"/>
          </h2>
          <p class="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-lg/relaxed">
            Check out some of my recent work
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="project in featuredProjects" :key="project.id" class="overflow-hidden group border-0 bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300">
            <AspectRatio ratio="16:9">
              <div class="overflow-hidden">
                <img :src="project.image" :alt="project.title" class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" >
              </div>
            </AspectRatio>
            <CardHeader>
              <CardTitle class="text-xl font-bold">{{ project.title }}</CardTitle>
              <CardDescription class="text-gray-600 dark:text-gray-400">{{ project.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge 
                  v-for="tag in project.tags" 
                  :key="tag"
                  variant="secondary"
                  class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {{ tag }}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" class="p-0 text-primary dark:text-primary-400 group-hover:underline" :to="project.link">
                View Project
                <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div class="flex justify-center mt-12">
          <Button variant="outline" class="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300" as-child>
            <NuxtLink to="/projects" class="flex items-center">
              View All Projects
              <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl relative">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 dark:from-primary dark:to-blue-400">Skills & Technologies</span>
            <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"/>
          </h2>
        </div>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <Badge 
            v-for="skill in skills" 
            :key="skill"
            variant="outline"
            class="text-sm py-2 px-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {{ skill }}
          </Badge>
        </div>
      </div>
    </section>
    
    <!-- Dark Mode Toggle -->
    <div class="fixed bottom-6 right-6">
      <Button variant="outline" size="icon" class="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-lg" @click="toggleDarkMode">
        <Icon name="lucide:sun" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="lucide:moon" class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </div>
</template>

<script setup>

const colorMode = useColorMode()

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with Vue 3 and Node.js',
    image: '/projects/project1.jpg',
    tags: ['Vue 3', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop functionality',
    image: '/projects/project2.jpg',
    tags: ['Vue 3', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive charts',
    image: '/projects/project3.jpg',
    tags: ['Vue 3', 'API Integration', 'Chart.js'],
    link: '#'
  }
];

const skills = [
  'Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
  'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design', 'UI/UX', 'RESTful APIs'
];
</script>