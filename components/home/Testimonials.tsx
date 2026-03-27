import SectionLabel from '@/components/ui/SectionLabel'
import TestimonialSlider from '@/components/ui/TestimonialSlider'
import type { Testimonial } from '@/lib/supabase/types'

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <SectionLabel>What Families Say</SectionLabel>
        <h2 className="font-display font-light text-h2 text-maroon-deep mb-12">
          Trusted by 2,400+ Families<br />Across Delhi NCR
        </h2>
        <TestimonialSlider 
          testimonials={testimonials.map(t => ({
            text: t.text,
            name: t.client_name,
            location: t.location,
            service: t.service_slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            rating: t.rating
          }))} 
        />
      </div>
    </section>
  )
}

