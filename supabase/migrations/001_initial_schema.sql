-- ═══════════════════════════════════════════════════════════════
-- AIDOTICS DATABASE SCHEMA
-- Run this entire block in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── TABLE: bookings ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  service_slug          TEXT NOT NULL,
  service_name          TEXT NOT NULL,
  patient_name          TEXT NOT NULL,
  patient_age           INTEGER,
  patient_condition     TEXT,
  contact_name          TEXT NOT NULL,
  contact_phone         TEXT NOT NULL,
  contact_email         TEXT,
  address               TEXT NOT NULL,
  city                  TEXT NOT NULL DEFAULT 'Gurgaon',
  pincode               TEXT,
  preferred_start_date  DATE,
  preferred_time        TEXT,
  duration_type         TEXT NOT NULL CHECK (duration_type IN ('hourly', '12-hour', '24x7')),
  special_notes         TEXT,
  status                TEXT NOT NULL DEFAULT 'new'
                          CHECK (status IN ('new','contacted','confirmed','deployed','completed','cancelled')),
  assigned_caregiver_id UUID
);

-- ─── TABLE: contacts ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacts (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name         TEXT NOT NULL,
  phone        TEXT NOT NULL,
  email        TEXT,
  message      TEXT NOT NULL,
  source       TEXT DEFAULT 'website',
  status       TEXT NOT NULL DEFAULT 'new'
                 CHECK (status IN ('new','read','replied'))
);

-- ─── TABLE: newsletter_subscribers ───────────────────────────
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  email        TEXT UNIQUE NOT NULL,
  status       TEXT NOT NULL DEFAULT 'active'
                 CHECK (status IN ('active','unsubscribed'))
);

-- ─── TABLE: blog_posts ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  slug             TEXT UNIQUE NOT NULL,
  title            TEXT NOT NULL,
  excerpt          TEXT NOT NULL,
  content          TEXT NOT NULL,
  category         TEXT NOT NULL,
  read_time        TEXT NOT NULL,
  cover_image      TEXT,
  author_name      TEXT NOT NULL DEFAULT 'Aidotics Team',
  published        BOOLEAN NOT NULL DEFAULT FALSE,
  published_at     TIMESTAMPTZ,
  seo_title        TEXT,
  seo_description  TEXT
);

-- ─── TABLE: caregivers ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS caregivers (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name             TEXT NOT NULL,
  role             TEXT NOT NULL,
  specializations  TEXT[] NOT NULL DEFAULT '{}',
  years_experience INTEGER NOT NULL DEFAULT 0,
  languages        TEXT[] NOT NULL DEFAULT '{"Hindi","English"}',
  certifications   TEXT[] NOT NULL DEFAULT '{}',
  bio              TEXT,
  photo_url        TEXT,
  available        BOOLEAN NOT NULL DEFAULT TRUE,
  police_verified  BOOLEAN NOT NULL DEFAULT TRUE,
  rating           NUMERIC(2,1),
  review_count     INTEGER NOT NULL DEFAULT 0
);

-- ─── TABLE: testimonials ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  client_name  TEXT NOT NULL,
  location     TEXT NOT NULL,
  service_slug TEXT NOT NULL,
  rating       INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text         TEXT NOT NULL,
  published    BOOLEAN NOT NULL DEFAULT FALSE
);

-- ─── TABLE: partner_applications ─────────────────────────────
CREATE TABLE IF NOT EXISTS partner_applications (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  organisation_name   TEXT NOT NULL,
  contact_name        TEXT NOT NULL,
  contact_phone       TEXT NOT NULL,
  contact_email       TEXT NOT NULL,
  organisation_type   TEXT NOT NULL,
  message             TEXT,
  status              TEXT NOT NULL DEFAULT 'new'
                        CHECK (status IN ('new','reviewing','approved','rejected'))
);

-- ─── AUTO-UPDATE updated_at ───────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── INDEXES ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_bookings_status       ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at   ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug       ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published  ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category   ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_testimonials_published ON testimonials(published);
CREATE INDEX IF NOT EXISTS idx_testimonials_service  ON testimonials(service_slug);
CREATE INDEX IF NOT EXISTS idx_caregivers_available  ON caregivers(available);
CREATE INDEX IF NOT EXISTS idx_contacts_status       ON contacts(status);

-- ─── ROW LEVEL SECURITY ───────────────────────────────────────
-- Public can INSERT only. Admin reads everything via service role key.

ALTER TABLE bookings              ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts              ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts            ENABLE ROW LEVEL SECURITY;
ALTER TABLE caregivers            ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials          ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_applications  ENABLE ROW LEVEL SECURITY;

-- Bookings: anyone can INSERT, nobody can SELECT via anon key
CREATE POLICY "bookings_insert_public"
  ON bookings FOR INSERT TO anon WITH CHECK (TRUE);

-- Contacts: anyone can INSERT
CREATE POLICY "contacts_insert_public"
  ON contacts FOR INSERT TO anon WITH CHECK (TRUE);

-- Newsletter: anyone can INSERT, anyone can UPDATE their own row (for unsubscribe)
CREATE POLICY "newsletter_insert_public"
  ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (TRUE);

-- Blog posts: anyone can SELECT published posts
CREATE POLICY "blog_select_published"
  ON blog_posts FOR SELECT TO anon USING (published = TRUE);

-- Caregivers: anyone can SELECT available caregivers
CREATE POLICY "caregivers_select_available"
  ON caregivers FOR SELECT TO anon USING (available = TRUE);

-- Testimonials: anyone can SELECT published testimonials
CREATE POLICY "testimonials_select_published"
  ON testimonials FOR SELECT TO anon USING (published = TRUE);

-- Partner applications: anyone can INSERT
CREATE POLICY "partner_insert_public"
  ON partner_applications FOR INSERT TO anon WITH CHECK (TRUE);

-- ─── SEED DATA ────────────────────────────────────────────────

-- Seed: testimonials (published = true)
INSERT INTO testimonials (client_name, location, service_slug, rating, text, published) VALUES
(
  'Rohit Sharma', 'DLF Phase 2, Gurgaon', 'elder-care', 5,
  'The caregiver they sent for my father was not just professional but genuinely caring. Within a week, my father was eating better, sleeping through the night, and actually looking forward to the day. Like a family member arrived at our home.',
  TRUE
),
(
  'Priya Kapoor', 'Sector 54, Gurgaon', 'post-surgery-care', 5,
  'I called Aidotics at 10pm after my mother''s surgery. By 1am, a certified nurse was at our door. She managed dressing changes, medications, and physiotherapy coordination without me having to think about a single thing.',
  TRUE
),
(
  'Arun Mehta', 'South Delhi', 'physiotherapy', 5,
  'After my stroke, I was terrified of physiotherapy. The physio from Aidotics came home and made me feel safe. Six weeks later I walked unaided for the first time. I cannot thank this team enough.',
  TRUE
),
(
  'Vikram Sood', 'Cyber City, Gurgaon', 'baby-mother-care', 5,
  'We needed a night nurse for our newborn and Aidotics sent someone within 4 hours. She was patient, experienced, and helped my wife with breastfeeding. Best decision we made as new parents.',
  TRUE
),
(
  'Sunita Batra', 'Faridabad, Haryana', 'palliative-care', 5,
  'The palliative care team handled my father''s final weeks with such grace and dignity. They made sure he was comfortable and that our family was supported every single day. We are deeply grateful.',
  TRUE
);

-- Seed: caregivers
INSERT INTO caregivers (name, role, specializations, years_experience, languages, certifications, available, police_verified, rating, review_count) VALUES
(
  'Priya Sharma', 'ICU Nurse', ARRAY['ICU Care', 'Critical Care', 'Ventilator Management'],
  8, ARRAY['Hindi', 'English'], ARRAY['BSc Nursing', 'ICU Certified', 'BLS Certified'],
  TRUE, TRUE, 4.9, 47
),
(
  'Ravi Kumar', 'Senior Caregiver', ARRAY['Elder Care', 'Dementia Care', 'Mobility Assistance'],
  6, ARRAY['Hindi', 'Punjabi', 'English'], ARRAY['Caregiver Certification', 'Dementia Care Training'],
  TRUE, TRUE, 4.8, 63
),
(
  'Anjali Singh', 'Physiotherapist', ARRAY['Stroke Rehabilitation', 'Orthopaedic Rehab', 'Neurological Conditions'],
  5, ARRAY['Hindi', 'English'], ARRAY['BPT', 'MPT Neurology', 'Certified Stroke Rehab Specialist'],
  TRUE, TRUE, 4.9, 38
),
(
  'Sunita Devi', 'Postnatal Nurse', ARRAY['Newborn Care', 'Lactation Support', 'Postnatal Recovery'],
  7, ARRAY['Hindi', 'English'], ARRAY['GNM Nursing', 'Lactation Counsellor Certification'],
  TRUE, TRUE, 4.8, 52
),
(
  'Mohan Das', 'Palliative Care Specialist', ARRAY['Palliative Care', 'Pain Management', 'End-of-Life Care'],
  10, ARRAY['Hindi', 'English', 'Bengali'], ARRAY['BSc Nursing', 'Palliative Care Certification', 'Counselling Certificate'],
  TRUE, TRUE, 5.0, 29
),
(
  'Neha Gupta', 'Post-Surgery Attendant', ARRAY['Post-Surgery Care', 'Wound Care', 'Medication Management'],
  4, ARRAY['Hindi', 'English'], ARRAY['ANM Nursing', 'Wound Care Certification'],
  TRUE, TRUE, 4.7, 41
);

-- Seed: blog posts (published = true)
INSERT INTO blog_posts (slug, title, excerpt, content, category, read_time, author_name, published, published_at) VALUES
(
  'caring-for-elderly-parents',
  'A Complete Guide to Caring for Elderly Parents at Home',
  'Whether your parent has just returned from hospital or is aging in place, here is how to make home care work.',
  '## Introduction\n\nCaring for an elderly parent at home is one of the most important decisions a family can make...',
  'Elder Care', '6 min', 'Aidotics Team', TRUE, NOW() - INTERVAL '15 days'
),
(
  'post-surgery-recovery-tips',
  'What to Expect in the First 2 Weeks After Surgery',
  'Post-surgical recovery at home is possible with the right support. Here is a week-by-week guide.',
  '## Week One\n\nThe first week after surgery is the most critical period...',
  'Recovery', '5 min', 'Aidotics Team', TRUE, NOW() - INTERVAL '28 days'
),
(
  'choosing-a-home-caregiver',
  'How to Choose the Right Home Caregiver for Your Family',
  'Not all caregivers are the same. Here are the 7 things every family should verify before hiring.',
  '## Why Verification Matters\n\nWith so many agencies operating in Delhi NCR...',
  'Tips', '7 min', 'Aidotics Team', TRUE, NOW() - INTERVAL '42 days'
);
