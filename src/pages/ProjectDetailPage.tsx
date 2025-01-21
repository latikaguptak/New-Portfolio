import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ProjectDetailHeader } from '../components/ProjectDetail/ProjectDetailHeader';
import { ProjectDetailContent } from '../components/ProjectDetail/ProjectDetailContent';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Ensure id exists and is a valid number
  if (!id || isNaN(parseInt(id))) {
    navigate('/projects');
    return null;
  }

  const projectIndex = parseInt(id);
  const project = projects[projectIndex];

  // Check if project exists
  if (!project || projectIndex < 0 || projectIndex >= projects.length) {
    navigate('/projects');
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <ProjectDetailHeader 
          title={project.title} 
          image={project.image} 
        />
        <ProjectDetailContent {...project} />
      </div>
    </motion.div>
  );
}