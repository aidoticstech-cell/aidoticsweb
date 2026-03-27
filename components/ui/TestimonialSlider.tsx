'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type TestimonialItem = {
  text: string
  name: string
  location: string
  service: string
  rating: number
}

export default function TestimonialSlider({ testimonials }: { testimonials: TestimonialItem[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || testimonials.length === 0) return
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [paused, testimonials.length])

  if (testimonials.length === 0) return null

  const t = testimonials[index]

  return (
    <div className="text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Stars */}
      <div className="text-[#C49A45] text-lg mb-6">★★★★★</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display italic text-[22px] text-maroon-deep leading-relaxed mb-8 max-w-2xl mx-auto">
            &quot;{t.text}&quot;
          </p>
          <p className="font-body font-medium text-green-mid">{t.name}</p>
          <p className="text-text-muted text-sm mt-1">{t.service} · {t.location}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setIndex(i => (i - 1 + testimonials.length) % testimonials.length)}
          className="text-maroon-mid hover:text-maroon-deep"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-maroon-mid' : 'bg-border'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex(i => (i + 1) % testimonials.length)}
          className="text-maroon-mid hover:text-maroon-deep"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

