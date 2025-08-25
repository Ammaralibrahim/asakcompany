"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Wilson",
      company: "TechCorp",
      quote: "Asak delivered a custom workstation that exceeded our expectations. Their support is top-notch!",
    },
    {
      name: "Mike Johnson",
      company: "Innovate Ltd",
      quote: "Their import/export services streamlined our supply chain, saving us time and costs.",
    },
    {
      name: "Emily Davis",
      company: "StartupX",
      quote: "The consultancy provided by Asak transformed our IT infrastructure. Highly recommend!",
    },
    {
      name: "David Lee",
      company: "GlobalTech",
      quote: "Asak’s software solutions boosted our productivity significantly.",
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
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-black/60 p-6 border border-white/10 hover:border-[#0067b8] transition-all duration-300"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 103, 184, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-sm text-white/80 italic">"{testimonial.quote}"</p>
            <p className="text-sm font-semibold text-white/90 mt-4">{testimonial.name}</p>
            <p className="text-sm text-white/80">{testimonial.company}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}