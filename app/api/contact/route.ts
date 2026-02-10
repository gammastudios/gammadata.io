import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Debug: Check if API key is configured
const apiKey = process.env.RESEND_API_KEY
console.log("[Contact API] Initializing - API key configured:", !!apiKey, apiKey ? `(starts with ${apiKey.substring(0, 8)}...)` : "(missing)")

const resend = new Resend(apiKey)

export async function POST(request: NextRequest) {
  console.log("[Contact API] ========== NEW REQUEST ==========")
  
  try {
    const body = await request.json()
    const { name, email, message } = body
    
    console.log("[Contact API] Received submission:", { name, email, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[Contact API] Validation failed - missing fields:", { name: !!name, email: !!email, message: !!message })
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check API key before attempting send
    if (!apiKey) {
      console.error("[Contact API] ERROR: RESEND_API_KEY environment variable is not set!")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    console.log("[Contact API] Attempting to send email via Resend...")
    console.log("[Contact API] From: Gamma Data Website <noreply@gammadata.io>")
    console.log("[Contact API] To: accounts@gammadata.io")
    console.log("[Contact API] ReplyTo:", email)

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Gamma Data Website <noreply@gammadata.io>",
      to: ["accounts@gammadata.io"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("[Contact API] Resend API error:", JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      )
    }

    console.log("[Contact API] ✅ Email sent successfully! ID:", data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error)
    console.error("[Contact API] Error stack:", error instanceof Error ? error.stack : "No stack")
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
