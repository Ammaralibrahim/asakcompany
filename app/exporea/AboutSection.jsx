import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ParallaxSection from "./ParallaxSection"; // Added import

export default function AboutSection({ scrollYProgress }) {
  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-60, 60]}>
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          <motion.div
            className="relative flex-1"
            whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/exporea.webp"
              alt="Exporea"
              width={600}
              height={400}
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <motion.div
              className="absolute top-6 left-6 backdrop-blur-lg border border-white/20 rounded-full px-4 py-1.5"
              style={{ backgroundColor: "#e1353555" }}
              whileHover={{ scale: 1.1, backgroundColor: "#e1353577" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-medium text-white/90 tracking-widest">
                B2B Marketplace
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image src="/exporealogo.webp" alt="Exporea Logo" width={160} height={160} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e13535]">
              About Exporea
            </h1>
            <motion.div
              className="w-20 h-[4px] bg-gradient-to-r from-[#e13535] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Exporea is a pioneering B2B marketplace redefining global trade in construction materials, white goods, home appliances, and automotive products. Our platform connects manufacturers, suppliers, and buyers with unmatched efficiency, transparency, and reliability.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              We empower businesses with tailored solutions, competitive pricing, and a commitment to quality, ensuring seamless procurement and international trade for enterprises worldwide.
            </p>
            <motion.button
              onClick={() => useRouter().push("/")}
              className="mt-6 w-fit bg-gradient-to-r from-[#e13535] to-[#b11212] text-white px-8 py-4 rounded-full font-semibold shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(225, 53, 53, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}