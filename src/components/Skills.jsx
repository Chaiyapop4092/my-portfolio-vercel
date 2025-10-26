import React, { useRef, useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'เข้าใจพื้นฐาน React, Tailwind CSS, Bootstrap, HTML และ responsive design เพื่อสร้างหน้าเว็บที่สวยงามและใช้งานง่าย',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'มีประสบการณ์กับ Node.js, MongoDB, Python และฐานข้อมูล เพื่อสร้างระบบที่มั่นคงและปลอดภัย',
      technologies: ['Node.js', 'Python', 'Java', 'MongoDB', 'MySQL', 'API']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      // เพิ่ม zero-width space ต่อท้ายเพื่อให้ newline แสดงเป็นบรรทัดว่าง
      description: 'พัฒนาแอพมือถือด้วย React Native และ Flutter สำหรับทั้ง iOS และ Android\n\u200B',
      technologies: ['React Native', 'Flutter', 'Dart', 'Firebase']
    },
  ];

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

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`section ${isVisible ? 'scroll-animation show' : 'scroll-animation'}`}
    >
      <h2 className="section-title">ความสามารถ</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            {/* ใช้ white-space: pre-line เพื่อให้ \n ในสตริงขึ้นบรรทัดใหม่ */}
            <p style={{ whiteSpace: 'pre-line' }}>{skill.description}</p>
            <div className="tech-list">
              {skill.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;