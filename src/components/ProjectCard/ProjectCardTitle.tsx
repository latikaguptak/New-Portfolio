import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardTitleProps {
  title: string;
}

export function ProjectCardTitle({ title }: ProjectCardTitleProps) {
  return (
    <motion.h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100">
      {title}
    </motion.h3>
  );
}