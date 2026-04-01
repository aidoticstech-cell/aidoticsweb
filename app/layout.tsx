import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import FloatingActions from '../components/global/FloatingActions'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    template: '%s | Aidotics — Premium Home Healthcare Gurgaon',
    default: 'Aidotics — Premium Home Healthcare · Caregiver Services Gurgaon',
  },
  metadataBase: new URL('https://aidotics.com'),
  description: 'Certified nurses, caregivers & attendants deployed to your home in 3 hours. Police-verified staff. Gurgaon, Delhi NCR. Call +91 7303815461.',
  keywords: ['home healthcare gurgaon', 'caregiver services delhi', 'nurse at home', 'elder care gurgaon'],
  openGraph: {
    siteName: 'Aidotics',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aidotics Healthcare',
    url: 'https://aidotics.com',
    logo: 'https://aidotics.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phase III, Cybercity',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-73038-15461',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.instagram.com/aidotics/',
      'https://www.linkedin.com/company/aidotics/',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <SpeedInsights />
      </body>
    </html>
  )
}

