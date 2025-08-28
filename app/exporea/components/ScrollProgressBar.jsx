"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 origin-left z-30"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}