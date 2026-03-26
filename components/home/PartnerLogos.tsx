import SectionLabel from '@/components/ui/SectionLabel'

const logos = [
  'Apollo Hospitals',
  'Fortis Health',
  'Max Care',
  'Wockhardt',
  'Medanta',
  'AIIMS Partners',
  'CarePlus Clinics',
  'CityCare Network',
]

export default function PartnerLogos() {
  return (
    <section className="bg-green-wash py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel>Our Network</SectionLabel>
        <h2 className="font-display font-light text-h2 text-maroon-deep mb-10">
          Trusted by Leading Hospitals & Clinics
        </h2>

        <div className="rounded-[18px] border border-border bg-off-white overflow-hidden py-8 relative">
          {/* Fading edges to make the marquee look seamless */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-off-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-off-white to-transparent z-10"></div>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First group */}
            <div className="flex items-center justify-around gap-16 px-8 min-w-full shrink-0">
              {logos.map((l, i) => (
                <p key={`a-${i}`} className="text-text-muted font-body text-[15px] opacity-70 grayscale whitespace-nowrap">
                  {l}
                </p>
              ))}
            </div>
            {/* Second identical group */}
            <div className="flex items-center justify-around gap-16 px-8 min-w-full shrink-0" aria-hidden="true">
              {logos.map((l, i) => (
                <p key={`b-${i}`} className="text-text-muted font-body text-[15px] opacity-70 grayscale whitespace-nowrap">
                  {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

