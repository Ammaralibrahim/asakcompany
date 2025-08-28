"use client";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import HeroSection from "./components/HeroSection";
import ExhibitionSection from "./components/ExhibitionSection";
import ContactSection from "./components/ContactSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Page() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className=" text-white bg-[url('/waves.svg')] bg-cover bg-center relative overflow-hidden cursor-none"
    >
      <CustomCursor />
      <ScrollProgressBar targetRef={ref} />
      <BackgroundAnimation />
      <Navbar />
      <HeroSection />
      <ExhibitionSection />
      <ContactSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
