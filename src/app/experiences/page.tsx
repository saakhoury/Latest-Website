'use client'

import { useState } from 'react'

// Define experience data with relevant properties
const experiences = [
  {
    id: 'ngen',
    logo: '/images/bridge.jpg',  // Add a logo path
    title: 'Data Engineer',
    company: '@ NGen Canada',
    description: 'Led the development of data pipelines and ETL processes to support advanced manufacturing analytics.',
    date: 'Jan 2022 - Present',
    tools: ['Python', 'SQL', 'AWS'],
  },
  {
    id: 'techcorp',
    logo: '/images/bridge.jpg',  // Add a logo path
    title: 'Software Developer Intern',
    company: '@ TechCorp',
    description: 'Assisted in developing web applications and improving backend performance.',
    date: 'Jun 2021 - Dec 2021',
    tools: ['React', 'Node.js', 'Docker'],
  },
  {
    id: 'innovate',
    logo: '/images/bridge.jpg',  // Add a logo path
    title: 'Product Manager',
    company: '@ Innovate Inc',
    description: 'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
    tools: ['Jira', 'Figma', 'Slack'],
  },
  // Add more experiences if needed
]

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  const handleLogoClick = (id) => {
    setSelectedExperience(id)
  }

  return (
    <div className="flex-col mb-[-17rem] items-center py-12 min-h-screen dark:text-gray-300">
       <h2 className="text-2xl font-bold mb-2">EXPERIENCES</h2>
       <h2 className="text-sm font-normal mb-12">CLICK TO INTERACT</h2>
      {/* Navigation Bar with Logos */}
      <div className=" flex gap-4 mb-12">
        {experiences.map(exp => (
          <button
            key={exp.id}
            onClick={() => handleLogoClick(exp.id)}
            className="focus:outline-none"
          >
            <div
              className={`w-12 h-12 flex rounded-full items-center justify-center border ${selectedExperience === exp.id ? 'border-gray-900' : 'dark:border-gray-500'} transition-all`}
            >
              {/* Display logo if available, else display a placeholder */}
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="text-sm">{exp.company}</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Experience Details as Plain Text */}
      <div className="max-w-4xl mx-auto px-4">
        {experiences.map(exp => (
          selectedExperience === exp.id && (
            <div key={exp.id} className="mb-8">
              <h3 className="text-lg font-bold mb-1">
                {exp.title} {exp.company}
              </h3>
              <p className="text-md font-semibold  mb-1">
                {exp.date}
              </p>
              <p className="text-base mb-3">
                {exp.description}
              </p>
              {/* Tools Used */}
              <p className="text-sm ">
                <strong>Tools:</strong> {exp.tools.join(', ')}
              </p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
