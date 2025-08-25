import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

export default function HeroSection({ scrollYProgress }) {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-100, 100]}>
      <motion.section
        className="min-h-screen flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-7xl">
          <motion.div className="flex-1 text-center md:text-left" variants={textVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
              Taskina: Your Mobile Marketplace
            </h1>
            <motion.div
              className="w-24 h-[4px] bg-gradient-to-r from-primary to-transparent my-6 mx-auto md:mx-0"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Source electrical materials, electronic components, and industrial machines with Taskina's intuitive mobile app. Streamline your business today.
            </p>
            <motion.a
              href="https://taskina.com/download"
              className="mt-8 inline-block bg-gradient-to-r from-primary to-primaryDark text-white px-8 py-4 rounded-full font-semibold shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 132, 0, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Now
            </motion.a>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            animate={{ rotateY: [0, 15, -15, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/application.jpg"
              alt="Taskina App Mockup"
              width={500}
              height={800}
              className="object-contain drop-shadow-2xl rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}