// src/components/MusicPlayer.jsx
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // ستحتاج لتثبيت react-icons

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/music/our-song.mp3" loop />
      <button onClick={togglePlayPause} className="control-button">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
// لا تنس تثبيت المكتبة: npm install react-icons