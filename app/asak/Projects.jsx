"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI Research Platform",
      description:
        "A custom-built platform for AI researchers to run experiments with high-performance GPUs.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop", // public/projects/ai-platform.jpg
      link: "#",
    },
    {
      title: "Enterprise Web App",
      description:
        "Developed a secure and scalable web application for a multinational corporation.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Smart IoT Devices",
      description:
        "Created IoT devices for smart homes with real-time monitoring and automation.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Cloud Migration Solution",
      description:
        "Streamlined cloud migration for multiple enterprise clients, improving efficiency.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Blockchain Payment Gateway",
      description:
        "Implemented a secure blockchain-based payment gateway for fintech startups.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "VR Architectural Visualization",
      description:
        "Built immersive VR experiences to visualize real estate projects before construction.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <motion.section
      className="py-24 px-4 md:px-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-20 text-white"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-black/60 p-6 rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              rotateX: 3,
              rotateY: -3,
              transition: { duration: 0.5 },
            }}
          >
            <div className="relative w-full h-56 overflow-hidden rounded-xl mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <motion.h3
              className="text-xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-sm text-white/80 mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.a
              href={project.link}
              className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
