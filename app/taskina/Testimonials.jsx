'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Freelancer',
    quote: 'Taskina has transformed how I find clients. The interface is intuitive and payments are always on time.',
  },
  {
    name: 'Jane Smith',
    role: 'Client',
    quote: 'I love the variety of services available. Found the perfect designer for my project in minutes!',
  },
  {
    name: 'Alex Johnson',
    role: 'Business Owner',
    quote: 'Secure and reliable platform. The dispute resolution saved me once, highly recommend.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-[#ff8400]"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-lightgray p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}