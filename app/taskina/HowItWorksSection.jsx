import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

const STEPS = [
  {
    title: "Sign Up",
    description: "Create an account and dive into Taskina's marketplace.",
    icon: "/Signup.jpg",
  },
  {
    title: "Browse & Order",
    description: "Find components with powerful search and order instantly.",
    icon: "/browse-order.jpg",
  },
  {
    title: "Track & Manage",
    description: "Manage projects and track orders in real time.",
    icon: "/track-manage.jpg",
  },
];

export default function HowItWorksSection({ scrollYProgress }) {
  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-50, 50]}>
      <motion.section
        className="py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
          How Taskina Works
        </h2>
        <div className="relative flex flex-col md:flex-row gap-8">
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-[4px] bg-gradient-to-r from-primary to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={step.icon} alt={step.title} className="w-64 mb-4" />
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}