import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon } from '../../../utils/skillIcons';

interface SkillCardProps {
  skill: string;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const icon = getSkillIcon(skill);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 h-full border border-purple-200 dark:border-purple-700 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4"
          >
            {icon ? (
              <img src={icon} alt={skill} className="w-12 h-12" />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {skill.charAt(0)}
                </span>
              </div>
            )}
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="absolute -right-1 -top-1 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
            />
          </motion.div>

          <h4 className="text-purple-900 dark:text-purple-100 font-medium text-center mb-2">
            {skill}
          </h4>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
            className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}