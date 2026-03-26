import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .upsert({ email }, { onConflict: 'email', ignoreDuplicates: true })

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Newsletter error:', err)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}
