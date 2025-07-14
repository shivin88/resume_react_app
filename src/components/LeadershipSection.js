import React, { useEffect, useRef, useState } from 'react';

const LeadershipSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const leadership = [
    {
      title: "Sub-head of Event Coordination and Logistics",
      organization: "Women Empowerment Cell at PEC",
      period: "Current",
      icon: "bi-crown",
      description: "Leading event coordination and logistics for women empowerment initiatives at Punjab Engineering College.",
      responsibilities: ["Event planning and coordination","Logistics management","Team leadership","Women empowerment advocacy"]
    },
    {
      title: "Class Representative (CR)",
      organization: "Academic Leadership",
      period: "Academic Year",
      icon: "bi-people",
      description: "Serving as class representative, bridging communication between students and faculty.",
      responsibilities: ["Student-faculty liaison","Academic coordination","Class communication","Problem resolution"]
    },
    {
      title: "Member at Robotics Society PEC",
      organization: "Robotics Society",
      period: "Current",
      icon: "bi-gear",
      description: "Active member contributing to robotics projects and technical workshops.",
      responsibilities: ["Robotics project development","Technical workshops","Knowledge sharing","Innovation initiatives"]
    },
    {
      title: "AICTA International Conference Organizer",
      organization: "PEC",
      period: "2023",
      icon: "bi-calendar-event",
      description: "Helped organize and manage AICTA international conference at PEC.",
      responsibilities: ["Conference organization","International coordination","Event management","Academic liaison"]
    },
    {
      title: "Implementation Board (IB) Member",
      organization: "PEC ACM Student Chapter",
      period: "Current",
      icon: "bi-diagram-3",
      description: "Member of the Implementation Board for the PEC ACM Student Chapter.",
      responsibilities: ["Chapter activities implementation","Technical event coordination","Student engagement","Professional development"]
    },
    {
      title: "Workshop Organizer",
      organization: "Data Science & Machine Learning",
      period: "2023",
      icon: "bi-presentation",
      description: "Engaged in organizing workshops on Data Science and Machine Learning for junior students.",
      responsibilities: ["Workshop planning","Curriculum development","Student mentoring","Knowledge transfer"]
    }
  ];

  return (
    <section id="leadership" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Leadership</span></h2>
          <p className="lead text-muted">Leadership roles and organizational contributions that demonstrate my commitment to community building</p>
        </div>
        <div className="row">
          {leadership.map((role,i) => (
            <div key={i} className="col-lg-6 mb-4">
              <div className={`custom-card p-4 h-100 ${isVisible ? 'fade-in-up' : ''}`} style={{animationDelay:`${i*0.1}s`}}>
                <div className="d-flex align-items-start mb-3">
                  <div className="icon-container me-3 flex-shrink-0" style={{width:'48px',height:'48px'}}><i className={`${role.icon} fs-5 text-primary`}></i></div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold text-white mb-2">{role.title}</h5>
                    <div className="d-flex align-items-center text-muted small mb-1"><i className="bi bi-building me-2"></i>{role.organization}</div>
                    <div className="d-flex align-items-center text-muted small"><i className="bi bi-calendar me-2"></i>{role.period}</div>
                  </div>
                </div>
                <p className="text-muted small mb-3">{role.description}</p>
                <div>
                  <h6 className="fw-semibold text-white mb-2 small">Key Responsibilities:</h6>
                  <div className="row">
                    {role.responsibilities.map((resp, idx) => (
                      <div key={idx} className="col-12 mb-1">
                        <div className="d-flex align-items-center text-muted small"><div className="bg-primary rounded-circle me-2" style={{width:'6px',height:'6px'}}></div>{resp}</div>
                      </div>
                    ))}
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

export default LeadershipSection;
