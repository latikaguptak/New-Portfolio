import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/portfolio';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const navigate = useNavigate();
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const [expandedStates, setExpandedStates] = useState<{ [key: string]: boolean }>({});

  const handleProjectClick = (index: number) => {
    navigate(`/projects/${index}`);
  };

  const toggleExpanded = (projectTitle: string) => {
    setExpandedStates(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">
            {showAll ? 'All Projects' : 'Featured Projects'}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div key={project.title} className="h-full">
              <ProjectCard 
                {...project} 
                index={index}
                isLink={true}
                onClick={() => handleProjectClick(index)}
                isExpanded={expandedStates[project.title] || false}
                onToggleExpand={() => toggleExpanded(project.title)}
              />
            </motion.div>
          ))}
        </motion.div>

        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}