import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import Portfolio from './Portfolio';

function Home() {
  return (
    <div>
    <div className="bg-gray-900 min-h-screen text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to our platform
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-center mb-4 sm:mb-6 md:mb-8 max-w-2xl typing-effect"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hi, I'm Denny, I'm TECHNICIAN and I'm ENGENEER .
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <Link to="/about" className="bg-blue-500 opacity-20 hover:bg-blue-400 text-white py-2 px-4 rounded-full text-center transition-colors duration-300">
          About Me
        </Link>
        <Link to="/Portfolio" className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-full text-center transition-colors duration-300">
          Projects
        </Link>
        <Link to="/contact" className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-full text-center transition-colors duration-300">
          Contact
        </Link>
      </motion.div>

      {/* Background Circles */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Portfolio */}
      
    </div>
    <Portfolio />
    </div>
    
  );
}

export default Home;
