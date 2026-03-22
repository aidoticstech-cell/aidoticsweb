"use client";
export const dynamic = "force-dynamic";
import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const params = useSearchParams();
  const selectedService = params.get("service");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: selectedService || "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
            >
              <option value="">Select Service</option>
              <option value="Attendant">Attendant</option>
              <option value="Semi-Nurse">Semi-Nurse</option>
              <option value="Professional Nurse">Professional Nurse</option>
              <option value="Visiting Nurse">Visiting Nurse</option>
            </select>

            <textarea
              placeholder="Describe your requirement"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
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