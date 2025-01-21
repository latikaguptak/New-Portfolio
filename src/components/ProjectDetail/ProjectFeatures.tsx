import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ProjectFeaturesProps {
  features: string[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}