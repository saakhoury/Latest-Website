/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Shapes from '../components/ClientComponents';
import { motion } from 'framer-motion'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch' // Adjust the import path as needed
import { Container } from './Container'

const Navigation = () => {
  const scrollRef = useRef(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="mt-[2rem]">

      <Container>
      <div className='absolute top-0 right-0 p-4'>
    <ThemeSwitch />
  </div>
</Container>

      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="mt-[2rem] flex flex-col items-center justify-between md:flex-row">
          <div className="space-y-4 border-b border-gray-300 pb-8 md:w-1/2">
            <h1 className="text-3xl font-bold">
              <span>SANSKRITI AKHOURY</span>
            </h1>
            <h2 className="mt-2 text-xl font-medium">
              software engineering @ uwaterloo
            </h2>
            <p className="text-md mt-2 font-light">
              Helping build world-leading Advanced Manufacturing and AI
              capabilities with NGen Canada.
            </p>
            <p className="text-md mt-2 font-light">
              Currently looking for work for{' '}
              <button className="focus:outline-none">
                <span className="rounded-lg border bg-blue-500/10 px-2 py-1 text-black dark:bg-blue-500/20 dark:text-white">
                  <strong>Winter 2025</strong>
                </span>
              </button>
            </p>
            <div className="flex flex-col items-start gap-4 md:flex-row md:gap-6">
              <div className="flex gap-4">
                <Link href="/">
                  <Button size="sm" variant="outline">
                    🏠
                  </Button>
                </Link>
                <Link href="/music">
                  <Button size="sm" variant="outline">
                    🎤
                  </Button>
                </Link>
                <Link href="/experiences">
                  <Button size="sm" variant="outline">
                    💼
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="sm" variant="outline">
                    🗂️
                  </Button>
                </Link>
                <Link href="/blogs">
                  <Button size="sm" variant="outline">
                    📝
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[2rem] mb-[-2rem] justify-center md:mt-0 md:w-1/2">
            <Shapes />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navigation
