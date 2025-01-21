import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon } from '../../../utils/skillIcons';

interface SkillCardProps {
  skill: string;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const icon = getSkillIcon(skill);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.05
      }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-purple-200 dark:border-purple-700 relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 mb-3"
        >
          {icon ? (
            <img
              src={icon}
              alt={skill}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-purple-700 dark:text-purple-200">
                {skill.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-purple-900 dark:text-purple-100 font-medium text-center group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200"
        >
          {skill}
        </motion.span>

        <motion.div
          className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      />
    </motion.div>
  );
}