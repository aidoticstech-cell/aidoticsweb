"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
 const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
      <nav className={`navbar-custom ${show ? "nav-show" : "nav-hide"}`}>
      <div className="nav-container">
        {/* LOGO */}
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

        {/* LINKS */}
        <div className="nav-links">

          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>

          <Link href="/partner" className="nav-cta">
            Become Partner
          </Link>

        </div>

      </div>

    </nav>
  );
}