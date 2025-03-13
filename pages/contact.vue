<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container px-4 md:px-6 relative">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text mb-6">
            Get In Touch
          </h1>
          <p class="text-xl text-muted-foreground">
            I'd love to hear from you! Let's discuss your project or answer any questions.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 md:py-16">
      <div class="container px-4 md:px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <Card class="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription
                  >Fill out the form below and I'll get back to you as soon as
                  possible.</CardDescription
                >
              </CardHeader>
              <CardContent>
                <form class="space-y-6" @submit.prevent="submitForm">
                  <div class="space-y-2">
                    <label for="name" class="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Your name"
                    />
                  </div>

                  <div class="space-y-2">
                    <label for="email" class="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div class="space-y-2">
                    <label for="subject" class="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="What's this regarding?"
                    />
                  </div>

                  <div class="space-y-2">
                    <label for="message" class="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      required
                      rows="5"
                      class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" class="w-full" :disabled="isSubmitting">
                    <Icon
                      v-if="isSubmitting"
                      name="lucide:loader-2"
                      class="mr-2 h-4 w-4 animate-spin"
                    />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold tracking-tight mb-4">Contact Information</h2>
              <p class="text-muted-foreground mb-6">
                Feel free to reach out to me through any of the following methods:
              </p>

              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <Icon name="lucide:mail" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-medium">Email</h3>
                    <p class="text-sm text-muted-foreground">
                      <a href="mailto:vasileios.rousis1@gmail.com" class="hover-underline"
                        >vasileios.rousis1@gmail.com</a
                      >
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <Icon name="lucide:phone" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-medium">Phone</h3>
                    <p class="text-sm text-muted-foreground">
                      <a href="tel:+306971596684" class="hover-underline">+306971596684</a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <Icon name="lucide:map-pin" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-medium">Location</h3>
                    <p class="text-sm text-muted-foreground">Thessaloniki, Greece</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h2 class="text-2xl font-bold tracking-tight mb-4">Connect With Me</h2>
              <div class="flex gap-4">
                <a
                  href="https://github.com/Vasilis-Rousis"
                  class="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name="lucide:github" class="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vasilis-rousis/"
                  class="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name="lucide:linkedin" class="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/vasilis.r/"
                  class="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name="lucide:facebook" class="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/vasilis_rousis/"
                  class="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name="lucide:instagram" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

function submitForm() {
  isSubmitting.value = true

  // Simulate form submission
  setTimeout(() => {
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    isSubmitting.value = false

    // Show success message (you would implement a proper notification system)
    alert('Message sent successfully!')
  }, 1500)
}
</script>
