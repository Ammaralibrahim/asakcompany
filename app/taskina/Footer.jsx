import { motion } from "framer-motion";

export default function Footer() {
  const SOCIAL_LINKS = [
    { platform: "facebook", url: "https://facebook.com/taskina", icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7h-2v-2h2v-1.5c0-2.07 1.24-3.2 3.12-3.2.88 0 1.64.07 1.86.1v2.1h-1.28c-1 0-1.2.48-1.2 1.18V12h2.4l-.4 2h-2v7c4.56-.93 8-4.96 8-9.8z" },
    { platform: "twitter", url: "https://twitter.com/taskina", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { platform: "linkedin", url: "https://linkedin.com/company/taskina", icon: "M20.45 8c-.7-.6-1.6-1-2.7-1.2-.8-.2-1.7-.3-2.7-.3-2.8 0-5 1.1-6.6 2.9L2 16.3c-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0l5.2-5.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-5.2 5.2c-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0l5.2-5.2c1.6-1.6 2.9-3.8 2.9-6.6 0-1-.1-1.9-.3-2.7z" },
  ];

  return (
    <footer className="bg-darkSecondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <img src="/assets/taskina-logo.png" alt="Taskina Logo" className="h-12" />
          <p className="text-sm text-gray-400 mt-4">© 2025 Taskina. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.icon} />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}