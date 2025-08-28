"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", damping: 15, stiffness: 100 } },
};

const dotVariants = {
  inactive: { scale: 1, backgroundColor: "#6B7280", boxShadow: "0 0 0 rgba(239,68,68,0)" },
  active: { scale: 1.2, backgroundColor: "#EF4444", boxShadow: "0 0 10px rgba(239,68,68,0.5)", transition: { duration: 0.3, type: "spring" } },
  hover: { scale: 1.3, boxShadow: "0 0 15px rgba(239,68,68,0.7)", transition: { duration: 0.2 } },
};

const featureVariants = {
  hidden: { opacity: 0, x: 50, rotate: -5 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, type: "spring", damping: 15, stiffness: 100 } },
};

export default function ExhibitionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/app-1.jpg", "/app-2.jpg"]; // iPhone slider için görseller

  const handleDotClick = (index) => setCurrentSlide(index);

  const handleDragEnd = (e, info) => {
    const offset = info.offset.x;
    const slideWidth = 232;
    const newIndex = Math.round(currentSlide - offset / slideWidth);
    setCurrentSlide(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  const features = [
    {
      title: "Show Genie",
      description: "Seamless event navigation with AI-powered assistance.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
</svg>

      ),
    },
    {
      title: "E-Badge",
      description: "Quick entry with a digital badge via login or registration.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
</svg>

      ),
    },
    {
      title: "Show Map",
      description: "Plan your itinerary and locate exhibitors with ease.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z" clip-rule="evenodd" />
</svg>

      ),
    },
    {
      title: "Visit Planner & Share Notes",
      description: "Organize visits and share notes with colleagues.",
      icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM1.75 14.5a.75.75 0 0 0 0 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 0 0-1.5 0v.784a.272.272 0 0 1-.35.25A49.043 49.043 0 0 0 1.75 14.5Z" clip-rule="evenodd" />
</svg>

      ),
    },
    {
      title: "Onsite Activity",
      description: "Complete in-app missions to win exciting prizes.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
</svg>

      ),
    },
  ];

  return (
    <section id="exhibition" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 bg-transparent">
      <motion.div
        className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: iPhone Slider */}
        <motion.div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start" variants={childVariants}>
          <div className="relative w-[300px] h-[600px] drop-shadow-2xl">
            <img src="/iphone-frame.png" alt="iPhone Frame" className="absolute inset-0 w-full h-[600px] object-contain z-10" />
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt={`Screenshot ${currentSlide + 1}`}
              className="absolute top-[8.1%] left-[14.1%] w-[232px] h-[500px] object-cover rounded-[24px] bg-black shadow-inner"
              drag="x"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              dragMomentum
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {slides.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  variants={dotVariants}
                  animate={currentSlide === index ? "active" : "inactive"}
                  whileHover="hover"
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Features */}
      <motion.div 
  className="w-full text-center p-8 rounded-2xl bg-gradient-to-r from-red-600/50 to-black/70 backdrop-blur-md rounded-2xl p-8 shadow-lg"
  variants={childVariants}
>
  <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" variants={childVariants}>
    App Features
  </motion.h2>
  
  <div className="w-32 h-1 mx-auto mb-12 bg-gradient-to-r from-red-500 to-black rounded-full"></div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {features.map((feature, index) => (
      <motion.div 
        key={index} 
        className="flex flex-col items-center text-center space-y-4 group cursor-pointer p-6 rounded-xl bg-black/80 backdrop-blur-md hover:bg-red-500/20 transition-all"
        variants={featureVariants} 
        whileHover="hover"
      >
        {feature.icon}
        <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">{feature.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

      </motion.div>
    </section>
  );
}
