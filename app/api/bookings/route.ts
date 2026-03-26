import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { sendBookingNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate required fields
    const required = ['service_slug', 'service_name', 'patient_name', 'contact_name', 'contact_phone', 'address', 'city', 'duration_type']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Insert booking
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .insert({
        service_slug:         body.service_slug,
        service_name:         body.service_name,
        patient_name:         body.patient_name,
        patient_age:          body.patient_age || null,
        patient_condition:    body.patient_condition || null,
        contact_name:         body.contact_name,
        contact_phone:        body.contact_phone,
        contact_email:        body.contact_email || null,
        address:              body.address,
        city:                 body.city,
        pincode:              body.pincode || null,
        preferred_start_date: body.preferred_start_date || null,
        preferred_time:       body.preferred_time || null,
        duration_type:        body.duration_type,
        special_notes:        body.special_notes || null,
      })
      .select()
      .single()

    if (error) throw error

    // Send email notification (non-blocking)
    sendBookingNotification(data).catch(console.error)

    return NextResponse.json({ success: true, booking_id: data.id }, { status: 201 })
  } catch (err) {
    console.error('Booking error:', err)
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 })
  }
}
