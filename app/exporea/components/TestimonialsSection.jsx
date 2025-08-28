"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Yılmaz",
    role: "Procurement Manager, TeknoGlobal",
    text: "This platform streamlined our supplier discovery. We saved 40% time on procurement.",
    avatar: "/avatar1.png",
  },
  {
    name: "Sara Khan",
    role: "CEO, BrightTrade",
    text: "We reached international buyers faster than ever. The secure payment system is a game-changer.",
    avatar: "/avatar2.png",
  },
  {
    name: "David Chen",
    role: "Supply Chain Director, NovaParts",
    text: "Amazing! A modern solution that helps us close deals with confidence.",
    avatar: "/avatar3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-transparent   text-white">
      <motion.div
        className="container mx-auto px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Our <span className="text-red-500">Clients Say</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Trusted by businesses worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-red-600/30 transition text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-gray-300 mb-6 italic">“{t.text}”</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <span className="text-sm text-gray-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
