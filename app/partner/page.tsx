import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function PartnerPage() {
  return (
    <div className="pb-24">
      <section className="bg-green-deep py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel light>Partner Program</SectionLabel>
          <h1 className="font-display font-light text-[clamp(38px,5vw,62px)] text-white leading-[1.05] mb-4">
            Work with Aidotics
          </h1>
          <p className="text-white/60 font-body text-[16px] leading-relaxed max-w-2xl">
            Partner with a premium home healthcare brand committed to dignity, trust, and timely deployment.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button href="/contact" variant="primary">Partner Enquiry</Button>
            <Button href="/services" variant="ghost">Explore Services</Button>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>How Partnerships Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { t: 'Collaborate', d: 'Discuss partnership goals and fit.' },
              { t: 'Align Standards', d: 'Quality and clinical processes stay consistent.' },
              { t: 'Deploy Support', d: 'We coordinate caregivers for family needs.' },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-[18px] border border-border p-8">
                <h3 className="font-body font-medium text-[17px] text-text-body mb-3">{x.t}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

