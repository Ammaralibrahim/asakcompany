"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroContent from "./components/HeroContent";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen  w-full overflow-hidden flex flex-col "
    id="home">
      <div className="absolute inset-0 z-0">
      
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center z-20 py-12 sm:py-16">
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroSection;
