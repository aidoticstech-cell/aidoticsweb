'use client'

import React, { useState } from 'react'
import { submitContact } from '@/lib/actions/contact'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await submitContact({ success: false, error: null }, formData)

    if (result.success) {
      setIsSuccess(true)
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  if (isSuccess) {
    return (
      <div className="bg-green-wash border border-green-muted p-8 rounded-2xl flex items-center gap-4 text-green-mid">
        <CheckCircle2 size={24} />
        <p className="font-body font-medium">Thank you! We have received your message and will call you shortly.</p>
      </div>
    )
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
      <input
        name="name"
        required
        className="w-full rounded-md border border-border px-4 py-3 font-body text-sm outline-none focus:border-maroon-mid transition-colors"
        placeholder="Your name"
        aria-label="Your name"
      />
      <input
        name="phone"
        required
        className="w-full rounded-md border border-border px-4 py-3 font-body text-sm outline-none focus:border-maroon-mid transition-colors"
        placeholder="Phone number"
        aria-label="Phone number"
      />
      <div className="flex gap-2">
        <input type="hidden" name="message" value="Enquiry for custom clinical plan" />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-maroon-mid text-white px-6 py-3 font-body text-sm hover:bg-maroon-soft transition-colors disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Request Callback'}
        </button>
      </div>
      {error && (
        <div className="md:col-span-3 mt-2 flex items-center gap-2 text-maroon-mid text-xs font-body">
          <AlertCircle size={14} /> {error}
        </div>
      )}
    </form>
  )
}
