import React, { useRef, useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const profileImageSrc = "https://i.ibb.co/jZVWh96h/472579914-1148056666942156-7328860182467432361-n.jpg", alt="472579914-1148056666942156-7328860182467432361-n";

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`section ${isVisible ? 'scroll-animation show' : 'scroll-animation'}`}
    >
      <h2 className="section-title">เกี่ยวกับผม</h2>
      <div className="about-content">
        <img 
          src={profileImageSrc} 
          alt="Profile" 
          className="profile-image"
        />
        <div className="about-text">
          <h3>นักศึกษาผู้มุ่งมั่น</h3>
          <p>
            ผมมีความสนใจในการพัฒนา Software โดยเฉพาะด้าน Backend / Logic / System
          </p>
          <p>
            ผมมีความเชื่อมั่นในการสร้างประสบการณ์ผู้ใช้ที่ดี (User Experience) 
            พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ และใช้เครื่องมือ (Tools) ที่เหมาะสม เพื่อให้ผลงานสำเร็จลุล่วงและตอบโจทย์ผู้ใช้งานได้อย่างแท้จริง
          </p>
          <p>
            แม้จะไม่ได้มีความถนัดด้านการออกแบบ UX/UI หรือการพัฒนา Frontend แต่ผมพร้อมที่จะศึกษาและพัฒนา เพื่อเสริมสร้างทักษะที่หลากหลายและครบถ้วนยิ่งขึ้น
          </p>
          <div className="tech-stack">
            <h4>เทคโนโลยีที่ใช้งาน:</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;