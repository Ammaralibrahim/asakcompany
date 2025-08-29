'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: 1, title: 'Sign Up', description: 'Create your account as a buyer or seller.' },
  { step: 2, title: 'Browse Services', description: 'Search and find the perfect service.' },
  { step: 3, title: 'Place Order', description: 'Discuss details and place your order.' },
  { step: 4, title: 'Complete Work', description: 'Seller delivers, buyer reviews.' },
  { step: 5, title: 'Get Paid', description: 'Secure payment released to seller.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-[#ff8400]"
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#ff8400] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}