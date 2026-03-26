import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const limit    = parseInt(searchParams.get('limit') || '10')
    const page     = parseInt(searchParams.get('page')  || '1')
    const offset   = (page - 1) * limit

    let query = supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, category, read_time, cover_image, author_name, published_at', { count: 'exact' })
      .eq('published', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (category) query = query.eq('category', category)

    const { data, error, count } = await query
    if (error) throw error

    return NextResponse.json({ posts: data, total: count, page, limit })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
