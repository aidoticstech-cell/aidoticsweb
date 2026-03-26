import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ testimonials: data })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}
