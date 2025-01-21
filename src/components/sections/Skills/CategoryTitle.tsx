import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CategoryTitleProps {
  title: string;
}

export function CategoryTitle({ title }: CategoryTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center mb-8 group"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mr-4 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 relative">
        {title}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </h3>
    </motion.div>
  );
}