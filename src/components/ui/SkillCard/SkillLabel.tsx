import React from 'react';
import { motion } from 'framer-motion';

interface SkillLabelProps {
  skill: string;
}

export function SkillLabel({ skill }: SkillLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-primary-900 dark:text-primary-100 font-medium text-center group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-200"
    >
      {skill}
    </motion.span>
  );
}