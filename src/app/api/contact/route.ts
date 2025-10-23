import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, postcode, service, message } = body

    // Validate required fields
    if (!name || !email || !postcode || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Debug environment variables
    console.log('Email config check:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      hasPass: !!process.env.EMAIL_PASS,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    })

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const emailContent = `
📧 NEW ENQUIRY - Paper Shredding Bournemouth

👤 CUSTOMER DETAILS:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Postcode: ${postcode}

🛠️ SERVICE REQUEST:
Service: ${service}
${message ? `\n📝 ADDITIONAL DETAILS:\n${message}` : ''}

---
📅 Submitted: ${new Date().toLocaleString('en-GB')}
🌐 Source: Paper Shredding Bournemouth Website
    `.trim()

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry - ${service} - ${postcode}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    })

    return NextResponse.json(
      { message: 'Enquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: `Failed to send enquiry: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
