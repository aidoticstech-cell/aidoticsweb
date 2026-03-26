import SectionLabel from '@/components/ui/SectionLabel'

export default function TermsPage() {
  return (
    <div className="pb-24">
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 max-w-3xl">
          <SectionLabel>Terms of Service</SectionLabel>
          <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
            Terms of Service
          </h1>
          <p className="text-text-muted font-body text-sm leading-relaxed">
            These terms explain the relationship between Aidotics and website visitors or booking enquirers. For full details, please consult the official terms document.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-body font-medium text-[16px] text-text-body mb-3">Overview</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            By using this site, you agree to cooperate with our team for accurate service coordination and consent-based communication.
          </p>
        </div>
      </section>
    </div>
  )
}

