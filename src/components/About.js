import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src="./assets/about-pic2.png" alt="Abdullah Al Maini" className="about-img" />
        </div>
        
        <div className="about-details">
          <div className="about-cards">
            <div className="about-card">
              <h3>Experience</h3>
              <p>Machine Learning Engineer Intern</p>
              <p>3rd Year Computer Science Student</p>
            </div>
            
            <div className="about-card">
              <h3>Education</h3>
              <p>B.Sc. Computer Science, Mathematics, and Statistics</p>
              <p>University of Toronto</p>
            </div>
          </div>
          
          <div className="about-text">
            <p>Hello, I'm Abdullah Al Maini, a third-year Computer Science student currently residing in Mississauga, Ontario. I'm pursuing my Honours Bachelor of Science degree with a specialization in Computer Science, Mathematics, and Statistics at the University of Toronto, with expected graduation in May 2027.</p>
            
            <p>I have a passion for software development, machine learning, and problem-solving, which I've honed through various projects, coursework, and professional experience. Recently, I completed an internship at AIP Labs as a Machine Learning Engineer Intern, where I gained hands-on experience with cutting-edge AI technologies in the field of dermatology.</p>
            
            <p>With a strong foundation in languages like Java, Python, C, C++, C#, HTML, CSS, JavaScript, and TypeScript, coupled with experience in machine learning frameworks, I'm continuously expanding my skill set. My projects range from developing a Receipt OCR application to creating an Academic Planner Full Stack Web Application.</p>
            
            <p>Outside of academia and professional work, I enjoy MMA, video games, and exploring new technologies! Fluent in both English and Arabic, I'm excited about opportunities to connect with diverse communities and contribute meaningfully to the ever-evolving tech landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;