"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import TaskinaExhibitionSection from "./ExhibitionSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import ParticlesBackground from "./components/ParticlesBackground";
import FooterSection from "./FooterSection";
import Navbar from "./components/Navbar";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100, damping: 12 },
  },
  hover: { scale: 1.1, boxShadow: "0 4px 12px rgba(255, 128, 6, 0.3)", transition: { duration: 0.2 } },
};

const scrollToTopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>`;

export default function Page() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/site-bg.svg')" }}
    >
            <Navbar />

      <ParticlesBackground />

      {/* Hero */}
      <HeroSection />

      {/* Features / Exhibition */}
      <TaskinaExhibitionSection />

      {/* Pricing */}
      <PricingSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-4 left-4 sm:bottom-6 sm:right-6 z-50 w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-[#ff8006] rounded-full flex items-center justify-center shadow-lg"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={scrollToTop}
      >
        <div
          className="w-[1.5rem] h-[1.5rem] sm:w-[1.75rem] sm:h-[1.75rem]"
          dangerouslySetInnerHTML={{ __html: scrollToTopIcon }}
        />
      </motion.button>
    </div>
  );
}