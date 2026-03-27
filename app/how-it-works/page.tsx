import HowItWorks from '@/components/home/HowItWorks'
import CTABand from '@/components/home/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works | Our Clinical Process',
  description: 'From enquiry to verified caregiver at your door in 3 hours. Learn about our 4-step process for secure and dignified home healthcare.',
}

export default function HowItWorksPage() {
  return (
    <div>
      <HowItWorks />
      <CTABand />
    </div>
  )
}

