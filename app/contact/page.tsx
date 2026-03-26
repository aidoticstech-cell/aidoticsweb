import MultiStepForm from '@/components/ui/MultiStepForm'
import SectionLabel from '@/components/ui/SectionLabel'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Contact & Booking</SectionLabel>
            <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
              Book care in 3 quick steps
            </h1>
            <p className="text-text-muted font-body text-sm leading-relaxed">
              Tell us what you need. We’ll arrange verified nursing and caregiver support at your home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <MultiStepForm />
            </div>

            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="mb-8">
                <SectionLabel>Quick Contact Options</SectionLabel>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://wa.me/917303815461"
                    aria-label="Chat with us on WhatsApp"
                    className="rounded-[18px] border border-border bg-off-white p-5 flex items-center gap-4 hover:border-maroon-mid transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center">
                      <MessageCircle size={22} className="text-white" />
                    </span>
                    <div>
                      <p className="font-body font-medium text-text-body">Chat with us</p>
                      <p className="text-sm text-text-muted font-body">WhatsApp · +91 73038 15461</p>
                    </div>
                  </a>

                  <a
                    href="tel:+917303815461"
                    aria-label="Call us"
                    className="rounded-[18px] border border-border bg-off-white p-5 flex items-center gap-4 hover:border-maroon-mid transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-maroon-mid flex items-center justify-center">
                      <Phone size={22} className="text-white" />
                    </span>
                    <div>
                      <p className="font-body font-medium text-text-body">Call now</p>
                      <p className="text-sm text-text-muted font-body">+91 73038 15461</p>
                    </div>
                  </a>

                  <a
                    href="mailto:Emotions@aidotics.com"
                    aria-label="Email us"
                    className="rounded-[18px] border border-border bg-off-white p-5 flex items-center gap-4 hover:border-maroon-mid transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-green-mid flex items-center justify-center">
                      <Mail size={22} className="text-white" />
                    </span>
                    <div>
                      <p className="font-body font-medium text-text-body">Email</p>
                      <p className="text-sm text-text-muted font-body">Emotions@aidotics.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="rounded-[14px] bg-maroon-mid p-6 text-white mb-8">
                <p className="font-body text-white/80 text-sm font-medium">Need care urgently? Call us now.</p>
                <p className="font-display text-[32px] leading-tight mt-2">+91 73038 15461</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="tel:+917303815461"
                    aria-label="Call emergency"
                    className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/15 transition-colors text-sm font-body font-medium"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917303815461"
                    aria-label="WhatsApp emergency"
                    className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/15 transition-colors text-sm font-body font-medium"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Map */}
              <SectionLabel>Our Office</SectionLabel>
              <div className="rounded-[18px] border border-border overflow-hidden mt-3">
                <iframe
                  title="Google Maps - Cybercity Gurgaon"
                  src="https://www.google.com/maps?q=Cybercity%20Gurgaon&output=embed"
                  className="w-full h-[280px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6">
                <p className="font-body font-medium text-text-body mb-2">Office hours</p>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  Mon–Sun, 24×7 — we are always ready to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom plan enquiry */}
      <section className="bg-off-white py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Custom Plan Enquiry</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">
            Need something specific?
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4" action="#">
            <input
              className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
              placeholder="Your name"
              aria-label="Your name"
            />
            <input
              className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
              placeholder="Phone number"
              aria-label="Phone number"
            />
            <button
              type="submit"
              className="rounded-md bg-maroon-mid text-white px-6 py-3 font-body text-sm hover:bg-maroon-soft transition-colors"
            >
              Request Callback
            </button>
          </form>
        </div>
      </section>

      {/* Insurance info */}
      <section className="bg-white py-24 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Insurance & Reimbursement</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-6">
            Corporate tie-ups and reimbursement guidance
          </h2>
          <p className="text-text-muted font-body text-sm leading-relaxed max-w-3xl">
            If you have corporate health coverage or require reimbursement support, our team will guide you on next steps after your enquiry.
          </p>
          <div className="mt-8">
            <Button href="#" variant="ghost">Enquire About Corporate Plans</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

