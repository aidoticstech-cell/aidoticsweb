import { ReactNode } from 'react'

export default function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-body font-medium tracking-[2px] uppercase mb-3 ${light ? 'text-green-muted' : 'text-green-mid'}`}>
      {children}
    </p>
  )
}

