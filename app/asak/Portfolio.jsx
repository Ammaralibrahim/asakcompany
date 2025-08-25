"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise Workstation",
      description: "Custom-built high-performance workstation for a leading tech firm.",
      image: "/portfolio/workstation.webp",
    },
    {
      title: "Global Supply Chain",
      description: "Streamlined import/export for a multinational client.",
      image: "/portfolio/supply-chain.webp",
    },
    {
      title: "AI-Powered Software",
      description: "Developed a custom AI tool for data analytics.",
      image: "/portfolio/ai-software.webp",
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
        Our Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black/60 p-6 border border-white/10 hover:border-[#0067b8] transition-all duration-300"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 103, 184, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-white/90">{project.title}</h3>
            <p className="text-sm text-white/80 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}