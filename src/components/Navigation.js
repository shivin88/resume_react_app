import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'leadership', 'achievements', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= window.scrollY + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <button 
          className="navbar-brand btn btn-link text-decoration-none gradient-text fw-bold fs-3"
          onClick={() => scrollToSection('home')}
        >
          Shivin Goyal
        </button>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item mx-2">
                <button
                  className={`nav-link nav-link-custom btn btn-link text-decoration-none ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            className="btn btn-glow text-white px-4"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;