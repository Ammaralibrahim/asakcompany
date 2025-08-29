"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Features", "Pricing", "Contact"];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-start space-x-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={`#${item.toLowerCase()}`}
              className=" text-xs backdrop-blur-xl px-2 py-1 rounded-full transition-all bg-black/20 text-black"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-amber-500 ml-auto"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 p-6 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.point.x > 100) setSidebarOpen(false);
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <button
                  className="self-end mb-8 p-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={24} />
                </button>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`#${item.toLowerCase()}`}
                      className="text-amber-500 bg-white/10 backdrop-blur-sm px-2 py-1 rounded transition-all bg-amber-500 text-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
