"use client";

import { motion } from "framer-motion";
 import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero section">

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          Care That Feels Like Family
        </motion.h1>

        <p className="hero-text">
          Professional caregivers, nurses & attendants delivered to your home with trust, dignity, and compassion.
        </p>

  <div>
  

<Link href="/contact?service=Elder Care">
  <button className="btn btn-primary">Book Now</button>
</Link>
    <Link href="/services" className="btn btn-outline">
  Our Services
</Link>
  </div>
  
</section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div>✔ Police Verified Staff</div>
        <div>✔ Certified Nurses</div>
        <div>✔ 24/7 Support</div>
        <div>✔ Deployment in 3 Hours</div>
      </section>

      
      {/* WHY CHOOSE US */}
      <section className="section section-Dark">
        <h2 className="section-title">Why Choose Aidotics</h2>

        <div className="grid">

          <div className="trust-card">
            <h3>Verified & Trusted</h3>
            <p>Every caregiver is background checked.</p>
          </div>

          <div className="trust-card">
            <h3>Fast Deployment</h3>
            <p>Staff arranged within 3 hours.</p>
          </div>

          <div className="trust-card">
            <h3>Flexible Plans</h3>
            <p>Hourly, shift-based, or 24x7 live-in care.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2 className="section-title">How It Works</h2>

        <div className="grid">

          <div className="card">
            <h3>1. Enquiry</h3>
            <p>Submit your requirement</p>
          </div>

          <div className="card">
            <h3>2. Assessment</h3>
            <p>We understand your needs</p>
          </div>

          <div className="card">
            <h3>3. Deployment</h3>
            <p>Caregiver assigned quickly</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Get Care Within 3 Hours</h2>
        <p>Talk to our team now and get started instantly.</p>
        <button className="btn white">Enquire Now</button>
      </section>

    </main>
  );
}