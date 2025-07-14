import React, { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Elite Web Technologies",
      period: "Summer 2023",
      type: "Internship",
      description: "Worked at Elite Web Technologies, where I contributed to front-end development by identifying and resolving technical and visual bugs in their web platform.",
      highlights: ["Front-end development and debugging","Technical problem solving","Visual bug resolution","Web platform optimization"],
      technologies: ["HTML","CSS","JavaScript","React"],
      icon: "bi-briefcase"
    },
    {
      title: "Research Paper",
      company: "Academic Research",
      period: "2023",
      type: "Research",
      description: "Applied simulation tools (COMSOL, AutoDock) in interdisciplinary chemistry research.",
      highlights: ["Interdisciplinary chemistry research","Simulation tools expertise","Academic publication","Research methodology"],
      technologies: ["COMSOL","AutoDock","Research Methods"],
      icon: "bi-journal-text"
    },
    {
      title: "RC Gripper Bot for IIT Delhi Techfest",
      company: "Team Leader",
      period: "2023",
      type: "Competition",
      description: "As the team leader, I led end-to-end development of a robot using C/C++, Arduino/Raspberry Pi, and AutoCAD, applying core robotics skills in design, assembly, and programming.",
      highlights: ["Team leadership","Robot design and development","Hardware-software integration","Competition participation"],
      technologies: ["C/C++","Arduino","Raspberry Pi","AutoCAD"],
      icon: "bi-cpu"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark bg-opacity-25" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Experience</span></h2>
          <p className="lead text-muted">Professional experiences and key contributions in development and research</p>
        </div>
        <div className="row">
          {experiences.map((exp,i) => (
            <div key={i} className="col-12 mb-4">
              <div className={`custom-card p-4 h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{animationDelay:`${i*0.2}s`}}>
                <div className="row">
                  <div className="col-auto text-center">
                    <div className="icon-container mb-3"><i className={`${exp.icon} fs-3 text-primary`}></i></div>
                    <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{exp.type}</span>
                  </div>
                  <div className="col">
                    <h4 className="fw-bold text-white mb-2">{exp.title}</h4>
                    <div className="d-flex flex-wrap align-items-center text-muted mb-3">
                      <div className="d-flex align-items-center me-4"><i className="bi bi-building me-2"></i>{exp.company}</div>
                      <div className="d-flex align-items-center"><i className="bi bi-calendar me-2"></i>{exp.period}</div>
                    </div>
                    <p className="text-muted mb-3">{exp.description}</p>
                    <div className="mb-3">
                      <h6 className="fw-semibold text-white mb-2">Key Highlights:</h6>
                      <div className="row">
                        {exp.highlights.map((h,idx) => (
                          <div key={idx} className="col-md-6 mb-1">
                            <div className="d-flex align-items-center text-muted">
                              <div className="bg-primary rounded-circle me-2" style={{width:'8px',height:'8px'}}></div>
                              <span className="small">{h}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-semibold text-white mb-2">Technologies Used:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.technologies.map((t,idx) => (
                          <span key={idx} className="skill-badge badge rounded-pill px-3 py-2">{t}</span>
                        ))}
                      </div>
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

export default ExperienceSection;
