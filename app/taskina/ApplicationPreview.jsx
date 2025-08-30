"use client";
import { motion } from "framer-motion";

const features = {
  left: [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Seamless Integration",
      summary: "Connect with all your favorite tools effortlessly.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "User-Friendly Interface",
      summary: "Experience intuitive navigation and clean design.",
    },
  ],
  right: [
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff8006]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Performance",
      summary: "Load your data instantly without any lag.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#ff8006]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
      title: "Global Access",
      summary: "Use the app from anywhere in the world seamlessly.",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05 },
};

export default function ApplicationPreview() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
      id="preview"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Features */}
        <motion.div
          className="flex flex-col space-y-8 bg-[#ff8006]/20 backdrop-blur-xl p-6 rounded-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.left.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-4 bg-[#ff8006]/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={featureVariants}
              whileHover="hover"
            >
              {feature.icon}
              <h4 className="text-lg font-bold text-white mt-2">{feature.title}</h4>
              <p className="text-gray-700 text-sm mt-1">{feature.summary}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Image */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/taskina-review-section.png" // kendi uygulama görselinle değiştir
            alt="Application Preview"
            className="rounded-2xl shadow-2xl w-full max-w-sm"
          />
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="flex flex-col space-y-8 bg-[#ff8006]/20 backdrop-blur-xl p-6 rounded-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.right.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={featureVariants}
              whileHover="hover"
            >
              {feature.icon}
              <h4 className="text-lg font-bold text-[#ff8006] mt-2">{feature.title}</h4>
              <p className="text-gray-700 text-sm mt-1">{feature.summary}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
