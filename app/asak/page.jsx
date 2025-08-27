"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Testimonials from "./Testimonials";
import BlogPreview from "./BlogPreview";
import Partners from "./Partners";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Portfolio />
      <Team />
      <Testimonials />
      <BlogPreview />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}