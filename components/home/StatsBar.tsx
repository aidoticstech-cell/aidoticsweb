'use client'
import CountUpNumber from '@/components/ui/CountUpNumber'
import { stats } from '@/lib/data'

export default function StatsBar() {
  return (
    <section className="bg-[#122B1C] border-t border-maroon-mid/30 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-[48px] font-semibold text-maroon-soft leading-none">
                <CountUpNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] uppercase tracking-[1.5px] text-white/40 font-body mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

