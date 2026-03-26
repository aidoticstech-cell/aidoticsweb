import React from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { Handshake, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Partner Program | Aidotics Healthcare',
  description: 'Join the Aidotics Partner Network and earn by referring premium home healthcare services.',
}

export default function PartnerProgramPage() {
  const benefits = [
    {
      title: 'Competitive Rewards',
      desc: 'Earn industry-leading commissions for every successful care match and referral.',
      icon: TrendingUp
    },
    {
      title: 'Trusted Brand',
      desc: 'Partner with a brand known for clinical excellence, verified staff, and 24/7 reliability.',
      icon: ShieldCheck
    },
    {
      title: 'Dedicated Support',
      desc: 'Get a personal relationship manager to help handle clinical transitions and queries.',
      icon: Handshake
    },
    {
      title: 'Network Community',
      desc: 'Join a professional network of doctors, hospitals, and wellness specialists.',
      icon: Users
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-deep py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-pale rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-mid rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionLabel light>Grow with Aidotics</SectionLabel>
          <h1 className="font-display font-light text-[clamp(40px,6vw,72px)] text-white leading-[1.05] mt-6 mb-8 max-w-4xl mx-auto">
            Become a partner in delivering <span className="text-green-pale italic italic-shadow">premium</span> home care.
          </h1>
          <p className="text-white/70 font-body text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you&apos;re a healthcare practitioner, a medical facility, or an agent, help families access safe and dignified healthcare at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://forms.gle/EaoaKS55kdM2NoG28" 
              variant="white"
              className="group !rounded-full !px-10 !py-4 shadow-xl hover:scale-105"
            >
              Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="tel:+917303815461" 
              variant="ghost" 
              className="!border-white/30 !text-white hover:!bg-white/10 !rounded-full !px-10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Why Partner With Us</SectionLabel>
            <h2 className="font-display font-light text-h2 text-maroon-deep mt-4">
              A partnership built on care and growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-[24px] border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-[16px] bg-green-wash flex items-center justify-center text-maroon-mid mb-6 group-hover:bg-maroon-mid group-hover:text-white transition-colors">
                  <b.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-body font-bold text-[18px] text-text-body mb-3">{b.title}</h3>
                <p className="text-text-muted text-[14px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works simple */}
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-light text-[38px] text-maroon-deep mb-12">
            Simple 3-step application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="absolute top-[28px] left-[20%] right-[20%] h-px bg-border hidden md:block" />
             
             <div className="relative">
               <div className="w-14 h-14 rounded-full bg-white border-4 border-green-mid flex items-center justify-center font-display text-[22px] text-maroon-deep mx-auto mb-4 relative z-10">1</div>
               <p className="font-body font-bold text-sm">Apply Online</p>
               <p className="text-text-muted text-xs mt-1 leading-relaxed">Fill the 2-minute form</p>
             </div>

             <div className="relative">
               <div className="w-14 h-14 rounded-full bg-white border-4 border-green-mid flex items-center justify-center font-display text-[22px] text-maroon-deep mx-auto mb-4 relative z-10">2</div>
               <p className="font-body font-bold text-sm">Review & Meet</p>
               <p className="text-text-muted text-xs mt-1 leading-relaxed">Connect with our team</p>
             </div>

             <div className="relative">
               <div className="w-14 h-14 rounded-full bg-white border-4 border-green-mid flex items-center justify-center font-display text-[22px] text-maroon-deep mx-auto mb-4 relative z-10">3</div>
               <p className="font-body font-bold text-sm">Onboarding</p>
               <p className="text-text-muted text-xs mt-1 leading-relaxed">Access portal & start growing</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-maroon-deep relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-light text-[36px] md:text-[48px] text-white leading-tight mb-8">
            Ready to join the Aidotics family?
          </h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[32px] max-w-2xl mx-auto shadow-2xl">
            <p className="text-white/80 text-[18px] mb-8 font-body leading-relaxed">
              Become a verified partner today and help us bridge the gap in home healthcare across India. 
            </p>
            <Button 
              href="https://forms.gle/EaoaKS55kdM2NoG28" 
              variant="white"
              className="!px-16 !py-5 !rounded-full text-[17px] !font-bold hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Apply Now
            </Button>
            <p className="text-white/30 text-[12px] mt-6 font-body uppercase tracking-[2px]">
              No application fee required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
