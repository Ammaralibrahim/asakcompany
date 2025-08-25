import { motion } from "framer-motion";
import MissionCard from "./MissionCard";
import ParallaxSection from "./ParallaxSection"; // Added import

const MISSION_ITEMS = [
  {
    title: "Global Connectivity",
    description: "Bridging businesses worldwide through a seamless B2B marketplace for efficient trade.",
    icon: "/icons/global.svg",
  },
  {
    title: "Quality Assurance",
    description: "Delivering high-quality products with rigorous standards for reliability and trust.",
    icon: "/icons/quality.svg",
  },
  {
    title: "Operational Efficiency",
    description: "Streamlining procurement and trade processes to save time and reduce costs for our clients.",
    icon: "/icons/efficiency.svg",
  },
];

export default function MissionSection({ scrollYProgress }) {
  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-40, 40]}>
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e13535]">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISSION_ITEMS.map((item, index) => (
            <MissionCard key={index} {...item} />
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}