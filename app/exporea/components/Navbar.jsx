"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#d40101] to-black px-4 md:px-16 py-4 flex items-center justify-between shadow-lg"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/exporealogo.webp" // kendi logo yolunu buraya koy
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-6">
        {["About", "Features", "Contact", "Pricing"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-red-500 relative"
            whileHover={{
              scale: 1.1,
              color: "#EF4444",
              textShadow: "0 0 10px rgba(239,68,68,0.5)",
            }}
            transition={{ duration: 0.3, type: "spring" }}
            variants={childVariants}
          >
            {item}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
