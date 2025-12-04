import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-subtitle">My Professional Journey</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-container">
        {/* <div className="experience-item">
          <div className="experience-header">
            <div className="experience-info">
              <h3 className="job-title">Quantitative Developer Intern</h3>
              <h4 className="company">Squarepoint Capital</h4>
              <p className="period">May 2026 - August 2026</p>
            </div>
            <img src="./assets/squarepoint-capital-logo.svg" alt="Squarepoint Capital Logo" className="company-logo" />
          </div>

          <div className="experience-body">
            <ul className="responsibilities">
             <li> Coming soon</li>
            </ul>
          </div>
        </div> */}

        <div className="experience-item">
          <div className="experience-header">
            <div className="experience-info">
              <h3 className="job-title">Software Engineering Intern</h3>
              <h4 className="company">L'Oréal</h4>
              <p className="period">May 2025 - May 2026</p>
            </div>
            <img
              src="./assets/loreal-logo.svg"
              alt="L'Oréal Logo"
              className="company-logo"
            />
          </div>

          <div className="experience-body">
            <ul className="responsibilities">
              <li>
                Engineered production-scale generative AI hair virtual try-on
                system using Stable Diffusion models with LoRA adapters for hair
                style customization and inpainting techniques, serving beauty
                recommendation features to millions of users across L'Oréal's
                digital ecosystem.
              </li>
              <li>
                Architected distributed ML inference pipelines with
                microservices architecture, reducing model serving latency by
                40% through optimized preprocessing, batching, and caching
                strategies.
              </li>
              <li>
                Designed and implemented RESTful API services for generative AI
                models, building scalable backend infrastructure with FastAPI to
                handle concurrent inference requests and integrate ML
                capabilities across L'Oréal's product ecosystem.
              </li>
              <li>
                Developed critical data preprocessing pipeline including image
                resizing, face swapping, background/foreground segmentation, and
                hair mask generation, contributing 2,500+ lines of peer-reviewed
                code (10% of codebase).
              </li>
              <li>
                Built and deployed containerized ML services using Docker and
                GCP with automated CI/CD pipelines, ensuring reliable model
                serving at scale.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div className="experience-info">
              <h3 className="job-title">Machine Learning Engineer Intern</h3>
              <h4 className="company">AIP Labs</h4>
              <p className="period">June 2024 - September 2024</p>
            </div>
            <img
              src="./assets/aip-labs-logo.svg"
              alt="AIP Labs Logo"
              className="company-logo"
            />
          </div>

          <div className="experience-body">
            <ul className="responsibilities">
              <li>
                End-to-end ML Pipeline: Curated and analyzed over 200,000
                medical images, trained deep neural networks, evaluated model
                performance, and refined the training pipeline (achieving a 1.5x
                improvement in precision and recall metrics across classes).
              </li>
              <li>
                Dataset Analysis: Conducted image similarity and retrieval tasks
                (cosine image similarity, feature extractor) on large datasets
                to identify and resolve issues, ensuring accurate image
                curation.
              </li>
              <li>
                Image Classification: Developed and trained advanced image
                classifiers using state-of-the-art models like ResNet, achieving
                over 98% precision and recall in a 3-way classifier for
                macroscopic, dermoscopic, and non-skin images.
              </li>
              <li>
                Technical Expertise: Hands-on experience with PyTorch, PyTorch
                Lightning, & Scikit-Learn for model development; conducted data
                analysis using Pandas & NumPy and visualized results with
                Matplotlib.
              </li>
            </ul>

            <div className="recommendation">
              <a
                href="./assets/abdullah_general_reference_letter_jk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary-btn"
              >
                Letter of Recommendation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
