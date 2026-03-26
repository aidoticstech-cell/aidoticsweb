import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const required = ['organisation_name', 'contact_name', 'contact_phone', 'contact_email', 'organisation_type']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing: ${field}` }, { status: 400 })
      }
    }

    const { error } = await supabaseAdmin
      .from('partner_applications')
      .insert({
        organisation_name: body.organisation_name,
        contact_name:      body.contact_name,
        contact_phone:     body.contact_phone,
        contact_email:     body.contact_email,
        organisation_type: body.organisation_type,
        message:           body.message || null,
      })

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Partner error:', err)
    return NextResponse.json({ error: 'Application failed' }, { status: 500 })
  }
}
