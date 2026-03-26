import type { MetadataRoute } from 'next'
import { blogPosts, services } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aidotics.com'
  const lastModified = new Date().toISOString()

  const pages: string[] = [
    '/',
    '/about',
    '/services',
    '/caregivers',
    '/pricing',
    '/how-it-works',
    '/partner',
    '/blog',
    '/contact',
    '/emergency',
    '/faq',
    '/privacy-policy',
    '/terms',
  ]

  const servicePages = services.map((s) => `/services/${s.slug}`)
  const blogPages = blogPosts.map((p) => `/blog/${p.slug}`)

  return [
    ...pages.map((p) => ({
      url: `${baseUrl}${p}`,
      lastModified,
    })),
    ...servicePages.map((p) => ({
      url: `${baseUrl}${p}`,
      lastModified,
    })),
    ...blogPages.map((p) => ({
      url: `${baseUrl}${p}`,
      lastModified,
    })),
  ]
}

