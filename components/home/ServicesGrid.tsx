'use client'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/variants'
import { services } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel>Our Services</SectionLabel>
        <h2 className="font-display font-light text-h2 text-maroon-deep mb-3">Complete Home Care, Tailored to You</h2>
        <p className="text-text-muted mb-12">
          Not sure which service fits?{' '}
          <Link href="/services" className="text-maroon-mid underline-offset-2 hover:underline">Take our 2-minute care quiz →</Link>
        </p>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(svc => (
            <motion.div key={svc.slug} variants={fadeUp}>
              <Link
                href={`/services/${svc.slug}`}
                className="group block bg-white border border-border rounded-[18px] overflow-hidden hover:border-maroon-mid hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-l-[3px] border-l-maroon-mid"
              >
                {('image' in svc && svc.image) ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={svc.image as string} 
                      alt={svc.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-maroon-deep/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ) : (
                  <div className="h-4 w-full bg-maroon-mid/5" />
                )}
                
                <div className="p-7">
                  <h3 className="font-body font-medium text-[18px] text-text-body mb-2 group-hover:text-maroon-mid transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {svc.tagline}
                  </p>
                  <span className="text-maroon-mid text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-body">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

