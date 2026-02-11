import { NextRequest, NextResponse } from 'next/server'
import * as postmark from 'postmark'

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN!)

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

    // Send email via Postmark
    await client.sendEmail({
      From: process.env.EMAIL_FROM!,
      To: process.env.EMAIL_TO!,
      Subject: `New Enquiry - ${service} - ${postcode}`,
      TextBody: emailContent,
      HtmlBody: emailContent.replace(/\n/g, '<br>'),
      ReplyTo: email,
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
