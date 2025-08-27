"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Computer Assembly",
      description:
        "We design and build high-performance PCs optimized for gaming, AI research, 3D rendering, and enterprise-grade workloads. Every machine is crafted with precision cooling, future-proof parts, and professional cable management.",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    },
    {
      title: "Global Import/Export",
      description:
        "We specialize in sourcing and distributing premium hardware components globally. Our logistics network ensures on-time delivery and optimized supply chains across Europe, Asia, and North America.",
      image:
        "https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1200&auto=format&fit=crop",
      icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
    },
    {
      title: "Tech Consultancy",
      description:
        "Our experts provide tailored IT strategies, from cloud migration and cybersecurity to AI integration. We help businesses scale efficiently with the right mix of hardware and software solutions.",
      image:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
   
  ];

  return (
    <motion.section
    id="services"
      className="py-24 px-6 md:px-12  text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Title */}
     <motion.h2
             className="text-3xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
             initial={{ y: -50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
             Our Services
           </motion.h2>

      {/* Service Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/20 group overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          
          >
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/60 transition duration-500"></div>

            {/* Service Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-6">
              <motion.img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Icon */}
            <motion.div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 mb-4 transition-all"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Image src={service.icon} alt={service.title} width={28} height={28} className="opacity-90" />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold text-white mb-3"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm text-white/80 leading-relaxed mb-6"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {service.description}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="relative overflow-hidden px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More →</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
