
import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const services = [
  { title: 'Organic Farming', img: 'https://picsum.photos/200?1', desc: 'Promoting eco-friendly farming practices.' },
  { title: 'Crop Rotation', img: 'https://picsum.photos/200?2', desc: 'Improving soil fertility and yield.' },
  { title: 'Soil Testing', img: 'https://picsum.photos/200?3', desc: 'Accurate soil health assessments.' },
  { title: 'Pest Control', img: 'https://picsum.photos/200?4', desc: 'Safe and effective pest management.' },
  { title: 'Irrigation Systems', img: 'https://picsum.photos/200?5', desc: 'Efficient water usage solutions.' },
  { title: 'Market Access', img: 'https://picsum.photos/200?6', desc: 'Connecting farmers to buyers.' },
];

export default function Services() {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(services.length / cardsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const page = Math.round(scrollLeft / width);
      setCurrentPage(page);
    };

    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-tag">Our Services</span>
        <h2 className="services-title">Best Agriculture Services</h2>
      </div>

      <div className="services-scroll-wrapper">
        <div className="services-scroll-container" ref={scrollRef}>
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <img src={service.img} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="dot-indicators">
          {[...Array(totalPages)].map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentPage === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
