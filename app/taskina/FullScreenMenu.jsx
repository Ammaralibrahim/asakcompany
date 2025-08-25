import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
  { id: 1, title: "Asak", url: "https://asakgrup.com" },
  { id: 2, title: "Exporea", url: "https://exporea.com" },
  { id: 3, title: "Taskina", url: "https://taskina.com" },
];

export default function FullScreenMenu({ isOpen, closeMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-darkBg/95 backdrop-blur-xl flex items-center justify-center"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.button
            onClick={closeMenu}
            className="absolute top-8 right-8"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              fill="#ff8400"
            >
              <path d="M7.7 6.3L6.3 7.7L23.6 25L6.3 42.3L7.7 43.7L25 26.4L42.3 43.7L43.7 42.3L26.4 25L43.7 7.7L42.3 6.3L25 23.6L7.7 6.3z" />
            </svg>
          </motion.button>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {MENU_ITEMS.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-5xl font-extrabold text-white relative group"
                whileHover={{ y: -8, color: "#ff8400" }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
                <motion.div
                  className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-[#ff8400] to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}