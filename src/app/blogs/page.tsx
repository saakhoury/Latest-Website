"use client"

import { WEBSITE_HOST_URL } from '@/lib/constants'
import { useRef } from 'react'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { Metadata } from 'next'
import { PostCard } from '@/components/PostCard' // Ensure you import PostCard if it's defined in another file
import { motion } from 'framer-motion'

export default function PostsPage() {
  const scrollRef = useRef(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={scrollRef}
      className="flex flex-col items-center justify-between md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className='text-xl'>THOUGHTS & BLOGS</h2>
        <div className="mt-10 space-y-12">
          {allPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
          <p>coming soon ...</p>
        </div>
      </div>
    </motion.div>
  )
}
