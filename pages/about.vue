<!-- pages/about.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text mb-6">
            About Me
          </h1>
          <p class="text-xl text-muted-foreground">
            Get to know my story, skills, and what drives me as a developer
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="absolute -inset-4 rounded-xl bg-primary/10 blur-xl opacity-70" />
            <div class="relative aspect-square overflow-hidden rounded-xl">
              <img src="/your-photo.jpg" alt="Your Name" class="object-cover w-full h-full" />
            </div>
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl font-bold tracking-tight">My Journey</h2>
            <div class="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm <span class="font-medium text-foreground">Your Name</span>, a passionate
                front-end developer with a deep love for creating intuitive and beautiful user
                experiences.
              </p>
              <p>
                I started my journey into web development in 2018 when I built my first website.
                Since then, I've been constantly learning and improving my skills, working with
                various technologies and frameworks.
              </p>
              <p>
                With a background in design and a strong foundation in development, I bring a unique
                perspective that bridges the gap between aesthetics and functionality.
              </p>
              <p>
                When I'm not coding, you can find me hiking in nature, reading science fiction, or
                experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- Experience Section -->
    <section class="py-12 md:py-16 bg-muted/30">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-center mb-12">Experience</h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-12">
            <div
              class="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border"
            >
              <div
                class="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 rounded-full border bg-background"
              />
              <h3 class="font-semibold text-xl mb-1">Senior Front-end Developer</h3>
              <p class="text-sm text-muted-foreground mb-4">Company Name • 2021 - Present</p>
              <p class="text-muted-foreground">
                Led the development of the company's flagship product, implementing modern front-end
                architectures and best practices. Collaborated with UX/UI designers to create
                responsive interfaces and improved performance by 40%.
              </p>
            </div>

            <div
              class="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border"
            >
              <div
                class="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 rounded-full border bg-background"
              />
              <h3 class="font-semibold text-xl mb-1">Front-end Developer</h3>
              <p class="text-sm text-muted-foreground mb-4">Another Company • 2018 - 2021</p>
              <p class="text-muted-foreground">
                Developed and maintained multiple client websites using Vue.js and Nuxt. Implemented
                responsive designs and optimized user experiences across desktop and mobile
                platforms.
              </p>
            </div>

            <div
              class="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border"
            >
              <div
                class="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 rounded-full border bg-background"
              />
              <h3 class="font-semibold text-xl mb-1">Web Design Intern</h3>
              <p class="text-sm text-muted-foreground mb-4">Design Studio • 2017 - 2018</p>
              <p class="text-muted-foreground">
                Assisted in the design and development of client websites. Gained experience with
                HTML, CSS, and JavaScript fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- Skills and Tools Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-center mb-12">Skills & Tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card class="card-hover shadow-sm">
            <CardHeader>
              <CardTitle>Development Skills</CardTitle>
              <CardDescription>Technologies and languages I use daily</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Vue.js / Nuxt.js</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>JavaScript / TypeScript</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>HTML5 / CSS3</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Tailwind CSS</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Responsive Design</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>RESTful APIs</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Git / GitHub</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Node.js</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card class="card-hover shadow-sm">
            <CardHeader>
              <CardTitle>Design Skills</CardTitle>
              <CardDescription>Tools and concepts I utilize for design</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Figma</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Adobe XD</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>UI/UX Design</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Wireframing</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Prototyping</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Color Theory</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Typography</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  <span>Design Systems</span>
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
    <section class="py-12 md:py-16 bg-primary text-primary-foreground">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight mb-4">Ready to Work Together?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          I'm always open to discussing product design work or partnership opportunities.
        </p>
        <Button variant="secondary" size="lg" class="font-medium" as-child>
          <NuxtLink to="/contact">Get in Touch</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>
