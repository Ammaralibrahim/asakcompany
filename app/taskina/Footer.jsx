'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-[#ff8400] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-6 md:mb-0"
          >
            <span className="text-2xl font-bold">Taskina</span>
            <p className="mt-2">Connect, Collaborate, Succeed</p>
          </motion.div>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="hover:underline"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-6"
        >
          © 2025 Taskina. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}