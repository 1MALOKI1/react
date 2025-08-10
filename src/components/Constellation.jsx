// src/components/Constellation.jsx
import React from 'react';
import { starData } from '../data/stars.js';
import { motion } from 'framer-motion';

const Constellation = () => {
  return (
    <section id="constellation" className="constellation-section">
      <h2 className="section-title">كوكبتنا الخاصة</h2>
      <p className="section-subtitle">كل نجمة هي ذكرى ثمينة تضيء سماءنا</p>
      <div className="star-map">
        {starData.map(star => (
          <motion.div
            key={star.id}
            className="star-wrapper"
            style={{ top: star.position.top, left: star.position.left }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: star.id * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="star"></div>
            <div className="star-tooltip">
              <h3>{star.title}</h3>
              <p>{star.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Constellation;