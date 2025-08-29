// app/taskina/page.tsx
'use client';

import Hero from './Hero';
import Navbar from './Navbar';
import Features from './Features';
import HowItWorks from './HowItWorks';
import About from './About';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';

export default function TaskinaPage() {
  return (
    <div className="bg-lightgray text-gray-900 overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}