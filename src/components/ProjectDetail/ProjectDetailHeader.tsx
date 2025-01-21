import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailHeaderProps {
  title: string;
  image: string;
}

export function ProjectDetailHeader({ title, image }: ProjectDetailHeaderProps) {
  return (
    <>
      <Link 
        to="/projects" 
        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Projects
      </Link>

      <div className="relative h-[400px] rounded-xl overflow-hidden mt-8">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 left-8 text-4xl font-bold text-white"
        >
          {title}
        </motion.h1>
      </div>
    </>
  );
}