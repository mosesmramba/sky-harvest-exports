import React from 'react';
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
  return (
    <section id="partners" className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-list">
        {partners.map((partner, idx) => (
          <div className="partner-card" key={idx}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
