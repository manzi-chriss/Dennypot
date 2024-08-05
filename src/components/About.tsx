import React from 'react';
import content from './Content'; // Assuming content is properly imported and structured
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <div className="bg-gray-700 min-h-screen text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {content.title.name}
      </motion.h1>
      
      <motion.div 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-4 sm:p-6 md:p-8">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {content.body.content1}
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-gray-200 mb-2 sm:mb-3 md:mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {content.body.content2}
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-medium text-yellow-300 mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {content.body.sub_content}
          </motion.p>
          
          <motion.div 
            className="mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Connect with me:</h3>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-3">
              <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm">
                Instagram
              </a>
              <a href={content.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm">
                Twitter
              </a>
              <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm">
                LinkedIn
              </a>
              <a href={content.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm">
                GitHub
              </a>
              <a href={content.social.Instagram} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm">
                Instagram
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Contact Information:</h3>
            <p className="mb-1 text-sm">Email: <a href={`mailto:${content.contact.email}`} className="text-blue-300 hover:text-blue-100 transition-colors duration-300">{content.contact.email}</a></p>
            <p className="text-sm">Phone: <a href={`tel:${content.contact.phone}`} className="text-blue-300 hover:text-blue-100 transition-colors duration-300">{content.contact.phone}</a></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated cubes */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: 0
          }}
          animate={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      ))}
    </div>
  );
}

export default AboutUs;
