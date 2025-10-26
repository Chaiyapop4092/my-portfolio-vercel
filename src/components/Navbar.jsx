import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={() => scrollToSection('home')}>
          Portfolio
        </a>
        
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><button className="nav-link" onClick={() => scrollToSection('home')}>หน้าแรก</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('about')}>เกี่ยวกับ</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('skills')}>ความสามารถ</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('resume')}>ประวัติ</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('projects')}>ผลงาน</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('contact')}>ติดต่อ</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;