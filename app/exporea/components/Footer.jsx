"use client";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "#", icon: "M22.46 6c-.77.35-1.6.59-2.46.69a4.28 4.28 0 001.88-2.37 8.48 8.48 0 01-2.7 1.03 4.24 4.24 0 00-7.23 3.87 12.03 12.03 0 01-8.73-4.43 4.24 4.24 0 001.31 5.65A4.22 4.22 0 012 9.7v.05a4.24 4.24 0 003.4 4.16 4.24 4.24 0 01-1.92.07 4.24 4.24 0 003.96 2.94 8.5 8.5 0 01-5.27 1.81c-.34 0-.67-.02-1-.06a12 12 0 006.5 1.91c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.35-.02-.53A8.6 8.6 0 0024 4.56a8.48 8.48 0 01-2.54.7z" },
  { href: "#", icon: "M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.14 6.84 9.47.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02a9.57 9.57 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.57.69.48 3.97-1.33 6.82-5.06 6.82-9.47 0-5.5-4.46-9.96-9.96-9.96z" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-black via-gray-900 to-red-700 text-white">
      {/* Wave SVG */}
    

      <div className="container mx-auto px-4 md:px-16 py-24 flex flex-col items-center justify-center gap-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-300 mb-6 text-center max-w-lg">
          Follow us on social media and stay updated with the latest news and updates.
        </p>

        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.icon}></path>
              </svg>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 text-gray-400 text-sm text-center">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
