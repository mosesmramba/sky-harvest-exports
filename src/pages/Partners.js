import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

// import your logos
import logo1 from '../images/client-logo-01.png.png';
import logo2 from '../images/client-logo-02.png.png';
import logo3 from '../images/client-logo-03.png.png';
import logo4 from '../images/client-logo-04.png.png';
import logo5 from '../images/client-logo-05.png.png';
import logo6 from '../images/client-logo-06.png.png';

const partners = [
  { name: 'Partner 1', logo: logo1 },
  { name: 'Partner 2', logo: logo2 },
  { name: 'Partner 3', logo: logo3 },
  { name: 'Partner 4', logo: logo4 },
  { name: 'Partner 5', logo: logo5 },
  { name: 'Partner 6', logo: logo6 },
];

export default function Partners() {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 4; // logos per page
  const totalPages = Math.ceil(partners.length / cardsPerPage);

  // Update current page when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.offsetWidth;
      const page = Math.round(scrollLeft / pageWidth);
      setCurrentPage(page);
    };

    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to page when dot clicked
  const goToPage = (page) => {
    const container = scrollRef.current;
    const pageWidth = container.offsetWidth;
    container.scrollTo({
      left: page * pageWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section id="partners" className="partners-section">
      <h2 className="partners-title">Our Partners</h2>

      <div className="partners-scroll-wrapper">
        <div className="partners-scroll-container" ref={scrollRef}>
          {partners.map((partner, idx) => (
            <div className="partner-card" key={idx}>
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="dot-indicators">
          {[...Array(totalPages)].map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentPage === idx ? 'active' : ''}`}
              onClick={() => goToPage(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
