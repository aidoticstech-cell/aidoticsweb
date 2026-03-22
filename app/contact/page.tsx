"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Enquiry Submitted ✅");
      setForm({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      alert("Error submitting form ❌");
    }
  };

  return (
    <main style={{ paddingTop: "100px" }}>
      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/moss2.mp4" type="video/mp4" />
      </video>

      <section className="section">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Book a Caregiver
        </h1>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <select
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
              required
            >
              <option value="">Select Service</option>
              <option>Attendant</option>
              <option>Semi-Nurse</option>
              <option>Professional Nurse</option>
              <option>Visiting Nurse</option>
            </select>

            <textarea
              placeholder="Describe your requirement"
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button className="btn btn-primary">
              Submit Enquiry
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}