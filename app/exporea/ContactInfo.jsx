import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  { title: "Address", value: "456 Trade Avenue, Istanbul, Turkey", icon: "/icons/location.svg" },
  { title: "Phone", value: "+90 987 654 3210", icon: "/icons/phone.svg" },
  { title: "Email", value: "contact@exporea.com", icon: "/icons/email.svg" },
];

export default function ContactInfo() {
  return (
    <motion.div
      className="flex-1 flex flex-col gap-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e13535]">
        Get in Touch
      </h3>
      <motion.div
        className="w-20 h-[4px] bg-gradient-to-r from-[#e13535] to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "5rem" }}
        transition={{ duration: 0.8 }}
      />
      <p className="text-base md:text-lg text-white/80 leading-relaxed">
        Reach out to explore our B2B marketplace, discuss partnerships, or inquire ­inquire about our products. Our dedicated team is ready to provide tailored solutions to elevate your business.
      </p>
      <div className="flex flex-col gap-6">
        {CONTACT_INFO.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4"
            whileHover={{ x: 5, color: "#e13535" }}
            transition={{ duration: 0.3 }}
          >
            <Image src={info.icon} alt={info.title} width={24} height={24} />
            <div>
              <h4 className="text-sm font-bold text-white/90">{info.title}</h4>
              <p className="text-sm text-white/80">{info.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}