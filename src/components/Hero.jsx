import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'สวัสดีครับ ผม ไชยภพ รอดฮวบ';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Create particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 20000);
      }
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="particles" id="particles"></div>
      
      <div className="floating-element">💻</div>
      <div className="floating-element">🚀</div>
      <div className="floating-element">⚡</div>
      
      <div className="hero-content">
        <h1>{displayedText}<span className="cursor">|</span></h1>
        <p className="hero-subtitle">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
        <p className="hero-description">
          ผมเป็นนักศึกษาที่คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม <br />สาขา EnET-C (วิศวกรรมอิเล็กทรอนิกส์แขนงคอมพิวเตอร์)
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          ติดต่อเพื่อคุยงาน
        </button>
      </div>
    </section>
  );
};

export default Hero;