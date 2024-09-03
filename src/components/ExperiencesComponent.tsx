'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define experience data with relevant properties
const experiences = [
  {
    id: 'ngen',
    logo: '/images/ngen.png',
    title: 'Data Engineer',
    company: '@ NGen Canada',
    description:
    <div>
        <ul>
          <li>
            Worked on advanced manufacturing and AI initiatives, focusing on data engineering and analytic tasks such as building data pipelines and ML models. Completed and contributed to 16 projects accelerating NGen{"'"}s impact.
          </li>
          <li className='text-white dark:text-gray-950'>
            hello
          </li>
          <a href="URL_OF_THE_PAGE" className="text-blue-500 hover:underline">READ MORE</a>
        </ul>
      </div>,
    date: 'Jan 2022 - Present',
    tools: ['Python', 'SQL', 'AWS'],
  },
  {
    id: 'blueprint',
    logo: '/images/bp.png',
    title: 'Infrastructure Project Developer',
    company: '@ UW Blueprint',
    description:
    <div>
    <ul>
      <li>
      Tech for social good. Specialized in infrastructure development, utilizing tools like Kubernetes, AWS, Docker, Prisma, Terraform, and Heroku to enhance project efficiency and deployment processes.
      </li>
    </ul>
  </div>,
    date: 'Jun 2021 - Dec 2021',
    tools: ['React', 'Node.js', 'Docker'],
  },
  {
    id: 'front-row-ventures',
    logo: '/images/frv.png',
    title: 'Data Analyst & Webmaster',
    company: '@ Front Row Ventures',
    description:
    <div>
    <ul>
      <li>
      Optimized funding processes through data-driven strategies, managed web content, and analyzed key performance metrics to support investment decisions. Completed two-month venture capital bootcamp, gaining exclusive insights from local VCs and founders.
      </li>
    </ul>
  </div>,
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'inloop',
    logo: '/images/inloop.png',
    title: 'CoFounder & Vice President',
    company: '@ InLoop',
    description: (
      <div>
        <ul>
          <li>
            • Led the development of a fullstack Deloitte-backed digital gaming
            platform incentivizing news literacy for youth
          </li>
          <li>
            • Implemented a React leaderboard and optimized workflows using
            Agile and Jira, raising user engagement by 45%
          </li>
          <li>
            • Engineered an accompanying ecommerce app using Stripe, Payload
            CMS, & Docker to optimize client interaction
          </li>
          <li>
            • Commanded a dynamic team of 30+ members & generated a pipeline
            interest of $30K+, resulting in $7K net revenue
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'underthetoque',
    logo: '/images/frv.png',
    title: 'CoFounder & Vice President',
    company: '@ UnderThetoque',
    description: (
      <div>
        <ul>
          <li>
            • A TD-sponsored online resource for 15,000+ immigrants, expats, &
            refugees
          </li>
          <li>
            • Combined UI/UX research and prioritizing user stories in designing
            the interface
          </li>
          <li>
            • Commanded a dynamic team, harnessing Jira & Trello to optimize
            departmental workflows
          </li>
          <li>
            • JA Youth Entrepreneurs Showcase Achiever{"'"}s Choice & Top 3 JA
            Companies of the Year
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'stemfellowship',
    logo: '/images/frv.png',
    title: 'Chapter President',
    company: '@ StemFellowship',
    description: (
      <div>
        <ul className='text-justify'>
          <li className='text-justify'>• Mentored 30+ teams leading to three international wins</li>
          <li>
            • Taught datasets, data analytics, computational thinking, Tableau,
            R, and Statistics
          </li>
          <li>• Worked on scientific writing, provided feedback.</li>
          <li>
            • Edited scholarly papers ranging from original research
            manuscripts to literature reviews.
          </li>
          <li>
            • Presented solutions & defended them in
            scientific discussions for Physics Matches.
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'DECA',
    logo: '/images/frv.png',
    title: 'Chapter President & Competitor',
    company: '@ DECA',
    description: (
      <div>
        <ul>
          <li>
            Bloor Collegiate Chapter Executive. Qualified on the basis of
            role-play performances and 100 question cluster exam. Competed
            against 120,000 students in DECA{"'"}s high school chapters worldwide.
          </li>
          <li className='text-white dark:text-gray-950'>
            hello
          </li>
          <li>
          • Regionals: Top 20 score overall and Top 2 score in role-play
            overall. 
          </li>
          <li>
          • Provincials: Top 14 score overall and Top 7 score in
          role-play overall. 
          </li>
          <li>
          • International Career Development Conference
          (ICDC): Top 15 score in role-play, 4th overall at ICDC
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'toastmasters',
    logo: '/images/frv.png',
    title: 'Youth Leadership Program Founder',
    company: '@ Toastmasters',
    description: (
      <div>
        <ul>
          <li>
          With Dave Bachan, Toastmaster{"'"}s Executive, launched a Youth Leadership Program in junction with Toastmasters International. Provided Toronto Youth POC with leadership, public-speaking, mentorship, feedback and strategic vision. Invited guest speakers, curated workshops, and led a team.
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'extra-job',
    logo: '/images/cube4.png',
    title: 'Product Manager',
    company: '@ theCubeStemSchool',
    description: (
      <div>
        <ul>
          <li>
          Python, C++, Arduino, Java Instructor
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  // Add more experiences if needed
]

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(
    experiences[0].id,
  )

  const handleLogoClick = (id) => {
    setSelectedExperience(id)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <div className="items-left flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="mb-12"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
          EXPERIENCES
        </h2>
      </motion.div>

      {/* Navigation Bar with Smaller Logos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="mb-12 flex gap-4"
      >
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => handleLogoClick(exp.id)}
            className={`rounded-full border p-1 ${
              selectedExperience === exp.id
                ? 'border-gray-900 dark:border-gray-300'
                : 'border-gray-500 dark:border-gray-600'
            } transition-all`}
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="h-9 w-9 rounded-full"
            />
          </button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        {experiences.map(
          (exp) =>
            selectedExperience === exp.id && (
              <div key={exp.id} className="relative mb-0">
                {/* Experience Card */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  className="relative rounded-lg p-8 shadow-md"
                >
                  {/* Title Section */}
                  <div className="mb-4 flex items-center">
                    {/* Circular Logo */}
                    <div className="mr-4 h-12 w-12 flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`Logo for ${exp.company}`}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    {/* Title and Company Info */}
                    <div>
                      <h3 className="text-lg font-normal italic">
                        {exp.title}
                      </h3>
                      <p className="highlight text-sm text-gray-600 dark:text-gray-300">
                        {exp.company}
                        <span className="ml-2"> &mdash; {exp.date}</span>
                      </p>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              </div>
            ),
        )}
      </AnimatePresence>
    </div>
  )
}
