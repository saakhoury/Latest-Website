/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      <h2 className='mt-[0.5rem] text-sm font-light'>
        READ ABOUT MY WORK →
      </h2>

      <div className="mt-4 relative">
        <div className="relative w-full h-[500px] overflow-hidden"> 
          <img
            src="/projectphotos/job.png" // Replace with the image path you want to show
            alt="Co-op Experience"
            className="w-full h-full object-contain rounded-lg"
            style={{ transform: 'scale(1.2)', objectPosition: 'center center' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">📊 Data Science Intern at ABC Corporation</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CoopSpotlight
