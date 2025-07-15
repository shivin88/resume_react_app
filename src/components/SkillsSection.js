import React, { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const skillCategories = [
    { title: "Technical Skills", icon: "bi-code-square", skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "React", "SQL"] },
    { title: "AI & Data", icon: "bi-brain", skills: ["Streamlit", "Vertex AI", "Gemini (Generative AI)", "Excel", "Data Structures & Algorithms"] },
    { title: "Development Tools", icon: "bi-tools", skills: ["Object-Oriented Programming (OOP)", "Machine Learning", "Neural Networks", "Application Development"] },
    { title: "Soft Skills", icon: "bi-people", skills: ["English", "Hindi", "Punjabi", "Problem Solving", "Adaptability", "Quick Learner", "Team Collaboration"] }
  ];

  return (
    <section id="skills" className="section-padding bg-dark bg-opacity-25" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Skills</span></h2>
          <p className="lead text-muted">Technical expertise and soft skills that drive my development journey</p>
        </div>

        <div className="row">
          {skillCategories.map((cat, i) => (
            <div key={i} className="col-lg-6 mb-4">
              <div className={`custom-card p-4 h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-container me-3" style={{ width: '56px', height: '56px' }}>
                    <i className={`${cat.icon} fs-4 text-primary`}></i>
                  </div>
                  <h4 className="fw-bold text-white mb-0">{cat.title}</h4>
                </div>
                <div className="d-flex flex-wrap g-2">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className={`skill-badge badge rounded-pill px-3 py-2 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${(i * 0.2) + (idx * 0.1)}s` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
