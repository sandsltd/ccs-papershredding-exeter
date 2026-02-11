import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

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

    // Email content
    const emailContent = `
📧 NEW ENQUIRY - Paper Shredding Exeter

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
🌐 Source: Paper Shredding Exeter Website
    `.trim()

    // Send email via Resend
    await resend.emails.send({
      from: 'web@saunders-simmons.co.uk',
      to: process.env.EMAIL_TO!,
      subject: `New Enquiry - ${service} - ${postcode}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
      replyTo: email,
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
