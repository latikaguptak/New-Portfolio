import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface ProjectTeamProps {
  role: string;
  duration: string;
  team: string[];
}

export function ProjectTeam({ role, duration, team }: ProjectTeamProps) {
  return (
    <div className="mt-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Users className="w-6 h-6 text-purple-600 dark:text-purple-300" />
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
          Project Team
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <span className="text-purple-600 dark:text-purple-300 font-medium">Role:</span>
          <span className="ml-2 text-gray-600 dark:text-gray-300">{role}</span>
        </div>
        
        <div>
          <span className="text-purple-600 dark:text-purple-300 font-medium">Duration:</span>
          <span className="ml-2 text-gray-600 dark:text-gray-300">{duration}</span>
        </div>
        
        <div>
          <span className="text-purple-600 dark:text-purple-300 font-medium">Team Members:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {team.map((member, index) => (
              <motion.span
                key={member}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-purple-700 dark:text-purple-300"
              >
                {member}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}