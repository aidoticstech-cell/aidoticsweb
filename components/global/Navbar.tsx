'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import AidoticsLogo from '@/components/ui/AidoticsLogo'
import MegaMenu from './MegaMenu'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Caregivers', 'Blog', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastScrollY = useRef(0)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      const firstScreen = window.innerHeight

      setScrolled(currentY > 40)

      if (currentY < firstScreen) {
        // Always show navbar in the first screen
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        // Scrolling down past first screen → hide
        setVisible(false)
      } else {
        // Scrolling up → show
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const forceClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setServicesOpen(false)
  }

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 ag-navbar-scrolled' : 'top-10 bg-transparent'} ${visible ? 'translate-y-0' : '-translate-y-[150%]'} ag-navbar-entrance`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Aidotics Home" className="ag-logo">
          <AidoticsLogo theme="light" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            className="text-white/80 hover:text-white text-sm font-body ag-nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
          </button>
          {links.map(link => (
            <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/80 hover:text-white text-sm font-body transition-colors ag-nav-link">
              {link}
            </Link>
          ))}
          <Button href="/contact" variant="primary">Book Care Now</Button>
        </div>

        {/* Mobile hamburger */}
        <button className={`md:hidden text-white ag-menu-toggle ${menuOpen ? 'ag-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu */}
      {servicesOpen && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <MegaMenu close={forceClose} />
        </div>
      )}

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-green-deep z-40 flex flex-col items-start p-8 pt-24 gap-8 ag-mobile-drawer">
          <button className="font-display text-3xl text-white ag-mobile-item" style={{ animationDelay: '0ms' }} onClick={() => setMenuOpen(false)}>Services</button>
          {links.map((link, index) => (
            <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="font-display text-3xl text-white ag-mobile-item" style={{ animationDelay: `${(index + 1) * 60}ms` }} onClick={() => setMenuOpen(false)}>
              {link}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-4 w-full ag-mobile-item" style={{ animationDelay: `${(links.length + 1) * 60}ms` }}>
            <Button href="https://wa.me/917303815461" variant="whatsapp">WhatsApp Us</Button>
            <Button href="tel:+917303815461" variant="ghost">Call +91 73038 15461</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

