import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-subtitle">My Professional Journey</p>
        <h2 className="section-title">Experience</h2>
      </div>
      
      <div className="experience-container">
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="job-title">Machine Learning Engineer Intern</h3>
            <h4 className="company">AIP Labs</h4>
            <p className="period">June 2024 - September 2024</p>
          </div>
          
          <div className="experience-body">
            <ul className="responsibilities">
              <li>End-to-end ML Pipeline: Curated and analyzed over 200,000 medical images, trained deep neural networks, evaluated model performance, and refined the training pipeline (achieving a 1.5x improvement in precision and recall metrics across classes).</li>
              <li>Dataset Analysis: Conducted image similarity and retrieval tasks (cosine image similarity, feature extractor) on large datasets to identify and resolve issues, ensuring accurate image curation.</li>
              <li>Image Classification: Developed and trained advanced image classifiers using state-of-the-art models like ResNet, achieving over 98% precision and recall in a 3-way classifier for macroscopic, dermoscopic, and non-skin images.</li>
              <li>Technical Expertise: Hands-on experience with PyTorch, PyTorch Lightning, & Scikit-Learn for model development; conducted data analysis using Pandas & NumPy and visualized results with Matplotlib.</li>
            </ul>
            
            <div className="recommendation">
              <a href="./assets/abdullah_general_reference_letter_jk.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                Letter of Recommendation
              </a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3 className="job-title">Software Engineering Intern</h3>
            <h4 className="company">L'Oréal</h4>
            <p className="period">May 2025 - Present</p>
          </div>
          
          <div className="experience-body">
            <ul className="responsibilities">
              <li>Model Deployment: Developed and deployed machine learning models for real-time image processing, enhancing user experience in beauty applications.</li>
              <li>Pipeline Development: Built robust MLOps pipelines for automated model training, validation, and deployment, improving development efficiency by 40%.</li>
              <li>Diffusion Models: Implemented a complete end-to-end ML pipeline utilizing state-of-the-art diffusion models for advanced image generation and manipulation tasks.</li>
              <li>Cloud Infrastructure: Leveraged Docker, Kubernetes, and cloud platforms (AWS, GCP) for scalable model deployment and management in production environments.</li>
              <li>Collaboration: Worked closely with cross-functional teams including product managers, UX designers, and backend engineers to integrate ML solutions seamlessly into production systems.</li>        
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;