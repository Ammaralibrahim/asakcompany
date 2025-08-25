"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-24 px-4 md:px-12 bg-gradient-to-b from-gray-950 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="relative flex-1">
          <Image
            src="/asak.webp"
            alt="Asak"
            width={600}
            height={400}
            className="object-cover shadow-lg rounded-lg"
            priority
          />
          <div className="absolute top-4 left-4">
            <span
              className="inline-block px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md border border-white/10 tracking-widest"
              style={{ backgroundColor: "#0067b855" }}
            >
              Startup Company
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Image src="/asak-whitelogo.webp" alt="Asak Logo" width={120} height={120} />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
            About Asak
          </h2>
          <div className="w-12 h-[2px] bg-white"></div>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Asak is a dynamic startup revolutionizing the tech industry with expertise in computer assembly, import/export services, and comprehensive tech solutions. From sourcing high-quality components to providing tailored consultancy, we empower startups, enterprises, and individuals with innovative technology.
          </p>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Our vision is to bridge the gap between technology and reliability, delivering seamless solutions that drive efficiency and growth. With a commitment to quality and customer satisfaction, Asak is your partner in navigating the ever-evolving tech landscape.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions." },
              { title: "Reliability", description: "Trusted services for consistent performance." },
              { title: "Customer Focus", description: "Tailored solutions for every client." },
            ].map((item, index) => (
              <div key={index} className="bg-black/40 p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                <p className="text-sm text-white/80 mt-2">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}