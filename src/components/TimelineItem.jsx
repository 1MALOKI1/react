// src/components/TimelineItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';

// استيراد Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const TimelineItem = ({ event, index }) => {
  const isLeft = index % 2 === 0;

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
  };

  const renderMedia = () => {
    // إذا كان نوع الميديا هو معرض صور
    if (event.media.type === 'gallery') {
      return (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="event-gallery-slider"
        >
          {event.media.sources.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`${event.title} - صورة ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    
    // إذا كان فيديو
    if (event.media.type === 'video') {
      return <video src={event.media.source} autoPlay loop muted playsInline />;
    }
    
    // إذا كان صورة (الحالة الافتراضية)
    return <img src={event.media.source} alt={event.title} />;
  };

  return (
    <motion.div
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
    >
      <div className="new-timeline-content">
        <div className="paperclip-icon">
          <FaPaperclip />
        </div>
        
        <div className="content-grid">
          <div className="image-section">
            {renderMedia()}
          </div>

          <div className="text-section">
            <p className="event-date">{event.date}</p>
            <h3 className="event-title">{event.title}</h3>
            {event.description && (
              <p className="event-description">{event.description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;