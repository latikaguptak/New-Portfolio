import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardTagsProps {
  tags: string[];
}

export function ProjectCardTags({ tags }: ProjectCardTagsProps) {
  return (
    <motion.div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium whitespace-nowrap"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}