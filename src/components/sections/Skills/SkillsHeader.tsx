import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <Code2 size={40} className="text-purple-500 dark:text-purple-400" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 text-purple-300 dark:text-purple-600"
          >
            <Sparkles size={40} />
          </motion.div>
        </div>
      </motion.div>

      <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
        Skills & Expertise
      </h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
      />
    </motion.div>
  );
}