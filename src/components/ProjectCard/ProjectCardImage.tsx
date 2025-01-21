import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardImageProps {
  image: string;
  title: string;
}

export function ProjectCardImage({ image, title }: ProjectCardImageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}