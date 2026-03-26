'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export type AccordionItem = {
  q: string
  a: string
}

export default function Accordion({
  items,
}: {
  items: AccordionItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="rounded-[18px] border border-border overflow-hidden bg-white">
      {items.map((item, idx) => {
        const open = openIndex === idx
        return (
          <div key={item.q} className="border-b border-border last:border-b-0">
            <button
              type="button"
              aria-label={`Toggle FAQ: ${item.q}`}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full text-left px-6 py-5 flex items-start gap-4"
            >
              <span className="mt-1">
                <ChevronDown
                  size={18}
                  className={`text-green-mid transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden
                />
              </span>
              <span className="font-body font-medium text-text-body leading-relaxed">
                {item.q}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-text-muted text-[14px] leading-relaxed font-body">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

