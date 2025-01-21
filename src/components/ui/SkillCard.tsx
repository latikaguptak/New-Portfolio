import React from 'react';
import { getSkillIcon } from '../../utils/skillIcons';

interface SkillCardProps {
  skill: string;
}

export function SkillCard({ skill }: SkillCardProps) {
  const icon = getSkillIcon(skill);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-purple-200 dark:border-purple-700">
      <div className="flex flex-col items-center">
        {icon ? (
          <img
            src={icon}
            alt={skill}
            className="w-12 h-12 mb-3"
          />
        ) : (
          <div className="w-12 h-12 mb-3 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-purple-700 dark:text-purple-200">
              {skill.charAt(0)}
            </span>
          </div>
        )}
        <span className="text-purple-900 dark:text-purple-100 font-medium text-center">
          {skill}
        </span>
      </div>
    </div>
  );
}