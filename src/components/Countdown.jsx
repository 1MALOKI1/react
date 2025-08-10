// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  // !! महत्वपूर्ण: قم بتغيير هذا التاريخ إلى تاريخ الذكرى السنوية الفعلي
  const anniversaryDate = new Date('2025-08-11T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +anniversaryDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
        دقائق: Math.floor((difference / 1000 / 60) % 60),
        ثواني: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.section 
      className="countdown-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">حتى أجمل يوم</h2>
      <div className="countdown-timer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-block">
            <div className="time-value">{value}</div>
            <div className="time-unit">{unit}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Countdown;