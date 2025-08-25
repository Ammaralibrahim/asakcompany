"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/tech-bg.webp"
          alt="Tech Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/asak-whitelogo.webp" alt="Asak Logo" width={150} height={150} className="mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            Innovate with Asak
          </h1>
        </motion.div>
        <motion.p
          className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner for cutting-edge technology solutions, from custom computer assembly to global import/export services.
        </motion.p>
        <motion.button
          onClick={() => router.push("#contact")}
          className="mt-8 bg-gradient-to-r from-[#0067b8]/90 to-[#0067b8]/70 hover:backdrop-blur-xl duration-500 border border-white px-8 py-4 text-base font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
}