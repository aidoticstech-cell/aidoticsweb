import Button from '@/components/ui/Button'

export default function CTABand() {
  return (
    <section className="bg-maroon-mid py-16 relative overflow-hidden">
      {/* Decorative numeral */}
      <span className="absolute right-12 top-1/2 -translate-y-1/2 font-display text-[200px] font-semibold text-black/5 select-none pointer-events-none leading-none">3</span>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative">
        <div>
          <h2 className="font-display font-light text-[40px] text-white leading-tight">Ready to arrange care today?</h2>
          <p className="text-white/65 mt-2 font-body">Free assessment · No obligation · Deployed within 3 hours</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button href="/contact" variant="white">Get Free Assessment</Button>
          <Button href="https://wa.me/917303815461" variant="ghost">WhatsApp Us</Button>
        </div>
      </div>
    </section>
  )
}

