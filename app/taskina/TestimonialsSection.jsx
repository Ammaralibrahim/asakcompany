import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ParallaxSection from "./ParallaxSection";

const TESTIMONIALS = [
  {
    name: "John Doe",
    role: "Procurement Manager",
    quote: "Taskina's app streamlined our sourcing process with reliable suppliers.",
    avatar: "/assets/avatars/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "Industrial Engineer",
    quote: "Real-time tracking has been a game-changer for our projects.",
    avatar: "/assets/avatars/jane-smith.jpg",
  },
  {
    name: "Ali Yılmaz",
    role: "Tech Supplier",
    quote: "Taskina connected us to global clients effortlessly.",
    avatar: "/assets/avatars/ali-yilmaz.jpg",
  },
];

export default function TestimonialsSection({ scrollYProgress }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-40, 40]}>
      <motion.section
        className="py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
          Trusted by Professionals
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-darkSecondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img src={TESTIMONIALS[current].avatar} alt={TESTIMONIALS[current].name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-300 italic">"{TESTIMONIALS[current].quote}"</p>
              <h3 className="text-xl font-semibold text-white mt-4">{TESTIMONIALS[current].name}</h3>
              <p className="text-sm text-gray-400">{TESTIMONIALS[current].role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-6">
            <motion.button
              onClick={handlePrev}
              className="p-2 bg-primary rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-2 bg-primary rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}