import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { sendContactNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json({ error: 'Name, phone, and message are required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert({
        name:    body.name,
        phone:   body.phone,
        email:   body.email || null,
        message: body.message,
        source:  body.source || 'contact-page',
      })
      .select()
      .single()

    if (error) throw error

    sendContactNotification(data).catch(console.error)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Contact error:', err)
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 })
  }
}
