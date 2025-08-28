"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  focus: { scale: 1.02, boxShadow: "0 0 15px rgba(239,68,68,0.3)", transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(239,68,68,0.5)", transition: { duration: 0.3 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
  <section className="relative py-24 bg-transparent    text-white">
  <motion.div
    className="container mx-auto px-4 md:px-16 flex flex-col items-center text-center bg-gradient-to-r from-red-600/50 to-black/70 backdrop-blur-md rounded-2xl p-8 shadow-lg"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={containerVariants}>
      Get in Touch
    </motion.h2>
    <motion.p className="text-gray-300 mb-12 max-w-xl" variants={containerVariants}>
      Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
    </motion.p>

    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 flex flex-col gap-6 shadow-2xl border border-gray-800"
      variants={containerVariants}
    >
      <motion.input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-red-500 outline-none placeholder-gray-400 text-white"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-red-500 outline-none placeholder-gray-400 text-white"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-red-500 outline-none placeholder-gray-400 text-white resize-none"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-xl font-semibold text-white uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300"
        variants={buttonVariants}
        whileHover="hover"
      >
        Send Message
      </motion.button>
    </motion.form>

    <motion.p className="mt-8 text-gray-400 text-sm" variants={containerVariants}>
      © 2025 Your Company. All rights reserved.
    </motion.p>
  </motion.div>
</section>

  );
}
