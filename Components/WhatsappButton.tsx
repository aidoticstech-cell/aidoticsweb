"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/917303815461?text=Hi%20I%20need%20caregiver%20service"
      target="_blank"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="whatsapp-btn"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
        width={40}
        height={40}
      />
    </motion.a>
  );
}