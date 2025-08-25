import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionCard({ title, description, icon }) {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-lg p-8 border border-white/10 rounded-2xl flex flex-col items-center text-center"
      whileHover={{
        y: -12,
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(225, 53, 53, 0.4)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      transition={{ duration: 0.4 }}
    >
      <Image src={icon} alt={title} width={48} height={48} className="mb-4" />
      <h3 className="text-xl font-semibold text-white/90">{title}</h3>
      <p className="text-sm text-white/80 mt-3">{description}</p>
    </motion.div>
  );
}