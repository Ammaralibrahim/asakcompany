'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Service Listings',
    description: 'Browse thousands of services from skilled freelancers across various categories.',
  },
  {
    title: 'User Profiles',
    description: 'Detailed profiles with portfolios, reviews, and ratings to choose the best fit.',
  },
  {
    title: 'Secure Payments',
    description: 'Integrated payment system with escrow for safe transactions.',
  },
  {
    title: 'Advanced Search',
    description: 'Filter services by price, rating, delivery time, and more.',
  },
  {
    title: 'Reviews & Ratings',
    description: 'Leave feedback and build reputation in the community.',
  },
  {
    title: 'Messaging System',
    description: 'Real-time chat for seamless communication between buyers and sellers.',
  },
  {
    title: 'Order Management',
    description: 'Track orders, milestones, and deliveries all in one place.',
  },
  {
    title: 'Dispute Resolution',
    description: 'Fair mediation for any issues that arise.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-[#ff8400]"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#ff8400]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}