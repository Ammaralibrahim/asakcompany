"use client";
import React, { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import MenuButton from "./MenuButton";
import FullScreenMenu from "./FullScreenMenu";
import AboutSection from "./AboutSection";
import MissionSection from "./MissionSection";
import ContactSection from "./ContactSection";

export default function ExporeaAboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white min-h-screen relative overflow-hidden"
    >
      <MenuButton isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 py-24 relative">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(225, 53, 53, 0.1), transparent 70%)",
            opacity: 0.5,
          }}
          animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="w-full max-w-7xl relative z-10">
          <AboutSection scrollYProgress={scrollYProgress} />
          <MissionSection scrollYProgress={scrollYProgress} />
          <ContactSection
            scrollYProgress={scrollYProgress}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </main>
      <FullScreenMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </div>
  );
}