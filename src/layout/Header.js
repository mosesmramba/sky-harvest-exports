import React, { useState, useEffect } from 'react';
import '../App.css';

const SECTIONS = ['home', 'services', 'about', 'products', 'partners', 'contact'];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section smoothly
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Optional: Track scroll to update active section dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-buttons">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={activeSection === section ? 'active-link' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        <div className="logo-section">
          <h2>🌿 Sky Harvest Exports</h2>
          <span className="call-us">Call us now: +1 (555) 123-4567</span>
        </div>

        <div className="contact-button">
          <button onClick={() => scrollTo('contact')}>Get in Touch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
