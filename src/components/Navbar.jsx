// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-link">الرئيسية</a>
      <a href="#constellation" className="nav-link">كوكبتنا</a>
      <a href="#reasons" className="nav-link">زهرتنا</a>
      <a href="#childhood" className="nav-link">الطفولة</a> {/* <--- الرابط الجديد */}
      <a href="#story" className="nav-link">قصتنا</a>
      <a href="#memories" className="nav-link">ذكرياتنا</a>
    </nav>
  );
};

export default Navbar;