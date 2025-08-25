import { motion } from "framer-motion";

export default function ContactForm({ formData, handleInputChange }) {
  const FORM_FIELDS = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
    { id: "message", label: "Message", type: "textarea", minHeight: "150px" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <motion.form
      className="flex-1 flex flex-col gap-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {FORM_FIELDS.map((field) => (
        <motion.div
          key={field.id}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor={field.id} className="text-sm font-medium text-white/90">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleInputChange}
              className="mt-2 w-full bg-black/20 backdrop-blur-md border border-white/20 p-4 text-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e13535]"
              style={{ minHeight: field.minHeight }}
              required
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleInputChange}
              className="mt-2 w-full bg-black/20 backdrop-blur-md border border-white/20 p-4 text-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e13535]"
              required
            />
          )}
        </motion.div>
      ))}
      <motion.button
        type="submit"
        className="w-fit bg-gradient-to-r from-[#e13535] to-[#b11212] text-white px-8 py-4 rounded-full font-semibold shadow-xl"
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(225, 53, 53, 0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}