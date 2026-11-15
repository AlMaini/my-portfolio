import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Clair — Multi-Agent AI Note-Taking App',
      period: 'February 2026',
      description: 'A note-taking progressive web app with three cooperating AI agents (Organizer, Researcher, and Search) running on a FastAPI backend with pgvector embedding search, so notes are organized automatically and searchable by meaning. Built and pitched at a hackathon.',
      technologies: ['React PWA', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'AI Agents'],
      links: {
        github: 'https://github.com/AlMaini/clair'
      }
    },
    {
      title: 'Card Game Engine',
      period: 'June 2026',
      description: 'A 2D card game engine built from scratch in C++, featuring a custom GLSL outline shader and a centralized resource manager that eliminates redundant GPU texture loads.',
      technologies: ['C++', 'raylib', 'GLSL', 'Game Development'],
      links: {
        github: 'https://github.com/AlMaini/apex-game'
      }
    },
    {
      title: 'AI Scheduling Assistant',
      period: 'January 2025 - April 2025',
      description: 'Led a team of 7 building an LLM-powered academic scheduling app. Owned the system design across a Next.js frontend, Node.js services, PostgreSQL persistence, and Redis caching, and ran agile sprints with Jira.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Claude API', 'Docker'],
      links: {
        github: 'https://github.com/namethatidesire/abacus'
      }
    },
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
        demo: 'https://chop-chop-tan.vercel.app',
        github: 'https://github.com/AlMaini/chop-chop'
      }
    },
    {
      title: 'Receipt OCR Application',
      period: 'August 2024',
      description: 'Automated text extraction from over 1,000 images with 90% accuracy using OpenCV and PyTesseract. Integrated LLMs for error correction and implemented regex for data extraction, leading to a 30% increase in text detection accuracy.',
      technologies: ['Python', 'OpenCV', 'PyTesseract', 'Machine Learning', 'Regular Expressions'],
      links: {
        demo: 'https://github.com/AlMaini/receipt-ocr-llm-project',
        github: 'https://github.com/AlMaini/receipt-ocr-llm-project'
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
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
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