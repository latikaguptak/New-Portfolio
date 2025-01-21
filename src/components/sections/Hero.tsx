import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { useLoading } from '../../contexts/LoadingContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export function Hero() {
  const { isLoading } = useLoading();

  return (
    <div className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 dark:from-pink-800 dark:via-purple-800 dark:to-pink-900 text-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-white font-medium text-lg"
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          animate={floatingAnimation}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white/30 overflow-hidden"
          >
            <img
              src="https://user-images.githubusercontent.com/74038190/221352975-94759904-aa4c-4032-a8ab-b546efb9c478.gif"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-3xl mb-8 text-white/90"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="text-xl mb-10 text-white/80 max-w-2xl mx-auto"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          variants={item}
          className="flex justify-center items-center space-x-6"
        >
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <motion.a
              key={platform}
              href={url}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform === 'github' && <Github size={24} />}
              {platform === 'linkedin' && <Linkedin size={24} />}
              {platform === 'twitter' && <Twitter size={24} />}
              {platform === 'email' && <Mail size={24} />}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"
      />
    </div>
  );
}