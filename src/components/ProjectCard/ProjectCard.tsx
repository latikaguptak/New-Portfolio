import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCardImage } from './ProjectCardImage';
import { ProjectCardTags } from './ProjectCardTags';
import { ProjectCardLinks } from './ProjectCardLinks';
import { ProjectCardContent } from './ProjectCardContent';
import { Project } from '../../types/project';

interface ProjectCardProps extends Project {
  index: number;
  isLink?: boolean;
  onClick?: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
  isLink = false,
  onClick,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLink && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-200 dark:border-purple-700 group h-full ${
        isLink ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="h-48">
        <ProjectCardImage image={image} title={title} />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <ProjectCardContent
          title={title}
          description={description}
          isExpanded={isExpanded}
          onToggleExpand={handleToggleExpand}
        />

        <div className="mt-auto space-y-4">
          <ProjectCardTags tags={tags} />
          {!isLink && (
            <div onClick={(e) => e.stopPropagation()}>
              <ProjectCardLinks githubUrl={githubUrl} liveUrl={liveUrl} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
