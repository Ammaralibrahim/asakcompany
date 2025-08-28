"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 50px rgba(239,68,68,0.3)",
    transition: { duration: 0.3, type: "spring" },
  },
};

const plans = [
  {
    title: "Starter",
    price: "$99/mo",
    description: "Perfect for small suppliers starting their B2B journey.",
    features: [
      "Up to 100 product listings",
      "Basic analytics dashboard",
      "Email support",
      "Secure payment processing",
    ],
    popular: false,
  },
  {
    title: "Business",
    price: "$299/mo",
    description: "Best for growing businesses with higher trade volume.",
    features: [
      "Up to 1,000 product listings",
      "Advanced analytics & insights",
      "Priority customer support",
      "API & third-party integrations",
      "Bulk order management",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large-scale enterprises.",
    features: [
      "Unlimited product listings",
      "Dedicated account manager",
      "Custom API & integrations",
      "Team collaboration tools",
      "Onboarding & training",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-24 bg-transparent   text-white">
      <motion.div
        className="container mx-auto px-4 md:px-16 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={containerVariants}
        >
          Marketplace Pricing
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-16 max-w-2xl"
          variants={containerVariants}
        >
          Flexible plans designed for suppliers and buyers of all sizes. Scale
          your B2B marketplace presence with the right plan.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl bg-gradient-to-r from-red-600/50 to-black/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 ${
                plan.popular ? "border-red-600 scale-105" : ""
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-tl-xl rounded-br-xl text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <ul className="flex-1 flex flex-col gap-3 mb-6 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="mt-auto py-3 px-6 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-xl font-semibold text-white uppercase tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {plan.title === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
