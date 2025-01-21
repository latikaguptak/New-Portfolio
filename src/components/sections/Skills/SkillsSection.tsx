import React from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid } from './SkillsGrid';
import { SkillsHeader } from './SkillsHeader';
import { skills } from '../../../data/portfolio';

export function Skills() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(168,85,247,0.1)_50%,transparent_100%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SkillsHeader />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {skills.map((category, index) => (
            <SkillsGrid key={category.category} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}