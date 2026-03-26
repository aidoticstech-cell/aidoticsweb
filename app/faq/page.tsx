import SectionLabel from '@/components/ui/SectionLabel'
import Accordion, { AccordionItem } from '@/components/ui/Accordion'
import { faqs } from '@/lib/data'

export default function FAQPage() {
  return (
    <div className="pb-24">
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <SectionLabel>FAQ</SectionLabel>
            <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
              Questions, answered with clarity
            </h1>
            <p className="text-text-muted font-body text-sm leading-relaxed">
              Everything families typically ask before booking care from Aidotics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10">
            {faqs.map((group) => {
              const items: AccordionItem[] = group.items.map((it) => ({ q: it.q, a: it.a }))
              return (
                <div key={group.category}>
                  <div className="mb-4">
                    <p className="text-[11px] font-body font-medium tracking-[2px] uppercase mb-3 text-green-mid">
                      {group.category}
                    </p>
                  </div>
                  <Accordion items={items} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

