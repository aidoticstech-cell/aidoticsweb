import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const svc = services.find((s) => s.slug === params.slug)
  if (!svc) notFound()

  const otherServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3)

  return (
    <div className="pb-24">
      {/* Service Hero */}
      <section className="bg-green-deep">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Service</SectionLabel>
              <h1 className="font-display font-light text-[clamp(38px,5vw,62px)] text-white leading-[1.05] mb-4">
                {svc.name}
              </h1>
              <p className="text-white/60 font-body text-[16px] leading-relaxed max-w-xl">
                {svc.tagline}
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Button href="/contact" variant="primary">Book This Service</Button>
                <Button href="/contact" variant="ghost">Talk to Us</Button>
              </div>
            </div>

            {('image' in svc && svc.image) ? (
              <div className="rounded-[28px] overflow-hidden relative h-[340px] md:h-[420px] shadow-lg border-2 border-green-mid/20">
                <Image 
                  src={svc.image as string} 
                  alt={`${svc.name} service`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-[28px] bg-maroon-mid/20 h-[340px] md:h-[420px] flex items-center justify-center text-white/20 font-body">
                Service photo placeholder
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>What&apos;s Included</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">Support you can trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {svc.includes.map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-maroon-mid" />
                <p className="text-text-muted font-body text-[14px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-green-pale py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel light>Who Is This For</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">For the families who need care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svc.forWhom.map((item) => (
              <div key={item} className="bg-white rounded-[18px] border border-border p-7">
                <p className="text-text-body font-body font-medium text-[14px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-maroon-pale py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Pricing for {svc.name}</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">Choose what fits your schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svc.plans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-[18px] border border-border p-8 flex items-center justify-center min-h-[140px]">
                <p className="font-display text-[28px] md:text-[34px] text-maroon-deep leading-tight text-center">
                  {plan.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary">Enquire Now</Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>FAQs</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">Questions families ask</h2>
          <div className="grid grid-cols-1 gap-6">
            {svc.faqs.length === 0 ? (
              <p className="text-text-muted font-body">FAQs will be added soon for this service.</p>
            ) : (
              svc.faqs.map((f) => (
                <div key={f.q} className="bg-white rounded-[18px] border border-border p-7">
                  <p className="font-body font-medium text-text-body mb-2">{f.q}</p>
                  <p className="text-text-muted text-[14px] leading-relaxed">{f.a}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-green-wash py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Related Services</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">You may also need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="group bg-white border border-border rounded-[18px] p-7 hover:border-maroon-mid hover:-translate-y-1 hover:shadow-sm transition-all duration-200 border-l-[3px] border-l-maroon-mid"
              >
                <h3 className="font-body font-medium text-[16px] text-text-body mb-2">{rs.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{rs.tagline}</p>
                <p className="text-maroon-mid text-sm group-hover:underline">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-deep/95 backdrop-blur z-40 border-t border-maroon-mid/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <p className="text-white/70 text-[11px] uppercase tracking-[2px] font-body font-medium">
              Book {svc.name}
            </p>
            <p className="text-white font-display font-light text-[18px] leading-tight">
              Get started in 60 seconds
            </p>
          </div>
          <Button href="/contact" variant="primary">Get Started</Button>
        </div>
      </div>
    </div>
  )
}

