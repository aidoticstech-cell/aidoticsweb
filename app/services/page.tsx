import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { services } from '@/lib/data'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
            Complete Home Care, Tailored to You
          </h1>
          <p className="text-text-muted max-w-2xl mb-12">
            Not sure which service fits? Take our 2-minute care quiz →
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex flex-col bg-white border border-border rounded-[24px] overflow-hidden hover:border-maroon-mid hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-[3px] border-l-maroon-mid"
              >
                {('image' in svc && svc.image) ? (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={svc.image as string} 
                      alt={svc.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-maroon-deep/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ) : (
                  <div className="h-6 w-full bg-maroon-mid/5" />
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="font-body font-medium text-[20px] text-text-body mb-3 group-hover:text-maroon-mid transition-colors">
                    {svc.name}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {svc.tagline}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-maroon-mid text-sm font-medium font-body inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Service Details <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-green-wash border border-border rounded-[18px] p-8">
            <div>
              <p className="text-green-mid text-[11px] uppercase tracking-[2px] font-body font-medium mb-2">
                Quick action
              </p>
              <h3 className="font-display font-light text-[28px] text-maroon-deep leading-tight">
                Get the right caregiver faster
              </h3>
              <p className="text-text-muted mt-2 text-sm">Book a free assessment and we’ll match accordingly.</p>
            </div>
            <Button href="/contact" variant="primary">Book Care Now</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

