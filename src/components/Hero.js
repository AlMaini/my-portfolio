import React from 'react';
import '../styles/Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="intro-text">Hello, I'm</p>
          <h1 className="name">Abdullah Al Maini</h1>
          <p className="title">Software Developer and Machine Learning Engineer</p>
          
          <div className="cta-buttons">
            <button className="btn primary-btn" onClick={() => window.open('./assets/resume.pdf')}>
              Download Resume
            </button>
            <button className="btn secondary-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Contact Me
            </button>
          </div>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/abdullah-al-maini-680079250/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/AlMaini" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="./assets/profile-pic2.png" alt="Abdullah Al Maini" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;