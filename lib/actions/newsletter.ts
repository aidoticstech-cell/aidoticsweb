'use server'

import { supabaseAdmin } from '@/lib/supabase/admin'
import { z } from 'zod'

const schema = z.object({ email: z.string().email('Enter a valid email address') })

export type NewsletterState = { success: boolean; error: string | null }

export async function subscribeNewsletter(prevState: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const parsed = schema.safeParse({ email: formData.get('email') })

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message }
  }

  const { error } = await supabaseAdmin
    .from('newsletter_subscribers')
    .upsert({ email: parsed.data.email }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) return { success: false, error: 'Subscription failed. Please try again.' }
  return { success: true, error: null }
}
