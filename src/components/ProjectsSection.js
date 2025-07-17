import React, { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Personal Resume Website",
      description: "Built and deployed a React.js portfolio with custom CSS, EmailJS-powered contact form, modular components, and smooth scrolling. Hosted on a .info domain via Vercel with GitHub.",
      category: "Web Development",
      technologies: ["React", "CSS", "EmailJS", "Vercel", ".info Domain"],
      gradient: "linear-gradient(135deg, #f59e0b, #dc2626)",
      icon: "bi-shop"
    },
    {
      title: "Chat with YouTube",
      description: "Developed an AI-powered Streamlit application to analyze YouTube videos using Gemini LLM.",
      category: "AI/ML",
      technologies: ["Python", "Streamlit", "Gemini LLM", "NLP", "AI"],
      gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      icon: "bi-robot"
    },
    {
      title: "Contact Manager",
      description: "Built a Contact Manager web app using React, implemented responsive UI.",
      category: "Web Development",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
      icon: "bi-person-lines-fill"
    }
  ];

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="display-4 fw-bold mb-3">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="lead text-muted">Showcasing my technical skills through innovative projects and applications</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`custom-card h-100 d-flex flex-column ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="position-relative rounded-top mb-3" style={{ height: '160px', background: project.gradient }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                  <div className="position-absolute top-0 start-0 p-3">
                    <span className="badge bg-light bg-opacity-25 text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 end-0 p-3">
                    <i className={`${project.icon} fs-2 text-white opacity-75`}></i>
                  </div>
                </div>

                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold text-white mb-3">{project.title}</h5>
                  <p className="text-muted small mb-3 flex-grow-1">{project.description}</p>

                  <div className="mb-3">
                    <h6 className="fw-semibold text-white mb-2 small">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50 small">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;