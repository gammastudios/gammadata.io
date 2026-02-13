import { NextRequest, NextResponse } from "next/server"

// GET handler for testing if route is accessible
export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    message: "Contact API is running",
    hasApiKey: !!process.env.RESEND_API_KEY 
  })
}

export async function POST(request: NextRequest) {
  console.log("[Contact API] ========== NEW REQUEST ==========")
  
  try {
    // Import Resend inside the handler to avoid top-level initialization issues
    const { Resend } = await import("resend")
    
    const apiKey = process.env.RESEND_API_KEY
    console.log("[Contact API] API key configured:", !!apiKey)
    
    if (!apiKey) {
      console.error("[Contact API] ERROR: RESEND_API_KEY not set!")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, company, projectType, message } = body
    
    console.log("[Contact API] Received:", { name, email, company, projectType, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[Contact API] Validation failed")
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    console.log("[Contact API] Sending email via Resend...")

    // Build email content with all fields
    const textContent = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      projectType ? `Project Type: ${projectType}` : null,
      ``,
      `Message:`,
      message
    ].filter(Boolean).join("\n")

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    const { data, error } = await resend.emails.send({
      from: "Gamma Data Website <noreply@gammadata.io>",
      to: ["accounts@gammadata.io"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${company ? ` (${company})` : ""}`,
      text: textContent,
      html: htmlContent,
    })

    if (error) {
      console.error("[Contact API] Resend error:", JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      )
    }

    console.log("[Contact API] ✅ Email sent! ID:", data?.id)
    return NextResponse.json({ success: true, id: data?.id })
    
  } catch (error) {
    console.error("[Contact API] Error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
