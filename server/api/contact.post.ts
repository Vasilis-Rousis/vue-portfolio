import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return {
        status: 400,
        body: { error: 'Missing required fields' },
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

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${config.emailUser}>`,
      to: config.emailRecipient || config.emailUser, // Your email address
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return {
      status: 200,
      body: { success: true, messageId: info.messageId },
    }
  } catch (error) {
    console.error('Error sending email:', error)

    return {
      status: 500,
      body: {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
    }
  }
})
