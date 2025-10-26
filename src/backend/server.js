const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] 
    : ['http://localhost:3000'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

app.use(limiter);

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required',
        fields: { name, email, subject, message }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      subject: subject.trim().substring(0, 200),
      message: message.trim().substring(0, 1000)
    };

    // Email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background: white; padding: 10px; border-left: 4px solid #667eea; margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Contact Form Submission</h2>
              <p>You have received a new message through your portfolio website.</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${sanitizedData.name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${sanitizedData.email}</div>
              </div>
              <div class="field">
                <div class="label">📋 Subject:</div>
                <div class="value">${sanitizedData.subject}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent through your portfolio contact form.</p>
              <p>Sent on: ${new Date().toLocaleDateString('th-TH', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      replyTo: sanitizedData.email,
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      html: htmlTemplate,
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Subject: ${sanitizedData.subject}
        
        Message:
        ${sanitizedData.message}
        
        Sent on: ${new Date().toLocaleString('th-TH')}
      `
    };

    const info = await transporter.sendMail(mailOptions);

    // Send auto-reply to sender
    const autoReplyOptions = {
      from: `"John Doe" <${process.env.EMAIL_USER}>`,
      to: sanitizedData.email,
      subject: 'ขอบคุณสำหรับข้อความของคุณ - Thank you for your message',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 8px; text-align: center; }
              .content { padding: 20px 0; }
              .signature { border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🙏 ขอบคุณสำหรับข้อความของคุณ</h2>
                <p>Thank you for your message</p>
              </div>
              <div class="content">
                <p>สวัสดีครับคุณ ${sanitizedData.name},</p>
                <p>ขอบคุณที่ติดต่อมาครับ ผมได้รับข้อความของคุณเรียบร้อยแล้ว และจะตอบกลับภายใน 24 ชั่วโมง</p>
                <p>Hello ${sanitizedData.name},</p>
                <p>Thank you for reaching out! I have received your message and will get back to you within 24 hours.</p>
                
                <div class="signature">
                  <p><strong>John Doe</strong><br>
                  Full Stack Developer & UI/UX Designer<br>
                  📧 john.doe@email.com<br>
                  📱 089-123-4567</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    console.log('Contact form submission:', {
      messageId: info.messageId,
      from: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Portfolio data endpoint
app.get('/api/portfolio', (req, res) => {
  const portfolioData = {
    personal: {
      name: 'John Doe',
      title: 'Full Stack Developer & UI/UX Designer',
      location: 'Bangkok, Thailand',
      email: 'john.doe@email.com',
      phone: '+66 89-123-4567',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    },
    skills: [
      'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 
      'AWS', 'Docker', 'Figma', 'Next.js', 'Express.js'
    ],
    stats: {
      projectsCompleted: 50,
      yearsExperience: 5,
      clientsSatisfied: 30,
      codeCoffee: 1000
    },
    technologies: {
      frontend: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI'],
      database: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
      cloud: ['AWS', 'Vercel', 'Netlify', 'Docker', 'Kubernetes'],
      tools: ['Git', 'Figma', 'Adobe XD', 'Postman', 'VS Code']
    }
  };

  res.json(portfolioData);
});

// Analytics endpoint (basic)
app.post('/api/analytics', (req, res) => {
  const { event, page, timestamp } = req.body;
  
  // In production, you might want to send this to Google Analytics, Mixpanel, etc.
  console.log('Analytics event:', { event, page, timestamp, ip: req.ip });
  
  res.json({ success: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  if (req.url.startsWith('/api/')) {
    res.status(404).json({ error: 'API endpoint not found' });
  } else if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    res.status(404).json({ error: 'Page not found' });
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});