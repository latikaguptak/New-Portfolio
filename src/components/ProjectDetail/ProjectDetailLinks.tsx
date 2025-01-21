import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectDetailLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectDetailLinks({ githubUrl, liveUrl }: ProjectDetailLinksProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {githubUrl && (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Github size={20} className="mr-2" />
          View Source Code
        </motion.a>
      )}
      {liveUrl && (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          <ExternalLink size={20} className="mr-2" />
          Visit Live Site
        </motion.a>
      )}
    </div>
  );
}