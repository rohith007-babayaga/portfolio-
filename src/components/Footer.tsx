import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/yourusername'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername'
    },
    {
      icon: FiMail,
      name: 'Email',
      url: 'mailto:your.email@example.com'
    }
  ];

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Rohith Kumar
            </h3>
            <p className="text-gray-400 mt-2">
            AI/ML Enthusiast | NLP & Deep Learning Practitioner
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-sm"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-dark-700 pt-8"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Rohith Kumar. All rights reserved. Made with{' '}
              <FiHeart className="inline w-4 h-4 text-red-500" />{' '}
              using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 