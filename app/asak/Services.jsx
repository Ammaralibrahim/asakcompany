"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Computer Assembly",
      description: "Build high-performance computers tailored for gaming, professional workstations, or enterprise solutions.",
      icon: "/icons/assembly.svg",
    },
    {
      title: "Global Import/Export",
      description: "Efficient sourcing and distribution of tech components worldwide with streamlined logistics.",
      icon: "/icons/globe.svg",
    },
    {
      title: "Tech Consultancy",
      description: "Expert guidance on software development, hardware optimization, and IT infrastructure.",
      icon: "/icons/consultancy.svg",
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive repair, maintenance, and 24/7 online support for all your tech needs.",
      icon: "/icons/support.svg",
    },
    {
      title: "Data Solutions",
      description: "Secure data preparation, backup, and recovery services for businesses of all sizes.",
      icon: "/icons/data.svg",
    },
    {
      title: "Software Development",
      description: "Custom software solutions to enhance productivity and streamline operations.",
      icon: "/icons/software.svg",
    },
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
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-black/60 p-6 border border-white/10 hover:border-[#0067b8] transition-all duration-300"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 103, 184, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-4" />
            <h3 className="text-lg font-semibold text-white/90">{service.title}</h3>
            <p className="text-sm text-white/80 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}