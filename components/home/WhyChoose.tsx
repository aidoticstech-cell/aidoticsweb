'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/variants'
import SectionLabel from '@/components/ui/SectionLabel'
import { Clock, HeartHandshake, ShieldCheck, Users } from 'lucide-react'

const pillars = [
  {
    title: 'Verified & Trusted',
    desc: 'Every caregiver background-checked, police-verified, and reference-validated before joining.',
    Icon: ShieldCheck,
  },
  {
    title: 'Fast Deployment',
    desc: 'From your first call to caregiver at your door in under 3 hours. Every time.',
    Icon: Clock,
  },
  {
    title: 'Whole-Person Care',
    desc: 'We care for the body, mind, and emotional wellbeing of your loved one.',
    Icon: HeartHandshake,
  },
  {
    title: 'Your Choice, Always',
    desc: 'Hourly shifts, 12-hour shifts, or 24×7 live-in. You decide what works.',
    Icon: Users,
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionLabel>Our Promise</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-display font-light text-h2 text-maroon-deep mb-14">
            Where Clinical Excellence Meets Family Care
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white rounded-[18px] border border-border p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-pale flex items-center justify-center">
                    <Icon className="text-green-mid" size={22} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-text-body text-[17px] mb-2">{title}</h3>
                    <p className="text-text-muted font-body text-[14px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

