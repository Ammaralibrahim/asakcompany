"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(225, 53, 53, 0.2), transparent 60%)",
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}