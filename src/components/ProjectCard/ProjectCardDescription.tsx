import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardDescriptionProps {
  description: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function ProjectCardDescription({
  description,
  isLink,
}: ProjectCardDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // If it's a link, we don't want to expand the description
  if (isLink) {
    return (
      <motion.p className="text-gray-600 dark:text-gray-300 line-clamp-3">
        {description}
      </motion.p>
    );
  }

  return (
    <div>
      <motion.p
        className={`text-gray-600 dark:text-gray-300 ${
          !isExpanded ? 'line-clamp-3' : ''
        }`}
      >
        {description}
      </motion.p>
      {description.length > 150 && (
        <button
          onClick={handleToggle}
          className="mt-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              See More <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  );
}
