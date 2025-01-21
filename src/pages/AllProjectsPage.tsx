import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function AllProjectsPage() {
  const navigate = useNavigate();

  const handleProjectClick = (index: number) => {
    navigate(`/projects/${index}`);
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-purple-900 dark:text-purple-100 mt-6"
          >
            All Projects
          </motion.h1>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="h-full">
              <ProjectCard
                {...project}
                index={index}
                isLink={true}
                onClick={() => handleProjectClick(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
