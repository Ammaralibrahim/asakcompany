"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const columns = [
    {
      title: "Asak",
      image: "/asak.webp",
      logo: "/asak-whitelogo.webp",
      category: "Startup Company",
      description:
        "Buying and selling computers, import/export, assembly, maintenance, and software-hardware consultancy. Also providing data preparation, repair, and online services.",
      gradient: "from-[#0067b8]/0 via-[#0067b8]/20 to-[#0067b8]/90",
    },
    {
      title: "Exporea",
      image: "/exporea.webp",
      logo: "/exporealogo.webp",
      category: "B2B Marketplace",
      description:
        "Construction materials, white goods, home appliances, and automotive products: production, buying/selling, maintenance, repair, and international trade.",
      gradient: "from-[#e13535]/0 via-[#e13535]/20 to-[#e13535]/90",
    },
    {
      title: "Taskina",
      image: "/taskina.webp",
      logo: "/taskinalogo.webp",
      category: "Service Marketplace App",
      description:
        "Electrical materials, electronic components, industrial machines, and electronic devices manufacturing, buying, selling, import/export.",
      gradient: "from-[#ff8400]/0 via-[#ff8400]/20 to-[#ff8400]/100",
    },
  ];

const menuItems = [
  { id: 1, title: "Asak", url: "https://asak.com" },
  { id: 2, title: "Exporea", url: "https://exporea.com" },
  { id: 3, title: "Taskina", url: "https://taskina.com" },
];


  const menuContents = [
    {
      id: 1,
      title: "Asak Details",
      description: `Buying and selling computers, import/export, assembly, maintenance, and software-hardware consultancy. 
      We also provide professional data preparation, repair services, and online support for businesses and individuals. 
      Our team ensures timely delivery, reliable quality control, and customized solutions for tech startups and enterprises. 
      With a focus on innovation and client satisfaction, Asak has become a trusted partner for technology-related services.`,
    },
    {
      id: 2,
      title: "Exporea Details",
      description: `Construction materials, white goods, home appliances, and automotive products: production, buying/selling, maintenance, repair, and international trade. 
      Exporea is dedicated to streamlining procurement processes for businesses, offering high-quality products with competitive pricing. 
      Our platform connects manufacturers, suppliers, and buyers worldwide, facilitating smooth transactions and operational efficiency. 
      We ensure reliability, transparency, and global standards in every trade deal.`,
    },
    {
      id: 3,
      title: "Taskina Details",
      description: `Electrical materials, electronic components, industrial machines, and electronic devices manufacturing, buying, selling, import/export. 
      Taskina provides a complete service marketplace for businesses seeking specialized equipment and technology solutions. 
      From sourcing rare components to delivering turnkey solutions, our platform ensures seamless operations and expert support.`,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen relative overflow-hidden">
      {/* Menü Butonu */}
      <div className="absolute top-0 right-0 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-5 transition bg-black/40"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
             <motion.div
                key="menu"
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
            ) : (
              <motion.div
                key="menu"
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
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Ana içerik */}
      <main className="flex w-full h-screen flex-col md:flex-row">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            className="relative flex-1 flex flex-col md:flex-row items-end justify-center cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ flexGrow: hoveredIndex === i ? 2.4 : 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Arka plan ve gradient */}
            <div className="absolute inset-0">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredIndex === i
                    ? "scale-105 grayscale-0"
                    : "scale-100 grayscale-100"
                }`}
                priority={i === 0}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${col.gradient}`}
              />
            </div>
            <div className="absolute top-2 left-2">
              <span
                className="inline-block px-2 py-1 text-[10px] md:text-xs font-medium text-white/80  
                                 backdrop-blur-md bg-black/30 border border-white/20 tracking-widest"
              >
                {col.category}
              </span>
            </div>
            {/* İçerik container */}
            <div className="relative z-10  flex flex-col md:flex-row items-start md:items-center justify-between w-full px-6 md:px-12 py-6 gap-16">
              {/* Category badge: sol üst köşe */}

              {/* Sol grup: her zaman görünür */}
              <div className="flex flex-col items-start gap-0 md:gap-4">
                {col.logo && (
                  <Image src={col.logo} alt="Logo" width={120} height={120} />
                )}
                <p className="text-md uppercase font-bold text-white/70 tracking-widest">
                  {"0"}
                  {i + 1}
                </p>
                <div className="w-12 h-[2px] bg-white"></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight drop-shadow-lg">
                  {col.title}
                </h3>
              </div>

              {/* Sağ grup: hoverda görünür */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    className="flex-1 max-w-md flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }} // <--- delay ekledik
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <h4 className="text-xs sm:text-sm md:text-2xl font-bold text-white/90">
                      What we do
                    </h4>
                    <p className="text-[10px] sm:text-sm md:text-base leading-relaxed text-white/80">
                      {col.description}
                    </p>
                    <button className="mt-2 bg-gradient-to-r hover:backdrop-blur-xl duration-500 border border-white px-4 py-2 text-sm font-semibold shadow-lg">
                      Request Quote
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Fullscreen Menü */}
    {/* Fullscreen Menü */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Kapatma ikonu */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6  transition"
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
