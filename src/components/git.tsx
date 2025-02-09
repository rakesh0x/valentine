import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const githubRepoUrl = 'https://github.com/rakesh0x/valentine';

  return (
    <footer className="bg-gray-800 text-white py-4 flex flex-col items-center">
      {/* GitHub Link at the Top */}
      <a
        href={githubRepoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-400 mb-2"
      >
        <FaGithub />
        <span>View on GitHub</span>
      </a>

      {/* Copyright and Made with Love at the Bottom */}
      <p className="mb-1">© 2023 My Vercel Site. All rights reserved.</p>
      <p className="text-sm text-gray-400">Made with ❤️</p>
    </footer>
  );
};

export default Footer;
