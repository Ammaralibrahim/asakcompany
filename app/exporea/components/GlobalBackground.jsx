"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GlobalBackground() {
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    // Create 3 wave layers for a dynamic, layered effect
    const temp = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      amplitude: 30 + i * 15, // Controlled amplitude for smooth waves
      speed: 0.7 + i * 0.2, // Varied speed for depth
      offset: Math.random() * 50, // Random offset for organic movement
    }));
    setWaves(temp);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background with intense colors */}

      {/* Animated overlay */}


      {/* External SVG Waves on the right side */}
      <div className="">
       <Image
              src="/hero-svg.svg" // Path to your SVG file in the public folder
              alt="Wave effect"
              width={0}
              height={0}
              className="w-full h-full object-cover"
              style={{
                background:
                  "linear-gradient(to right, rgba(185, 28, 28, 0.95), rgba(185, 28, 28, 0.6), rgba(0, 0, 0, 0.95))",
                mixBlendMode: "overlay",
              }}
            />
      </div>
    </div>
  );
}