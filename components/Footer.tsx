import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <Link href="/" className="nav-logo-wrap">
          <Image
            src="/logo6.png"
            alt="Aidotics"
            width={140}
            height={50}
            priority
            className="nav-logo"
          />
        </Link>
          <p className="footer-text">
            Premium care services for your loved ones.
          </p>

        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT */}
<div className="footer-col">
  <h3>Contact</h3>

  <div className="contact-item">
    <span className="icon">
      {/* LOCATION */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-6-5.4-6-10a6 6 0 1112 0c0 4.6-6 10-6 10z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="11" r="2" fill="currentColor"/>
      </svg>
    </span>
    <p>
      DLF Forum, Cybercity, Phase III <br />
      Gurgaon, Haryana - 122002
    </p>
  </div>

  <div className="contact-item">
    <span className="icon">
      {/* EMAIL */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </span>
    <p>Emotions@aidotics.com</p>
  </div>

  <div className="contact-item">
    <span className="icon">
      {/* PHONE */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.2-.2.5-.3.8-.2 1 .3 2 .5 3 .5.4 0 .7.3.7.7V19c0 .4-.3.7-.7.7C7.8 19.7 0 11.9 0 2.7 0 2.3.3 2 .7 2H4c.4 0 .7.3.7.7 0 1 .2 2 .5 3 .1.3 0 .6-.2.8L6.6 10.8z" fill="currentColor"/>
      </svg>
    </span>
    <p>+91 7303815461</p>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        © 2026 Aidotics. All rights reserved.
      </div>

    </footer>
  );
}