import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
   <main className="services-page">

      {/* HEADER */}
      <section className="section">
        <h1 className="section-title">Our Services</h1>
        <p className="section-sub">
          Personalized healthcare solutions delivered at your home with trust,
          professionalism, and compassion.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="grid">

          {/* ATTENDANT */}
          <div className="service-card">
           <Image src="/attendant1.png" alt="attendant1" width={200} height={200} />
            <h3>Attendant</h3>

            <ul>
              <li>Bathing & hygiene support</li>
              <li>Toileting & grooming</li>
              <li>Feeding assistance</li>
              <li>Daily cleaning & comfort care</li>
            </ul>

           <Link href="/contact">
  <button className="btn btn-primary">Book Now</button>
</Link>
          </div>

          {/* SEMI NURSE */}
          <div className="service-card">
           <Image src="/seminurse.png" alt="seminurse" width={200} height={200} />
            <h3>Semi-Nurse</h3>

            <ul>
              <li>Vitals monitoring</li>
              <li>Medication reminders</li>
              <li>Mobility assistance</li>
              <li>Hygiene & patient support</li>
            </ul>

          <Link href="/contact">
  <button className="btn btn-primary">Book Now</button>
</Link>
          </div>

          {/* NURSE */}
          <div className="service-card">
             <Image src="/professionalnurse.png" alt="professionalnurse" width={200} height={200} />
            <h3>Professional Nurse</h3>

            <ul>
              <li>Injection & IV administration</li>
              <li>Wound & post-op care</li>
              <li>Emergency response</li>
              <li>Doctor coordination</li>
            </ul>

           <Link href="/contact">
  <button className="btn btn-primary">Book Now</button>
</Link>
          </div>

          {/* VISITING */}
          <div className="service-card">
             <Image src="/visitingnurse.png" alt="visitingnurse" width={200} height={200} />
            <h3>Visiting Nurse</h3>


            <ul>
              <li>Injection (IM / IV / SC)</li>
              <li>Wound dressing</li>
              <li>Vitals check</li>
              <li>Post-op support</li>
            </ul>

          <Link href="/contact">
  <button className="btn btn-primary">Book Now</button>
</Link>
          </div>

        </div>
      </section>

    </main>
  );
}