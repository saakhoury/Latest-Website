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
    'Worked on advanced manufacturing and AI initiatives, focusing on data engineering and analytic tasks such as building data pipelines and ML models. Completed and contributed to 16 projects accelerating NGens impact. Received a return offer and continuing part-time', 
    date: 'Jan 2022 - Present',
    tools: ['Python', 'SQL', 'AWS'],
    image: '/images/ngen.png', // New image for job description
  },
  {
    id: 'blueprint',
    logo: '/images/bp.png',
    title: 'Software Developer Intern',
    company: '@ TechCorp',
    description:
      'Assisted in developing web applications and improving backend performance.',
    date: 'Jun 2021 - Dec 2021',
    tools: ['React', 'Node.js', 'Docker'],
    image: '/images/bp-project.png', // New image for job description
  },
  {
    id: 'front row ventures',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ Innovate Inc',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: 'inloop',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ inloop',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: 'underthetoque',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ underthetoque',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: 'stemfellowship',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ stemfellowship',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: 'DECA',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ DECA',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: 'toastmasters',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ toastmasters',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  {
    id: '',
    logo: '/images/frv.png',
    title: 'Product Manager',
    company: '@ toastmasters',
    description:
      'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
    image: '/images/frv-project.png', // New image for job description
  },
  // Add more experiences if needed
]

export default function Experiences() {
  // Start with the first experience selected by default
  const [selectedExperience, setSelectedExperience] = useState(
    experiences[0].id,
  )

  const handleLogoClick = (id) => {
    setSelectedExperience(id)
  }

  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <div className="min-h-screen flex-col items-center py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="mb-12"
      >
        <h2 className="highlight text-justify text-xl font-bold text-gray-900 dark:text-gray-50">
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
            className="focus:outline-none"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                selectedExperience === exp.id
                  ? 'border-gray-900'
                  : 'dark:border-gray-500'
              } transition-all`}
            >
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="text-sm">{exp.company}</div>
              )}
            </div>
          </button>
        ))}
      </motion.div>

      {/* Experience Details with Image and Animation */}
      <AnimatePresence mode="wait">
        {experiences.map(
          (exp) =>
            selectedExperience === exp.id && (
              <motion.div
                key={exp.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                className="mx-auto mb-8 max-w-4xl px-4"
              >
                <div className="mb-8">
                  <h3 className="mb-1 text-lg font-bold">
                    {exp.title} {exp.company}
                  </h3>
                  <p className="text-md mb-1 font-semibold">{exp.date}</p>
                  <p className="mb-3 text-base">{exp.description}</p>
                  <img
                    src={exp.image}
                    alt={`${exp.company} project`}
                    className="mb-4 h-auto w-full rounded-md shadow-lg"
                  />
                  <p className="text-sm">
                    <strong>Tools:</strong> {exp.tools.join(', ')}
                  </p>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </div>
  )
}
