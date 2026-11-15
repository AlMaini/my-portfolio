import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="./assets/about-pic2.png"
            alt="Abdullah Al Maini"
            className="about-img"
          />
        </div>

        <div className="about-details">
          <div className="about-cards">
            <div className="about-card">
              <h3>Experience</h3>
              <p>Software Engineer Intern at Squarepoint Capital</p>
              <p>Software Engineer Intern at ModiFace (L'Oréal)</p>
              <p>Machine Learning Engineer Intern at AIP Labs</p>
              <p>Machine Learning Researcher at Algoverse</p>
            </div>

            <div className="about-card">
              <h3>Education</h3>
              <p>Honours B.Sc. Computer Science, Mathematics, and Statistics (PEY Co-op)</p>
              <p>University of Toronto</p>
              <p>Expected December 2027</p>
            </div>
          </div>

          <div className="about-text">
            <p>
              Hello, I'm Abdullah Al Maini, a Computer Science student based in
              Toronto, Ontario. I'm pursuing an Honours Bachelor of Science in
              Computer Science, Mathematics, and Statistics at the University of
              Toronto through the PEY Co-op program, with expected graduation in
              December 2027.
            </p>

            <p>
              I'm passionate about software engineering, machine learning,
              quantitative finance, and problem-solving. Most recently, I was a
              Software Engineer Intern on the Alpha Data team at Squarepoint
              Capital, where I built data pipelines and a data observability
              platform used by quant researchers and traders worldwide. Before
              that, I was an MLOps Software Engineer Intern at ModiFace
              (L'Oréal), where I cut inference latency in a production Stable
              Diffusion virtual try-on pipeline by ~40%, and a Machine Learning
              Engineer Intern at AIP Labs, where I built medical image
              classifiers. I've also done research through Algoverse, fine-tuning
              vision-language models with reinforcement learning.
            </p>

            <p>
              I work mostly in Python, C++, C, Java, TypeScript/JavaScript, and
              SQL. My experience spans large-scale ETL pipelines and backend
              services, model fine-tuning and inference optimization, and
              full-stack web applications, all the way through to containerized
              deployment and CI/CD.
            </p>

            <p>
              Outside of academia and professional work, I enjoy MMA, video
              games, and exploring new technologies! Fluent in both English and
              Arabic, I'm excited about opportunities to connect with diverse
              communities and contribute meaningfully to the ever-evolving tech
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
