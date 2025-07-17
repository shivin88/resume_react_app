import React from 'react';

const ClicksSection = () => {
  const images = [
    { src: '/myimage4.jpeg', caption: 'Representing Team India in Italy' },
    { src: '/myimage2.jpeg', caption: 'Recognized by Student Affairs for dedication and achievement in state and international sports' },
    { src: '/myimage3.jpeg', caption: 'In school magazine for my contribution in national and international tournaments' },
    { src: '/myimage5.jpeg', caption: 'Organizing team member for the successful International Conference on AI, Computing, IoT, and Data Analytics (AICTA)' },
    { src: '/myimage6.jpeg', caption: 'With many years of experience, I led a successful robotics team at TRYST, IIT Delhi' },
    { src: '/myimage7.jpeg', caption: 'Awarded over 100 medals in many fields like cycling,skating,robotics,hockey' }
  ];

  return (
    <section id="clicks" className="section-padding">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-3 gradient-text">Clicks</h2>
        <p className="lead text-muted">Some proud moments captured</p>

        <div className="row">
          {images.map((img, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img src={img.src} alt={img.caption} className="img-fluid rounded shadow mb-2" />
              <p className="text-muted">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClicksSection;
