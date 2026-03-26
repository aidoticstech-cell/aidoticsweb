'use server'

import { supabaseAdmin } from '@/lib/supabase/admin'
import { sendBookingNotification } from '@/lib/email'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const bookingSchema = z.object({
  service_slug:         z.string().min(1),
  service_name:         z.string().min(1),
  patient_name:         z.string().min(2),
  patient_age:          z.number().optional(),
  patient_condition:    z.string().optional(),
  contact_name:         z.string().min(2),
  contact_phone:        z.string().min(10),
  contact_email:        z.string().email().optional().or(z.literal('')),
  address:              z.string().min(5),
  city:                 z.string().min(2),
  pincode:              z.string().optional(),
  preferred_start_date: z.string().optional(),
  preferred_time:       z.string().optional(),
  duration_type:        z.enum(['hourly', '12-hour', '24x7']),
  special_notes:        z.string().optional(),
})

export type BookingState = {
  success: boolean
  error: string | null
  booking_id: string | null
}

export async function submitBooking(prevState: BookingState, formData: FormData): Promise<BookingState> {
  const raw = Object.fromEntries(formData.entries())
  const parsed = bookingSchema.safeParse({
    ...raw,
    patient_age: raw.patient_age ? parseInt(raw.patient_age as string) : undefined,
  })

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message, booking_id: null }
  }

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .insert(parsed.data)
    .select()
    .single()

  if (error) {
    console.error('Booking insert error:', error)
    return { success: false, error: 'Failed to submit booking. Please call us directly.', booking_id: null }
  }

  sendBookingNotification(data).catch(console.error)
  revalidatePath('/contact')

  return { success: true, error: null, booking_id: data.id }
}
