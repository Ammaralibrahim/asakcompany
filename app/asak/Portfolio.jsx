"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise Workstation",
      description:
        "Custom-built high-performance workstation for a leading tech firm, optimized for AI research and 3D rendering.",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Global Supply Chain",
      description:
        "Streamlined import/export platform for a multinational client, integrating real-time tracking and predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AI-Powered Software",
      description:
        "Developed a custom AI tool for data analytics, enabling automated insights and business intelligence dashboards.",
      image:
        "https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1200&auto=format&fit=crop",
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
        className="text-3xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Portfolio
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useTransform(y, [-50, 50], [10, -10]);
          const rotateY = useTransform(x, [-50, 50], [-10, 10]);

          return (
            <motion.div
              key={index}
              className="relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/20 overflow-hidden group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              whileHover={{ y: -10, boxShadow: "0 15px 50px rgba(56, 189, 248, 0.35)" }}
              style={{ perspective: 1000 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-48 rounded-xl overflow-hidden mb-6"
                style={{ rotateX, rotateY }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-sm text-white/80 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {project.description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Project →</span>
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
