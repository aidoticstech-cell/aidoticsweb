import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { CheckCircle2, ShieldCheck, HeartHandshake, Handshake } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Our Mission & Values',
  description: 'Learn why Aidotics is Gurgaon’s most trusted home healthcare brand. Our story of dignity, compassion, and certified clinical excellence.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-green-deep">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>About Aidotics</SectionLabel>
              <h1 className="font-display font-light text-[clamp(38px,5vw,62px)] text-white leading-[1.1] mb-5">
                We exist because every family deserves dignified care.
              </h1>
              <p className="text-white/60 font-body text-[16px] leading-relaxed max-w-xl">
                Police-verified staff · Certified nurses · Deployed within 3 hours.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Button href="/contact" variant="primary">Start Your Care Journey</Button>
                <Button href="/services" variant="ghost">Explore Services</Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-[28px] h-[360px] md:h-[420px] overflow-hidden shadow-2xl">
              <Image
                src="/images/about_hero2.png"
                alt="Caregiver and senior sharing tea and smiling on a sofa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Brand Story Image */}
            <div className="relative rounded-[28px] h-[340px] overflow-hidden shadow-xl">
              <Image
                src="/images/about_story1.png"
                alt="Caregiver gently tucking in a senior patient at night"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display font-light text-h2 text-maroon-deep mb-6">
                Care That Honors Dignity
              </h2>
              <p className="text-text-muted font-body text-[15px] leading-relaxed mb-4">
                Aidotics brings certified nurses and vetted caregivers to your home, so families get support without hesitation.
              </p>
              <p className="text-text-body font-body text-[15px] leading-relaxed">
                We focus on trust, training, and fast deployment—because your loved one’s comfort can’t wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-green-pale py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel light>Mission & Vision</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-green-mid text-white rounded-[18px] p-8">
              <h3 className="font-display font-light text-[28px] leading-[1.2] mb-3">Mission</h3>
              <p className="text-white/70 font-body text-[15px] leading-relaxed">
                Dignified, home-based care delivered by police-verified, certified professionals.
              </p>
              <div className="mt-6 flex items-start gap-3 text-white/80 font-body text-[14px]">
                <CheckCircle2 className="mt-1" size={18} />
                <span>We align clinical support with family comfort.</span>
              </div>
            </div>
            <div className="bg-maroon-mid text-white rounded-[18px] p-8">
              <h3 className="font-display font-light text-[28px] leading-[1.2] mb-3">Vision</h3>
              <p className="text-white/70 font-body text-[15px] leading-relaxed">
                Trusted healthcare at home across Gurgaon and Delhi NCR—always timely, always respectful.
              </p>
              <div className="mt-6 flex items-start gap-3 text-white/80 font-body text-[14px]">
                <ShieldCheck className="mt-1" size={18} />
                <span>We build long-term trust through consistency.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-10">
            Care built on trust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[18px] border border-border p-8">
              <div className="flex items-start gap-4">
                <HeartHandshake className="text-green-mid" size={30} />
                <div>
                  <h3 className="font-body font-medium text-[17px] text-text-body mb-2">Verified & Trusted</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed">
                    Every caregiver is background-checked, police-verified, and reference-validated before joining.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[18px] border border-border p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-green-mid" size={30} />
                <div>
                  <h3 className="font-body font-medium text-[17px] text-text-body mb-2">Fast Deployment</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed">
                    From your first call to caregiver at your door in under 4 hours. Every time.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[18px] border border-border p-8">
              <div className="flex items-start gap-4">
                <Handshake className="text-green-mid" size={30} />
                <div>
                  <h3 className="font-body font-medium text-[17px] text-text-body mb-2">Whole-Person Care</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed">
                    We care for the body, mind, and emotional wellbeing of every patient we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[18px] border border-border p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-green-mid" size={30} />
                <div>
                  <h3 className="font-body font-medium text-[17px] text-text-body mb-2">Your Choice, Always</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed">
                    Hourly shifts, 12-hour shifts, or 24×7 live-in—so you decide what works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-maroon-pale py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">
            Built for clinical trust
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[18px] border border-border p-7">
              <p className="text-green-mid font-body font-medium text-[14px] mb-2">ISO</p>
              <p className="text-text-muted text-[14px] leading-relaxed">ISO 9001:2015 aligned processes</p>
            </div>
            <div className="bg-white rounded-[18px] border border-border p-7">
              <p className="text-green-mid font-body font-medium text-[14px] mb-2">NABH Aligned</p>
              <p className="text-text-muted text-[14px] leading-relaxed">Quality standards for home care</p>
            </div>
            <div className="bg-white rounded-[18px] border border-border p-7">
              <p className="text-green-mid font-body font-medium text-[14px] mb-2">Police Verification Process</p>
              <p className="text-text-muted text-[14px] leading-relaxed">Police-verified staff before deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership placeholder (content to be added when available) */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Leadership / Founders</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-10">
            Our team leads with compassion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Founder Profile 1', 'Founder Profile 2', 'Founder Profile 3'].map((label) => (
              <div key={label} className="bg-white rounded-[18px] border border-border p-6">
                <div className="w-full h-48 rounded-[14px] bg-green-mid/20 mb-4 flex items-center justify-center text-green-mid/40 font-body">
                  Photo placeholder
                </div>
                <p className="font-body font-medium text-text-body mb-1">{label}</p>
                <p className="text-text-muted text-[13px] mb-3">Role and short bio placeholder</p>
                <a href="#" aria-label="LinkedIn" className="text-maroon-mid hover:underline text-sm font-body">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline placeholder */}
      <section className="bg-green-deep py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel light>Milestones</SectionLabel>
          <h2 className="font-display font-light text-h2 text-white mb-10">
            Growth with clinical confidence
          </h2>
          <div className="rounded-[18px] border border-maroon-mid/30 bg-green-mid/10 p-8">
            <p className="text-white/70 font-body text-[15px] leading-relaxed">
              Timeline events will be added when the specific milestone dates and descriptions are available.
            </p>
            <div className="mt-5 flex items-center gap-4 text-white/60 text-sm font-body">
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-maroon-soft" /> Founded</span>
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-maroon-soft" /> Expanded care footprint</span>
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-maroon-soft" /> Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Media coverage placeholder */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>Media Coverage</SectionLabel>
          <h2 className="font-display font-light text-h2 text-maroon-deep mb-8">
            Featured by trusted publications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Press 1', 'Press 2', 'Press 3', 'Press 4'].map((p) => (
              <div key={p} className="h-20 rounded-[14px] bg-green-mid/10 border border-border flex items-center justify-center text-text-muted font-body text-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon-mid py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-light text-[40px] text-white leading-tight">
              Start your care journey today.
            </h2>
            <p className="text-white/65 mt-2 font-body">
              Free assessment · No obligation · Deployed within 3 hours
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact" variant="white">Book Care Now</Button>
            <Button href="/services" variant="ghost">Browse Services</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

