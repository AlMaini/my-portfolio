import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'GLSL', 'HTML', 'CSS']
    },
    {
      title: 'Machine Learning & AI',
      skills: ['PyTorch', 'PyTorch Lightning', 'Scikit-Learn', 'Stable Diffusion', 'LoRA Fine-Tuning', 'GRPO',
              'Quantization', 'Vision-Language Models', 'RAG', 'Embeddings', 'ResNet', 'Computer Vision',
              'Generative AI', 'Inference Optimization']
    },
    {
      title: 'Data Engineering',
      skills: ['ETL/ELT Pipelines', 'PostgreSQL', 'pgvector', 'Redis', 'Apache Arrow', 'Parquet',
              'Data Observability', 'NumPy', 'Pandas', 'Matplotlib', 'OpenCV']
    },
    {
      title: 'Backend & Web Development',
      skills: ['FastAPI', 'REST APIs', 'Server-Sent Events', 'Microservices', 'Node.js', 'React', 'Next.js',
              'Progressive Web Apps', 'Prisma']
    },
    {
      title: 'Infrastructure & DevOps',
      skills: ['Docker', 'Nomad', 'Consul', 'GitLab CI/CD', 'GCP (Cloud Run, GCS, BigQuery)', 'Linux', 'Git',
              'MLOps', 'Model Deployment']
    },
    {
      title: 'Graphics & Tools',
      skills: ['raylib', 'Shaders', 'Game Engine Development', 'Jira', 'Agile/Scrum', 'Vercel']
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