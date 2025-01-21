import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';
import { ProjectDetailLinks } from './ProjectDetailLinks';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectTeam } from './ProjectTeam';

interface ProjectDetailContentProps extends Project {}

export function ProjectDetailContent({ 
  description, 
  tags, 
  githubUrl, 
  liveUrl,
  features,
  technologies,
  role,
  duration,
  team
}: ProjectDetailContentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose dark:prose-invert max-w-none"
      >
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {description}
        </p>

        {features && <ProjectFeatures features={features} />}
        {technologies && <ProjectTechnologies technologies={technologies} />}
        {(role && duration && team) && (
          <ProjectTeam role={role} duration={duration} team={team} />
        )}

        <div className="mt-8">
          <ProjectDetailLinks githubUrl={githubUrl} liveUrl={liveUrl} />
        </div>
      </motion.div>
    </div>
  );
}