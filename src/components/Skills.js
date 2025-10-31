import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL']
    },
    {
      title: 'Machine Learning & AI',
      skills: ['PyTorch', 'PyTorch Lightning', 'Scikit-Learn', 'Stable Diffusion', 'LoRA Adapters', 'ResNet', 
              'Neural Networks', 'Deep Learning', 'Computer Vision', 'Image Classification', 'Generative AI', 
              'Feature Extraction', 'Model Training', 'Data Preprocessing']
    },
    {
      title: 'Web Development & Frameworks',
      skills: ['ReactJS', 'NextJS', 'NodeJS', 'FastAPI', 'RESTful APIs', 'Microservices', 'Full-Stack Development', 
              'JavaFX', 'TKinter', 'Responsive Design', 'Frontend Development', 'Backend Development']
    },
    {
      title: 'Data Science & Analysis',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'PyTesseract', 'Image Processing', 
              'Data Analysis', 'Statistical Modeling', 'Data Visualization', 'OCR', 'Computer Vision']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD Pipelines', 'ML Pipelines', 
              'Model Deployment', 'Container Orchestration', 'Cloud Computing', 'MLOps']
    },
    {
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'Prisma', 'Git', 'Heroku', 'Vercel', 'Linux', 'Unity', 
              'Jira', 'Agile/Scrum', 'Version Control', 'Project Management']
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