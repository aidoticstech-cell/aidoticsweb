export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: Booking
        Insert: BookingInsert
        Update: Partial<BookingInsert>
      }
      contacts: {
        Row: Contact
        Insert: ContactInsert
        Update: Partial<ContactInsert>
      }
      newsletter_subscribers: {
        Row: Subscriber
        Insert: SubscriberInsert
        Update: Partial<SubscriberInsert>
      }
      blog_posts: {
        Row: BlogPost
        Insert: BlogPostInsert
        Update: Partial<BlogPostInsert>
      }
      caregivers: {
        Row: Caregiver
        Insert: CaregiverInsert
        Update: Partial<CaregiverInsert>
      }
      testimonials: {
        Row: Testimonial
        Insert: TestimonialInsert
        Update: Partial<TestimonialInsert>
      }
      partner_applications: {
        Row: PartnerApplication
        Insert: PartnerApplicationInsert
        Update: Partial<PartnerApplicationInsert>
      }
    }
  }
}

// ── Bookings ──────────────────────────────────────────────────
export interface Booking {
  id: string
  created_at: string
  updated_at: string
  service_slug: string
  service_name: string
  patient_name: string
  patient_age: number | null
  patient_condition: string | null
  contact_name: string
  contact_phone: string
  contact_email: string | null
  address: string
  city: string
  pincode: string | null
  preferred_start_date: string | null
  preferred_time: string | null
  duration_type: 'hourly' | '12-hour' | '24x7'
  special_notes: string | null
  status: 'new' | 'contacted' | 'confirmed' | 'deployed' | 'completed' | 'cancelled'
  assigned_caregiver_id: string | null
}

export interface BookingInsert {
  service_slug: string
  service_name: string
  patient_name: string
  patient_age?: number
  patient_condition?: string
  contact_name: string
  contact_phone: string
  contact_email?: string
  address: string
  city: string
  pincode?: string
  preferred_start_date?: string
  preferred_time?: string
  duration_type: 'hourly' | '12-hour' | '24x7'
  special_notes?: string
}

// ── Contacts ──────────────────────────────────────────────────
export interface Contact {
  id: string
  created_at: string
  name: string
  phone: string
  email: string | null
  message: string
  source: string | null
  status: 'new' | 'read' | 'replied'
}

export interface ContactInsert {
  name: string
  phone: string
  email?: string
  message: string
  source?: string
}

// ── Newsletter ─────────────────────────────────────────────────
export interface Subscriber {
  id: string
  created_at: string
  email: string
  status: 'active' | 'unsubscribed'
}

export interface SubscriberInsert {
  email: string
}

// ── Blog Posts ─────────────────────────────────────────────────
export interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  read_time: string
  cover_image: string | null
  author_name: string
  published: boolean
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
}

export interface BlogPostInsert {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  read_time: string
  cover_image?: string
  author_name: string
  published?: boolean
  published_at?: string
  seo_title?: string
  seo_description?: string
}

// ── Caregivers ─────────────────────────────────────────────────
export interface Caregiver {
  id: string
  created_at: string
  name: string
  role: string
  specializations: string[]
  years_experience: number
  languages: string[]
  certifications: string[]
  bio: string | null
  photo_url: string | null
  available: boolean
  police_verified: boolean
  rating: number | null
  review_count: number
}

export interface CaregiverInsert {
  name: string
  role: string
  specializations: string[]
  years_experience: number
  languages: string[]
  certifications: string[]
  bio?: string
  photo_url?: string
  available?: boolean
  police_verified?: boolean
  rating?: number
}

// ── Testimonials ───────────────────────────────────────────────
export interface Testimonial {
  id: string
  created_at: string
  client_name: string
  location: string
  service_slug: string
  rating: number
  text: string
  published: boolean
}

export interface TestimonialInsert {
  client_name: string
  location: string
  service_slug: string
  rating: number
  text: string
  published?: boolean
}

// ── Partner Applications ───────────────────────────────────────
export interface PartnerApplication {
  id: string
  created_at: string
  organisation_name: string
  contact_name: string
  contact_phone: string
  contact_email: string
  organisation_type: string
  message: string | null
  status: 'new' | 'reviewing' | 'approved' | 'rejected'
}

export interface PartnerApplicationInsert {
  organisation_name: string
  contact_name: string
  contact_phone: string
  contact_email: string
  organisation_type: string
  message?: string
}
