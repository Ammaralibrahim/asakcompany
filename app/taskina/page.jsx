"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import MenuButton from "./MenuButton";
import FullScreenMenu from "./FullScreenMenu";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import Footer from "./Footer";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      className="bg-darkBg text-white min-h-screen relative overflow-hidden font-sans"
    >
      {/* Background Particle Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 132, 0, 0.15), transparent 70%)",
        }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <MenuButton isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 py-24 relative z-10">
        <div className="w-full max-w-7xl">
          <HeroSection scrollYProgress={scrollYProgress} />
          <FeaturesSection scrollYProgress={scrollYProgress} />
          <HowItWorksSection scrollYProgress={scrollYProgress} />
          <TestimonialsSection scrollYProgress={scrollYProgress} />
          <CtaSection />
        </div>
      </main>
      <Footer />
      <FullScreenMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </div>
  );
}