"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "TechCorp", logo: "/partners/techcorp.webp" },
    { name: "Innovate Ltd", logo: "/partners/innovate.webp" },
    { name: "GlobalTech", logo: "/partners/globaltech.webp" },
    { name: "StartupX", logo: "/partners/startupx.webp" },
  ];

  return (
    <motion.section
      className="py-24 px-4 md:px-12 bg-black/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-12">
        Our Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={100}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}