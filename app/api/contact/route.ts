import { NextResponse } from "next/server"
import { z } from "zod"

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(2),
  date: z.string().min(1),
  message: z.string().min(5),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  const parsed = Schema.safeParse(data)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 })
  }
  // Simulate email send - log submission
  console.log("[v0] CONTACT_SUBMISSION", parsed.data)
  return NextResponse.json({ ok: true })
}
