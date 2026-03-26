import { Phone, MessageCircle, ShieldCheck } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function EmergencyPage() {
  return (
    <div className="pb-24">
      {/* Above fold */}
      <section className="bg-green-deep">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-3xl">
            <SectionLabel light>Emergency Care</SectionLabel>
            <h1 className="font-display font-light text-[clamp(40px,6vw,76px)] text-white leading-[1.05] mb-4">
              +91 73038 15461
            </h1>
            <p className="text-white/60 font-body text-[16px] leading-relaxed mb-7">
              We deploy within 3 hours.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <Button href="tel:+917303815461" variant="primary">Call Now</Button>
              <Button href="https://wa.me/917303815461" variant="ghost">WhatsApp Now</Button>
            </div>

            <div className="rounded-[18px] border border-maroon-mid/30 bg-green-mid/10 p-6">
              <p className="text-white/80 font-body text-sm font-medium mb-3">What we can deploy immediately</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'ICU nurse',
                  'Attendant',
                  'Physiotherapist',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <ShieldCheck className="text-green-muted mt-1" size={18} />
                    <p className="text-white/70 font-body text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA box */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-[18px] bg-maroon-mid p-8 text-white">
            <p className="text-[11px] uppercase tracking-[2px] font-body font-medium text-white/80 mb-3">
              Our commitment
            </p>
            <h2 className="font-display font-light text-[32px] leading-tight mb-3">
              Caregiver at your door in ≤3 hours
            </h2>
            <p className="text-white/70 font-body text-sm leading-relaxed">
              Or we waive the first day&apos;s fee.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary contact */}
      <section className="bg-white py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SectionLabel>Contact Backup</SectionLabel>
              <h2 className="font-display font-light text-h2 text-maroon-deep mb-6">Reach us in any way you can</h2>
              <div className="space-y-4">
                <a
                  href="tel:+917303815461"
                  aria-label="Call emergency number"
                  className="flex items-center gap-4 rounded-[14px] border border-border p-5 hover:border-maroon-mid transition-colors"
                >
                  <span className="w-11 h-11 rounded-full bg-maroon-mid flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </span>
                  <span>
                    <p className="font-body font-medium text-text-body">+91 73038 15461</p>
                    <p className="text-sm text-text-muted font-body">Call anytime</p>
                  </span>
                </a>

                <a
                  href="https://wa.me/917303815461"
                  aria-label="WhatsApp emergency number"
                  className="flex items-center gap-4 rounded-[14px] border border-border p-5 hover:border-maroon-mid transition-colors"
                >
                  <span className="w-11 h-11 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </span>
                  <span>
                    <p className="font-body font-medium text-text-body">WhatsApp Now</p>
                    <p className="text-sm text-text-muted font-body">Fast response</p>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <SectionLabel>Office</SectionLabel>
              <div className="rounded-[18px] border border-border p-6 bg-off-white">
                <p className="text-text-body font-body font-medium mb-2">Address</p>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  DLF Forum, Cybercity, Phase III
                  <br />
                  Gurgaon, Haryana 122002
                </p>
                <p className="mt-6 text-text-body font-body font-medium mb-2">Hours</p>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  Mon–Sun, 24×7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

