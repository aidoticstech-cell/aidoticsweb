import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AidoticsLogo from '@/components/ui/AidoticsLogo'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <AidoticsLogo className="mx-auto mb-12 opacity-80" />
        
        <SectionLabel>404 Error</SectionLabel>
        <h1 className="font-display font-light text-[42px] text-maroon-deep leading-tight mt-4 mb-6">
          The care path you followed isn't here.
        </h1>
        
        <p className="font-body text-text-muted text-[15px] leading-relaxed mb-10">
          The page might have moved or is temporarily unavailable. Let's get you back to finding the right support for your family.
        </p>

        <div className="flex flex-col gap-3">
          <Link 
            href="/" 
            className="w-full bg-maroon-mid text-white py-4 rounded-md font-body font-medium hover:bg-maroon-soft transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Homepage
          </Link>
          <Link 
            href="/contact" 
            className="w-full bg-white border border-border text-text-body py-4 rounded-md font-body font-medium hover:bg-off-white transition-colors"
          >
            Contact Support
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-[11px] uppercase tracking-[2px] font-body font-medium text-green-mid">
            Emergency Care ? +91 73038 15461
          </p>
        </div>
      </div>
    </div>
  )
}
