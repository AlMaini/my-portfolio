import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern — Alpha Data Team",
      company: "Squarepoint Capital",
      period: "May 2026 - August 2026",
      logo: "./assets/squarepoint-capital-logo.svg",
      responsibilities: [
        "Designed and shipped a data observability platform end-to-end (backend + frontend) that grades production data sources on freshness, failure rate, and read/write usage, adopted by data engineering teams globally.",
        "Engineered 20+ ETL/ELT pipelines in fully-typed Python ingesting large-scale financial datasets from SFTP, HTTP, and IMAP sources into PostgreSQL and Apache Arrow/Parquet stores used by quant researchers and traders worldwide.",
        "Deployed containerized pipeline jobs on a distributed scheduler (Nomad/Consul) with Docker and GitLab CI/CD on Linux, and provided on-call support for the scraper fleet.",
      ],
    },
    {
      title: "Software Engineer Intern — MLOps",
      company: "ModiFace (L'Oréal)",
      period: "May 2025 - August 2025",
      logo: "./assets/loreal-logo.svg",
      responsibilities: [
        "Reduced per-image inference latency by ~40% in a production Stable Diffusion hair virtual try-on pipeline by applying LoRA fine-tuning, quantization, request batching, and a preprocessing redesign, balancing quality, speed, and cost.",
        "Built scalable backend microservices in Python/FastAPI handling concurrent inference requests, with real-time progress tracking via Server-Sent Events.",
        "Developed the image preprocessing pipeline, including resizing, face swapping, background/foreground segmentation, and hair mask generation, contributing 2,500+ lines of peer-reviewed production code.",
        "Containerized generative AI services with Docker and deployed them to GCP through automated CI/CD, ensuring reliable model serving for user-facing beauty features.",
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "AIP Labs",
      period: "June 2024 - September 2024",
      logo: "./assets/aip-labs-logo.svg",
      responsibilities: [
        "Built an end-to-end PyTorch classification pipeline over 200,000+ medical images, achieving 98%+ precision and recall on a 3-way classifier (macroscopic, dermoscopic, and non-skin images) with ResNet-based models.",
        "Improved training-set quality by implementing embedding-based data curation using cosine similarity over deep features, raising model precision and recall 1.5x over baseline.",
        "Used PyTorch Lightning and Scikit-Learn for model development, with Pandas, NumPy, and Matplotlib for data analysis and visualization.",
      ],
      recommendation: "./assets/abdullah_general_reference_letter_jk.pdf",
    },
    {
      title: "Machine Learning Researcher",
      company: "Algoverse AI Research Program",
      period: "2025 - 2026",
      responsibilities: [
        "Fine-tuned the Moondream2 vision-language model on the FloodNet VQA benchmark via a two-stage pipeline: supervised fine-tuning to instill structured Planning → Grounding → Synthesis reasoning, then GRPO reinforcement learning with custom VQA and counting rewards.",
        "Ran LoRA fine-tuning on GH200/H100 GPUs, debugged CUDA OOM, KV-cache, and mixed-precision issues, and benchmarked inference across L4 and RTX 3090 hardware.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-subtitle">My Professional Journey</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-info">
                <h3 className="job-title">{experience.title}</h3>
                <h4 className="company">{experience.company}</h4>
                <p className="period">{experience.period}</p>
              </div>
              {experience.logo && (
                <img
                  src={experience.logo}
                  alt={`${experience.company} Logo`}
                  className="company-logo"
                />
              )}
            </div>

            <div className="experience-body">
              <ul className="responsibilities">
                {experience.responsibilities.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>

              {experience.recommendation && (
                <div className="recommendation">
                  <a
                    href={experience.recommendation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary-btn"
                  >
                    Letter of Recommendation
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
