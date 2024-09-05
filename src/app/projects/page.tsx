"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link component


// Define animation variants for the cards
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const ProjectCarousel = () => {
  const projects = [
    {
      title: "Quant Trading Model",
      description: "Developed a trading strategy using unsupervised learning techniques to optimize investment decisions.",
      tags: ["Fama French Factors", "Portfolio Optimization", "NLTK", "Scikit-learn"],
      image: "/projectphotos/quant.webp",
      link: "https://github.com/saakhoury/Unsupervised-Learning-Trading-Strategy" // Add a link for each project
    },
    {
      title: "Guardian",
      description: "Wearable AI system integrating real-time video and audio streaming with emotion and object detection analytics.",
      tags: ["Convolution Neural Networks", "Tensorflow"],
      image: "/projectphotos/guardian2.png",
      link: "https://devpost.com/software/group-123" 
    },
    {
      title: "Résuview",
      description: "An AR environment that displays individuals' résumes next to their faces at networking events.",
      tags: ["AR Development", "Networking"],
      image: "/projectphotos/resuview.png",
      link: "https://github.com/saakhoury/Resuview" 
    },
    {
      title: "Pixel (Dall-E Clone)",
      description: "An AI image generator MERN app with responsive React.js design,  MongoDB indexing & more.",
      tags: ["OPENAI", "MongoDB", "RTK Query"],
      image: "/projectphotos/openai.jpg",
      link: "https://github.com/saakhoury/Pixel" 
    },
    {
      title: "BlockFundr (BETA)",
      description: "Researched WEB3 adoption complexities, culminating in BlockFundr(BETA), a blockchain crowdfunding platform.",
      tags: ["MetaMask", "Ethereum", "Solidity"],
      image: "/projectphotos/blockchain.png",
      link: "https://github.com/saakhoury/Blockfundr" 
    },
    {
      title: "AI Summarizer",
      description: "An SEO tool developed to summarize text & generate embeddings for key-word identification ",
      tags: ["Word2Vec", "Byte Pair Encoding", "Sentence Transformers"],
      image: "/projectphotos/word.png",
      link: "https://github.com/saakhoury/AI-Summarizer" 
    },
    {
      title: "Pathfinding Neural Network",
      description: "Self-Driving car with NN (no libraries) + Genetic Algorithms, A* Pathfinding, & Dijkstra's Algorithm",
      tags: ["Python","Lessons"],
      image: "/projectphotos/image copy.png",
      link: "https://github.com/saakhoury/Pathfinding-NN" 
    },
    {
      title: "Connect",
      description: "A full stack social media platform with authentication, explore features and a user-friendly UI for 300+ users",
      tags: ["React", "Typescript", "Shadcn"],
      image: "/projectphotos/connect.png",
      link: "https://github.com/saakhoury/Connect" 
    },
    {
      title: "Self-Driving Rover",
      description: "(In-Progress) An autonomous vehicle using PID controllers and sensors.",
      tags: ["Perception", "World Modelling"],
      image: "/projectphotos/rover.png",
      link: "https://github.com/saakhoury/RC-Car" 
    },
    {
      title: "AutoRithm",
      description: "Developed a robotic arm solution for precise food packaging & algorithms to optimize delivery routes",
      tags: ["PHP", "EV3", "Robot-C", "Ultrasonic Sensors"],
      image: "/projectphotos/image copy 2.png",
      link: "https://devpost.com/software/handsfree-y7lsbq" 
    },
    {
      title: "NN Lessons",
      description: "Learning About Backpropagation, Classification, Gradient_Descent, K-Means Clustering, NN from Scratch, Optimizers, Regularization, & RNNs",
      tags: ["Python", "Lessons"],
      image: "/projectphotos/lesson.png",
      link: "https://github.com/saakhoury/NN-Lessons" 
    },
    {
      title: "Contrastive Loss",
      description: "Compute the contrastive loss introduced by Yann LeCun et al. in the paper 'Dimensionality Reduction by Learning an Invariant Mapping.'",
      tags: ["Tensorflow", "NumPy", "Lessons"],
      image: "/projectphotos/contrastiveloss.png",
      link: "https://github.com/saakhoury/Contrastive-Loss" 
    },
    {
      title: "OCR No-Imports",
      description: "Developed an OCR system from scratch in Python using the k-nearest neighbors algorithm to classify images from the MNIST and Fashion-MNIST datasets",
      tags: ["Python", "Lessons"],
      image: "/projectphotos/fashion.png",
      link: "https://github.com/saakhoury/OCR-NoImports" 
    },
    {
      title: "VLM from Scratch",
      description: "Built a Multimodal Vision Language Model in PyTorch, coding the Contrastive Learning, Vision Transformer, and multi-head attention mechanisms from scratch.",
      tags: ["PyTorch", "Lessons"],
      image: "/projectphotos/comingsoon.jpg",
      link: "https://chatgpt.com/c/66d94a1b-a078-8000-968b-9c21ffe87328" 
    },
    {
      title: "Stable Diffusion from Scratch",
      description: "Developed Stable Diffusion from scratch in PyTorch, implementing the Variational Autoencoder (VAE), CLIP model, and UNet architecture.",
      tags: ["PyTorch", "Lessons"],
      image: "/projectphotos/comingsoon.jpg",
      link: "https://chatgpt.com/c/66d94a1b-a078-8000-968b-9c21ffe87328" 
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
          variants={fadeInUp}
        >
          <Link href={project.link} passHref> {/* Wrap the card with Link */}
            <div className="block"> {/* Use a block-level element to wrap the contents */}
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
              <div className="p-4 text-center">
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
            </div>
          </Link>

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
              animation: highlight-animation 1.5s ease-in-out 1.5s forwards;
            }

            .highlight:nth-of-type(4) {
              animation: highlight-animation 2s ease-in-out 2s forwards;
            }

            .highlight:nth-of-type(5) {
              animation: highlight-animation 2.5s ease-in-out 2.5s forwards;
            }

            .highlight:nth-of-type(6) {
              animation: highlight-animation 3s ease-in-out 3s forwards;
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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCarousel;