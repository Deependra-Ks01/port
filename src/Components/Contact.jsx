// src/components/Contact.jsx

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line!</p>
        
        <div className="contact-info">
          <a href="mailto:your.email@example.com" className="contact-link">
            your.email@example.com
          </a>
          <p>
            **Connect with me:**
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;