"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-16 bg-transparent    text-white">
      <motion.div
        className="container max-w-3xl mx-auto px-6 md:px-16 text-center bg-gradient-to-r from-red-600 to-black/80 backdrop-blur-md rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your <span className="text-red-500">Business?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of companies already growing with our B2B marketplace.
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </section>
  );
}
