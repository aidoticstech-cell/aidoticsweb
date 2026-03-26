import Link from 'next/link'
import { services } from '@/lib/data'
import { Phone, Heart, Stethoscope, Activity, Baby, HeartHandshake, Users, ChevronRight } from 'lucide-react'

const iconMap: Record<string, any> = {
  Heart,
  Stethoscope,
  Activity,
  Baby,
  HeartHandshake,
  Users
}

export default function MegaMenu({ close }: { close: () => void }) {
  return (
    <div className="absolute left-0 right-0 bg-white border-t-[1px] border-border shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
          <div>
            <h3 className="font-display text-[24px] text-maroon-deep leading-none">Our Specialized Services</h3>
            <p className="text-text-muted text-sm mt-2 font-body font-light italic">Clinical excellence, delivered with compassion.</p>
          </div>
          <Link href="/services" onClick={close} className="text-maroon-mid text-sm font-medium hover:underline flex items-center gap-1 group">
            Explore All Services <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-6 mb-8">
          {services.map(svc => {
            const Icon = iconMap[svc.icon as string] || Activity
            return (
              <Link 
                key={svc.slug} 
                href={`/services/${svc.slug}`} 
                onClick={close}
                className="group flex gap-4 p-4 rounded-[12px] hover:bg-green-pale/50 transition-all duration-200 border border-transparent hover:border-green-mid/10 shadow-sm hover:shadow-md"
              >
                <div className={`p-2.5 rounded-[10px] bg-white border border-border shadow-sm text-maroon-mid group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-medium text-[15px] text-text-body group-hover:text-maroon-mid transition-colors">{svc.name}</p>
                  <p className="text-[12px] text-text-muted mt-1 leading-relaxed line-clamp-1">{svc.tagline}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="bg-green-deep rounded-[16px] px-8 py-5 flex items-center justify-between text-white shadow-xl translate-y-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
              <Phone size={18} className="text-green-pale" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-medium">Need immediate medical assistance?</p>
              <p className="text-[18px] font-display">Call our Emergency Helpline</p>
            </div>
          </div>
          <a href="tel:+917303815461" className="bg-white text-maroon-deep px-6 py-2.5 rounded-full font-body font-bold text-sm hover:bg-green-pale hover:scale-105 transition-all shadow-md">
            +91 73038 15461
          </a>
        </div>
      </div>
    </div>
  )
}

