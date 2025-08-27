import React from 'react';
import '../App.css';
import image from '../images/Image.png'; // Background image
import largeImg from '../images/sticky-img.jpg.png'; // Large image
import smallImg from '../images/sticky-inner-img.jpg.png'; // Small image

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="home-section"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="home-content">
          <div className="health-tag">Beneficial for Health</div>
          <h1 className="experience">Experience</h1>
          <h2 className="subtitle">The Power of Nature</h2>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Info Section */}
<section className="info-section">
  <div className="info-container">
    
    {/* Left: Large Image */}
    <div className="info-images">
      <img src={largeImg} alt="Large product" className="large-image" />
    </div>

    {/* Right: Small Image + Text + Features */}
    <div className="info-text">
      <img src={smallImg} alt="Small product" className="inline-small-image" />
      
      <h2>We're Committed to Caring</h2>
      <p className="info-subtext">
        Greetings from Sky Harvest Exports.<br />
        We distribute only organic herbs and produce directly to consumers.
      </p>

      <div className="features">
        <ul>
          <li>✅ Sustainable</li>
          <li>✅ Organic</li>
          <li>✅ Trusted</li>
        </ul>
        <ul>
          <li>✅ Ethical</li>
          <li>✅ Fresh</li>
          <li>✅ Certified</li>
        </ul>
      </div>

      {/* <button className="know-more">Know More</button> */}
    </div>
  </div>
</section>
    </>
  );
}
