/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Remove arrows
}

const CoopSpotlight = () => {
  return (
    <motion.div
      className="content mt-[5rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl highlight font-bold text-gray-900 dark:text-gray-100">
        CO-OP SPOTLIGHT
      </h2>
      {' '}
      <h2 className='mt-[0.5rem] text-sm font-light'>
        READ ABOUT MY WORK →
      </h2>

      <div className="mt-4 relative">
        <Slider {...sliderSettings}>
          {/* Carousel Slide 1 */}
          <div className="relative w-full h-[500px] overflow-hidden"> {/* Adjust height and overflow */}
            <img
              src="/coop-photos/IMG_7932.jpg" // Replace with your image path
              alt="Co-op Experience 1"
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} // Adjust scale and position as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">📊 Data Science Intern at ABC Corporation</p>
            </div>
          </div>

          {/* Carousel Slide 2 */}
          <div className="relative w-full h-[500px] overflow-hidden"> {/* Adjust height and overflow */}
            <img
              src="/coop-photos/IMG_8974.JPG" // Replace with your image path
              alt="Co-op Experience 2"
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} // Adjust scale and position as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">🤖 AI Engineering Intern at XYZ Labs</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] overflow-hidden"> {/* Adjust height and overflow */}
            <img
              src="/coop-photos/IMG_8978.jpg" // Replace with your image path
              alt="Co-op Experience 2"
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} // Adjust scale and position as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">🤖 AI Engineering Intern at XYZ Labs</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] overflow-hidden"> {/* Adjust height and overflow */}
            <img
              src="/coop-photos/IMG_8979.jpg" // Replace with your image path
              alt="Co-op Experience 2"
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} // Adjust scale and position as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">🤖 AI Engineering Intern at XYZ Labs</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] overflow-hidden"> {/* Adjust height and overflow */}
            <img
              src="/coop-photos/IMG_8980.jpg" // Replace with your image path
              alt="Co-op Experience 2"
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} // Adjust scale and position as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">🤖 AI Engineering Intern at XYZ Labs</p>
            </div>
          </div>

          {/* Add more slides as needed */}
        </Slider>

        {/* Custom Dot Styles */}
        <style jsx global>{`
          .slick-dots li button:before {
            font-size: 12px;
            color: #000; /* Default dot color (light mode) */
          }

          /* Dark mode dots styling */
          .dark .slick-dots li button:before {
            color: #d1d5db; /* Light grey dots in dark mode */
          }
        `}</style>
      </div>
    </motion.div>
  )
}

export default CoopSpotlight
