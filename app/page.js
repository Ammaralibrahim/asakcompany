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
    },
    {
      title: "Exporea",
      image: "/exporea.webp",
      logo: "/exporealogo.webp",
      category: "B2B Marketplace",
      description:
        "Construction materials, white goods, home appliances, and automotive products: production, buying/selling, maintenance, repair, and international trade.",
    },
    {
      title: "Taskina",
      image: "/taskina.webp",
      logo: "/taskinalogo.webp",
      category: "Service Marketplace App",
      description:
        "Electrical materials, electronic components, industrial machines, and electronic devices manufacturing, buying, selling, import/export.",
    },
  ];

  const menuItems = [
    { id: 1, title: "Asak" },
    { id: 2, title: "Exporea" },
    { id: 3, title: "Taskina" },
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
      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Image src="/asak-whitelogo.webp" alt="Logo" width={120} height={120} />
      </div>

      {/* Menü Butonu */}
      <div className="absolute top-0 right-0 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-5 transition ${menuOpen ? "bg-transparent" : "bg-white"}`}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 50 50"
                  fill="white"
                >
                  <path d="M 7.7 6.3 L 6.3 7.7 23.6 25 6.3 42.3 7.7 43.7 25 26.4 42.3 43.7 43.7 42.3 26.4 25 43.7 7.7 42.3 6.3 25 23.6 7.7 6.3 z" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <svg width="30" height="30" fill="black">
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
            className="relative h-1/3 md:h-full overflow-hidden flex-1 min-w-0 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ flexGrow: hoveredIndex === i ? 2.4 : 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredIndex === i ? "scale-105 grayscale-0" : "scale-100 grayscale-100"
                }`}
                priority={i === 0}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/0 via-black/20 to-black" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-end justify-between">
              <div className="mb-4 md:mb-0 relative">
                <div className="absolute -top-10 -left-1">
                  {col.logo && <Image src={col.logo} alt="Logo" width={120} height={120} />}
                </div>
                <p className="text-md uppercase font-bold text-white/70 mb-1 tracking-widest">
                  {"0"}
                  {i + 1}
                </p>
                <div className="w-12 h-[2px] bg-white mb-2"></div>

                {/* Başlık + Badge */}
                <h3 className="flex flex-col items-left gap-3 text-xl md:text-2xl font-bold tracking-tight drop-shadow-lg">
                  {col.title}
                  <span className="px-3 py-1 text-[10px] font-medium text-white/80  
                 backdrop-blur-md bg-white/10 border border-white/20 tracking-wide">
                    {col.category}
                  </span>
                </h3>
              </div>

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    className="flex flex-col items-start gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <button className="bg-gradient-to-r w-full hover:backdrop-blur-xl duration-500  border border-white px-4 py-2  text-sm font-semibold shadow-lg">
                      Request Quote
                    </button>

                    {/* What we do panel */}
                    <motion.div
                      className="w-full max-w-md py-5 px-6 backdrop-blur-xl bg-black/50 border border-white/20 shadow-2xl pointer-events-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                    >
                      <h4 className="text-2xl font-bold mb-3 text-white/90">What we do</h4>
                      <p className="text-base leading-relaxed text-white/80">{col.description}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Fullscreen Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-24 w-full max-w-6xl">
              {/* Menü itemleri */}
              <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-6 md:gap-8 w-full md:w-auto">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`text-xl md:text-3xl font-bold relative ${
                      selectedMenu === item.id ? "text-white" : "text-white/70"
                    }`}
                    onClick={() => setSelectedMenu(item.id)}
                  >
                    {item.title}
                    {selectedMenu === item.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Menü içeriği */}
              {selectedMenu !== null && (
                <motion.div
                  key={selectedMenu}
                  className="px-6 md:px-10 py-6 md:py-10 rounded-2xl max-w-full md:max-w-xl shadow-2xl bg-black/20 backdrop-blur-md relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  {/* Çarpı butonu */}
                  <button
                    className="absolute top-4 right-4 text-white hover:text-red-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="white">
                      <path d="M 7.7 6.3 L 6.3 7.7 23.6 25 6.3 42.3 7.7 43.7 25 26.4 42.3 43.7 43.7 42.3 26.4 25 43.7 7.7 42.3 6.3 25 23.6 7.7 6.3 z" />
                    </svg>
                  </button>

                  <div className="max-h-[50vh] md:max-h-[44vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-black/20">
                    {menuContents
                      .filter((content) => content.id === selectedMenu)
                      .map((content) => (
                        <div key={content.id}>
                          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
                            {content.title}
                          </h3>
                          <p className="text-sm md:text-lg leading-relaxed">{content.description}</p>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
