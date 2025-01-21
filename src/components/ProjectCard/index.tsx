import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProjectCardImage } from './ProjectCardImage';
import { ProjectCardContent } from './ProjectCardContent';
import { ProjectCardTags } from './ProjectCardTags';
import { ProjectCardLinks } from './ProjectCardLinks';
import { Project } from '../../types/project';

interface ProjectCardProps extends Project {
  index: number;
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
}: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${index}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking links
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-200 dark:border-purple-700 group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={handleClick}
    >
      <div className="h-48">
        <ProjectCardImage image={image} title={title} />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <ProjectCardContent title={title} description={description} />
        <div className="mt-auto">
          {/* <ProjectCardTags tags={tags} /> */}
          <div onClick={handleLinkClick}>
            <ProjectCardLinks githubUrl={githubUrl} liveUrl={liveUrl} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
