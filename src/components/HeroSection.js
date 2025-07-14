import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <div className="bg-decoration position-absolute" style={{ top: '25%', left: '25%', width: '400px', height: '400px' }}></div>
      <div className="bg-decoration position-absolute float-animation" style={{ bottom: '25%', right: '25%', width: '320px', height: '320px', animationDelay: '2s' }}></div>

      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-12 text-center ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="mb-4">
              <h1 className="display-1 fw-bold mb-3">
                <span className="gradient-text">Shivin</span> <span className="text-white">Goyal</span>
              </h1>
              <h3 className="text-primary mb-3">Aspiring Computer Science Student</h3>
              <p className="lead text-muted">Passionate about Software Development, Data Analysis, AI, and Emerging Technologies</p>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
              <button className="btn btn-glow text-white px-4 py-2">
                <i className="bi bi-download me-2"></i>
                Download Resume
              </button>
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com" className="btn btn-outline-primary rounded-circle p-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" className="btn btn-outline-primary rounded-circle p-3">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="border border-primary rounded-pill d-flex justify-content-center p-2" style={{ width: '30px', height: '50px' }}>
          <div className="bg-primary rounded-pill" style={{ width: '4px', height: '15px', animation: 'bounce 2s infinite' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;