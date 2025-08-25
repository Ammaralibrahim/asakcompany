import { motion, useTransform } from "framer-motion";

export default function ParallaxSection({ children, scrollYProgress, range }) {
  const y = useTransform(scrollYProgress, [0, 1], range);
  return <motion.div style={{ y }}>{children}</motion.div>;
}