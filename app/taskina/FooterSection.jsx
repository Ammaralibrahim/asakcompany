"use client";
import { motion } from "framer-motion";

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/features" },
  { title: "Events", href: "/events" },
  { title: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    title: "Twitter",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    href: "https://twitter.com",
  },
  {
    title: "Facebook",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    href: "https://facebook.com",
  },
  {
    title: "Instagram",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    href: "https://instagram.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 12 },
  },
  hover: { scale: 1.05, y: -5, color: "#ff8006", transition: { duration: 0.3 } },
};

export default function FooterSection() {
  return (
    <footer className="relative w-full py-8 bg-[#ff8006]/20 backdrop-blur-xl overflow-hidden z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Navigation Links */}
          <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-gray-600 hover:text-[#ff8006] transition-all duration-300 text-sm sm:text-base"
                variants={linkVariants}
                whileHover="hover"
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex justify-center gap-4 sm:gap-6 mt-2">
            {socialIcons.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                className="w-8 h-8"
                variants={linkVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-gray-600 text-xs sm:text-sm mt-4" variants={linkVariants}>
            © 2025 Taskina. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
