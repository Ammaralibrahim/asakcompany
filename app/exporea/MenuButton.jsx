import { motion, AnimatePresence } from "framer-motion";

export default function MenuButton({ isOpen, toggleMenu }) {
  return (
    <motion.button
      onClick={toggleMenu}
      className="fixed top-6 right-6 z-50 p-4 bg-black/20 backdrop-blur-lg rounded-full shadow-lg"
      whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? "close" : "open"}
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="16" height="2" />
              </>
            )}
          </svg>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}