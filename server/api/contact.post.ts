// server/api/contact.post.ts
import nodemailer from 'nodemailer'
import { rateLimit } from '../utils/rateLimit'

// Define the expected type for the request body
interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  recaptchaToken?: string
}

export default defineEventHandler(async (event) => {
  try {
    // Apply rate limiting - 5 requests per minute
    rateLimit({
      maxRequests: 5,
      windowMs: 60 * 1000,
      message: 'You have sent too many messages. Please try again later.',
      includeHeaders: true,
    })(event)

    const config = useRuntimeConfig()
    const body = await readBody<ContactFormData>(event)
    const { name, email, subject, message, recaptchaToken } = body

    // Enhanced input validation
    const validationErrors: Record<string, string> = {}

    if (!name || name.trim().length < 2) {
      validationErrors.name = !name ? 'Name is required' : 'Name must be at least 2 characters'
    }

    // Email validation with regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!email) {
      validationErrors.email = 'Email is required'
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Please provide a valid email address'
    }

    if (!subject || subject.trim().length < 3) {
      validationErrors.subject = !subject
        ? 'Subject is required'
        : 'Subject must be at least 3 characters'
    }

    if (!message || message.trim().length < 10) {
      validationErrors.message = !message
        ? 'Message is required'
        : 'Message must be at least 10 characters'
    }

    // Return validation errors if any
    if (Object.keys(validationErrors).length > 0) {
      return {
        status: 400,
        body: {
          error: 'Validation failed',
          details: validationErrors,
        },
      }
    }

    // Verify reCAPTCHA token if provided
    if (config.recaptchaSecretKey && recaptchaToken) {
      const isValidToken = await verifyRecaptchaToken(recaptchaToken, config.recaptchaSecretKey)
      if (!isValidToken) {
        return {
          status: 403,
          body: { error: 'CAPTCHA verification failed. Please try again.' },
        }
      }
    } else if (config.recaptchaSecretKey && !recaptchaToken) {
      return {
        status: 403,
        body: { error: 'CAPTCHA verification required. Please refresh and try again.' },
      }
    }

    // Configure email transporter using runtime config
    const transporter = nodemailer.createTransport({
      host: config.emailHost,
      port: parseInt(config.emailPort || '587'),
      secure: config.emailSecure === 'true',
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
    })

    // Sanitize inputs for email to prevent XSS
    const sanitizedName = name.replace(/[<>]/g, '')
    const sanitizedSubject = subject.replace(/[<>]/g, '')
    const sanitizedMessage = message.replace(/[<>]/g, '')

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${config.emailUser}>`,
      to: config.emailRecipient || config.emailUser,
      replyTo: email,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      text: `Name: ${sanitizedName}\nEmail: ${email}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          <h3>Message:</h3>
          <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
          <p><small>Sent from your portfolio contact form</small></p>
        </div>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    // Log success (optional - helpful for debugging)
    console.log('Message sent successfully:', info.messageId)

    return {
      status: 200,
      body: {
        success: true,
        messageId: info.messageId,
      },
    }
  } catch (error: unknown) {
    // Using unknown here as the error could be from different sources
    console.error('Error sending email:', error)

    interface RateLimitError {
      statusCode: number
      message?: string
      headers?: {
        'retry-after'?: string | number
      }
    }

    // Check if it's a rate limit error
    if (
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      error.statusCode === 429
    ) {
      const rateLimitError = error as RateLimitError
      const retryAfter = rateLimitError.headers?.['retry-after'] || 60
      const retrySeconds = typeof retryAfter === 'string' ? parseInt(retryAfter) : retryAfter

      let retryMessage = 'Please try again later'
      if (retrySeconds > 60) {
        const minutes = Math.ceil(retrySeconds / 60)
        retryMessage = `Please try again in ${minutes} minute${minutes > 1 ? 's' : ''}`
      } else {
        retryMessage = `Please try again in ${retrySeconds} second${retrySeconds > 1 ? 's' : ''}`
      }

      return {
        status: 429,
        body: {
          error: 'Too many requests',
          details: retryMessage,
          retryAfter: retrySeconds,
        },
      }
    }

    // Generic error response
    return {
      status: 500,
      body: {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
    }
  }
})

/**
 * Function to verify a reCAPTCHA token with Google's API
 *
 * @param token The reCAPTCHA token from the client
 * @param secretKey Your reCAPTCHA secret key
 * @returns A promise that resolves to true if the token is valid
 */
async function verifyRecaptchaToken(token: string, secretKey: string): Promise<boolean> {
  if (!token) return false

  interface RecaptchaResponse {
    success: boolean
    score?: number
    action?: string
    challenge_ts?: string
    hostname?: string
    'error-codes'?: string[]
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
    })

    const data: RecaptchaResponse = await response.json()

    // For reCAPTCHA v3, also check the score (0.0 to 1.0, where 1.0 is very likely a good interaction)
    // You can adjust the threshold based on your security needs
    const threshold = 0.5 // Default threshold
    return data.success === true && (data.score === undefined || data.score >= threshold)
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}
