import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { SkillCard } from '../ui/SkillCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function Skills() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skills.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-8"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.items.map((skill, index) => (
                  <SkillCard 
                    key={skill} 
                    skill={skill}
                    index={categoryIndex * category.items.length + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}