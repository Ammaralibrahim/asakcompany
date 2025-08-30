"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8">
      {/* Left Side */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left bg-[#ff8006]/20 backdrop-blur-xl p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Discover Our Amazing App
        </h1>
        <p className="font-thin sm:text-lg text-gray-900 max-w-md mx-auto lg:mx-0">
          Transform your daily experience with our cutting-edge application.
          Seamless, intuitive, and packed with features to elevate your
          productivity.
        </p>
        <Link
          href="#download"
          className="inline-block bg-[#ff8006] text-gray-900 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300"
        >
          Get Started
        </Link>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/taskina-hero-phone.webp"
          alt="App Preview"
          width={400}
          height={560}
          className="object-contain max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default HeroContent;
