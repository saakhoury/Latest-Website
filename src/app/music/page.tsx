"use client"

import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'

// Metadata configuration for the page

// Array of images for the gallery with unique sizes
const galleryImages = [
  { src: '/singing/image.png', alt: 'International Indian Icon Winner awarded by Bappi Lahiri & aired on ZeeTV', description: 'International Indian Icon Winner awarded by Bappi Lahiri & aired on ZeeTV', size: 'large' },
  // Add more images as needed with different sizes
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <div className="flex-col items-center min-h-screen dark:text-gray-300">
      
      {/* Text Section */}
      <motion.div
        className="mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-lg font-medium mb-4">Vocals</h2>
        <ul className="list-disc text-sm pl-6 space-y-2">
          <li>Competitive singer with 7+ years of western vocal, media, and stage performance training</li>
          <li>Student of Paula Griffith (celebrity vocal coach)</li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-lg font-medium mb-2">Highlights</h3>
        <ul className="list-disc text-sm pl-6 space-y-2">
          <li>American Idol S6 contestant - judges Katy Perry, Luke Bryan, Lionel Richie</li>
          <li>International Icon Winner - awarded by Bappi Lahiri aired on ZeeTV</li>
          <li>Opening act for Sunidhi Chauhan and Kunal Gangawala</li>
          <li>NBC The Voice Private Audition</li>
        </ul>
      </motion.div>

      <motion.div
        className="mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-lg font-medium mb-2">Accolades</h3>
        <ul className="list-disc pl-6 text-sm space-y-2">
          <li>Ehsaan, Jessie Reyes, ADT Singh Sharma, Vishal Dadlani, Sharvi Yadav, Bappi Lahiri, Jatin Lalit</li>
          <li>Featured on the Times of Bangalore, Patna Beats</li>
          <li>CNE Rising Star Semi Finalist</li>
          <li>Long and McQuade's Singing Contest Runner Up</li>
          <li>Girl Pow-r lead vocalist: Juno Award Nominee for Original Song 'Krisi'</li>
          <li>Meri Awaaz Suno Winner - judged by Jatin Lalit</li>
          <li>Cry America Vocal Competition Winner</li>
          <li>Youth Day Canada performer and social-justice advocate</li>
        </ul>
      </motion.div>

      {/* Gallery Container */}
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        {galleryImages.map((image, index) => (
          <div key={index} className={`relative group ${getSizeClass(image.size)}`}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
            />
            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-center p-4">{image.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Function to return size classes
function getSizeClass(size: string) {
  switch (size) {
    case 'small':
      return 'col-span-1 row-span-1';
    case 'medium':
      return 'col-span-2 row-span-2';
    case 'large':
      return 'col-span-3 row-span-3';
    default:
      return 'col-span-1 row-span-1';
  }
}
