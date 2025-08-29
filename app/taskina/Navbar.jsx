// app/taskina/components/Navbar.tsx
'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 120 }}
            className="flex-shrink-0"
          >
            <span className="text-3xl font-extrabold text-[#ff8400]">Taskina</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'How It Works', 'About', 'Pricing', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
                className="hover:text-[#ff8400] transition text-lg"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 150 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-[#ff8400] hover:bg-[#e07600] px-5 py-3 rounded-lg transition text-white font-bold"
          >
            Download App
          </motion.button>
        </div>
      </div>
    </nav>
  );
}