import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <motion.section
      className="py-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
        Transform Your Business Today
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Download Taskina and unlock a world of efficient sourcing, tracking, and management for your industrial needs.
      </p>
      <motion.a
        href="https://taskina.com/download"
        className="inline-block bg-gradient-to-r from-primary to-primaryDark text-white px-10 py-5 rounded-full font-semibold shadow-xl border border-white/10"
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 132, 0, 0.7)" }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.03, 1], transition: { duration: 1.5, repeat: Infinity } }}
      >
        Get Taskina Now
      </motion.a>
    </motion.section>
  );
}