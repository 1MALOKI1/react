// src/components/Timeline.jsx
import React from 'react';
import TimelineItem from './TimelineItem.jsx'; // سنقوم بتحديث هذا المكون
import events from '../data/events.js';

const Timeline = () => {
  return (
    <section id="story">
      <h2 className="section-title">فصول من قصتنا</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <TimelineItem event={event} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;