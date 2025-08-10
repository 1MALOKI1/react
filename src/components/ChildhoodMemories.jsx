// src/components/ChildhoodMemories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { childhoodPhotos } from '../data/childhoodPhotos.js';

const ChildhoodMemories = () => {
  return (
    <section id="childhood" className="childhood-section">
      <h2 className="section-title">نظرة إلى الماضي</h2>
      <p className="section-subtitle">حيث بدأت حكاياتنا منذ الطفولة</p>
      <div className="polaroids-container">
        {childhoodPhotos.map((person, index) => (
          <motion.div
            key={person.id}
            className="polaroid-card"
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -5 : 5 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            transition={{ duration: 0.5, type: 'spring' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="polaroid-image-wrapper">
              <img src={person.image} alt={person.name} className="child-photo" />
            </div>
            <p className="child-name">{person.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChildhoodMemories;