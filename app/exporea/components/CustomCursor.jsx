"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Slightly softer spring for smoother, iPhone-like feel
  const springX = useSpring(mouseX, { stiffness: 500, damping: 20, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 8); // Adjusted for smaller cursor size
      mouseY.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-4 h-4 bg-blue-300 rounded-full opacity-60 pointer-events-none z-50 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]"
      style={{ x: springX, y: springY }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}