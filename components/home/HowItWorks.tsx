'use client'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/variants'
import { howItWorks } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-green-deep">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel light>The Process</SectionLabel>
        <h2 className="font-display font-light text-h2 text-white mb-16">Care arranged in 4 simple steps</h2>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {howItWorks.map((step, i) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <div className="w-10 h-10 rounded-full border border-maroon-mid flex items-center justify-center mb-4">
                <span className="font-display text-maroon-soft text-lg">{step.step}</span>
              </div>
              <h3 className="font-body font-medium text-white text-[15px] mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              {/* Connector line */}
              {i < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-5 left-full w-full h-px border-t border-dashed border-maroon-mid/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-12 text-white/40 text-sm">
          Average enquiry-to-deployment: <span className="text-maroon-soft font-medium">2.8 hours</span>
        </p>
      </div>
    </section>
  )
}

