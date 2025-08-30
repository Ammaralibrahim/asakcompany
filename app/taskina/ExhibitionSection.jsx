"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = ["/app-1.jpg", "/app-2.jpg"];
const features = [
  {
    title: "Show Genie",
    description: "Navigate events effortlessly with AI-powered guidance, offering real-time suggestions and personalized recommendations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.5 6.5h6l-5 4.5 1.5 6.5-5-4-5 4 1.5-6.5-5-4.5h6z"/><circle cx="12" cy="12" r="2"/></svg>`,
  },
  {
    title: "Show Map",
    description: "Plan your route and locate exhibitors with an interactive, dynamic map tailored to your event experience.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    title: "Visit Planner",
    description: "Organize your event visits, schedule meetings, and share notes seamlessly with your team or friends.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 9h18"/><path d="M12 12h.01"/></svg>`,
  },
  {
    title: "Onsite Activity",
    description: "Engage in exciting in-app missions and challenges to earn rewards and enhance your event experience.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 12 },
  },
  hover: { scale: 1.05, y: -10, boxShadow: "0 10px 20px rgba(255, 128, 6, 0.2)", transition: { duration: 0.3 } },
};

const dotVariants = {
  inactive: { scale: 1, backgroundColor: "#d1d5db" },
  active: {
    scale: 1.4,
    backgroundColor: "#ff8006",
    transition: { duration: 0.3 },
  },
};

const waveVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  },
};

const particleVariants = {
  animate: {
    y: [0, -30, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4 + Math.random() * 2,
        ease: "easeInOut",
      },
      opacity: {
        repeat: Infinity,
        duration: 4 + Math.random() * 2,
        ease: "easeInOut",
      },
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  cx: Math.random() * 1920,
  cy: Math.random() * 1080,
  r: 3 + Math.random() * 5,
}));

export default function TaskinaExhibitionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => setCurrentSlide(index);
  const handleDragEnd = (e, info) => {
    const offset = info.offset.x;
    const slideWidth = 320;
    const newIndex = Math.round(currentSlide - offset / slideWidth);
    setCurrentSlide(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Heading */}


      <div className="container w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 bg-[#ff8006]/20 backdrop-blur-xl p-4 sm:p-5 lg:p-6 rounded-2xl"
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
        >
          {/* Left: iPhone Slider */}
          <motion.div
            className="relative w-full max-w-[340px] lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] h-[560px] sm:h-[600px] lg:h-[640px] drop-shadow-2xl">
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
                  className="absolute top-[7%] left-[12%] w-[228px] sm:w-[245px] lg:w-[260px] h-[470px] sm:h-[505px] lg:h-[540px] object-cover rounded-[25px] sm:rounded-[28px] lg:rounded-[30px] shadow-2xl z-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  dragMomentum
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full cursor-pointer"
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
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#ff8006] transition-all duration-300 shadow-md hover:shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mb-3 sm:mb-4"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-bold text-[#ff8006] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[0.75rem] sm:text-[0.875rem] lg:text-[1rem] mt-2 sm:mt-3 leading-relaxed">
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