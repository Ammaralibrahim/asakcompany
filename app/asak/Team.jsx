"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/team/john-doe.webp",
      bio: "Visionary leader with 15 years of experience in tech innovation.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/team/jane-smith.webp",
      bio: "Expert in hardware and software integration, driving cutting-edge solutions.",
    },
    {
      name: "Alex Brown",
      role: "Head of Operations",
      image: "/team/alex-brown.webp",
      bio: "Ensures seamless import/export and operational efficiency.",
    },
    {
      name: "Emily Davis",
      role: "Lead Consultant",
      image: "/team/emily-davis.webp",
      bio: "Specializes in IT solutions and client-focused consultancy.",
    },
  ];

  return (
    <motion.section
      className="py-24 px-4 md:px-12 bg-gradient-to-b from-gray-950 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-12">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-black/60 p-6 border border-white/10 hover:border-[#0067b8] transition-all duration-300 text-center"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 103, 184, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-white/90">{member.name}</h3>
            <p className="text-sm text-white/80">{member.role}</p>
            <p className="text-sm text-white/80 mt-2">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}