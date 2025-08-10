// src/components/ImageModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="image-modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={imageUrl}
          alt="صورة مكبرة"
          className="image-modal-content"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()} // لمنع إغلاق النافذة عند النقر على الصورة
        />
        <button className="close-modal-button" onClick={onClose}>&times;</button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;