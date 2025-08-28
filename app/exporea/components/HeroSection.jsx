"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", damping: 15, stiffness: 100 } },
};

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: "0 0 20px rgba(239,68,68,0.7)", transition: { duration: 0.4, type: "spring" } },
  tap: { scale: 0.95 },
};

const counterVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, type: "spring", stiffness: 120, damping: 15 } },
  hover: { scale: 1.2, color: "#FFFFFF", rotate: 5, transition: { duration: 0.3, type: "spring" } },
};

export default function HeroSection() {
  const heroRef = useRef(null);

  // Typing and deleting animation
  const phrases = ["Innovative Solutions", "Digital World", "Future Technology"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const typingTimeout = setTimeout(() => {
      const currentText = phrases[currentPhrase];
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, typeSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentPhrase]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side */}
        <motion.div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0" variants={childVariants}>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {displayedText}
            <motion.span
              className="inline-block w-1 h-8 bg-red-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.h1>
          <motion.div className="flex justify-center md:justify-start space-x-6 mb-8" variants={containerVariants}>
            {["03", "05", "09"].map((num, index) => (
              <motion.div key={num} className="text-center" variants={counterVariants} whileHover="hover">
                <motion.span className="text-5xl md:text-7xl font-extrabold text-red-500">{num}</motion.span>
                <p className="text-sm opacity-80">Metric {index + 1}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            className="bg-gradient-to-r from-red-500 to-red-700 px-8 py-3 rounded-full font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side: Static Laptop Image */}
        <motion.div
          className="w-full md:w-1/2"
          variants={childVariants}
        >
          <img
            src="/hero-laptop.webp"
            alt="Laptop"
            className="absolute right-0 -top-15 h-[550px] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}