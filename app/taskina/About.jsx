'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-[#ff8400]"
        >
          About Taskina
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-center max-w-4xl mx-auto text-gray-600"
        >
          Taskina is a cutting-edge service marketplace app designed to connect freelancers with clients worldwide. 
          With a focus on user experience, security, and efficiency, we provide all the tools needed for successful collaborations. 
          OurZFSTeXOur platform supports a wide range of services, from graphic design to software development, ensuring everyone finds what they need.
        </motion.p>
      </div>
    </section>
  );
}