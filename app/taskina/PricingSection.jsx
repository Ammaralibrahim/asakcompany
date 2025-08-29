
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Basic",
    price: "$9.99",
    period: "/month",
    description: "Perfect for individuals getting started with our app.",
    features: [
      "Access to Show Genie",
      "Basic Show Map",
      "Standard Support",
      "1 Device",
    ],
    buttonText: "Get Started",
    buttonLink: "#signup",
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$19.99",
    period: "/month",
    description: "Ideal for professionals seeking advanced features.",
    features: [
      "All Basic Features",
      "Advanced Show Map",
      "Visit Planner",
      "Priority Support",
      "3 Devices",
    ],
    buttonText: "Get Pro",
    buttonLink: "#signup",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "$49.99",
    period: "/month",
    description: "Best for teams needing full access and customization.",
    features: [
      "All Pro Features",
      "Onsite Activity Missions",
      "Custom Integrations",
      "24/7 Premium Support",
      "Unlimited Devices",
    ],
    buttonText: "Contact Us",
    buttonLink: "#contact",
    highlighted: false,
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

export default function PricingSection() {
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#ff8006] tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Select the perfect plan to unlock the full potential of our app and enhance your experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center text-center p-6 rounded-2xl bg-white border ${
                plan.highlighted ? "border-[#ff8006] shadow-xl" : "border-gray-200"
              } hover:border-[#ff8006] transition-all duration-300 shadow-md hover:shadow-xl relative`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.highlighted && (
                <motion.span
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff8006] to-[#ff9a3d] text-white text-xs font-semibold px-3 py-1 rounded-full"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                >
                  Most Popular
                </motion.span>
              )}
              <h3 className="text-xl font-bold text-[#ff8006] tracking-tight">
                {plan.title}
              </h3>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 text-sm ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {plan.description}
              </p>
              <ul className="text-gray-600 text-sm mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#ff8006] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.buttonLink}
                className={`mt-8 inline-block px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#ff8006] to-[#ff9a3d] text-white hover:from-[#e67305] hover:to-[#ffab66]"
                    : "bg-white text-[#ff8006] border border-[#ff8006] hover:bg-gradient-to-r hover:from-[#ff8006] hover:to-[#ff9a3d] hover:text-white"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
