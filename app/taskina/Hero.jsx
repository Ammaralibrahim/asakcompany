import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const navItems = ['Home', 'Features', 'Pricing', 'Contact'];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden  flex flex-col">
      {/* Custom SVG Background File */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.svg" // Replace with your SVG file path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Transparent Navbar */}
      <nav className="w-full z-30 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-start">
          <div className="flex space-x-2 sm:space-x-4 backdrop-blur-md bg-white/10 rounded-full px-4 sm:px-6 py-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-lightgray hover:text-[#ee612a] transition-colors duration-300 text-sm sm:text-lg font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center z-20 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8">
          {/* Left Side: Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover Our Amazing App
            </h1>
            <p className="text-base sm:text-lg text-lightgray max-w-md mx-auto lg:mx-0">
              Transform your daily experience with our cutting-edge application. Seamless, intuitive, and packed with features to elevate your productivity.
            </p>
            <Link
              href="#download"
              className="inline-block bg-[#ee612a] text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#d55524] transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right Side: iPhone Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/iphone-mockup.png" // Replace with your iPhone frame image
              alt="App Preview"
              width={400}
              height={560}
              className="object-contain max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;