"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Array of sections for the gallery with images and text content
const sections = [
  {
    type: "image",
    src: "/singing/image.png",
    alt: "International Indian Icon Winner awarded by Bappi Lahiri & aired on ZeeTV",
    description: "International Indian Icon Winner awarded by Bappi Lahiri & aired on ZeeTV",
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Image Section */}
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group">
          <img
            src={sections[0].src}
            alt={sections[0].alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-center p-4 text-sm">{sections[0].description}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
