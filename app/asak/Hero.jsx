"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/50 via-black/20 to-blue-900 backdrop-blur-lg border-b border-blue-300/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/asak-whitelogo.webp"
            alt="Asak Logo"
            width={120}
            height={40}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-200">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <button className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg transition">
            Get Started
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden flex flex-col space-y-1 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black shadow-2xl z-40 flex flex-col p-8 transition-transform duration-300">
            <div className="flex justify-between items-center mb-10">
              <Image
                src="/asak-whitelogo.webp"
                alt="Asak Logo"
                width={100}
                height={40}
              />
              <button onClick={() => setMenuOpen(false)}>
                <span className=" bg-white rotate-45 translate-y-1 w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                     
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <span className=" bg-white -rotate-45 -translate-y-1"></span>
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-lg font-medium text-gray-200">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button className="mt-10 w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-28 md:pt-32 min-h-screen flex items-center">
        <Image
          src="/asak-hero-image.webp"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-black/40 to-transparent" />

        <div className="relative z-10 flex items-center">
          <div className="w-full  max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl rounded-3xl border border-blue-300/20 bg-gradient-to-b from-blue-900/30 via-blue-800/20 to-black/20 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-[0_10px_60px_rgba(59,130,246,0.25)] text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Enjoy our free Asak trial Month
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                Discover innovative technology solutions tailored to your needs
                with cutting-edge services and global expertise.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="#learn-more"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-95"
                >
                  Learn More
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
                >
                  Contact Us
                </Link>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Explore our range of services including custom builds, tech
                support, and international trade solutions. Join us today to
                revolutionize your tech experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
