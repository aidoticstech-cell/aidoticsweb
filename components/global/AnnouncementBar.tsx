'use client'
import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="bg-maroon-mid text-white text-[13px] font-body font-medium h-10 flex items-center justify-between px-4 md:px-8">
      <span>Free care assessment in 4 hours · Call +91 73038 15461</span>
      <div className="flex items-center gap-4">
        <a href="https://wa.me/917303815461" className="flex items-center gap-1 opacity-80 hover:opacity-100">
          <MessageCircle size={14} /> WhatsApp
        </a>
        <button onClick={() => setVisible(false)} aria-label="Close">
          <X size={16} className="opacity-70 hover:opacity-100" />
        </button>
      </div>
    </div>
  )
}

