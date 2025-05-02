import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'C++', 'C#', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['ReactJS', 'NextJS', 'NodeJS', 'PyTorch', 'PyTorch Lightning', 'Scikit-Learn', 
              'OpenCV', 'PyTesseract', 'NumPy', 'Pandas', 'Matplotlib', 'JavaFX', 'TKinter']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'PostgreSQL', 'Prisma', 'REST API', 'Heroku', 'Linux', 'OpenAI API', 'Unity']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Technical Skills</h2>
      </div>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;