"use client";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import GlobalBackground from "./components/GlobalBackground"; // ✅ yeni bg
import HeroSection from "./components/HeroSection";
import ExhibitionSection from "./components/ExhibitionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Page() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative text-white overflow-hidden cursor-none">
      <CustomCursor />
      <ScrollProgressBar targetRef={ref} />

      {/* 🔥 Global BG tüm siteye */}
      <GlobalBackground />

      <Navbar />
      <HeroSection />
      <ExhibitionSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
