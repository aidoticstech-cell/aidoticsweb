'use client'
import { useEffect, useRef, useState } from 'react'

type Props = { value: number; suffix: string; duration?: number }

export default function CountUpNumber({ value, suffix, duration = 2000 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * value))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(value)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

