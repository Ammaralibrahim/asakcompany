"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TaskinaAboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: 1, title: "Asak", url: "https://asakgrup.com" },
    { id: 2, title: "Exporea", url: "https://exporea.com" },
    { id: 3, title: "Taskina", url: "https://taskina.com" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen relative overflow-hidden">
      {/* Menu Button */}
      <div className="absolute top-0 right-0 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-5 transition bg-black/40"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <svg width="30" height="30" fill="white">
                <rect y="4" width="30" height="2" />
                <rect y="12" width="30" height="2" />
                <rect y="20" width="20" height="2" />
              </svg>
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-12 py-24">
        <motion.div
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Us Section */}
          <motion.section className="mb-24" variants={itemVariants}>
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left: Image and Badge */}
              <div className="relative flex-1">
                <Image
                  src="/taskina.webp"
                  alt="Taskina"
                  width={600}
                  height={400}
                  className="object-cover shadow-lg"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-block px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md border border-white/10 tracking-widest"
                    style={{ backgroundColor: "#ff840055" }}
                  >
                    Service Marketplace App
                  </span>
                </div>
              </div>
              {/* Right: Content */}
              <div className="flex-1 flex flex-col gap-6">
                <Image src="/taskinalogo.webp" alt="Taskina Logo" width={120} height={120} />
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
                  About Taskina
                </h1>
                <div className="w-12 h-[2px] bg-white"></div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Taskina is a premier service marketplace app specializing in electrical materials, electronic components, industrial machines, and electronic devices. We facilitate manufacturing, buying, selling, and import/export, providing a seamless platform for businesses seeking specialized equipment and technology solutions.
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Our goal is to empower businesses by offering access to high-quality components and turnkey solutions. Taskina ensures operational efficiency, expert support, and a user-friendly experience, making us a trusted partner for sourcing and managing technology needs.
                </p>
                <motion.button
                  onClick={() => router.push("/")}
                  className="mt-4 w-fit bg-gradient-to-r from-[#ff8400]/90 to-[#ff8400]/70 hover:backdrop-blur-xl duration-500 border border-white px-6 py-3 text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* Our Mission Section */}
          <motion.section className="mb-24" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "Providing easy access to specialized equipment and components for businesses worldwide.",
                },
                {
                  title: "Expert Support",
                  description: "Offering expert guidance and tailored solutions to meet unique technology needs.",
                },
                {
                  title: "Seamless Experience",
                  description: "Delivering a user-friendly platform for efficient sourcing and management of resources.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 p-6 border border-white/10"
                  whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(255, 132, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Us Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left: Form */}
              <motion.div
                className="flex-1 flex flex-col gap-6"
                variants={itemVariants}
              >
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-white/90">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-black/40 border border-white/10 p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#ff8400]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-black/40 border border-white/10 p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#ff8400]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-white/90">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-black/40 border border-white/10 p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#ff8400]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-white/90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-black/40 border border-white/10 p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#ff8400] min-h-[150px]"
                  ></textarea>
                </div>
                <motion.button
                  className="w-fit bg-gradient-to-r from-[#ff8400]/90 to-[#ff8400]/70 hover:backdrop-blur-xl duration-500 border border-white px-6 py-3 text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
              {/* Right: Contact Info */}
              <motion.div className="flex-1 flex flex-col gap-6" variants={itemVariants}>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Get in Touch
                </h3>
                <div className="w-12 h-[2px] bg-white"></div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Contact us for inquiries about our service marketplace, equipment sourcing, or technical support. Our team is ready to assist with customized solutions for your business.
                </p>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Address</h4>
                    <p className="text-sm text-white/80">789 Innovation Road, Istanbul, Turkey</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Phone</h4>
                    <p className="text-sm text-white/80">+90 555 123 4567</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Email</h4>
                    <p className="text-sm text-white/80">contact@taskina.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  {["facebook", "twitter", "linkedin"].map((platform) => (
                    <motion.a
                      key={platform}
                      href={`https://${platform}.com/taskina`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d={
                            platform === "facebook"
                              ? "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7h-2v-2h2v-1.5c0-2.07 1.24-3.2 3.12-3.2.88 0 1.64.07 1.86.1v2.1h-1.28c-1 0-1.2.48-1.2 1.18V12h2.4l-.4 2h-2v7c4.56-.93 8-4.96 8-9.8z"
                              : platform === "twitter"
                              ? "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                              : "M20.45 8c-.7-.6-1.6-1-2.7-1.2-.8-.2-1.7-.3-2.7-.3-2.8 0-5 1.1-6.6 2.9L2 16.3c-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0l5.2-5.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-5.2 5.2c-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0l5.2-5.2c1.6-1.6 2.9-3.8 2.9-6.6 0-1-.1-1.9-.3-2.7z"
                          }
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M 7.7 6.3 L 6.3 7.7 23.6 25 6.3 42.3 7.7 43.7 25 26.4 42.3 43.7 43.7 42.3 26.4 25 43.7 7.7 42.3 6.3 25 23.6 7.7 6.3 z" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24 w-full max-w-6xl">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-xl md:text-3xl font-bold text-white/90 hover:text-white transition
                             after:block after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}