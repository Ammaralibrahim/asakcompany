"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BlogPreview() {
  const router = useRouter();
  const posts = [
    {
      title: "The Future of Computer Assembly",
      excerpt: "Exploring trends in custom PC builds for 2025 and beyond.",
      image: "/blog/future-pc.webp",
      slug: "/blog/future-pc",
    },
    {
      title: "Optimizing Your IT Infrastructure",
      excerpt: "Tips for businesses to enhance efficiency with modern tech.",
      image: "/blog/it-infrastructure.webp",
      slug: "/blog/it-infrastructure",
    },
    {
      title: "Global Tech Supply Chains",
      excerpt: "How Asak streamlines import/export for tech components.",
      image: "/blog/supply-chain.webp",
      slug: "/blog/supply-chain",
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
        Latest Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-black/60 p-6 border border-white/10 hover:border-[#0067b8] transition-all duration-300"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 103, 184, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-white/90">{post.title}</h3>
            <p className="text-sm text-white/80 mt-2">{post.excerpt}</p>
            <motion.button
              onClick={() => router.push(post.slug)}
              className="mt-4 text-sm text-[#0067b8] hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}