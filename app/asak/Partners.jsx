"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    {
      name: "TechCorp",
      logo: "https://asakgrup.com/assets/uploads/setting/1403-12-21/photos/logo-2b79f6d33dcbcec8ab388da33771b1a0.png",
    },
    {
      name: "Innovate Ltd",
      logo: "https://asakgrup.com/assets/uploads/setting/1403-12-21/photos/logo-2b79f6d33dcbcec8ab388da33771b1a0.png",
    },
    {
      name: "GlobalTech",
      logo: "https://asakgrup.com/assets/uploads/setting/1403-12-21/photos/logo-2b79f6d33dcbcec8ab388da33771b1a0.png",
    },
    {
      name: "StartupX",
      logo: "https://asakgrup.com/assets/uploads/setting/1403-12-21/photos/logo-2b79f6d33dcbcec8ab388da33771b1a0.png",
    },
  ];

  return (
    <motion.section
      className="py-24 px-6 md:px-12  text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Partners
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 rounded-xl bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
         
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
