import React from 'react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  icon?: string;
  skill: string;
}

export function SkillIcon({ icon, skill }: SkillIconProps) {
  if (icon) {
    return (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 mb-3"
      >
        <img
          src={icon}
          alt={skill}
          className="w-full h-full"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 mb-3 bg-primary-200 dark:bg-primary-700 rounded-full flex items-center justify-center"
    >
      <span className="text-xl font-bold text-primary-700 dark:text-primary-200">
        {skill.charAt(0)}
      </span>
    </motion.div>
  );
}