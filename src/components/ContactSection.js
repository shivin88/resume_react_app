// ContactSection.js
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9pd5z5r',
      'template_fkx44ja',
      form.current,
      'RoiwjYykO6KZ2YWF-'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset(); // clear form after success
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message.");
    });
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="display-4 fw-bold mb-3">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="lead text-white">
            Ready to collaborate on exciting projects or discuss opportunities in software development and AI
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <form ref={form} onSubmit={sendEmail} className="custom-card p-4">
                <h4 className="fw-bold text-white mb-4">Send a Message</h4>

                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control form-control-custom"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email" // ✅ fixed name to match EmailJS variable
                    className="form-control form-control-custom"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control form-control-custom"
                    rows="6"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-glow text-white w-100 py-3">
                  <i className="bi bi-send me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
