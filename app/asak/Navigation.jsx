"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { id: 1, title: "Asak", url: "https://asakgrup.com" },
    { id: 2, title: "Exporea", url: "https://exporea.com" },
    { id: 3, title: "Taskina", url: "https://taskina.com" },
    { id: 4, title: "Blog", url: "/blog" },
    { id: 5, title: "Contact", url: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-5 transition bg-black/40 hover:bg-black/60"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 transition hover:scale-110"
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
                  target={item.url.startsWith("http") ? "_blank" : "_self"}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
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
    </>
  );
}