import SectionLabel from '@/components/ui/SectionLabel'

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24">
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 max-w-3xl">
          <SectionLabel>Privacy Policy</SectionLabel>
          <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-muted font-body text-sm leading-relaxed">
            This page describes how information is handled when you contact Aidotics or use our services. For complete details, please consult the official privacy policy document.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-body font-medium text-[16px] text-text-body mb-3">Summary</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            We aim to collect only the information needed to respond to enquiries and coordinate home healthcare support. We use appropriate safeguards to protect submitted information.
          </p>
        </div>
      </section>
    </div>
  )
}

