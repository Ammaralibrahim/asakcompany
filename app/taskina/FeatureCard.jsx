import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function FeatureCard({ title, description, icon }) {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
      <motion.div
        className="bg-darkSecondary/50 backdrop-blur-lg p-8 border border-white/10 rounded-2xl shadow-xl"
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(255, 132, 0, 0.3)",
        }}
        transition={{ duration: 0.4 }}
      >
        <img src={icon} alt={title} className="w-64  mb-4" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </motion.div>
    </Tilt>
  );
}