import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

// Metadata configuration for the page
const meta = {
  title: 'vocals',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

// Array of images for the gallery with unique sizes
const galleryImages = [
  { src: '/images/bridge.jpg', alt: 'Image 1 description', description: 'Image 1 mini description', size: 'small' },
  { src: '/images/bridge.jpg', alt: 'Image 2 description', description: 'Image 2 mini description', size: 'medium' },
  { src: '/images/bridge.jpg', alt: 'Image 3 description', description: 'Image 3 mini description', size: 'large' },
  // Add more images as needed with different sizes
];

export default function About() {
  return (
    <div className="flex-col mb-[-17rem] items-center py-12 min-h-screen dark:text-gray-300">
      {/* Gallery Container */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className={`relative group ${getSizeClass(image.size)}`}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
            />
            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white text-center p-4">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Function to return size classes
function getSizeClass(size: string) {
  switch (size) {
    case 'small':
      return 'col-span-1 row-span-1';
    case 'medium':
      return 'col-span-2 row-span-2';
    case 'large':
      return 'col-span-3 row-span-3';
    default:
      return 'col-span-1 row-span-1';
  }
}
