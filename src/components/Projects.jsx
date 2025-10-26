import React, { useRef, useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: 'เครื่องตรวจจับและนับลูกปลา',
      category: 'Computer Vision / IoT Project',
      description: 'ระบบตรวจจับและนับจำนวนลูกปลาแบบอัตโนมัติด้วยเทคโนโลยี Computer Vision และ YOLO บน Raspberry Pi',
      detailDescription: 'พัฒนาโปรเจ็กต์ตรวจจับและนับลูกปลาโดยใช้ YOLO เพื่อประมวลผลภาพจากกล้องแบบเรียลไทม์บน Raspberry Pi พร้อมบันทึกข้อมูลจำนวนลูกปลาและสถิติการตรวจจับด้วย Python',
      technologies: ['Python', 'YOLO', 'OpenCV', 'Raspberry Pi', 'NumPy'],
      features: [
          'ตรวจจับลูกปลาแบบเรียลไทม์ด้วย YOLO',
          'นับจำนวนลูกปลาอัตโนมัติจากภาพกล้อง',
          'แสดงจำนวนลูกปลาบนหน้าจอแบบสด',
          'บันทึกข้อมูลการตรวจจับลงในไฟล์หรือฐานข้อมูล',
          'รองรับการประมวลผลบน Raspberry Pi'
      ],
      //github: 'https://github.com/johndoe/fish-counter',
      //live: 'https://fish-counter-demo.com'
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`section ${isVisible ? 'scroll-animation show' : 'scroll-animation'}`}
    >
      <h2 className="section-title">ผลงานที่ภูมิใจ</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openProjectModal(project)}
          >
            <div className="project-image">
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-tag">+{project.technologies.length - 3}</span>
                )}
              </div>
              <button className="project-link">
                ดูรายละเอียด →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="modal-category">{selectedProject.category}</span>
              </div>
              <div className="modal-body">
                <p className="modal-description">{selectedProject.detailDescription}</p>
                
                <div className="modal-section">
                  <h3>เทคโนโลยีที่ใช้</h3>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag large">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>ฟีเจอร์หลัก</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  <a href={selectedProject.live} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;