"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      bio: "Visionary leader with 15 years of experience in tech innovation.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      bio: "Expert in hardware and software integration, driving cutting-edge solutions.",
    },
    {
      name: "Alex Brown",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      bio: "Ensures seamless import/export and operational efficiency.",
    },
    {
      name: "Emily Davis",
      role: "Lead Consultant",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      bio: "Specializes in IT solutions and client-focused consultancy.",
    },
  ];

  return (
    <motion.section
      className="py-24 px-6 md:px-12  text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Team
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {teamMembers.map((member, index) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useTransform(y, [-50, 50], [10, -10]);
          const rotateY = useTransform(x, [-50, 50], [-10, 10]);

          return (
            <motion.div
              key={index}
              className="relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/20 overflow-hidden text-center group"
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              whileHover={{ y: -10, boxShadow: "0 15px 50px rgba(56, 189, 248, 0.35)" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition duration-500"></div>

              {/* Image */}
              <motion.div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4" style={{ rotateX, rotateY }}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Name */}
              <motion.h3
                className="text-lg font-bold mb-1"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {member.name}
              </motion.h3>

              {/* Role */}
              <motion.p
                className="text-sm text-white/80"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {member.role}
              </motion.p>

              {/* Bio */}
              <motion.p
                className="text-sm text-white/70 mt-2"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {member.bio}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
