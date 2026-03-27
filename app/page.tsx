import { getPublishedTestimonials, getPublishedPosts, getAvailableCaregivers } from '@/lib/fetchers'
import Hero               from '@/components/home/Hero'
import StatsBar           from '@/components/home/StatsBar'
import ServicesGrid       from '@/components/home/ServicesGrid'
import HowItWorks         from '@/components/home/HowItWorks'
import Testimonials       from '@/components/home/Testimonials'
import BlogPreview        from '@/components/home/BlogPreview'
import FeaturedCaregivers from '@/components/home/FeaturedCaregivers'
import CTABand            from '@/components/home/CTABand'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [testimonials, posts, caregivers] = await Promise.all([
    getPublishedTestimonials(),
    getPublishedPosts(undefined, 3),
    getAvailableCaregivers(3),
  ])

  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedCaregivers caregivers={caregivers} />
      <Testimonials testimonials={testimonials} />
      <BlogPreview posts={posts} />
      <CTABand />
    </main>
  )
}
