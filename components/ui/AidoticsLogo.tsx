'use client'

import React from 'react'
import Image from 'next/image'

type Props = {
  theme?: 'light' | 'dark'
  className?: string
}

// theme="light" → white logo (CSS filter) → use on dark backgrounds (green, maroon)
// theme="dark"  → original colors (maroon flower + green text) → use on light backgrounds
export default function AidoticsLogo({ theme = 'light', className = '' }: Props) {
  return (
    <div
      className={className}
      style={{
        display: 'block',
        flexShrink: 0,
        width: 120,
        height: 52,
        position: 'relative',
        filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Aidotics"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  )
}
