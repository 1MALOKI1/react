// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="hero"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1 
        className="hero-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring' }}
      >
        حكايتنا
      </motion.h1>
      <motion.p 
        className="hero-subtitle"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        عامٌ من الحب، والذكريات، وكل الأشياء الجميلة
      </motion.p>

      <motion.div
        className="scroll-down-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        اسحب للأسفل
      </motion.div>
    </motion.section>
  );
};

export default Hero;