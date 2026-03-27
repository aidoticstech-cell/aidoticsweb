import { createClient } from './supabase/server'
import { cache } from 'react'

// React cache() deduplicates calls within the same request

export const getPublishedPosts = cache(async (category?: string, limit = 10) => {
  try {
    const supabase = createClient()
    let query = supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, category, read_time, cover_image, author_name, published_at')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (category) query = query.eq('category', category)
    const { data } = await query
    return data ?? []
  } catch (error) {
    console.error('getPublishedPosts error:', error)
    return []
  }
})

export const getPostBySlug = cache(async (slug: string) => {
  const supabase = createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  return data
})

export const getPublishedTestimonials = cache(async () => {
  try {
    const supabase = createClient()
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    return data ?? []
  } catch (error) {
    console.error('getPublishedTestimonials error:', error)
    return []
  }
})

export const getAvailableCaregivers = cache(async (limit = 6) => {
  try {
    const supabase = createClient()
    const { data } = await supabase
      .from('caregivers')
      .select('*')
      .eq('available', true)
      .order('rating', { ascending: false })
      .limit(limit)
    return data ?? []
  } catch (error) {
    console.error('getAvailableCaregivers error:', error)
    return []
  }
})
