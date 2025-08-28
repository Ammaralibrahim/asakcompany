"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, type: "spring", damping: 20 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, type: "spring", damping: 15, stiffness: 100 },
  },
};

const menuItems = ["About", "Features", "Contact", "Pricing"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-red-600/60 to-black/30 px-4 md:px-16 py-4 flex items-center justify-between shadow-xl"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/exporealogo.webp"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-medium relative"
            variants={childVariants}
          >
            {item}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
              initial={{ scaleX: 0, scaleY: 0.5 }}
              whileHover={{ scaleX: 1, scaleY: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", type: "spring", stiffness: 200 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, type: "spring" }}
            className="absolute top-0 right-0 w-2/3 h-screen bg-black/90 backdrop-blur-lg shadow-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-semibold text-white relative"
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                  initial={{ scaleX: 0, scaleY: 0.5 }}
                  whileHover={{ scaleX: 1, scaleY: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut", type: "spring", stiffness: 200 }}
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}