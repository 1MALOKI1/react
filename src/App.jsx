import React, { useState } from 'react';

// استيراد كل المكونات المستخدمة
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Hero from './components/Hero.jsx';
import Countdown from './components/Countdown.jsx';
import Constellation from './components/Constellation.jsx';
import BloomingFlower from './components/BloomingFlower.jsx';
import Timeline from './components/Timeline.jsx';
import Gallery from './components/Gallery.jsx';
import ImageModal from './components/ImageModal.jsx';
import ChildhoodMemories from './components/ChildhoodMemories.jsx'; 

// استيراد ملف الأنماط الرئيسي
import './styles/App.css';

function App() {
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar />
      <MusicPlayer />
      <ImageModal imageUrl={modalImage} onClose={closeImageModal} />
      
      <Hero />
      
      <main>
        <Countdown />
        <Constellation />
        <BloomingFlower />
         <ChildhoodMemories />
        <Timeline />
        <Gallery onImageClick={openImageModal} />
      </main>

      <footer className="footer">
        <p>صُنِع بكل الحب، من أجلكِ. ∞</p>
      </footer>
    </div>
  );
}

export default App;