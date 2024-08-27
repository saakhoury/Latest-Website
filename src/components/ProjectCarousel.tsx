"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectCarousel = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "Guardian AI",
      description: "Guardian is a wearable AI that streams real-time video and audio, detects emotions and objects, and alerts emergency contacts with threat information. It offers live updates and situational awareness, acting as your very own SOS button.",
      tags: ["raspberry PI", "#Tag2"],
      image: "/images/bridge.jpg"
    },
    {
      title: "AutoRithm",
      description: "This is a brief description of another project. It highlights the main goals and achievements.",
      tags: ["#Tag3", "#Tag4"],
      image: "/images/bridge.jpg"
    },
    {
      title: "Machine Learning API",
      description: "Description of a machine learning API project with details on its functionalities and use cases.",
      tags: ["#Tag5", "#Tag6"],
      image: "/images/bridge.jpg"
    }
  ];

  useEffect(() => {
    const projectTimer = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(projectTimer);
    };
  }, []);

  return (
    <div className="mb-[-15rem] space-y-8">
      <div className="relative h-[450px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
              index === currentProjectIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="mb-6 mt-5 border-b border-gray-300 p-4 dark:border-gray-700">
            <div className="mt-4 mb-14 relative h-[500px] rounded-lg overflow-hidden">
                <Image 
                  src={project.image}
                  alt={`Image for ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="highlight text-lg font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="mt-1 text-justify text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mt-2 flex space-x-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots */}
      <div className="flex justify-center">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProjectIndex(index)}
            className={`mt-[20rem] mx-1 h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentProjectIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
