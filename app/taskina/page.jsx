"use client";

import React from "react";
import HeroSection from "./HeroSection";
import TaskinaExhibitionSection from "./ExhibitionSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Page() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/site-bg.svg')" }}
    >
            <ParticlesBackground />
      
      {/* Hero */}
      <HeroSection />

      {/* Features / Exhibition */}
      <TaskinaExhibitionSection />

      {/* Pricing */}
      <PricingSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
