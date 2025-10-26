import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: '📧',
      label: 'อีเมล',
      value: 'chaiyapop02@email.com',
      link: 'mailto:chaiyapop02@email.com'
    },
    {
      icon: '📱',
      label: 'โทรศัพท์',
      value: '095-524-0795',
      link: 'tel:+66955240795'
    },
    {
      icon: '📍',
      label: 'ที่อยู่',
      value: 'นนทบุรี, ประเทศไทย',
      link: 'https://www.google.com/maps/place/Bang+Bua+Thong+District,+Nonthaburi/@13.9318873,100.3494609,13z/data=!3m1!4b1!4m6!3m5!1s0x30e28efc6f16b559:0x3019237450c5140!8m2!3d13.9354695!4d100.383479!16zL20vMDNoeW5r?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    /*{
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      link: 'https://linkedin.com/in/johndoe'
    },*/
    {
      icon: '⚡',
      label: 'GitHub',
      value: 'github.com/Chaiyapop4092',
      link: 'https://github.com/Chaiyapop4092'
    }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      // Here you would typically send to your Node.js backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`section ${isVisible ? 'scroll-animation show' : 'scroll-animation'}`}
    >
      <h2 className="section-title">ติดต่อสอบถาม</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>ข้อมูลการติดต่อ</h3>
          {contactInfo.map((info, index) => (
            <a 
              key={index}
              href={info.link}
              className="contact-item"
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <span className="contact-icon">{info.icon}</span>
              <div>
                <div className="contact-label">{info.label}</div>
                <div className="contact-value">{info.value}</div>
              </div>
            </a>
          ))}
          <div className="contact-cta">
            <h4>พร้อมสำหรับโอกาสใหม่</h4>
            <p>
              ผมพร้อมที่จะรับฟังโอกาสในการทำงานใหม่ๆ 
              ไม่ว่าจะเป็นงาน Full-time, Part-time หรือ Freelance
            </p>
            <div className="availability-status">
              <span className="status-indicator available"></span>
              <span>พร้อมรับงานใหม่</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>ส่งข้อความหาผม</h3>
          
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              ✅ ขอบคุณที่ให้ความสนใจครับ! ผมจะติดต่อกลับภายใน 24 ชั่วโมง
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert alert-error">
              ❌ เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">ชื่อ - นามสกุล *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="กรุณากรอกชื่อของคุณ"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">อีเมล *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="example@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">หัวข้อ *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">เลือกหัวข้อที่ต้องการติดต่อ</option>
              <option value="job-inquiry">สอบถามเรื่องงาน</option>
              <option value="freelance">งาน Freelance</option>
              <option value="collaboration">ความร่วมมือ</option>
              <option value="consultation">ปรึกษาโปรเจกต์</option>
              <option value="other">อื่นๆ</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">ข้อความ *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control textarea"
              placeholder="รายละเอียดที่ต้องการสอบถาม หรือข้อมูลโปรเจกต์ที่ต้องการความช่วยเหลือ..."
              rows="5"
              required
            />
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                กำลังส่ง...
              </>
            ) : (
              'ส่งข้อความ'
            )}
          </button>

          <p className="form-note">
            * ข้อมูลที่จำเป็นต้องกรอก - ผมจะตอบกลับภายใน 24 ชั่วโมง
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;