"use client";
import { useState } from 'react';
import Image from 'next/image';

const ProjectCarousel = () => {
  const projects = [
    {
      title: "Quant Trading Model",
      description: "Developed a trading strategy using unsupervised learning techniques to optimize investment decisions.",
      tags: ["Fama French Factors", "Portfolio Optimization"],
      image: "/projectphotos/quant.webp"
    },
    {
      title: "Guardian",
      description: "Wearable AI system integrating real-time video and audio streaming with emotion and object detection analytics.",
      tags: ["Convolution Neural Networks", "Tensorflow"],
      image: "/projectphotos/guardian2.png"
    },
    {
      title: "Résuview",
      description: "An AR environment that displays individuals' résumes next to their faces at networking events.",
      tags: ["AR Development", "Networking"],
      image: "/projectphotos/resuview.png"
    },
    {
      title: "Recommender System",
      description: "Engineered a self-supervised GNN-based recommender system with custom message aggregations & NADAM.",
      tags: ["Graph Neural Networks", "LLMs", "FP-Growth"],
      image: "/projectphotos/gnn.png"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out">
          {/* Image Section */}
          <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
            <Image
              src={project.image}
              alt={`Image for ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Description Section */}
          <div className="p-4 text-center ">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              <span className="highlight">{project.title}</span>
            </h3>
            <div className="flex flex-wrap justify-center mb-2 space-x-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.description}
            </p>
          </div>

          {/* Add the CSS for the highlight effect */}
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
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
