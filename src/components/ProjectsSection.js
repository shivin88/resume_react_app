import React, { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      title: "Food Ordering Website",
      description: "Front end project with HTML and CSS for seeing food items for a restaurant.",
      category: "Web Development",
      technologies: ["HTML","CSS","JavaScript"],
      features: ["Responsive restaurant interface","Food menu display","Interactive user experience","Modern web design"],
      gradient: "linear-gradient(135deg, #f59e0b, #dc2626)",
      icon: "bi-shop"
    },
    {
      title: "Chat with YouTube",
      description: "Developed an AI-powered Streamlit application to analyze YouTube videos using Gemini LLM, transcripts, and key frames. Implemented semantic search with sentence embeddings, enabling real-time Q&A and video summarization.",
      category: "AI/ML",
      technologies: ["Python","Streamlit","Gemini LLM","NLP","AI"],
      features: ["YouTube video analysis","Semantic search implementation","Real-time Q&A system","Video summarization","Sentence embeddings"],
      gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      icon: "bi-robot"
    },
    {
      title: "Contact Manager",
      description: "Built a Contact Manager web app using React, implemented responsive UI with dynamic state management and local storage for data persistence. Modular code structure enhanced maintainability and scalability.",
      category: "Web Development",
      technologies: ["React","JavaScript","CSS","Local Storage"],
      features: ["Dynamic state management","Local storage integration","Responsive design","Modular architecture","Contact CRUD operations"],
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
      icon: "bi-person-lines-fill"
    }
  ];

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Projects</span></h2>
          <p className="lead text-muted">Showcasing my technical skills through innovative projects and applications</p>
        </div>
        <div className="row">
          {projects.map((p,i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4">
              <div className={`custom-card h-100 d-flex flex-column ${isVisible ? 'fade-in-up' : ''}`} style={{animationDelay:`${i*0.2}s`}}>
                <div className="position-relative rounded-top mb-3" style={{height:'160px',background:p.gradient}}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                  <div className="position-absolute top-0 start-0 p-3"><span className="badge bg-light bg-opacity-25 text-white">{p.category}</span></div>
                  <div className="position-absolute bottom-0 end-0 p-3"><i className={`${p.icon} fs-2 text-white opacity-75`}></i></div>
                </div>
                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold text-white mb-3">{p.title}</h5>
                  <p className="text-muted small mb-3 flex-grow-1">{p.description}</p>
                  <div className="mb-3">
                    <h6 className="fw-semibold text-white mb-2 small">Key Features:</h6>
                    <ul className="list-unstyled mb-0">
                      {p.features.slice(0,3).map((f, idx) => (
                        <li key={idx} className="d-flex align-items-center text-muted small mb-1">
                          <div className="bg-primary rounded-circle me-2" style={{width:'6px',height:'6px'}}></div>{f}
                        </li>
                      ))}
                      {p.features.length>3 && <li className="text-muted small">+{p.features.length-3} more features</li>}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-semibold text-white mb-2 small">Technologies:</h6>
                    <div className="d-flex flex-wrap g-1">
                      {p.technologies.map((t,idx) => (
                        <span key={idx} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50 small">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-auto pt-3 border-top border-secondary border-opacity-25">
                    <button className="btn btn-primary btn-sm flex-fill"><i className="bi bi-play me-1"></i>Demo</button>
                    <button className="btn btn-outline-primary btn-sm flex-fill"><i className="bi bi-github me-1"></i>Code</button>
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
