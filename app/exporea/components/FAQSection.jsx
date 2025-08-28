"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How secure are transactions?",
    answer: "All transactions are protected with top-level encryption and escrow services to ensure safety.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan anytime directly from your dashboard.",
  },
  {
    question: "Do you offer customer support?",
    answer: "We provide 24/7 customer support with dedicated assistance for Pro and Enterprise plans.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-24 bg-transparent    text-white">
      <motion.div
        className="container mx-auto px-6 md:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Everything you need to know about our platform.
        </p>

        <div className="max-w-3xl mx-auto space-y-6 bg-gradient-to-r from-red-600/50 to-black/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{faq.question}</h4>
                <span className="text-red-500">{activeIndex === i ? "-" : "+"}</span>
              </div>
              {activeIndex === i && (
                <p className="text-gray-400 mt-4">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
