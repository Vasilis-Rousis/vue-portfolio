<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-32 lg:py-40 relative overflow-hidden border-none">
      <!-- Subtle ambient background -->
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"
      />
      <div
        class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"
      />

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div class="space-y-8">
            <div>
              <p class="tracking-wide-caps text-xs font-semibold text-accent mb-4">
                Software Developer
              </p>
              <h1
                class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-editorial leading-[1.1]"
              >
                Hi, I'm
                <span class="text-accent">Vasilis</span>
              </h1>
            </div>
            <p class="max-w-[520px] text-muted-foreground text-lg leading-relaxed">
              Software developer creating beautiful digital experiences with a focus on
              user-centered design and performance
            </p>
            <div class="flex flex-col gap-3 min-[400px]:flex-row pt-2">
              <Button
                class="group bg-foreground hover:bg-foreground/90 text-background font-body font-medium transition-all duration-300"
                as-child
              >
                <NuxtLink to="/projects" class="flex items-center">
                  View My Work
                  <Icon
                    name="lucide:arrow-right"
                    class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </NuxtLink>
              </Button>
              <Button
                variant="outline"
                class="group border-border hover:bg-muted/50 font-body font-medium transition-all duration-300"
                as-child
              >
                <NuxtLink to="/contact" class="flex items-center">
                  Contact Me
                  <Icon
                    name="lucide:arrow-right"
                    class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                  />
                </NuxtLink>
              </Button>
            </div>
          </div>

          <!-- Avatar -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute -inset-3 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-full blur-2xl"
              />
              <Avatar
                class="h-64 w-64 md:h-72 md:w-72 border-2 border-border/50 relative shadow-2xl shadow-black/5 dark:shadow-black/20"
              >
                <NuxtImg
                  src="/images/avatar.jpg"
                  alt="Vasilis Rousis"
                  width="288"
                  height="288"
                  loading="eager"
                  fetchpriority="high"
                  class="object-cover"
                />
              </Avatar>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center mt-20">
          <button
            class="rounded-full border border-border/50 p-2.5 text-muted-foreground/50 hover:text-foreground hover:border-border transition-all duration-300"
            aria-label="Scroll to projects"
            @click="scrollToProjects"
          >
            <Icon name="lucide:chevron-down" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- Featured Projects Section -->
    <section id="projects" class="py-20 md:py-28">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Portfolio</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-editorial mb-4">
            Featured Projects
          </h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            Check out some of my recent work
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            class="overflow-hidden group border border-border/40 bg-card shadow-sm hover:shadow-lg transition-all duration-500 card-hover flex flex-col"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="w-full overflow-hidden">
              <AspectRatio :ratio="4 / 3">
                <NuxtImg
                  :src="project.image"
                  :alt="project.title"
                  width="400"
                  height="300"
                  format="webp"
                  placeholder
                  loading="lazy"
                  class="object-cover w-full h-full scale-110 group-hover:scale-115 transition-transform duration-700"
                />
                <div
                  class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"
                />
              </AspectRatio>
            </div>

            <div class="flex-grow flex flex-col">
              <CardHeader>
                <CardTitle class="font-display text-xl font-bold tracking-editorial">
                  {{ project.title }}
                </CardTitle>
                <CardDescription class="text-sm leading-relaxed mt-1">
                  {{ project.description }}
                </CardDescription>
              </CardHeader>
              <CardContent class="flex-grow">
                <div class="flex flex-wrap gap-1.5">
                  <Badge
                    v-for="tag in project.tags"
                    :key="tag"
                    variant="secondary"
                    class="text-xs font-body font-medium bg-muted/80 text-muted-foreground"
                  >
                    {{ tag }}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter class="flex flex-col items-start gap-2 pt-0">
                <NuxtLink
                  v-if="project.siteLink"
                  :to="project.siteLink"
                  class="group/link flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  Visit Site
                  <Icon
                    name="lucide:arrow-up-right"
                    class="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </NuxtLink>
                <NuxtLink
                  :to="project.link"
                  class="group/link flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  View Repository
                  <Icon
                    name="lucide:arrow-up-right"
                    class="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </NuxtLink>
              </CardFooter>
            </div>
          </Card>
        </div>

        <div class="flex justify-center mt-14">
          <Button
            variant="outline"
            class="group border-border hover:bg-muted/50 font-body font-medium transition-all duration-300"
            as-child
          >
            <NuxtLink to="/projects" class="flex items-center">
              View All Projects
              <Icon
                name="lucide:arrow-right"
                class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- Skills Section -->
    <section class="py-20 md:py-28 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Expertise</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-editorial mb-4">
            Skills & Technologies
          </h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            Tools and technologies I work with
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(skill, index) in skillsWithIcons"
            :key="index"
            class="flex items-center gap-3 p-4 rounded-lg border border-border/30 bg-card/50 hover:bg-card hover:border-border/60 transition-all duration-300 group"
          >
            <div
              class="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300"
            >
              <Icon :name="skill.icon" class="h-5 w-5 text-accent" />
            </div>
            <span class="font-body font-medium text-sm">{{ skill.name }}</span>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap gap-2">
          <Badge
            v-for="skill in additionalSkills"
            :key="skill"
            variant="outline"
            class="text-xs font-body font-medium py-1.5 px-3 border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70 transition-colors duration-200"
          >
            {{ skill }}
          </Badge>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- Certifications Section -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Credentials</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-editorial mb-4">
            Certifications
          </h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            Professional qualifications and achievements
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <Card
            v-for="(certification, index) in certifications"
            :key="index"
            class="border border-border/40 bg-card shadow-sm hover:shadow-md transition-all duration-400"
          >
            <CardContent class="p-8 flex flex-col h-full">
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                >
                  <Icon :name="certification.icon" class="h-6 w-6 text-accent" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-display text-lg font-bold tracking-editorial leading-snug mb-1">
                    {{ certification.name }}
                  </h3>
                  <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{{ certification.issuer }}</span>
                    <span class="accent-dot" />
                    <span>{{ certification.date }}</span>
                  </div>
                </div>
              </div>

              <p class="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {{ certification.description }}
              </p>

              <div>
                <a
                  :href="certification.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/cert inline-flex items-center text-sm font-body font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  View Certificate
                  <Icon
                    name="lucide:arrow-up-right"
                    class="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5"
                  />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- CTA Section -->
    <section
      class="py-20 md:py-28 bg-foreground text-background cta-section relative overflow-hidden"
    >
      <!-- Subtle texture -->
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3" />

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p class="tracking-wide-caps text-xs font-semibold text-accent mb-4">
          Open to Opportunities
        </p>
        <h2
          class="font-display text-3xl md:text-4xl font-bold tracking-editorial mb-5 max-w-2xl mx-auto"
        >
          Looking for a Developer to Level Up Your Team?
        </h2>
        <p class="text-lg mb-10 max-w-xl mx-auto opacity-70 leading-relaxed">
          I bring technical expertise, creative problem-solving, and collaborative energy to every
          project I work on.
        </p>
        <Button
          size="lg"
          class="group bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold transition-all duration-300"
          as-child
        >
          <NuxtLink to="/contact" class="flex items-center">
            Get in Touch
            <Icon
              name="lucide:arrow-right"
              class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOgImageComponent('NuxtSeo')

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
    title: 'JobTracker',
    description:
      'A full-stack job application tracking app built with React, Node.js, and PostgreSQL. It allows users to manage their job applications, track progress, and stay organized throughout their job search.',
    image: '/images/job-tracker.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/Vasilis-Rousis/track-job',
    siteLink: 'https://job-tracker.duckdns.org/',
  },
  {
    id: 2,
    title: 'Weatheroo',
    description:
      'A modern weather dashboard built with Nuxt 3 featuring interactive maps, geolocation services, real-time animations, and Redis-powered caching',
    image: '/images/weatheroo.jpg',
    tags: ['Nuxt 3', 'Tailwind', 'Redis', 'OpenWeather API'],
    link: 'https://github.com/Vasilis-Rousis/weatheroo',
    siteLink: 'https://weatheroo-three.vercel.app/',
  },
  {
    id: 3,
    title: 'FPL Edge',
    description:
      'Fantasy Premier League analytics dashboard with algorithm-based player scoring, H2H insights, and transfer recommendations',
    image: '/images/fpl-edge.jpg',
    tags: ['Next.js 16', 'Tailwind', 'Supabase', 'FPL API', 'TypeScript'],
    link: 'https://github.com/Vasilis-Rousis/fpl-app',
    siteLink: 'https://fpl-app-five.vercel.app/',
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
</script>
