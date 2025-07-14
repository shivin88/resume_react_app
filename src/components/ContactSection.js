import React, { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: "bi-envelope",
      label: "Email",
      value: "shivingoyal.bt23cse@pec.edu.in",
      href: "mailto:shivingoyal.bt23cse@pec.edu.in"
    },
    {
      icon: "bi-telephone",
      label: "Phone",
      value: "+91 9888485042",
      href: "tel:+919888485042"
    },
    {
      icon: "bi-geo-alt",
      label: "Location",
      value: "Chandigarh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: "bi-github", label: "GitHub", href: "https://github.com" },
    { icon: "bi-linkedin", label: "LinkedIn", href: "https://linkedin.com" }
  ];

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="display-4 fw-bold mb-3"><span className="gradient-text">Get In Touch</span></h2>
          <p className="lead text-muted">Ready to collaborate on exciting projects or discuss opportunities in software development and AI</p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className={isVisible ? 'slide-in-left' : ''}>
              <h4 className="fw-bold text-white mb-4">Contact Information</h4>
              <div className="mb-4">
                {contactInfo.map((c,i) => (
                  <a key={i} href={c.href} className="d-flex align-items-center custom-card p-3 mb-3 text-decoration-none">
                    <div className="icon-container me-3" style={{width:'48px',height:'48px'}}><i className={`${c.icon} fs-5 text-primary`}></i></div>
                    <div>
                      <div className="small text-muted">{c.label}</div>
                      <div className="text-white fw-medium">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mb-4">
                <h5 className="fw-semibold text-white mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((s,i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                       className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style={{width:'56px',height:'56px'}} aria-label={s.label}>
                      <i className={`${s.icon} fs-5`}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="custom-card p-4 text-center">
                <div className="icon-container mx-auto mb-3"><i className="bi bi-send fs-3 text-primary"></i></div>
                <h5 className="fw-bold text-white mb-2">Let's Build Something Amazing Together!</h5>
                <p className="text-muted small mb-0">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or collaborate on cutting-edge technology solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={isVisible ? 'fade-in-up' : ''} style={{animationDelay:'0.3s'}}>
              <div className="custom-card p-4">
                <h4 className="fw-bold text-white mb-4">Send a Message</h4>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-white small">Name</label>
                      <input type="text" className="form-control form-control-custom" id="name" placeholder="Your name"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-white small">Email</label>
                      <input type="email" className="form-control form-control-custom" id="email" placeholder="your@email.com"/>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-white small">Subject</label>
                    <input type="text" className="form-control form-control-custom" id="subject" placeholder="What's this about?"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-white small">Message</label>
                    <textarea className="form-control form-control-custom" id="message" rows="6" placeholder="Tell me about your project or opportunity..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-glow text-white w-100 py-3">
                    <i className="bi bi-send me-2"></i> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
