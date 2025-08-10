import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

export default function EventItem({ event, side = 'right', onOpen = () => {} }){
  const { date, title, description, media } = event
  const src = media?.src
  const isVideo = media?.type === 'video'

  return (
    <motion.article
      className={`event-item ${side}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={cardVariants}
    >
      <div className="event-socket">
        <span className="dot" />
        <div className="line" />
      </div>

      <div className="event-card">
        <div className="event-header">
          <h3 className="event-title">{title}</h3>
          <time className="event-date">{date}</time>
        </div>

        {description && <p className="event-desc">{description}</p>}

        {src && (
          <div className="event-media" onClick={onOpen} role="button" tabIndex={0}>
            {isVideo ? (
              <div className="video-preview">
                <video src={src} muted playsInline preload="metadata" />
                <div className="play-overlay">▶</div>
              </div>
            ) : (
              <img src={src} alt={title} />
            )}
          </div>
        )}

      </div>
    </motion.article>
  )
}