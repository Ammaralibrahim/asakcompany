'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Basic',
    price: 'Free',
    features: ['Basic Search', 'Limited Messaging', 'Standard Support'],
  },
  {
    title: 'Pro',
    price: '$9.99/month',
    features: ['Advanced Search', 'Unlimited Messaging', 'Priority Support', 'Featured listings'],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: ['All Pro Features', 'Custom Integrations', 'Dedicated Account Manager', 'API Access'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-[#ff8400]"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#ff8400]">{plan.title}</h3>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-[#ff8400] hover:bg-[#e07600] px-6 py-3 rounded-lg text-white font-bold transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}