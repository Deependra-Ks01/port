// src/App.jsx

import React, { useEffect } from 'react';
// Import all components
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import './App.css';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* 1. Header is the fixed navigation bar */}
      <Header />
      
      <main>
        {/* 2. Main content sections */}
        <About />
        <Projects />
        <Contact />
      </main>

      {/* 3. Optional Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Deependra Kumar Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;