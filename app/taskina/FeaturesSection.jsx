import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import ParallaxSection from "./ParallaxSection";

const FEATURES = [
  {
    title: "Seamless Sourcing",
    description: "Connect with trusted suppliers for electrical and industrial components.",
    icon: "/Seamles-Sourcing.jpg",
  },
  {
    title: "Real-Time Tracking",
    description: "Monitor orders and inventory with live updates on your phone.",
    icon: "/real-time-tracking.jpg",
  },
  {
    title: "Expert Support",
    description: "Get tailored guidance for your technical and procurement needs.",
    icon: "Seamles-Sourcing.jpg",
  },
];

export default function FeaturesSection({ scrollYProgress }) {
  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-60, 60]}>
      <motion.section
        className="py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
          Why Choose Taskina?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}