import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCardLinks({ githubUrl, liveUrl }: ProjectCardLinksProps) {
  return (
    <motion.div className="flex gap-4">
      {githubUrl && (
        <motion.a
          whileHover={{ scale: 1.05, x: 3 }}
          whileTap={{ scale: 0.95 }}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 text-sm transition-colors"
        >
          <Github size={16} className="mr-1" />
          Code
        </motion.a>
      )}
      {liveUrl && (
        <motion.a
          whileHover={{ scale: 1.05, x: 3 }}
          whileTap={{ scale: 0.95 }}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 text-sm transition-colors"
        >
          <ExternalLink size={16} className="mr-1" />
          Live Demo
        </motion.a>
      )}
    </motion.div>
  );
}