import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:abdullah.almaini@mail.utoronto.ca">abdullah.almaini@mail.utoronto.ca</a>
        </div>
        
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/abdullah-al-maini-680079250/" target="_blank" rel="noopener noreferrer">abdullah-al-maini</a>
        </div>
        
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:+14375189080">+1 437-518-9080</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;