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
    description: (
      <div>
        <ul>
          <li>
            Worked on advanced manufacturing and AI initiatives, focusing on data engineering and analytic tasks such as building data pipelines and ML models. Completed and contributed to 16 projects accelerating impact.
          </li>
        </ul>
      </div>
    ),
    date: 'Jan 2022 - Present',
    tools: ['Python', 'SQL', 'AWS'],
    projects: [
      {
        title: "MERN Dashboard",
        description: "A dashboard with GDP forecasting & dynamic maps, analyzing ridings vs. investments to optimize project funding nationally.",
        tags: ["ARIMA", "SVMs", "Government"],
        image: "/projectphotos/image_16.png"
      },
      {
        title: "Recommender System",
        description: "Engineered a self-supervised GNN-based recommender system with custom message aggregations & NADAM.",
        tags: ["Graph Neural Networks", "LLMs", "FP-Growth"],
        image: "/projectphotos/gnn.png"
      },
      {
        title: "Salesforce Pipeline",
        description: "Built a Salesforce pipeline \n & reconciliation framework with automated schema handling via Airflow & Snowflake.",
        tags: ["Airflow", "BulkAPI", "Snowflake"],
        image: "/projectphotos/salesforce.jpg"
      },
      {
        title: "LLM Framework",
        description: "Developed an LLM framework to improve chatbot data retrieval for an ISED report on 'AI Use Cases in Advanced Manufacturing'.",
        tags: ["Control Flow Graphs", "RAG", "RL"],
        image: "/projectphotos/chatbot.png"
      },
    ],
  },
  {
    id: 'blueprint',
    logo: '/images/bp.png',
    title: 'Infrastructure Project Developer',
    company: '@ UW Blueprint',
    description: (
      <div>
        <ul>
          <li>
            Tech for social good. Specialized in infrastructure development, utilizing tools like Kubernetes, AWS, Docker, Prisma, Terraform, and Heroku to enhance project efficiency and deployment processes.
          </li>
        </ul>
      </div>
    ),
    date: 'Jun 2021 - Dec 2021',
    tools: ['React', 'Node.js', 'Docker'],
    projects: [
      {
        title: 'Entity Service Migration',
        description: 'Migrated entity service to Prisma, refactored queries, verified & validated functionality of table updates with Postman/PSQL.',
        tags: ['Prisma', 'Postman', 'PSQL'],
        image: '/projectphotos/prisma.svg', // Replace with actual image path
      },
      {
        title: 'Heroku Deployment',
        description: 'Automated Heroku deployment with Terraform, cutting setup time by 50% and ensuring consistent environment configuration.',
        tags: ['Heroku', 'Terraform'],
        image: '/projectphotos/heroku.png', // Replace with actual image path
      },
      {
        title: 'Token Generation',
        description: 'Developed a CLI tool with Firebase Admin SDK for automated token generation, streamlining local testing and workflow integration.',
        tags: ['Firebase', 'Typescript'],
        image: '/images/image copy.png', // Replace with actual image path
      },
    ],
  },
  {
    id: 'front-row-ventures',
    logo: '/images/frv.png',
    title: 'Data Analyst & Webmaster',
    company: '@ Front Row Ventures',
    description: (
      <div>
        <ul>
          <li>
            Optimized funding processes through data-driven strategies, managed web content, and analyzed key performance metrics to support investment decisions. Completed two-month venture capital bootcamp, gaining exclusive insights from local VCs and founders.
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    projects: [
      {
        title: 'Field-Trip FRV Training',
        description: 'Produced detailed memos on private companies, offering recommendations on risk mitigation, market entry strategies',
        tags: ['Venture Capital', 'Economics'],
        image: '/projectphotos/case.png', // Replace with actual image path
      },
      {
        title: 'Airtable Automations',
        description: 'Automated cleaning & consolidation of duplicated entries on Airtable, reducing manual cleanup time & ensuring integrity.',
        tags: ['Airtable', "Data"],
        image: '/projectphotos/airtable.png', // Replace with actual image path
      },
    ],
  },
  {
  // Additional experiences here...
    id: 'inloop',
    logo: '/logos/1.png',
    title: 'CoFounder & Vice President',
    company: '@ InLoop',
    description: (
      <div>
        <ul>
          <li>
            • Led the development of a fullstack Deloitte-backed digital gaming
            platform incentivizing news literacy 
          </li>
          <li>
            • Implemented a React leaderboard and optimized workflows using
            Agile and Jira, raising user engagement 
          </li>
          <li>
            • Engineered an ecommerce app using Stripe, Payload
            CMS, & Docker, optimizing client interaction
          </li>
          <li>
            • Commanded a team of 30+ members & generated a pipeline
            interest of $30K+, with $7K net revenue
          </li>
        </ul>
      </div>
    ),
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  {
    id: 'underthetoque',
    logo: '/logos/2.png',
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
    logo: '/logos/4.png',
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
    logo: '/logos/5.png',
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
    logo: '/logos/6.png',
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
    logo: '/logos/7.png',
    title: 'Assistant Instructor (Python, Robotics, Programming)',
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
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar with Smaller Logos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="mb-12 flex flex-wrap gap-4 justify-center w-full"
      >
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => handleLogoClick(exp.id)}
            className={`relative rounded-full border p-1 transition-transform duration-300 ${
              selectedExperience === exp.id
                ? 'border-gray-900 dark:border-gray-300 scale-125'
                : 'border-gray-500 dark:border-gray-600'
            }`}
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="h-10 w-10 rounded-full"
            />
          </button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        {experiences.map(
          (exp) =>
            selectedExperience === exp.id && (
              <div key={exp.id} className="relative mb-0 w-full max-w-3xl">
                {/* Experience Card */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  className="relative rounded-lg p-8 shadow-md mx-auto"
                >
                  {/* Title Section */}
                  <div className="mb-4 flex flex-col md:flex-row items-center md:items-start">
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
                      <div className="highlight text-sm text-gray-600 dark:text-gray-300">
                        {exp.company}
                        <span className="ml-2"> &mdash; {exp.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div>
                    <div className="text-sm">{exp.description}</div>
                  </div>

                  {/* Projects Section */}
                  {exp.projects && (
                    <div className="mt-8">
                      <h4 className="mb-4 text-sm font-medium">PROJECTS</h4>
                      <div className={`grid gap-6 ${exp.projects.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                        {exp.projects.map((project, index) => (
                          <div key={index} className="rounded-lg shadow-md">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-32 w-full rounded-t-lg object-cover"
                            />
                            <div className="p-4">
                              <h5 className="text-md text-center font-medium">
                                {project.title}
                              </h5>
                              <div className="mt-4 flex justify-center flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-block rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                                {project.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ),
        )}
      </AnimatePresence>
    </div>
  )
}