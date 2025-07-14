import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <div className="bg-decoration position-absolute" style={{top:'25%',left:'25%',width:'400px',height:'400px'}}></div>
      <div className="bg-decoration position-absolute float-animation" style={{bottom:'25%', right:'25%', width:'320px', height:'320px', animationDelay:'2s'}}></div>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="mb-4">
              <h1 className="display-1 fw-bold mb-3">
                <span className="gradient-text">Shivin</span><br/>
                <span className="text-white">Goyal</span>
              </h1>
              <h3 className="text-primary mb-3">Aspiring Computer Science Student</h3>
              <p className="lead text-muted">
                Passionate about Software Development, Data Analysis, AI, and Emerging Technologies
              </p>
            </div>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone text-primary me-3"></i>
                <span className="text-muted">9888485042</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope text-primary me-3"></i>
                <span className="text-muted">shivingoyal.bt23cse@pec.edu.in</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-geo-alt text-primary me-3"></i>
                <span className="text-muted">Chandigarh, India</span>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button className="btn btn-glow text-white px-4 py-2">
                <i className="bi bi-download me-2"></i> Download Resume
              </button>
              <button className="btn btn-outline-primary px-4 py-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </button>
            </div>
            <div className="d-flex gap-3">
              <a href="https://github.com" className="btn btn-outline-primary rounded-circle p-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" className="btn btn-outline-primary rounded-circle p-3">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-6 text-center ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="position-relative mx-auto" style={{width:'350px',height:'350px'}}>
              <div className="custom-card p-5 h-100 d-flex align-items-center justify-content-center">
                <div className="rounded-circle bg-primary bg-opacity-25 d-flex align-items-center justify-content-center" style={{width:'120px',height:'120px'}}>
                  <span className="display-4 fw-bold text-primary">SG</span>
                </div>
              </div>
              <div className="position-absolute bg-warning bg-opacity-25 rounded-circle glow-animation" style={{top:'-20px', right:'-20px', width:'80px', height:'80px'}}></div>
              <div className="position-absolute bg-primary bg-opacity-25 rounded-circle glow-animation" style={{bottom:'-20px', left:'-20px', width:'60px', height:'60px', animationDelay:'1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="border border-primary rounded-pill d-flex justify-content-center p-2" style={{width:'30px',height:'50px'}}>
          <div className="bg-primary rounded-pill" style={{width:'4px',height:'15px',animation:'bounce 2s infinite'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
