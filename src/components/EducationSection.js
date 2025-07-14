import React, { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const education = [
    { degree: "B.Tech Computer Science Engg.", year: "2023-2027", institute: "Punjab Engineering College, Chandigarh", score: "7.73/10", type: "CGPA", icon: "bi-mortarboard" },
    { degree: "12th (CBSE)", year: "2023", institute: "Gurukul Global School, Chandigarh", score: "90%", type: "Percentage", icon: "bi-award" },
    { degree: "10th (CBSE)", year: "2021", institute: "Gurukul Global School, Chandigarh", score: "96%", type: "Percentage", icon: "bi-award" }
  ];

  return (
    <section id="education" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Education</span></h2>
          <p className="lead text-muted">My academic journey in computer science and technology</p>
        </div>
        <div className="row">
          {education.map((edu,i) => (
            <div key={i} className="col-12 mb-4">
              <div className={`custom-card p-4 h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{animationDelay:`${i*0.2}s`}}>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="icon-container"><i className={`${edu.icon} fs-3 text-primary`}></i></div>
                  </div>
                  <div className="col">
                    <h4 className="fw-bold text-white mb-2">{edu.degree}</h4>
                    <div className="d-flex align-items-center text-muted mb-2"><i className="bi bi-geo-alt me-2"></i>{edu.institute}</div>
                    <div className="d-flex align-items-center text-muted"><i className="bi bi-calendar me-2"></i>{edu.year}</div>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-pill px-4 py-3 d-inline-block">
                      <div className="h4 fw-bold text-primary mb-0">{edu.score}</div>
                      <small className="text-muted">{edu.type}</small>
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

export default EducationSection;
