'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/variants'
import SectionLabel from '@/components/ui/SectionLabel'
import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import type { Caregiver } from '@/lib/supabase/types'

export default function FeaturedCaregivers({ caregivers }: { caregivers: Caregiver[] }) {
  if (caregivers.length === 0) return null
  
  return (
    <section className="bg-green-pale py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionLabel>Our Team</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-display font-light text-h2 text-maroon-deep mb-10">
            Meet Some of Our Caregivers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caregivers.map((c, index) => (
              <motion.div
                key={c.id}
                variants={fadeUp}
                className="bg-white rounded-[18px] border border-border overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-80 bg-green-mid/20 relative overflow-hidden">
                  {c.photo_url ? (
                    <Image
                      src={c.photo_url}
                      alt={c.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/20 font-body">
                      Photo placeholder
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="font-body font-medium text-text-body text-[15px] mb-1">{c.name}</p>
                  <p className="text-text-muted text-[13px] mb-4">
                    {c.role} · {c.years_experience} yrs exp
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-pale text-green-mid text-[11px] px-3 py-1 rounded-full font-body font-medium inline-flex items-center gap-1">
                      <ShieldCheck size={14} aria-hidden /> Police Verified
                    </span>
                    <span className="bg-maroon-pale text-maroon-mid text-[11px] px-3 py-1 rounded-full font-body font-medium inline-flex items-center gap-1">
                      <ShieldCheck size={14} aria-hidden /> Certified
                    </span>
                  </div>

                  <p className="font-display italic text-[16px] text-maroon-deep leading-relaxed">&quot;{c.bio}&quot;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

