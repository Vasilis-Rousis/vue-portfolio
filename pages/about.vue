<!-- pages/about.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-4">Get to Know Me</p>
          <h1
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-editorial mb-6"
          >
            About Me
          </h1>
          <p class="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Get to know my story, skills, and what drives me as a developer
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -inset-6 bg-accent/5 rounded-2xl blur-3xl" />
            <div
              class="relative overflow-hidden rounded-xl border border-border/30 shadow-lg shadow-black/5 dark:shadow-black/20"
            >
              <NuxtImg
                src="/images/hero.jpg"
                alt="Vasilis Rousis"
                class="object-cover w-full h-full"
                width="1200"
                quality="90"
              />
            </div>
          </div>
          <div class="space-y-6">
            <h2 class="font-display text-3xl font-bold tracking-editorial">My Journey</h2>
            <div class="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span class="font-medium text-foreground">Vasilis</span>, a passionate
                software developer with a deep love for creating intuitive and beautiful user
                experiences.
              </p>
              <p>
                I started my journey into web development in 2019. Since then, I've been constantly
                learning and improving my skills, working with various technologies and frameworks.
              </p>
              <p>
                With a background in mathematics and a strong foundation in development, I bring a
                unique perspective that bridges the gap between aesthetics and functionality.
              </p>
              <p>
                When I'm not coding, you can find me being terminally online, gaming, hiking in
                nature, working out, or binge-eating at a local tavern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- Experience Section -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-14">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Career</p>
          <h2 class="font-display text-3xl font-bold tracking-editorial">Experience</h2>
        </div>

        <div class="max-w-3xl">
          <div class="relative pl-8">
            <!-- Timeline line -->
            <div class="absolute left-0 top-2 bottom-0 w-px bg-border/60" />
            <!-- Timeline dot -->
            <div
              class="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-accent"
            />

            <div>
              <h3 class="font-display text-xl font-bold tracking-editorial mb-1">
                Software Developer
              </h3>
              <div class="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <span>Deloitte</span>
                <span class="accent-dot" />
                <span>2022 - Present</span>
              </div>
              <ul class="space-y-3 text-muted-foreground leading-relaxed">
                <li class="flex gap-3">
                  <span class="text-accent mt-1.5 flex-shrink-0">-</span>
                  <span>
                    Developed and maintained web applications using various tools and frameworks in
                    multiple projects
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent mt-1.5 flex-shrink-0">-</span>
                  <span>
                    Collaborated with cross-functional teams to design and implement innovative
                    features
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent mt-1.5 flex-shrink-0">-</span>
                  <span>
                    Ensured high levels of client satisfaction through tailored software development
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="text-accent mt-1.5 flex-shrink-0">-</span>
                  <span>
                    Led and coordinated team efforts, overseeing daily client communications and
                    ensuring project alignment with client expectations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" />

    <!-- Skills and Tools Section -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-14">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Expertise</p>
          <h2 class="font-display text-3xl font-bold tracking-editorial">Skills & Tools</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card class="border border-border/40 bg-card shadow-sm card-hover">
            <CardHeader>
              <CardTitle class="font-display text-xl tracking-editorial">
                Development Skills
              </CardTitle>
              <CardDescription class="text-sm text-muted-foreground">
                Technologies and languages I use daily
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="skill in devSkills"
                  :key="skill"
                  class="flex items-center gap-2.5 text-sm"
                >
                  <span class="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{{ skill }}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card class="border border-border/40 bg-card shadow-sm card-hover">
            <CardHeader>
              <CardTitle class="font-display text-xl tracking-editorial">
                Functional Skills
              </CardTitle>
              <CardDescription class="text-sm text-muted-foreground">
                Design, business tools and soft skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="skill in functionalSkills"
                  :key="skill"
                  class="flex items-center gap-2.5 text-sm"
                >
                  <span class="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{{ skill }}</span>
                </div>
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
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3" />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 class="font-display text-3xl md:text-4xl font-bold tracking-editorial mb-5">
          Ready to Work Together?
        </h2>
        <p class="text-lg mb-10 max-w-xl mx-auto opacity-70 leading-relaxed">
          I'm open to exciting opportunities where I can contribute my skills and grow with
          innovative companies.
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

const devSkills = [
  'React / Next.js',
  'Vue.js / Nuxt.js',
  'JavaScript / TypeScript',
  'Tailwind CSS',
  'Docker',
  'PostgreSQL / Supabase',
  'Git / GitHub',
  'Node.js / Express',
]

const functionalSkills = [
  'Jira',
  'Confluence',
  'UI/UX Design',
  'Wireframing',
  'Agile',
  'Communication',
  'Teamwork',
  'Figma',
]
</script>
