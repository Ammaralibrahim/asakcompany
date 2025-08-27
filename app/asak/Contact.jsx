"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 md:px-12 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        Contact Us
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div className="flex-1 flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-white/90">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-2 w-full bg-black/40 border ${errors.name ? "border-red-500" : "border-white/10"} p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#0067b8]`}
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-white/90">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-2 w-full bg-black/40 border ${errors.email ? "border-red-500" : "border-white/10"} p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#0067b8]`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="text-sm font-medium text-white/90">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`mt-2 w-full bg-black/40 border ${errors.subject ? "border-red-500" : "border-white/10"} p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#0067b8]`}
            />
            {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-white/90">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`mt-2 w-full bg-black/40 border ${errors.message ? "border-red-500" : "border-white/10"} p-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#0067b8] min-h-[150px]`}
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>
          <motion.button
            onClick={handleSubmit}
            className="w    	    
w-fit bg-gradient-to-r from-[#0067b8]/90 to-[#0067b8]/70 hover:backdrop-blur-xl duration-500 border border-white px-6 py-3 text-sm font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.div>
        <motion.div className="flex-1 flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">Get in Touch</h3>
          <div className="w-12 h-[2px] bg-white"></div>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Reach out for inquiries about our services, partnerships, or technical support. Our team is ready to assist you.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-sm font-bold text-white/90">Address</h4>
              <p className="text-sm text-white/80">123 Tech Street, Istanbul, Turkey</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">Phone</h4>
              <p className="text-sm text-white/80">+90 123 456 7890</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">Email</h4>
              <p className="text-sm text-white/80">contact@asakgrup.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}