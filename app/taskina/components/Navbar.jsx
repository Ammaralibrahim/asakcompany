"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Features", "Pricing", "Contact"];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="w-full ">
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
          className="md:hidden p-2 text-black mr-auto z-50"
          onClick={() => setSidebarOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

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
                  className="self-start mb-8 p-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                </button>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`#${item.toLowerCase()}`}
                      className="text-amber-500 bg-white/10 backdrop-blur-sm px-2 py-1 rounded transition-all bg-amber-500 text-black"
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
