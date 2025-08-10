// src/components/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryImages.js';

const Gallery = ({ onImageClick }) => {
  return (
    <section id="memories" className="gallery-section">
      <h2 className="section-title">مكتبة ذكرياتنا</h2>
      <motion.div 
        className="gallery-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            onClick={() => onImageClick(image.src)}
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;