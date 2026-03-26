import { Resend } from 'resend'
import type { Booking, Contact } from './supabase/types'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO     = process.env.NOTIFICATION_EMAIL || 'Emotions@aidotics.com'

export async function sendBookingNotification(booking: Booking) {
  await resend.emails.send({
    from:    'Aidotics Website <notifications@aidotics.com>',
    to:      TO,
    subject: `New Booking: ${booking.service_name} — ${booking.contact_name}`,
    html: `
      <h2>New Booking Received</h2>
      <table>
        <tr><td><strong>Service</strong></td><td>${booking.service_name}</td></tr>
        <tr><td><strong>Patient</strong></td><td>${booking.patient_name}${booking.patient_age ? `, ${booking.patient_age} yrs` : ''}</td></tr>
        <tr><td><strong>Contact</strong></td><td>${booking.contact_name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${booking.contact_phone}</td></tr>
        <tr><td><strong>Address</strong></td><td>${booking.address}, ${booking.city}</td></tr>
        <tr><td><strong>Duration</strong></td><td>${booking.duration_type}</td></tr>
        <tr><td><strong>Notes</strong></td><td>${booking.special_notes || '—'}</td></tr>
        <tr><td><strong>Booking ID</strong></td><td>${booking.id}</td></tr>
      </table>
    `,
  })
}

export async function sendContactNotification(contact: Contact) {
  await resend.emails.send({
    from:    'Aidotics Website <notifications@aidotics.com>',
    to:      TO,
    subject: `New Message: ${contact.name} — ${contact.phone}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email || '—'}</p>
      <p><strong>Message:</strong> ${contact.message}</p>
    `,
  })
}
