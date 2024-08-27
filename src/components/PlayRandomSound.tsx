'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Define your sound effects
const soundEffects: HTMLAudioElement[] = [
  new Audio('portfolio/public/sounds/knock1.ogg'),
  new Audio('portfolio/public/sounds/knock2.ogg'),
  new Audio('portfolio/public/sounds/knock3.ogg')
  // Add more sounds if needed
];

const PlayRandomSound: React.FC = () => {
  useEffect(() => {
    const playSound = () => {
      const sound = gsap.utils.random<HTMLAudioElement>(soundEffects);
      if (sound) {
        sound.play();
      }
    };

    playSound(); // Play a random sound when the component mounts

    return () => {
      // Stop any playing sound when the component unmounts
      soundEffects.forEach(sound => sound.pause());
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component doesn't render anything
};

export default PlayRandomSound;
