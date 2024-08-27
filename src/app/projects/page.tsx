'use client'

import { useState } from 'react'

const experiences = [
  {
    id: 'ngen',
    title: 'Data Engineer @ NGen Canada',
    description: 'Led the development of data pipelines and ETL processes to support advanced manufacturing analytics.',
    date: 'Jan 2022 - Present',
  },
  {
    id: 'techcorp',
    title: 'Software Developer Intern @ TechCorp',
    description: 'Assisted in developing web applications and improving backend performance.',
    date: 'Jun 2021 - Dec 2021',
  },
  {
    id: 'innovate',
    title: 'Product Manager @ Innovate Inc',
    description: 'Managed product lifecycle from ideation to launch, focusing on user experience and market fit.',
    date: 'Mar 2020 - May 2021',
  },
  // Add more experiences if needed
]

export default function Experiences() {
  const [flipped, setFlipped] = useState(null)

  const handleMouseEnter = (id) => {
    setFlipped(id)
  }

  const handleMouseLeave = () => {
    setFlipped(null)
  }

  return (
    <div className="flex-col items-center py-12 min-h-screen">
      <h2 className="text-2xl font-bold mb-12 text-gray-900"></h2>

      <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-8">
        {/* Experience Cards */}
        {experiences.map(exp => (
          <div
            key={exp.id}
            className="relative w-64 h-64 bg-white cursor-pointer perspective"
            onMouseEnter={() => handleMouseEnter(exp.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d ${flipped === exp.id ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-6 backface-hidden">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h3>
                <p className="text-base text-gray-600 mb-2">{exp.description}</p>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
