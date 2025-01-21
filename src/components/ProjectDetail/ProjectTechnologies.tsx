import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { getSkillIcon } from '../../utils/skillIcons';

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">
        Technologies Used
      </h3>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => {
          const icon = getSkillIcon(tech);
          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-full"
            >
              {icon ? (
                <img src={icon} alt={tech} className="w-5 h-5" />
              ) : (
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-300" />
              )}
              <span className="text-purple-700 dark:text-purple-300">{tech}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}