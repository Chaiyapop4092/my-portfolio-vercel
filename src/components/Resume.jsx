import React, { useRef, useEffect, useState } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('education');
  const sectionRef = useRef(null);

  const resumeData = {
    education: [
      {
        id: 1,
        degree: 'ปริญญาตรี วิทยาลัยเทคโนโลยีอุตสาหกรรม',
        major: 'วิศวกรรมอิเล็กทรอนิกส์แขนงคอมพิวเตอร์',
        school: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
        period: '2022 - ปัจจุบัน',
        gpa: '2.97',
        status: 'กำลังศึกษาชั้นปีที่ 4',
        activities: [
          'เข้าร่วมการแข่งขัน Hackathon IT Career Camp 2025',
          
        ],
        relevantCourses: [
          'Data Structures and Algorithms',
          'Database & Data Technology', 
          'Web Application Development',
          'Software Engineering',
          'Object-Oriented Programming',
          'Computer Networks',
          'Computer Architecture',
          'Operating System',
          'Mobile Application Development'
        ],
        projects: [
          {
            name: 'โปรเจกต์จบการศึกษา: เครื่องตรวจจับและนับลูกปลา',
            description: 'พัฒนาเครื่องและระบบตรวจจับและนับลูกปลาด้วย AI',
            tech: ['Python', 'Raspberry Pi', 'Computer Vision'],
            grade: 'กำลังพัฒนา'
          },
        ]
      },
      {
        id: 2,
        degree: 'ปวช (ประกาศนียบัตรวิชาชีพ)',
        major: 'ช่างอิเล็กทรอนิกส์',
        school: 'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร',
        period: '2019 - 2022',
        gpa: '3.00',
        /*activities: [
          'หัวหน้าชุมนุมคอมพิวเตอร์',
          'เข้าร่วมค่าย Young Programmer',
          'รับรางวัลชนะเลิศการแข่งขันเขียนโปรแกรมระดับโรงเรียน'
        ]*/
      }
    ],
    experience: [
      {
        id: 1,
        position: 'Backend Developer Intern',
        company: 'Tokio Marine Life Insurance Thailand',
        location: 'กรุงเทพมหานคร',
        period: 'พ.ย. 2025 - ก.พ. 2026',
        type: 'สหกิจศึกษา',
        description: 'ฝึกงานระยะเวลา 4 เดือนในตำแหน่งนักพัฒนาเว็บไซต์ (Backend Developer)',
        responsibilities: [
          'พัฒนาและออกแบบ RESTful API สำหรับเชื่อมต่อกับ Frontend',
          'จัดการฐานข้อมูลด้วย MySQL และ MongoDB',
          'เขียนสคริปต์ฝั่งเซิร์ฟเวอร์ด้วย Node.js และ Express.js',
          'ดีบักและเพิ่มประสิทธิภาพของระบบให้รองรับผู้ใช้จำนวนมาก',
          'ทำงานร่วมกับทีม Frontend เพื่อเชื่อมต่อ API อย่างราบรื่น'
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git'],
        achievements: [
          'พัฒนา API ที่มีประสิทธิภาพและตอบสนองรวดเร็ว',
          'ปรับปรุงระบบหลังบ้านให้ใช้เวลาตอบสนองน้อยลงกว่า 40%',
          'ได้รับคำชมจากหัวหน้างานในด้านความละเอียดและความรับผิดชอบ'
        ]

      },
      
    ],
    projects: [
        {
        id: 1,
        name: 'เครื่องตรวจจับและนับลูกปลา',
        period: '2024 (โปรเจกต์จบการศึกษา)',
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
    ],
    skills: {
      // ✅ ภาษาโปรแกรม - ไม่มี level หรือ %
      programming: [
        { 
          name: 'JavaScript', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'เขียน Frontend/Backend, สร้าง API, จัดการ DOM, Async/Await',
          color: '#f7df1e'
        },
        { 
          name: 'Python', 
          experience: 'ใช้งาน 3+ ปี', 
          description: 'Programming Fundamentals, Algorithm, AI/Machine Learning',
          color: '#3776ab'
        },
        { 
          name: 'C/C++', 
          experience: 'ใช้งาน 2+ ปี', 
          description: 'Programming Fundamentals, Algorithm, IOT',
          color: '#00599c'
        },
        { 
          name: 'Java', 
          experience: 'ใช้งาน 2+ ปี', 
          description: 'OOP, Basic GUI, Data Structure, Algorithm',
          color: '#ed8b00'
        },
        { 
          name: 'PHP', 
          experience: 'ใช้งาน 2+ ปี', 
          description: 'Basic Web Backend, MySQL Integration',
          color: '#777bb4'
        },
        { 
          name: 'SQL', 
          experience: 'ใช้งาน 2+ ปี', 
          description: 'Query, Join, Subquery, Database Design, MySQL/PostgreSQL',
          color: '#336791'
        }
      ],
      // ✅ เทคโนโลยีเว็บ
      webtech: [
        { 
          name: 'CSS3', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Flexbox, Grid, Animation, Responsive Design, SASS/SCSS',
          color: '#1572b6'
        },
        { 
          name: 'React.js', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Components, Hooks, State Management, Router, Context API',
          color: '#61dafb'
        },
        { 
          name: 'Node.js', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Express.js, REST API, File System, NPM packages',
          color: '#339933'
        },
        { 
          name: 'React Native', 
          experience: 'ใช้งาน 6+ เดือน', 
          description: 'Mobile App Development, Navigation, AsyncStorage',
          color: '#61dafb'
        }
      ],
      // ✅ ฐานข้อมูล
      database: [
        { 
          name: 'MySQL', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Database Design, Complex Query, Index',
          color: '#4479a1'
        },
        { 
          name: 'MongoDB', 
          experience: 'ใช้งาน 6+ เดือน', 
          description: 'NoSQL, Document Database, Mongoose',
          color: '#47a248'
        },
        { 
          name: 'Firebase', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Realtime Database, Authentication, Storage, Hosting',
          color: '#ffca28'
        },
        { 
          name: 'PostgreSQL', 
          experience: 'ใช้งาน 6+ เดือน', 
          description: 'Relational Database, JSON support, Advanced queries',
          color: '#336791'
        }
      ],
      // ✅ เครื่องมือ
      tools: [
        { 
          name: 'Git/GitHub', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Version Control, Collaboration, Pull Request, Branch management' 
        },
        { 
          name: 'VS Code', 
          experience: 'ใช้ประจำ 2+ ปี', 
          description: 'Main Editor, Extensions, Debugging, Integrated Terminal' 
        },
        { 
          name: 'Chrome DevTools', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Debugging, Performance analysis, Network monitoring' 
        },
        { 
          name: 'Docker', 
          experience: 'เรียนรู้ระยะเริ่มต้น', 
          description: 'Containerization, Basic commands, Development environment' 
        },
      ],
      // ✅ ทักษะพิเศษ - เพิ่มใหม่
      specialSkills: [
        { 
          name: 'Responsive Web Design', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Mobile-first design, Flexbox, CSS Grid, Media queries',
          color: '#06b6d4'
        },
        { 
          name: 'RESTful API Development', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'API Design, HTTP methods, Authentication, Documentation',
          color: '#10b981'
        },
        { 
          name: 'Version Control', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Git workflows, Branching strategies, Code collaboration',
          color: '#f59e0b'
        },
        { 
          name: 'Problem Solving', 
          experience: 'พัฒนาตลอด 3+ ปี', 
          description: 'Debugging, Algorithm thinking, Stack Overflow research',
          color: '#ef4444'
        },
        { 
          name: 'Testing & Debugging', 
          experience: 'ใช้งาน 1+ ปี', 
          description: 'Unit testing, Integration testing, Browser debugging',
          color: '#6366f1'
        }
      ],
      // ✅ ทักษะบุคลิกภาพ - ต้องใช้ softSkills ไม่ใช่ soft
      softSkills: [
        {
          skill: 'การเรียนรู้ด้วยตนเอง',
          description: 'เรียน Framework ใหม่จาก Documentation, YouTube, และ Tutorial ออนไลน์ได้'
        },
        {
          skill: 'การแก้ไขปัญหา', 
          description: 'ใช้ Google, Stack Overflow, GitHub Issues และ Debugging เพื่อหาคำตอบ'
        },
        {
          skill: 'การทำงานเป็นทีม',
          description: 'ทำงานร่วมกับเพื่อนในโปรเจกต์กลุ่ม การฝึกงาน และ Open Source'
        },
        {
          skill: 'การสื่อสาร',
          description: 'อธิบายเทคนิคให้เพื่อนฟัง เป็น TA สอนน้องๆ เขียน Documentation'
        },
        {
          skill: 'ความรับผิดชอบ',
          description: 'ส่งงานตรงเวลา ทำตามที่สัญญาไว้กับลูกค้า Freelance และทีมงาน'
        },
        {
          skill: 'ความอดทนและมุ่งมั่น',
          description: 'ยังคง Debug และหาคำตอบจนกว่าจะแก้ปัญหาได้ ไม่ยอมแพ้ง่ายๆ'
        },
        {
          skill: 'ความคิดสร้างสรรค์',
          description: 'คิด Solution ที่แปลกใหม่ ออกแบบ UI ที่สวยงาม และ User Experience ที่ดี'
        },
        {
          skill: 'การจัดการเวลา',
          description: 'วางแผนงาน Priority ระหว่างเรียน โปรเจกต์ และงาน Part-time ได้ดี'
        }
      ]
    },
    certifications: [
      /*{
        id: 1,
        name: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: '2023',
        credentialId: 'FCC-RWD-2023-001',
        description: 'หลักสูตรการสร้างเว็บไซต์ที่ตอบสนองได้ดีบนทุกอุปกรณ์',
        type: 'ออนไลน์'
      },
      {
        id: 2,
        name: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        date: '2023',
        credentialId: 'FCC-JS-2023-002',
        description: 'หลักสูตร Algorithm และ Data Structure ด้วยภาษา JavaScript',
        type: 'ออนไลน์'
      },
      {
        id: 3,
        name: 'React Developer Course',
        issuer: 'Udemy',
        date: '2022',
        credentialId: 'UC-REACT-2022-003',
        description: 'หลักสูตร React.js แบบครบวงจรสำหรับ Web Development',
        type: 'ออนไลน์'
      },
      {
        id: 4,
        name: 'Google Analytics Certified',
        issuer: 'Google',
        date: '2023',
        credentialId: 'GA-CERT-2023-004',
        description: 'ใบรับรองการใช้งาน Google Analytics สำหรับวิเคราะห์เว็บไซต์',
        type: 'ออนไลน์'
      }*/
    ],
    languages: [
      { name: 'ไทย', level: 'Native', description: 'ภาษาแม่' },
      { name: 'อังกฤษ', level: 'Upper-Intermediate', description: 'อ่านเอกสารทางเทคนิคและสื่อสารได้ดี' },
      { name: 'จีนกลาง', level: 'Poor', description: 'ไม่มีพื้นฐาน ไม่สามารถสื่อสารได้' }
    ],
    interests: [
      '💻 การเขียนโปรแกรมและเทคโนโลยีใหม่ๆ',
      '🤖 ติดตามเทรนด์เครื่องมือและ AI',
      '📖 อ่านนิยายสืบสวนสอบสวน',
      '🎮 เล่นเกมเนื้อเรื่อง - ออนไลน์',
      '🎬 ดูอนิเมะและภาพยนตร์'
      //'📱 Mobile App Development',  
      //'🎮 Game Development (Unity)',
      //'📚 อ่านบล็อกเทคนิคและ Tutorial',
      //'🏃‍♂️ วิ่งออกกำลังกายและฟิตเนส',
      //'🎵 ฟังเพลงและเล่นกีตาร์',
      //'✈️ เที่ยวและสำรวจสถานที่ใหม่ๆ',
      //'🍳 ทำอาหารและทดลองสูตรใหม่'
    ]
  };

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

  const downloadPDF = () => {
    alert('💼 ในเวอร์ชันจริงจะดาวน์โหลด Resume PDF ได้ที่นี่\n📧 หรือส่งอีเมลมาขอได้เลยครับ!');
  };

  const printResume = () => {
    window.print();
  };

  const TRANSCRIPT_URL = 'https://drive.google.com/file/d/1JfJtzPN4XlDAfri_DwWZRcCV_pN84zOk/view?usp=sharing/view';

  const handleTranscriptView = (action) => {
    const GOOGLE_DRIVE_FILE_ID = '1JfJtzPN4XlDAfri_DwWZRcCV_pN84zOk'; // ⚠️ เปลี่ยนเป็น ID ของคุณ
    
    if (action === 'view') {
      const viewUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view`;
      window.open(viewUrl, '_blank');
    } else if (action === 'download') {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className={`section ${isVisible ? 'scroll-animation show' : 'scroll-animation'}`}
    >
      <h2 className="section-title">ประวัติส่วนตัว</h2>
      
      <div className="student-intro">
        <div className="intro-card">
          <h3>🎓 นักศึกษาจบใหม่ที่พร้อมเริ่มต้นอาชีพ</h3>
          <p>
            ผมเป็นนักศึกษาปี 4 สาขาวิศวกรรมอิเล็กทรอนิกส์แขนงคอมพิวเตอร์ที่กำลังจะจบการศึกษา 
            และกำลังค้นหาประสบการณ์ฝึกงาน โปรเจกต์จริง และงานพิเศษ พร้อมที่จะเรียนรู้และเติบโตไปกับองค์กร
          </p>
          <div className="intro-highlights">
            <span className="highlight">🏆 GPA 2.97</span>
            <span className="highlight">💻 3+ ปี Coding</span>
            <span className="highlight">🚀 1 โปรเจกต์</span>
            <span className="highlight">📚 กระตือรือร้น</span>
          </div>
        </div>
      </div>

      {/*<div className="resume-actions">
        <button className="resume-btn primary" onClick={downloadPDF}>
          📄 ดาวน์โหลด Resume PDF
        </button>
        <button className="resume-btn secondary" onClick={printResume}>
          🖨️ พิมพ์เอกสาร
        </button>
      </div>*/}

      <div className="resume-content">
        <div className="resume-tabs">
          <button 
            className={`tab-btn ${selectedTab === 'education' ? 'active' : ''}`}
            onClick={() => setSelectedTab('education')}
          >
            🎓 การศึกษา
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'projects' ? 'active' : ''}`}
            onClick={() => setSelectedTab('projects')}
          >
            💡 โปรเจกต์
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'experience' ? 'active' : ''}`}
            onClick={() => setSelectedTab('experience')}
          >
            🏢 ประสบการณ์
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'skills' ? 'active' : ''}`}
            onClick={() => setSelectedTab('skills')}
          >
            🚀 ทักษะ
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'other' ? 'active' : ''}`}
            onClick={() => setSelectedTab('other')}
          >
            🏆 อื่นๆ
          </button>
        </div>

        <div className="tab-content">
          {/* Education Tab */}
          {selectedTab === 'education' && (
            <div className="tab-panel">
              <div className="education-grid">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="education-card">
                    <div className="education-header">
                      <h3>{edu.degree}</h3>
                      <span className="period">{edu.period}</span>
                    </div>
                    <div className="education-details">
                      <p><strong>สาขา:</strong> {edu.major}</p>
                      <p><strong>สถาบัน:</strong> {edu.school}</p>
                      <p><strong>เกรดเฉลี่ย:</strong> {edu.gpa}</p>
                      {edu.status && <p><strong>สถานะ:</strong> <span className="status-badge">{edu.status}</span></p>}
                    </div>
                    
                    {edu.activities && (
                      <div className="activities-section">
                        <h4>🎯 กิจกรรมที่เข้าร่วม:</h4>
                        <ul>
                          {edu.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.relevantCourses && (
                      <div className="courses-section">
                        <h4>📚 วิชาที่เกี่ยวข้อง:</h4>
                        <div className="courses-tags">
                          {edu.relevantCourses.map((course, idx) => (
                            <span key={idx} className="course-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.projects && (
                      <div className="projects-section">
                        <h4>💡 โปรเจกต์ที่เกี่ยวข้อง:</h4>
                        {edu.projects.map((project, idx) => (
                          <div key={idx} className="project-item">
                            <h5>{project.name} {project.grade && <span className="grade">สถานะ: {project.grade}</span>}</h5>
                            <p>{project.description}</p>
                            <div className="project-tech">
                              {project.tech.map((tech, techIdx) => (
                                <span key={techIdx} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* ✅ ส่วนแนบผลการศึกษา (ปรับปรุง UI ให้เรียบร้อยขึ้น) */}
                    {edu.id === 1 && (
                      <section className="transcript-section" aria-labelledby={`transcript-${edu.id}-title`}>
                        <h4 id={`transcript-${edu.id}-title`}>📜 ผลการศึกษา (Transcript)</h4>

                        <div className="transcript-grid">
                          {/* left: card with basic info + actions */}
                          <div className="transcript-card">
                            <div className="transcript-card-top">
                              <div className="transcript-icon">📄</div>
                              <div className="transcript-basic">
                                <h5 className="transcript-title">Official Transcript</h5>
                                <p className="transcript-school">{edu.school}</p>
                                <p className="transcript-gpa"><strong>GPA:</strong> {edu.gpa}/4.00</p>
                                <div className="transcript-small-details">
                                  <span>หน่วยกิตรวม: 122</span>
                                  <span>ระดับ: ปริญญาตรี</span>
                                </div>
                              </div>
                            </div>

                            <div className="transcript-card-actions">
                              <button
                                className="transcript-btn view"
                                onClick={() => handleTranscriptView('view')}
                                aria-label="เปิดดูผลการศึกษา (ใหม่แท็บ)"
                                type="button"
                              >
                                👁️ ดูผลการศึกษา
                              </button>

                              <button
                                className="transcript-btn download"
                                onClick={() => handleTranscriptView('download')}
                                aria-label="ดาวน์โหลดไฟล์ผลการศึกษา"
                                type="button"
                              >
                                📥 ดาวน์โหลด PDF
                              </button>

                              <a
                                className="transcript-link"
                                href={TRANSCRIPT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ลิงก์ไปยังไฟล์ Transcript ใน Google Drive"
                              >
                                🔗 เปิดลิงก์ไฟล์ต้นฉบับ
                              </a>
                            </div>
                          </div>

                          {/* right: compact breakdown */}
                          <aside className="transcript-stats" aria-label="สรุปผลการเรียน">
                            <h5>📊 สรุปผลการเรียน</h5>
                            <ul className="gpa-list">
                              <li><span className="gpa-label">เกรดเฉลี่ยรวม:</span> <span className="gpa-value highlight">{edu.gpa}</span></li>
                              <li><span className="gpa-label">หน่วยกิตรวม:</span> <span className="gpa-value">122</span></li>
                              <li><span className="gpa-label">วิชาเกรด A:</span> <span className="gpa-value">18</span></li>
                              <li><span className="gpa-label">วิชาเกรด B+:</span> <span className="gpa-value">8</span></li>
                            </ul>
                          </aside>
                        </div>
                      </section>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {selectedTab === 'projects' && (
            <div className="tab-panel">
              <div className="projects-showcase">
                <div className="showcase-intro">
                  <h3>💻 โปรเจกต์และผลงาน</h3>
                  <p>โปรเจกต์ที่ผมได้พัฒนาระหว่างเรียน</p>
                </div>
                
                <div className="projects-grid">
                  {resumeData.projects.map((project) => (
                    <div key={project.id} className="project-showcase-card">
                      <div className="project-header">
                        <h4>{project.name}</h4>
                        <div className="project-meta">
                          <span className="project-category">{project.category}</span>
                          <span className="project-period">{project.period}</span>
                        </div>
                      </div>
                      
                      <div className="project-description">
                        <p><strong>เป้าหมาย:</strong> {project.description}</p>
                        <p>{project.detailDescription}</p>
                      </div>

                      <div className="project-features">
                        <h5>✨ คุณสมบัติหลัก:</h5>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-tech-section">
                        <h5>🛠️ เทคโนโลยีที่ใช้:</h5>
                        <div className="tech-tags">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="project-footer">
                        <div className="project-status">
                          <span className={`status ${project.status === 'เสร็จสมบูรณ์' ? 'completed' : 'in-progress'}`}>
                            {project.status === 'เสร็จสมบูรณ์' ? '✅' : '⏳ กำลังพัฒนา'} {project.status}
                          </span>
                          {project.grade && <span className="project-grade">🏆 {project.grade}</span>}
                        </div>
                        
                        <div className="project-links">
                          {project.github && (
                            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                              📂 Code
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} className="project-link primary" target="_blank" rel="noopener noreferrer">
                              🚀 Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {selectedTab === 'experience' && (
            <div className="tab-panel">
              <div className="experience-intro">
                <h3>🏢 ประสบการณ์การทำงาน</h3>
                <p>แม้จะเป็นนักศึกษา แต่ผมได้สั่งสมประสบการณ์จากการฝึกงาน</p>
              </div>
              
              <div className="timeline">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.position}</h3>
                        <span className="job-type">{exp.type}</span>
                      </div>
                      <div className="timeline-meta">
                        <span className="company">🏢 {exp.company}</span>
                        <span className="location">📍 {exp.location}</span>
                        <span className="period">⏰ {exp.period}</span>
                      </div>
                      
                      <div className="timeline-details">
                        <p className="exp-description">{exp.description}</p>
                        
                        <h4>📋 หน้าที่รับผิดชอบ:</h4>
                        <ul className="responsibilities-list">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>

                        <div className="tech-section">
                          <h4>🔧 เทคโนโลยีที่ใช้:</h4>
                          <div className="tech-tags">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="achievements-section">
                          <h4>🌟 ผลงานที่ได้รับ:</h4>
                          <ul className="achievements-list">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ✅ Skills Tab - ใช้เฉพาะ components ใหม่ */}
          {selectedTab === 'skills' && (
            <div className="tab-panel">
              <div className="skills-container-new">
                <div className="technical-skills-new">
                  <h3>🔧 ทักษะด้านเทคนิค</h3>
                  <p className="skills-note">ประเมินจากประสบการณ์และโปรเจกต์ที่เคยทำจริง</p>
                  
                  <div className="skills-section">
                    <h4>💻 ภาษาโปรแกรม</h4>
                    <div className="modern-skills-grid">
                      {resumeData.skills.programming.map((skill, index) => (
                        <div key={index} className="modern-skill-card">
                          <div className="skill-header">
                            <div className="skill-info">
                              <h5 className="skill-name">{skill.name}</h5>
                            </div>
                            <div className="skill-experience">{skill.experience}</div>
                          </div>
                          <p className="skill-description">{skill.description}</p>
                          <div className="skill-indicator">
                            <div 
                              className="skill-bar-modern"
                              style={{ backgroundColor: skill.color + '20', borderColor: skill.color }}
                            >
                              <div 
                                className="skill-fill" 
                                style={{ backgroundColor: skill.color }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>🌐 เทคโนโลยีเว็บ</h4>
                    <div className="modern-skills-grid">
                      {resumeData.skills.webtech.map((skill, index) => (
                        <div key={index} className="modern-skill-card">
                          <div className="skill-header">
                            <div className="skill-info">
                              <h5 className="skill-name">{skill.name}</h5>
                            </div>
                            <div className="skill-experience">{skill.experience}</div>
                          </div>
                          <p className="skill-description">{skill.description}</p>
                          <div className="skill-indicator">
                            <div 
                              className="skill-bar-modern"
                              style={{ backgroundColor: skill.color + '20', borderColor: skill.color }}
                            >
                              <div 
                                className="skill-fill" 
                                style={{ backgroundColor: skill.color }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>🗄️ ฐานข้อมูล</h4>
                    <div className="modern-skills-grid">
                      {resumeData.skills.database.map((skill, index) => (
                        <div key={index} className="modern-skill-card">
                          <div className="skill-header">
                            <div className="skill-info">
                              <h5 className="skill-name">{skill.name}</h5>
                            </div>
                            <div className="skill-experience">{skill.experience}</div>
                          </div>
                          <p className="skill-description">{skill.description}</p>
                          <div className="skill-indicator">
                            <div 
                              className="skill-bar-modern"
                              style={{ backgroundColor: skill.color + '20', borderColor: skill.color }}
                            >
                              <div 
                                className="skill-fill" 
                                style={{ backgroundColor: skill.color }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>🛠️ เครื่องมือและแพลตฟอร์ม</h4>
                    <div className="tools-grid-new">
                      {resumeData.skills.tools.map((tool, index) => (
                        <div key={index} className="tool-item-new">
                          <div className="tool-content">
                            <div className="tool-header">
                              <span className="tool-name">{tool.name}</span>
                              <span className="tool-experience">{tool.experience}</span>
                            </div>
                            <p className="tool-description">{tool.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>⭐ ทักษะพิเศษ</h4>
                    <div className="modern-skills-grid">
                      {resumeData.skills.specialSkills.map((skill, index) => (
                        <div key={index} className="modern-skill-card">
                          <div className="skill-header">
                            <div className="skill-info">
                              <h5 className="skill-name">{skill.name}</h5>
                            </div>
                            <div className="skill-experience">{skill.experience}</div>
                          </div>
                          <p className="skill-description">{skill.description}</p>
                          <div className="skill-indicator">
                            <div 
                              className="skill-bar-modern"
                              style={{ backgroundColor: skill.color + '20', borderColor: skill.color }}
                            >
                              <div 
                                className="skill-fill" 
                                style={{ backgroundColor: skill.color }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="languages-section">
                  <h3>🌐 ความสามารถด้านภาษา</h3>
                  <div className="languages-grid">
                    {resumeData.languages.map((lang, index) => (
                      <div key={index} className="language-item">
                        <div className="language-header">
                          <span className="language-name">{lang.name}</span>
                          <span className="language-level">{lang.level}</span>
                        </div>
                        <p className="language-description">{lang.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Tab */}
          {selectedTab === 'other' && (
            <div className="tab-panel">
              <div className="other-sections">
                {/* Certifications */}
                {/*<div className="certifications-section">
                  <h3>🏆 ใบรับรองและ Course ที่ผ่าน</h3>
                  <div className="certifications-grid">
                    {resumeData.certifications.map((cert) => (
                      <div key={cert.id} className="certification-card">
                        <div className="cert-header">
                          <h4>{cert.name}</h4>
                          <div className="cert-meta">
                            <span className="cert-type">{cert.type}</span>
                            <span className="cert-date">{cert.date}</span>
                          </div>
                        </div>
                        <div className="cert-details">
                          <p><strong>ผู้ออกใบรับรอง:</strong> {cert.issuer}</p>
                          <p><strong>รหัส:</strong> <code>{cert.credentialId}</code></p>
                          <p className="cert-description">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>*/}

                {/* Interests */}
                <div className="interests-section">
                  <h3>🎨 ความสนใจและงานอดิเรก</h3>
                  <p className="section-description">
                    สิ่งที่ผมชอบทำนอกเวลาเรียน ซึ่งช่วยพัฒนาทักษะและความคิดสร้างสรรค์
                  </p>
                  <div className="interests-grid">
                    {resumeData.interests.map((interest, index) => (
                      <div key={index} className="interest-tag">
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Goals */}
                <div className="goals-section">
                  <h3>🎯 เป้าหมายในอาชีพ</h3>
                  <div className="goals-content">
                    <div className="goal-card">
                      <h4>📍 เป้าหมายระยะสั้น (1-2 ปี)</h4>
                      <ul>
                        <li>เริ่มต้นอาชีพในตำแหน่ง Junior/Mid-level Developer</li>
                        <li>เรียนรู้เทคโนโลยีใหม่และเพิ่มประสบการณ์ในโปรเจกต์จริง</li>
                        <li>พัฒนาทักษะ Soft Skills และการทำงานเป็นทีม</li>
                        <li>ศึกษา Cloud Technologies และ DevOps เพิ่มเติม</li>
                      </ul>
                    </div>
                    
                    <div className="goal-card">
                      <h4>🚀 เป้าหมายระยะยาว (3-5 ปี)</h4>
                      <ul>
                        <li>ก้าวขึ้นเป็น Senior Developer หรือ Tech Lead</li>
                        <li>มีความเชี่ยวชาญในด้าน Full-Stack Development</li>
                        <li>ช่วย Mentor นักพัฒนาจูเนียร์</li>
                        <li>สร้างผลงานที่มีผลกระทบต่อผู้ใช้งานจำนวนมาก</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Why Hire Me */}
                <div className="why-hire-section">
                  <h3>💼 ทำไมควรเลือกผม?</h3>
                  <div className="reasons-grid">
                    <div className="reason-card">
                      <div className="reason-icon">🔥</div>
                      <h4>ความกระตือรือร้น</h4>
                      <p>พร้อมเรียนรู้เทคโนโลยีใหม่และรับผิดชอบงานที่ได้รับมอบหมาย</p>
                    </div>
                    <div className="reason-card">
                      <div className="reason-icon">🧠</div>
                      <h4>ฐานความรู้แข็งแรง</h4>
                      <p>มีพื้นฐานทางวิทยาการคอมพิวเตอร์และประสบการณ์โปรเจกต์จริง</p>
                    </div>
                    {/*<div className="reason-card">
                      <div className="reason-icon">🤝</div>
                      <h4>ทำงานเป็นทีมได้ดี</h4>
                      <p>มีประสบการณ์ทำงานร่วมกับผู้อื่นในโปรเจกต์และการฝึกงาน</p>
                    </div>*/}
                    <div className="reason-card">
                      <div className="reason-icon">📈</div>
                      <h4>พร้อมเติบโต</h4>
                      <p>มองหาองค์กรที่จะให้โอกาสเรียนรู้และพัฒนาไปด้วยกัน</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;