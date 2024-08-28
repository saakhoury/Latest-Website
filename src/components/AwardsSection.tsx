/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function AwardsSection() {
  const scrollRef = useRef(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex-col items-center py-12">
      <motion.div
        ref={scrollRef}
        className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        {/* Awards List with Title Outside */}
        <div className="flex-1 w-full md:w-auto">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Awards</h2>
          <div className="max-h-60 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-8">
            {/* Award 1 */}
            <div className="relative">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">🏆 Award Title 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Description of the award or recognition goes here. Include details about the award, the year, and any other relevant information.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-4"></div>
            </div>

            {/* Award 2 */}
            <div className="relative">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">🏆 Award Title 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Description of the award or recognition goes here. Include details about the award, the year, and any other relevant information.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-4"></div>
            </div>

            {/* Award 3 */}
            <div className="relative">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">🏆 Award Title 3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Description of the award or recognition goes here. Include details about the award, the year, and any other relevant information.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-4"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
