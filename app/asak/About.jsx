"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-24 px-4 md:px-12  text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Particle Background */}


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
        {/* Image with Parallax and 3D Effect */}
        <motion.div
          className="relative flex-1 perspective-1000"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ y: -20, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
        >
          <Image
            src="/asak.webp"
            alt="Asak"
            width={600}
            height={400}
            className="object-cover shadow-2xl rounded-xl transition-transform duration-300"
            priority
          />
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span
              className="inline-block px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md border border-white/10 rounded-full tracking-widest"
              style={{ backgroundColor: "rgba(0, 103, 184, 0.3)" }}
            >
              Startup Company
            </span>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content with Animated Elements */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo with Pulse */}
          <motion.div
            className="w-24 h-24 mb-4"
           
          >
            <Image src="/asak-whitelogo.webp" alt="Asak Logo" width={120} height={120} className="object-contain" />
          </motion.div>
          {/* Title with Fade and Slide */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            About Asak
          </motion.h2>
          {/* Divider with Animation */}
          <motion.div
            className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-blue-200"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          {/* Paragraphs with Staggered Fade */}
          <motion.p
            className="text-sm md:text-base text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Asak is a dynamic startup revolutionizing the tech industry with expertise in computer assembly, import/export services, and comprehensive tech solutions. From sourcing high-quality components to providing tailored consultancy, we empower startups, enterprises, and individuals with innovative technology.
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Our vision is to bridge the gap between technology and reliability, delivering seamless solutions that drive efficiency and growth. With a commitment to quality and customer satisfaction, Asak is your partner in navigating the ever-evolving tech landscape.
          </motion.p>
          {/* Stats Grid with Hover Effects */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions." },
              { title: "Reliability", description: "Trusted services for consistent performance." },
              { title: "Customer Focus", description: "Tailored solutions for every client." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/40 p-4 border border-white/10 rounded-lg backdrop-blur-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                <p className="text-sm text-white/80 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}