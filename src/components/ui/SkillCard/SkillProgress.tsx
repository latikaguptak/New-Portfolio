import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  category: string;
}

export function SkillProgress({ category }: SkillProgressProps) {
  // Simulate different progress levels based on category
  const getProgress = () => {
    switch (category) {
      case 'Frontend Development':
        return Math.random() * (95 - 85) + 85;
      case 'Mobile Development':
        return Math.random() * (90 - 80) + 80;
      default:
        return Math.random() * (85 - 75) + 75;
    }
  };

  const progress = getProgress();

  return (
    <div className="w-full mt-3">
      <motion.div
        className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-secondary-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}