import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Education() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">Education</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500 dark:border-purple-400 relative overflow-hidden group"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
            />
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-purple-900 dark:text-purple-100"
                >
                  {edu.degree}
                </motion.h3>
                <p className="text-purple-600 dark:text-purple-300 font-medium">{edu.school}</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="text-purple-500 dark:text-purple-400" size={24} />
              </motion.div>
            </div>

            <div className="flex items-center text-purple-700 dark:text-purple-300 mb-4">
              <Calendar size={16} className="mr-2" />
              <span>{edu.period}</span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300"
            >
              {edu.description}
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}