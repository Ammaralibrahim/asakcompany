"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

const ParticlesBackground = () => {
  const particleCount = 28;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const size = 12 + Math.random() * 20; // 12px - 32px
      const depth = -50 + Math.random() * 100; // -50 - 50
      const duration = 5 + Math.random() * 5; // 5s - 10s
      const delay = Math.random() * 2; // 0 - 2s
      const left = Math.random() * 90 + 5; // %5 - %95
      const top = Math.random() * 90 + 5; // %5 - %95
      return { id: i, size, depth, duration, delay, left, top };
    });
  }, [particleCount]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ perspective: 1000, WebkitPerspective: 1000 }}
    >
      <div className="relative w-full h-full transform-style-preserve-3d">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              borderRadius: "9999px",
              transformStyle: "preserve-3d",
              transform: `translateZ(${p.depth}px) translate(-50%, -50%)`,
              opacity: 1,
              backgroundColor: "#ff8006",
            }}
            animate={{
              y: [p.top - 3, p.top + 3, p.top - 2],
              x: [p.left - 3, p.left + 3, p.left - 1.5],
              rotate: [0, 45, -10, 0],
            }}
            transition={{
              duration: p.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
