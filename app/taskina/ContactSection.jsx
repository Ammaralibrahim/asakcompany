"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const contactInfo = {
  email: "support@taskina.com",
  phone: "+1 (123) 456-7890",
  address: "123 Event St, Tech City, TC 12345",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const shapeVariants = {
  animate: {
    x: [0, 10, 0],
    transition: {
      x: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  },
};

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 bg-white overflow-hidden">
      {/* Animated Abstract Shape Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff8006", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ff9a3d", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Left Shape */}
          <motion.path
            d="M0,0 C200,200 300,600 400,1080 L0,1080 Z"
            fill="url(#shapeGradient)"
            variants={shapeVariants}
            animate="animate"
          />
          {/* Right Shape */}
          <motion.path
            d="M1920,0 C1720,200 1620,600 1520,1080 L1920,1080 Z"
            fill="url(#shapeGradient)"
            variants={shapeVariants}
            animate="animate"
            initial={{ x: -10 }}
            transition={{ delay: 0.5 }}
          />
        </svg>
      </motion.div>

      <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-[#ff8006] tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-xl mx-auto">
            Reach out with any questions or feedback. We're here to help!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            className="flex flex-col p-8 rounded-2xl bg-white border border-gray-200"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-[#ff8006] tracking-tight mb-6">
              Send a Message
            </h3>
            <form className="flex flex-col space-y-6">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-base font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 px-8 py-4 rounded-full text-lg font-semibold bg-[#ff8006] text-white hover:bg-[#e67305] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col p-8 rounded-2xl bg-white border border-gray-200"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-[#ff8006] tracking-tight mb-6">
              Contact Info
            </h3>
            <ul className="text-gray-600 text-base space-y-6">
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-[#ff8006] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#ff8006] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-[#ff8006] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#ff8006] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-[#ff8006] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactInfo.address}</span>
              </li>
            </ul>
            <Link
              href="#support"
              className="mt-8 px-8 py-4 rounded-full text-lg font-semibold bg-white text-[#ff8006] border border-[#ff8006] hover:bg-[#ff8006] hover:text-white transition-colors duration-300"
            >
              Visit Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
