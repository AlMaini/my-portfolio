import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'C++ Neural Network',
      period: 'May 2025',
      description: 'A C++ implementation of a neural network with backpropagation, designed to classify clothing items from the FashionMNIST dataset. The project includes no third-party libraries, showcasing my understanding of neural networks and C++ programming.',
      technologies: ['C++', 'Neural Networks', 'Machine Learning'],
      links: {
        demo: 'https://github.com/AlMaini/cpp-neural-network/',
        github: 'https://github.com/AlMaini/cpp-neural-network/'
      }
    },
    {
      title: 'Chop Chop',
      period: 'March 2025 - Present',
      description: 'A meal-planning app built for lazy people to explore new foods easily, built using NextJS and deployed on Vercel (WIP)',
      technologies: ['ReactJS', 'NextJS', 'NodeJS', 'PostgreSQL', 'Prisma'],
      links: {
        demo: 'https://github.com/AlMaini/chop-chop',
        github: 'https://github.com/AlMaini/chop-chop'
      }
    },
    {
      title: 'Academic Planner Full Stack Web Application',
      period: 'January 2025 - April 2025',
      description: 'Managed and collaborated with a team of 7 using Jira for agile project management, building an intuitive and aesthetic frontend using ReactJS and NextJS. Designed and implemented scalable microservices architecture for academic planning features.',
      technologies: ['ReactJS', 'NextJS', 'NodeJS', 'Docker', 'PostgreSQL', 'Prisma'],
      links: {
        demo: 'https://github.com/namethatidesire/abacus',
        github: 'https://github.com/namethatidesire/abacus'
      }
    },
    {
      title: 'Receipt OCR Application',
      period: 'August 2024',
      description: 'Automated text extraction from over 1,000 images with 90% accuracy using OpenCV and PyTesseract. Integrated LLMs for error correction and implemented regex for data extraction, leading to a 30% increase in text detection accuracy.',
      technologies: ['Python', 'OpenCV', 'PyTesseract', 'Machine Learning', 'Regular Expressions'],
      links: {
        demo: 'https://github.com/AlMaini/split-the-bill-project',
        github: 'https://github.com/AlMaini/split-the-bill-project'
      }
    },
    {
      title: 'Accessible Adventure Game',
      period: 'September 2023 - December 2023',
      description: 'Developed an accessible-oriented adventure game in Java, focusing on inclusive design principles. Participated in 6 Scrum sprints, enhancing skills in project management, teamwork, and iterative development.',
      technologies: ['Java', 'JavaFX', 'Accessibility', 'Game Development', 'Git Version Control'],
      links: {
        demo: 'https://github.com/AlMaini/accessible-adventure-game',
        github: 'https://github.com/AlMaini/accessible-adventure-game'
      }
    },
    {
      title: 'Personal Portfolio Website',
      period: '',
      description: 'Designed and developed this responsive portfolio website to showcase my projects and skills, utilizing modern web technologies and best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      links: {
        demo: 'https://github.com/AlMaini/html-css-js-portfolio-website',
        github: 'https://github.com/AlMaini/html-css-js-portfolio-website'
      }
    },
    {
      title: 'Timezone Discord Bot',
      period: '',
      description: 'Developed a Discord bot that displays current time in different time zones by updating voice channel names periodically. Users can easily check various time zones by joining specific channels.',
      technologies: ['Python', 'Discord API', 'pytz', 'Heroku'],
      links: {
        demo: 'https://github.com/AlMaini/timezone-discord-bot',
        github: 'https://github.com/AlMaini/timezone-discord-bot'
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-subtitle">Explore My Work</p>
        <h2 className="section-title">Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            {project.period && <p className="project-period">{project.period}</p>}
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                <FaExternalLinkAlt /> Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;