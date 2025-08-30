"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = ["/app-1.jpg", "/app-2.jpg"];
const features = [
  {
    title: "Show Genie",
    description: "Navigate events effortlessly with AI-powered guidance, offering real-time suggestions and personalized recommendations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.5 6.5h6l-5 4.5 1.5 6.5-5-4-5 4 1.5-6.5-5-4.5h6z"/><circle cx="12" cy="12" r="2"/></svg>`,
  },
  {
    title: "Show Map",
    description: "Plan your route and locate exhibitors with an interactive, dynamic map tailored to your event experience.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    title: "Visit Planner",
    description: "Organize your event visits, schedule meetings, and share notes seamlessly with your team or friends.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 9h18"/><path d="M12 12h.01"/></svg>`,
  },
  {
    title: "Onsite Activity",
    description: "Engage in exciting in-app missions and challenges to earn rewards and enhance your event experience.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 12 },
  },
  hover: { scale: 1.05, y: -5, boxShadow: "0 8px 16px rgba(255, 128, 6, 0.2)", transition: { duration: 0.3 } },
};

const dotVariants = {
  inactive: { scale: 1, backgroundColor: "#d1d5db" },
  active: {
    scale: 1.3,
    backgroundColor: "#ff8006",
    transition: { duration: 0.3 },
  },
};

const waveVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  },
};

const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      y: {
        repeat: Infinity,
        duration: 3 + Math.random() * 2,
        ease: "easeInOut",
      },
      opacity: {
        repeat: Infinity,
        duration: 3 + Math.random() * 2,
        ease: "easeInOut",
      },
    },
  },
};

const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  cx: Math.random() * 1280,
  cy: Math.random() * 720,
  r: 2 + Math.random() * 4,
}));

export default function TaskinaExhibitionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => setCurrentSlide(index);
  const handleDragEnd = (e, info) => {
    const offset = info.offset.x;
    const slideWidth = 240;
    const newIndex = Math.round(currentSlide - offset / slideWidth);
    setCurrentSlide(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center py-12 overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#ff8006]/20 backdrop-blur-xl p-4 rounded-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: iPhone Slider */}
          <motion.div
            className="relative w-full max-w-[260px] lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-[240px] h-[480px] drop-shadow-xl">
              <Image
                src="/iphone-frame.png"
                alt="iPhone Frame"
                fill
                className="absolute inset-0 object-contain z-10"
                priority
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  alt={`Screenshot ${currentSlide + 1}`}
                  className="absolute top-[7%] left-[12%] w-[195px] h-[405px] object-cover rounded-[24px] shadow-xl z-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  dragMomentum
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full cursor-pointer"
                    variants={dotVariants}
                    animate={currentSlide === index ? "active" : "inactive"}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-200 hover:border-[#ff8006] transition-all duration-300 shadow-sm hover:shadow-md"
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  className="w-10 h-10 mb-3"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3 className="text-lg font-bold text-[#ff8006] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}