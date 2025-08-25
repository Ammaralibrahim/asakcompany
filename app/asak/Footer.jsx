"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/asakgrup", icon: "/icons/twitter.svg" },
    { name: "LinkedIn", url: "https://linkedin.com/company/asakgrup", icon: "/icons/linkedin.svg" },
    { name: "Instagram", url: "https://instagram.com/asakgrup", icon: "/icons/instagram.svg" },
  ];

  return (
    <motion.footer
      className="py-12 px-4 md:px-12 bg-black/80 text-white/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image src="/asak-whitelogo.webp" alt="Asak Logo" width={120} height={120} />
          <p className="text-sm text-center md:text-left">
            Asak &copy; 2025. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h4 className="text-sm font-bold text-white/90 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white/90 mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <Image src={link.icon} alt={link.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}