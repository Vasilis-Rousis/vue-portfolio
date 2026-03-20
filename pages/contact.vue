<!-- pages/contact.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center">
          <p class="tracking-wide-caps text-xs font-semibold text-accent mb-4">Let's Connect</p>
          <h1
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-editorial mb-6"
          >
            Get In Touch
          </h1>
          <p class="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I'd love to hear from you! Let's discuss your project or answer any questions.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <Card class="border border-border/40 bg-card shadow-sm">
              <CardHeader>
                <CardTitle class="font-display text-2xl tracking-editorial">
                  Send a Message
                </CardTitle>
                <CardDescription class="text-muted-foreground leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <!-- Status message alert -->
                <div
                  v-if="formStatus.show"
                  class="mb-6 p-4 rounded-lg transition-all duration-300 text-sm"
                  :class="
                    formStatus.isError
                      ? 'bg-destructive/10 text-destructive border border-destructive/20'
                      : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/30'
                  "
                >
                  <div class="flex items-start gap-3">
                    <Icon
                      :name="formStatus.isError ? 'lucide:alert-circle' : 'lucide:check-circle'"
                      class="h-4 w-4 mt-0.5 flex-shrink-0"
                    />
                    <p class="font-medium">{{ formStatus.message }}</p>
                  </div>
                </div>

                <form ref="contactForm" class="space-y-5" @submit.prevent="submitForm">
                  <div class="space-y-1.5">
                    <label for="name" class="text-sm font-body font-medium">Name</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      class="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm font-body transition-colors duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:border-accent/50"
                      :class="errors.name ? 'border-destructive' : 'border-input'"
                      placeholder="Your name"
                    />
                    <p v-if="errors.name" class="text-xs text-destructive mt-1">
                      {{ errors.name }}
                    </p>
                  </div>

                  <div class="space-y-1.5">
                    <label for="email" class="text-sm font-body font-medium">Email</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm font-body transition-colors duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:border-accent/50"
                      :class="errors.email ? 'border-destructive' : 'border-input'"
                      placeholder="your.email@example.com"
                    />
                    <p v-if="errors.email" class="text-xs text-destructive mt-1">
                      {{ errors.email }}
                    </p>
                  </div>

                  <div class="space-y-1.5">
                    <label for="subject" class="text-sm font-body font-medium">Subject</label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      class="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm font-body transition-colors duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:border-accent/50"
                      :class="errors.subject ? 'border-destructive' : 'border-input'"
                      placeholder="What's this regarding?"
                    />
                    <p v-if="errors.subject" class="text-xs text-destructive mt-1">
                      {{ errors.subject }}
                    </p>
                  </div>

                  <div class="space-y-1.5">
                    <label for="message" class="text-sm font-body font-medium">Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="flex w-full rounded-md border bg-background px-3 py-2.5 text-sm font-body transition-colors duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:border-accent/50 resize-none"
                      :class="errors.message ? 'border-destructive' : 'border-input'"
                      placeholder="Your message here..."
                      @focus="loadRecaptchaIfNeeded"
                    />
                    <p v-if="errors.message" class="text-xs text-destructive mt-1">
                      {{ errors.message }}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    class="w-full bg-foreground hover:bg-foreground/90 text-background font-body font-medium transition-all duration-300"
                    :disabled="isSubmitting"
                  >
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
          <div class="space-y-10">
            <div>
              <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Details</p>
              <h2 class="font-display text-2xl font-bold tracking-editorial mb-4">
                Contact Information
              </h2>
              <p class="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out to me through any of the following methods:
              </p>

              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:mail" class="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 class="font-body font-semibold text-sm mb-0.5">Email</h3>
                    <a
                      href="mailto:vasileios.rousis1@gmail.com"
                      class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      vasileios.rousis1@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:phone" class="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 class="font-body font-semibold text-sm mb-0.5">Phone</h3>
                    <a
                      href="tel:+306971596684"
                      class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      +306971596684
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:map-pin" class="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 class="font-body font-semibold text-sm mb-0.5">Location</h3>
                    <p class="text-sm text-muted-foreground">Thessaloniki, Greece</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <p class="tracking-wide-caps text-xs font-semibold text-accent mb-3">Social</p>
              <h2 class="font-display text-2xl font-bold tracking-editorial mb-5">
                Connect With Me
              </h2>
              <div class="flex gap-3">
                <a
                  href="https://github.com/Vasilis-Rousis"
                  class="h-10 w-10 rounded-lg border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon name="lucide:github" class="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vasilis-rousis/"
                  class="h-10 w-10 rounded-lg border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon name="lucide:linkedin" class="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/vasilis.r/"
                  class="h-10 w-10 rounded-lg border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon name="lucide:facebook" class="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/vasilis_rousis/"
                  class="h-10 w-10 rounded-lg border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon name="lucide:instagram" class="h-4 w-4" />
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
import { ref, reactive, onUnmounted } from 'vue'

defineOgImageComponent('NuxtSeo')

const contactForm = ref(null)
const recaptchaScriptLoaded = ref(false)
const recaptchaScriptLoading = ref(false)
const recaptchaScript = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  recaptchaToken: '',
})

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const config = useRuntimeConfig()
const isSubmitting = ref(false)
const formStatus = ref({
  show: false,
  isError: false,
  message: '',
})

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

// Load reCAPTCHA script dynamically when user interacts with form
const loadRecaptchaIfNeeded = () => {
  if (import.meta.client && !recaptchaScriptLoaded.value && !recaptchaScriptLoading.value) {
    recaptchaScriptLoading.value = true

    const siteKey = config.public.recaptchaSiteKey
    if (!siteKey) {
      console.error('reCAPTCHA site key is missing')
      return
    }

    // Create the script element
    recaptchaScript.value = document.createElement('script')

    // Set attributes with privacy-oriented parameters
    recaptchaScript.value.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    recaptchaScript.value.async = true
    recaptchaScript.value.defer = true

    // Add an event listener to know when the script is loaded
    recaptchaScript.value.onload = () => {
      recaptchaScriptLoaded.value = true
      recaptchaScriptLoading.value = false
    }

    recaptchaScript.value.onerror = () => {
      console.error('Failed to load reCAPTCHA script')
      recaptchaScriptLoading.value = false
    }

    // Append the script to the document
    document.head.appendChild(recaptchaScript.value)
  }
}

// Clean up reCAPTCHA script when component is unmounted
onUnmounted(() => {
  if (
    import.meta.client &&
    recaptchaScript.value &&
    document.head.contains(recaptchaScript.value)
  ) {
    document.head.removeChild(recaptchaScript.value)
  }
})

// Get reCAPTCHA token
const getRecaptchaToken = async () => {
  if (!import.meta.client) return null

  // If the script is not loaded yet, wait for it
  if (!recaptchaScriptLoaded.value) {
    loadRecaptchaIfNeeded()

    // Wait for script to load with a timeout
    let attempts = 0
    while (!window.grecaptcha && attempts < 20) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      attempts++
    }

    if (!window.grecaptcha) {
      console.error('reCAPTCHA failed to initialize')
      return null
    }
  }

  try {
    // Ensure grecaptcha is ready
    await new Promise((resolve) => {
      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(resolve)
      } else {
        resolve()
      }
    })

    // Execute and get token
    const token = await window.grecaptcha.execute(config.public.recaptchaSiteKey, {
      action: 'submit',
    })
    return token
  } catch (error) {
    console.error('Error getting reCAPTCHA token:', error)
    return null
  }
}

function validateForm() {
  let isValid = true
  errors.value = { name: '', email: '', subject: '', message: '' }

  // Name validation
  if (!form.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.value.name = 'Name must be at least 2 characters'
    isValid = false
  }

  // Email validation
  if (!form.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  // Subject validation
  if (!form.subject.trim()) {
    errors.value.subject = 'Subject is required'
    isValid = false
  } else if (form.subject.trim().length < 3) {
    errors.value.subject = 'Subject must be at least 3 characters'
    isValid = false
  }

  // Message validation
  if (!form.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

async function submitForm() {
  // First validate the form
  if (!validateForm()) {
    formStatus.value = {
      show: true,
      isError: true,
      message: 'Please correct the errors in the form',
    }
    return
  }

  isSubmitting.value = true
  formStatus.value.show = false

  try {
    // Load reCAPTCHA if not loaded yet
    if (!recaptchaScriptLoaded.value) {
      loadRecaptchaIfNeeded()
    }

    // Get reCAPTCHA token before submitting
    form.recaptchaToken = await getRecaptchaToken()

    // Continue with submission even if token is null (fallback to server-side validation)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const result = await response.json()

    if (!response.ok) {
      // Enhanced error handling based on status codes
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After') || 60
        throw new Error(`Message limit reached. Please try again in ${retryAfter} seconds.`)
      } else if (response.status === 400) {
        throw new Error(result.error || 'Invalid form data. Please check your inputs.')
      } else if (response.status === 403) {
        throw new Error('Verification failed. Please refresh the page and try again.')
      } else {
        throw new Error(result.error || 'Something went wrong. Please try again later.')
      }
    }

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    form.recaptchaToken = ''

    // Show success message
    formStatus.value = {
      show: true,
      isError: false,
      message: "Message sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error('Error sending message:', error)
    formStatus.value = {
      show: true,
      isError: true,
      message: error.message || 'Failed to send message. Please try again later.',
    }
  } finally {
    isSubmitting.value = false

    // Hide success message after 5 seconds, but keep error messages visible
    if (!formStatus.value.isError) {
      setTimeout(() => {
        formStatus.value.show = false
      }, 5000)
    }
  }
}
</script>
