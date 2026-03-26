'use server'

import { supabaseAdmin } from '@/lib/supabase/admin'
import { sendContactNotification } from '@/lib/email'
import { z } from 'zod'

const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  phone:   z.string().min(10, 'Enter a valid phone number'),
  email:   z.string().email().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source:  z.string().optional(),
})

export type ContactState = {
  success: boolean
  error: string | null
}

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries())
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message }
  }

  const { data, error } = await supabaseAdmin
    .from('contacts')
    .insert(parsed.data)
    .select()
    .single()

  if (error) {
    return { success: false, error: 'Failed to send message. Please call us directly.' }
  }

  sendContactNotification(data).catch(console.error)
  return { success: true, error: null }
}
