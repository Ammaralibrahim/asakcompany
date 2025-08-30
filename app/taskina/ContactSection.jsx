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
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
<section
  className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"

>


      <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 bg-[#ff8006]/20 backdrop-blur-xl p-6 rounded-2xl" >
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-xl mx-auto">
            We’d love to hear from you. Drop us a message or reach us directly.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            className="flex flex-col p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                required
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-[#ff8006] focus:border-[#ff8006] outline-none text-base"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-lg text-base font-medium bg-[#ff8006] text-white hover:bg-[#e67305] shadow-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Info
            </h3>
            <ul className="text-gray-700 space-y-5 text-lg">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#ff8006] transition-colors"
                >
                  📧 {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-[#ff8006] transition-colors"
                >
                  📞 {contactInfo.phone}
                </a>
              </li>
              <li>📍 {contactInfo.address}</li>
            </ul>
            <Link
              href="#support"
              className="mt-10 px-6 py-3 rounded-lg text-base font-medium bg-[#ff8006] text-white hover:bg-[#e67305] shadow-md transition-colors duration-300 w-fit"
            >
              Visit Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
