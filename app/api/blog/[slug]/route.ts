import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', params.slug)
      .eq('published', true)
      .single()

    if (error || !data) return NextResponse.json({ error: 'Post not found' }, { status: 404 })

    return NextResponse.json({ post: data })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}
