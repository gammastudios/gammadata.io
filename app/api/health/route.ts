import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    message: "API routes are working!"
  })
}

export async function POST() {
  return NextResponse.json({ 
    status: "ok",
    method: "POST",
    message: "POST is working too!"
  })
}
