"use client";

import React from "react";
import HeroSection from "./HeroSection";
import TaskinaExhibitionSection from "./ExhibitionSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";

export default function Page() {
  return (
    <div className="bg-gray-900">
      {/* Hero */}
      <HeroSection />

      {/* Features / Exhibition */}
      <TaskinaExhibitionSection />
      <PricingSection />
      <ContactSection/>
    </div>
  );
}
