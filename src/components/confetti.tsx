import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { BidirectionalConfetti } from './confettishoot';

// GitHub Link Component for the Top
const GitHubLink = () => {
  const githubRepoUrl = 'https://github.com/rakesh0x/valentine';

  return (
    <a
      href={githubRepoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <FaGithub />
      <span>Give it a Star</span>
    </a>
  );
};

// Footer Component for the Bottom
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-2 text-center">
      <p>Made with ❤️ by Rakesh</p>
    </footer>
  );
};

// Main Confetti Component
export const Confetti = () => {
  const sparkleVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-pink-300 via-red-300 to-pink-300 h-screen flex flex-col items-center justify-center relative">
      {/* GitHub Link at the Top */}
      <GitHubLink />

      {/* Confetti Animation */}
      <BidirectionalConfetti />

      {/* Main Text */}
      <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text text-center">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text"
        >
          <p>Yupp 🎉</p>
          <p className="mt-6 mb-30">You Made me the Happiest Person ❤️</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};  