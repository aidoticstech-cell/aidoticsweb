'use client'

import React, { useState } from 'react'
import { subscribeNewsletter } from '@/lib/actions/newsletter'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData()
    formData.append('email', email)
    
    const result = await subscribeNewsletter({ success: false, error: null }, formData)
    
    if (result.success) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
      setMessage(result.error || 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-mid font-body text-xs bg-green-wash/10 p-3 rounded-lg border border-green-muted/20">
        <CheckCircle size={16} />
        <span>Thank you for subscribing to our care guides.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-maroon-soft transition-colors" size={16} />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email for care guides"
          className="w-full bg-white/5 border border-white/10 rounded-md py-2.5 pl-10 pr-24 text-xs text-white placeholder:text-white/20 outline-none focus:border-maroon-mid transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-maroon-mid hover:bg-maroon-soft text-white px-3 rounded text-[10px] font-body font-medium transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="absolute top-full left-0 mt-2 text-maroon-soft text-[10px] font-body flex items-center gap-1">
          <AlertCircle size={12} /> {message}
        </p>
      )}
    </form>
  )
}
