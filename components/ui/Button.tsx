'use client'

import { ReactNode } from 'react'
import { Phone } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'white' | 'whatsapp'

type Props = {
  variant?: Variant
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

const styles: Record<Variant, string> = {
  primary: 'bg-maroon-mid text-white hover:bg-maroon-soft',
  ghost: 'border border-maroon-mid text-maroon-mid hover:bg-maroon-pale',
  white: 'bg-white text-maroon-deep hover:bg-off-white',
  whatsapp: 'bg-whatsapp text-white hover:opacity-90',
}

export default function Button({ variant = 'primary', children, href, onClick, className = '' }: Props) {
  const base = `inline-flex items-center gap-2 px-6 py-3 rounded-sm font-body font-medium text-sm transition-all duration-200 cursor-pointer ${styles[variant]} ${className}`
  if (href) return <a href={href} className={base}>{children}</a>
  return <button onClick={onClick} className={base}>{children}</button>
}

