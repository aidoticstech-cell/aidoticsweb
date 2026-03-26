import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function CaregiversPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-green-deep py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel light>Our Caregivers</SectionLabel>
          <h1 className="font-display font-light text-[clamp(38px,5vw,62px)] text-white leading-[1.05] mb-5">
            Every Caregiver. Vetted. Verified. Compassionate.
          </h1>
          <p className="text-white/60 font-body text-[16px] leading-relaxed max-w-2xl">
            Our deployment process ensures families receive consistent, trained support—right at their doorstep.
          </p>
        </div>
      </section>

      {/* Vetting process */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Vetting Process</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-10">
            How caregivers become certified by Aidotics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4">
            {[
              'Application',
              'Background Check',
              'Police Verification',
              'Skills Test',
              'Training',
              'Certified',
            ].map((label, idx) => (
              <div key={label} className="flex flex-col">
                <div className="w-10 h-10 rounded-full border border-maroon-mid flex items-center justify-center mb-3">
                  <span className="font-display text-maroon-soft text-sm">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="font-body font-medium text-text-body text-[13px] text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white py-12 border-t border-border border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <p className="text-[11px] uppercase tracking-[2px] font-body font-medium text-green-mid mr-2">Filters</p>
            {['Specialty', 'Language', 'Experience', 'Availability'].map((f) => (
              <button
                key={f}
                className="px-4 py-2 rounded-md border border-border text-text-muted text-sm font-body hover:border-maroon-mid hover:text-maroon-mid transition-colors"
              >
                {f}
              </button>
            ))}
            <button className="ml-auto text-sm font-body text-maroon-mid hover:underline">Clear</button>
          </div>
        </div>
      </section>

      {/* Caregiver grid */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <SectionLabel>Our Team</SectionLabel>
              <h2 className="font-display font-light text-h2 text-maroon-deep">
                Meet Some of Our Caregivers
              </h2>
            </div>
            <Link href="#" className="text-maroon-mid hover:underline text-sm font-body">
              View All Caregivers →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma',
                role: 'ICU Nurse',
                exp: '8 yrs',
                quote: 'I treat every patient like my own family.',
              },
              {
                name: 'Caregiver Profile',
                role: 'Certified Nurse',
                exp: 'Specialty',
                quote: 'Compassion and clinical care—always.',
              },
              {
                name: 'Caregiver Profile',
                role: 'Trained Caregiver',
                exp: 'Experience',
                quote: 'Support that makes families feel safe.',
              },
            ].map((c) => (
              <div key={`${c.name}-${c.role}`} className="bg-white rounded-[18px] border border-border overflow-hidden">
                <div className="h-48 bg-green-mid/20 flex items-center justify-center text-white/20 font-body">
                  Photo placeholder
                </div>
                <div className="p-6">
                  <p className="font-body font-medium text-text-body text-[15px] mb-1">{c.name}</p>
                  <p className="text-text-muted text-[13px] mb-4">
                    {c.role} · {c.exp}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-pale text-green-mid text-[11px] px-3 py-1 rounded-full font-body font-medium">
                      ✓ Police Verified
                    </span>
                    <span className="bg-maroon-pale text-maroon-mid text-[11px] px-3 py-1 rounded-full font-body font-medium">
                      ✓ Certified
                    </span>
                  </div>

                  <p className="font-display italic text-[16px] text-maroon-deep leading-relaxed">&quot;{c.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="px-6 py-3 rounded-md border border-maroon-mid text-maroon-mid font-body hover:bg-maroon-pale transition-colors">
              Load more (coming soon)
            </button>
          </div>
        </div>
      </section>

      {/* Training standards */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Training Standards</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">
            Certified and continually updated
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-wash rounded-[18px] border border-border p-8">
              <p className="font-body font-medium text-text-body mb-3">What we cover</p>
              <ul className="space-y-3">
                {['Dignity-first caregiving', 'Medication handling', 'Hygiene & safety', 'Emergency response'].map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-mid" />
                    <span className="text-text-muted font-body text-sm leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-off-white rounded-[18px] border border-border p-8">
              <p className="font-body font-medium text-text-body mb-3">Certification outcome</p>
              <p className="text-text-muted font-body text-sm leading-relaxed">
                Caregivers receive role-specific certification after training. We continuously review quality standards to ensure safe deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruit CTA */}
      <section className="bg-maroon-mid py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-light text-[42px] text-white leading-tight">
              Are you a healthcare professional? Join Aidotics.
            </h2>
            <p className="text-white/65 mt-2 font-body text-sm">
              Send your profile and we will share the next steps.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact" variant="white">Recruit Now</Button>
            <Button href="/pricing" variant="ghost">Care Programs</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

