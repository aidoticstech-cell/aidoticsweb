import Link from 'next/link'
import AidoticsLogo from '@/components/ui/AidoticsLogo'
import { services } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Caregivers', href: '/caregivers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partner Program', href: '/partner-program' }
]
const support = [
  { name: 'Contact', href: '/contact' },
  { name: 'Emergency Care', href: '/emergency' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy Policy', href: '/privacy' }
]

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t-2 border-maroon-mid">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <AidoticsLogo theme="light" className="mb-4" />
            <p className="text-text-muted text-sm leading-relaxed max-w-48">
              Premium home healthcare for families who value dignity, trust, and compassion.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram"><ExternalLink size={18} className="text-white/40 hover:text-white" /></a>
              <a href="#" aria-label="Facebook"><ExternalLink size={18} className="text-white/40 hover:text-white" /></a>
              <a href="#" aria-label="LinkedIn"><ExternalLink size={18} className="text-white/40 hover:text-white" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-body font-medium uppercase tracking-[2px] text-green-muted mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/50 hover:text-white text-sm transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-body font-medium uppercase tracking-[2px] text-green-muted mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-[10px] font-body font-medium uppercase tracking-[2px] text-green-muted mb-4">Support</h4>
            <ul className="space-y-2 mb-8">
              {support.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-[10px] font-body font-medium uppercase tracking-[2px] text-green-muted mb-4 pt-4 border-t border-white/5">Corporate Office</h4>
            <address className="not-italic text-sm text-white/50 leading-relaxed space-y-3">
              <p>DLF Forum, Cybercity, Phase III<br />Gurgaon, Haryana 122002</p>
              <div className="pt-2">
                <p><a href="tel:+917303815461" className="hover:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-muted" /> +91 73038 15461
                </a></p>
                <p><a href="mailto:Emotions@aidotics.com" className="hover:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-muted" /> Emotions@aidotics.com
                </a></p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/25">
          <p>© 2026 Aidotics Healthcare · All rights reserved</p>
          <p>NABH Aligned · ISO 9001:2015 · Police Verified Staff</p>
        </div>
      </div>
    </footer>
  )
}

