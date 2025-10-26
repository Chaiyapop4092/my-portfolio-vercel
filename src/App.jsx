import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2025 ไชยภพ รอดฮวบ - Portfolio.</p>
        <p>พัฒนาด้วย ❤️ React และ Node.js</p>
      </footer>
    </div>
  );
}

export default App;