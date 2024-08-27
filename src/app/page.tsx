/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import ClientComponents from '/Users/sanskritiakhoury/Desktop/portfolio/src/components/ClientComponents'
import Link from 'next/link'
import ProjectCarousel from '@/components/ProjectCarousel'
import { motion } from 'framer-motion'
import LatestBlogs from '@/components/LatestPosts'


export default function Home() {
  const scrollRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="mt-[-2rem]">
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
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="outline" className="p-1">
              <Github size={16} />
            </Button>
            <Button size="sm" variant="outline" className="p-1">
              <Linkedin size={16} />
            </Button>
            <Button size="sm" variant="outline" className="p-1">
              <Twitter size={16} />
            </Button>
          </div>
        </div>
        <div className="mt-0  justify-center md:mt-0 md:w-1/2">
          <ClientComponents />
        </div>
      </div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
      <div className="content mt-[1.5rem]">
        <h2 className="text-justify text-xl font-bold text-gray-900 dark:text-gray-50">
          ABOUT ME
        </h2>
        <p className="mt-4 text-justify text-[0.9rem] font-normal dark:text-gray-400">
          Develop <span className="highlight font-medium dark:text-gray-300 ">AI/ML/infrastructure tools</span>{' '}
          to enhance enterprise product offerings. Placed{' '}
          <span className="highlight font-medium dark:text-gray-300 ">fourth @ ICDC</span> (International Career
          Development Conference) and{' '}
          <span className="highlight font-medium dark:text-gray-300 ">top 3</span> in{' '}
          <span className="highlight font-medium dark:text-gray-300">RBC{"'"}s Metaverse Case Competition.</span>{' '}
          3x Startup Founder with sponsorships and mentorships from{' '}
          <span className="highlight font-medium dark:text-gray-300 ">TD, Deloitte, & IFDS Canada.</span> With a
          head for entrepreneurial and tech ventures, I am actively pursuing
          opportunities at the intersection of project management and
          technology. Feel free to reach out :{")"}<br /> <br />
          Also got the golden ticket on{' '}
          <span className="highlight font-medium dark:text-gray-300 ">American Idol</span> from Lionel Richie,
          Katy Perry, and Luke Ryan (ABC S6)
        </p>

        <style jsx>{`
          .highlight {
            position: relative;
            display: inline;
            padding: 0 0.2rem;
          }

          .highlight::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1.2em; /* Adjust height to match the text size */
            background-color: rgb(59 130 246 / 0.2); /* Light Mode Color */
            z-index: -1;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease-in-out;
          }

          .dark .highlight::before {
            background-color: rgb(100 200 220); /* Dark Mode Color */
          }

          .highlight:hover::before {
            transform: scaleX(1);
          }

          /* Automatic highlight animation */
          .highlight:nth-of-type(1) {
            animation: highlight-animation 1s ease-in-out 0.5s forwards;
          }

          .highlight:nth-of-type(2) {
            animation: highlight-animation 1s ease-in-out 1s forwards;
          }

          .highlight:nth-of-type(3) {
            animation: highlight-animation 1s ease-in-out 1.5s forwards;
          }

          .highlight:nth-of-type(4) {
            animation: highlight-animation 1s ease-in-out 2s forwards;
          }

          .highlight:nth-of-type(5) {
            animation: highlight-animation 1s ease-in-out 2.5s forwards;
          }

          .highlight:nth-of-type(6) {
            animation: highlight-animation 1s ease-in-out 3s forwards;
          }

          @keyframes highlight-animation {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }
        `}</style>

        <div className="mt-[2rem] flex space-x-4">
          <Link href="/experiences">
            <Button size="sm" variant="outline">
              Resume →
            </Button>
          </Link>
          <Link href="/experiences">
            <Button size="sm" variant="outline">
              Vocal Portfolio →
            </Button>
          </Link>
        </div>
      </div>
      </motion.div>
      
      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
      <div className="content mt-[5rem]">
        <h2 className="relative mb-8 text-xl font-bold text-gray-900 dark:text-gray-100">
          SUMMER 2024 RECAP
        </h2>

        <div className="space-y-8">
          <div className="relative transform overflow-hidden rounded-lg border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-40"></div>
            <div className="relative mt-[-1rem] p-6">
              <h3 className="highlight-header relative mb-[-1rem] text-lg font-normal text-gray-900 dark:text-gray-100">
                {' '}
                🔍 Recommender System & LLM Development{' '}
              </h3>
              <p className="mt-4 text-justify text-sm text-gray-600 dark:text-gray-400">
                Leveraged data to build a recommender system with GNNs (Graph
                Neural Networks) and built an LLM (Large Language Model) for
                chatbot testing from scratch. Used these tools to report AI
                findings to{' '}
                <strong className="text-black dark:text-gray-200">ISED</strong>{' '}
                (International Science Education & Development) with{' '}
                <strong className="text-black dark:text-gray-200">
                  NGen Canada
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="relative mt-[-7rem] transform overflow-hidden rounded-lg border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 mt-[-3rem] bg-gradient-to-br from-green-200 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-40"></div>
            <div className="relative mt-[-1rem] p-6">
              <h3 className="highlight-header relative mb-[-1rem] text-lg font-normal text-gray-900 dark:text-gray-100">
                {' '}
                ⚙️ Development Workflow Improvement{' '}
              </h3>
              <p className="mt-[-3rem] text-justify text-sm text-gray-600 dark:text-gray-400">
                Improved development workflows through backend migration,
                automated Heroku application deployment, and Firebase token
                generation for efficient and scalable infrastructure operations
                with{' '}
                <strong className="text-black dark:text-gray-200">
                  UW Blueprint
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="relative mt-[-2rem] transform overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 mt-[-1rem] bg-gradient-to-br from-yellow-200 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-40"></div>
            <div className="relative mt-[-1rem] p-6">
              <h3 className="highlight-header relative mb-[-1rem] text-lg font-normal text-gray-900 dark:text-gray-100">
                {' '}
                📈 SEO Tool Development{' '}
              </h3>
              <p className="mt-4 text-justify text-sm text-gray-600 dark:text-gray-400">
                Developed an embeddings model SEO tool to identify keywords and
                guided data-driven investment decisions with Airtable with{' '}
                <strong className="text-black dark:text-gray-200">
                  Front Row Ventures
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >            
        <LatestBlogs/>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >        
      <div className="content mt-[5rem]">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          <Link href="/experiences">
            <span className="inline-block transform transition-transform duration-300 hover:scale-125">
              EXPERIENCES →
            </span>
          </Link>
        </h2>

        {/* Experience Cards */}
        <div className="mb-4 mt-2 flex w-full space-x-4 rounded-lg p-4">
          <div className="flex w-1/4 items-center justify-center">
            <div className="flex-shrink-0">
              <img
                src="images/ngen.png"
                alt="Data Engineer"
                className="h-16 w-16 transform rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
              />
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex flex-col space-y-1">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  DATA ENGINEER
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  @ NGen Canada (2024)
                </p>
              </div>
              <p className="text-justify text-sm text-gray-600 dark:text-gray-400">
                Worked on advanced manufacturing and AI initiatives, focusing on
                data engineering tasks such as building data pipelines and
                building ML models to accelerate NGen{"'"}s impact.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-2 flex w-full space-x-4 rounded-lg p-4">
          <div className="flex w-1/4 items-center justify-center">
            <div className="flex-shrink-0">
              <img
                src="images/frv.png"
                alt="Data Analyst"
                className="h-16 w-16 transform rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
              />
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex flex-col space-y-1">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  DATA ANALYST & WEBMASTER
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  @ Front Row Ventures (2024)
                </p>
              </div>
              <p className="text-justify text-sm text-gray-600 dark:text-gray-400">
                Optimized funding processes through data-driven strategies,
                managed web content, and analyzed key performance metrics to
                support investment decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-2 flex w-full space-x-4 rounded-lg p-4">
          <div className="flex w-1/4 items-center justify-center">
            <div className="flex-shrink-0">
              <img
                src="/images/bp.png"
                alt="Project Developer"
                className="h-16 w-16 transform rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
              />
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex flex-col space-y-1">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  PROJECT DEVELOPER
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  @ UW Blueprint (2024)
                </p>
              </div>
              <p className="text-justify text-sm text-gray-600 dark:text-gray-400">
                Specialized in infrastructure development, utilizing tools like
                Kubernetes, AWS, Docker, Prisma, Terraform, and Heroku to
                enhance project efficiency and deployment processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      
      <div className="content mt-[5rem]">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          <Link href="/Projects">
            <span className="inline-block transform transition-transform duration-300 hover:scale-125">
              PROJECTS →
            </span>
          </Link>
        </h2>
        <ProjectCarousel />
      </div>

      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-between md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
      <div className="content mt-[19rem]">
        {/* <ResearchAndThoughts /> */}
      </div>
      </motion.div>
    </div>
  )
}
