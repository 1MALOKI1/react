// src/components/BloomingFlower.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { loveReasons } from '../data/reasons.js';

const BloomingFlower = () => {
  const petalCount = loveReasons.length;

  return (
    <section id="reasons" className="blooming-flower-section">
      <h2 className="section-title">زهرة حبنا</h2>
      <p className="section-subtitle">لكل ورقة حكاية، ولكل حكاية سبب</p>
      <div className="flower-container">
        <motion.div 
          className="flower-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          viewport={{ once: true }}
        >
          ع س
        </motion.div>
        {loveReasons.map((reason, index) => {
          // حساب زاوية كل ورقة لوضعها في دائرة
          const angle = (index / petalCount) * 360;
          return (
            <motion.div
              key={index}
              className="petal-wrapper"
              style={{
                // تدوير كل ورقة حول المركز
                transform: `rotate(${angle}deg)`,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="petal"
                whileHover={{ scale: 1.15, zIndex: 10, boxShadow: '0 0 20px var(--primary-color)' }}
              >
                <div className="petal-reason">{reason}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BloomingFlower;