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
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      {/* Animated Wave and Particle Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#e67305", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#ff8006", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ff9a3d", stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#d96604", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#ff8006", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ffab66", stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#cc5903", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#ff8006", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ffbc6b", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Waves */}
          <motion.path
            d="M0,350 C200,250 400,450 600,350 C800,250 1000,450 1200,350 C1400,250 1600,450 1920,350 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient1)"
            variants={waveVariants}
            animate="animate"
          />
          <motion.path
            d="M0,450 C150,350 350,550 550,450 C750,350 950,550 1150,450 C1350,350 1550,550 1920,450 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient2)"
            variants={waveVariants}
            animate="animate"
            initial={{ y: 15 }}
            transition={{ delay: 0.5 }}
          />
          <motion.path
            d="M0,550 C100,450 300,650 500,550 C700,450 900,650 1100,550 C1300,450 1500,650 1920,550 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient3)"
            variants={waveVariants}
            animate="animate"
            initial={{ y: 30 }}
            transition={{ delay: 1 }}
          />
          {/* Particles */}
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={particle.cx}
              cy={particle.cy}
              r={particle.r}
              fill="#ff8006"
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
              transition={{ delay: Math.random() * 2 }}
            />
          ))}
        </svg>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
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
            <div className="relative w-[320px] h-[640px] drop-shadow-2xl">
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
                  className="absolute top-[7%] left-[12%] w-[260px] h-[540px] object-cover rounded-[30px] shadow-2xl z-0"
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
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-full cursor-pointer"
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
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#ff8006] transition-all duration-300 shadow-md hover:shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  className="w-12 h-12 mb-4"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3 className="text-xl font-bold text-[#ff8006] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
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