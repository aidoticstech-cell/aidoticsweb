'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/variants'
import Button from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

import Image from 'next/image'

const pills = ['Police Verified', 'Certified Nurses', '24/7 Support', '3-Hour Deployment']

export default function Hero() {
  return (
    <section className="min-h-screen bg-green-deep flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-green-muted text-[11px] uppercase tracking-[3px] font-body font-medium mb-6">
            Premium Home Healthcare · Gurgaon, Delhi NCR
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display font-light text-hero text-white leading-[1.1] mb-6">
            Care that honours<br />
            your loved one&apos;s<br />
            <em className="text-maroon-soft not-italic">dignity.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 font-body text-[16px] leading-relaxed max-w-md mb-8">
            Certified nurses, trained caregivers & professional attendants — deployed to your home within 3 hours. Police-verified. NABH aligned.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap mb-8">
            <Button href="/contact" variant="primary">Book a Caregiver</Button>
            <Button href="/how-it-works" variant="ghost">Watch How It Works</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {pills.map(pill => (
              <span key={pill} className="flex items-center gap-1.5 bg-white/10 text-white/70 text-xs font-body px-3 py-1.5 rounded-full">
                <CheckCircle2 size={12} className="text-green-muted" /> {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hidden md:block aspect-[4/5] rounded-2xl relative overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero_caregiver_maroon.png"
            alt="Smiling caregiver in maroon uniform interacting with a happy senior patient"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay to blend into the green theme */}
          <div className="absolute inset-0 bg-green-deep/10 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

