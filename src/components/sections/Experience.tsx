import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Experience() {
  return (
    <div className="py-16 px-6 bg-white dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-purple-900 dark:text-purple-100"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {experience.map((job, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-r from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500 dark:border-purple-400 group"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="absolute top-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500"
            />

            <div className="flex justify-between items-start mb-4">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-purple-900 dark:text-purple-100"
                >
                  {job.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-purple-600 dark:text-purple-300 font-medium"
                >
                  {job.company}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center text-purple-700 dark:text-purple-300"
              >
                <Calendar size={16} className="mr-2" />
                <span>{job.period}</span>
              </motion.div>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-2 text-gray-600 dark:text-gray-300"
            >
              {job.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-2 text-purple-500 dark:text-purple-400">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
              className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}