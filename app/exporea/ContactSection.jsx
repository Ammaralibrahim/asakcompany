import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ParallaxSection from "./ParallaxSection"; // Added import

export default function ContactSection({ scrollYProgress, formData, handleInputChange }) {
  return (
    <ParallaxSection scrollYProgress={scrollYProgress} range={[-20, 20]}>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e13535]">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <ContactForm formData={formData} handleInputChange={handleInputChange} />
          <ContactInfo />
        </div>
      </motion.section>
    </ParallaxSection>
  );
}