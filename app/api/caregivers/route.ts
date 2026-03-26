import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(req.url)
    const specialty = searchParams.get('specialty')
    const limit     = parseInt(searchParams.get('limit') || '12')

    let query = supabase
      .from('caregivers')
      .select('*')
      .eq('available', true)
      .order('rating', { ascending: false })
      .limit(limit)

    if (specialty) {
      query = query.contains('specializations', [specialty])
    }

    const { data, error } = await query
    if (error) throw error

    return NextResponse.json({ caregivers: data })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch caregivers' }, { status: 500 })
  }
}
