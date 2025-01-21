import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { CategoryTitle } from './CategoryTitle';

interface SkillsGridProps {
  category: {
    category: string;
    items: string[];
  };
  index: number;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function SkillsGrid({ category, index }: SkillsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <CategoryTitle title={category.category} />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {category.items.map((skill, i) => (
          <SkillCard 
            key={skill} 
            skill={skill} 
            index={i}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}