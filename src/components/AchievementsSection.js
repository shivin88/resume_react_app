import React, { useEffect, useRef, useState } from 'react';

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const achievements = [
    {
      title: "Gen AI Academy by Google Cloud and H2S",
      type: "Certification",
      description: "Completed Gen AI Academy by Google Cloud and H2S, gaining hands-on experience with tools like Vertex AI, Gemini APIs, and Streamlit",
      url: "https://certificate.com",
      icon: "bi-award",
      category: "AI/ML"
    },
    {
      title: "GDSC Gen AI Study Jams 2024",
      type: "Completion",
      description: "Earned 15 badges for completion of the GDSC Gen AI Study Jams 2024",
      url: "https://www.credly.com",
      icon: "bi-star",
      category: "AI/ML"
    },
    {
      title: "Neural Networks Certification",
      type: "Certification",
      description: "Coursera certification for neural networks",
      url: "https://coursera.org",
      icon: "bi-award",
      category: "AI/ML"
    },
    {
      title: "Improving Deep Neural Networks Certification",
      type: "Certification",
      description: "Coursera certification for Improving Deep Neural Networks",
      url: "https://www.coursera.org/account/accomplishments/verify/EZNZDUBPY5CF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      icon: "bi-award",
      category: "AI/ML"
    },
    {
      title: "Structuring Machine Learning Projects Certification",
      type: "Certification",
      description: "Coursera certification for Structuring Machine Learning Projects",
      url: "https://www.coursera.org/account/accomplishments/verify/F4FJAP8DKKX6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      icon: "bi-award",
      category: "AI/ML"
    },
    {
      title: "National Hockey Team Representation",
      type: "Sports Achievement",
      description: "Represented the Indian Team in Rourkela, Italy, in inline hockey",
      icon: "bi-trophy",
      category: "Sports"
    },
    {
      title: "Speed Skating Championships",
      type: "Sports Achievement",
      description: "Achieved numerous victories in national and state-level championships for speed skating and inline hockey",
      icon: "bi-medal",
      category: "Sports"
    },
    {
      title: "Robotics Competitions",
      type: "Competition",
      description: "Competed in prestigious national robotics competitions, including WRO and FLL",
      icon: "bi-robot",
      category: "Technical"
    },
    {
      title: "100+ Medals Achievement",
      type: "Award",
      description: "Awarded over 100 medals in various disciplines",
      icon: "bi-medal",
      category: "General"
    }
  ];

  const categories = ["All", "AI/ML", "Sports", "Technical", "General"];

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section id="achievements" className="section-padding bg-dark bg-opacity-25" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="display-4 fw-bold mb-3">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="lead text-muted">Recognition and accomplishments across technical, academic, and athletic domains</p>
        </div>

        <div className={`d-flex flex-wrap justify-content-center gap-3 mb-5 ${isVisible ? 'fade-in' : 'opacity-0'}`} 
             style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn rounded-pill px-4 py-2 ${
                selectedCategory === category
                  ? 'btn-glow text-white'
                  : 'btn-outline-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredAchievements.map((achievement, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`custom-card p-4 h-100 d-flex flex-column ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className="d-flex align-items-start mb-3">
                  <div className="icon-container me-3 flex-shrink-0" style={{width: '48px', height: '48px'}}>
                    <i className={`${achievement.icon} fs-5 text-primary`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50 small">
                        {achievement.type}
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-muted small">
                        {achievement.category}
                      </span>
                    </div>
                    <h5 className="fw-bold text-white">{achievement.title}</h5>
                  </div>
                </div>

                <p className="text-muted small flex-grow-1">{achievement.description}</p>

                {achievement.url && (
                  <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-none small"
                    >
                      <span>View Certificate</span>
                      <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
