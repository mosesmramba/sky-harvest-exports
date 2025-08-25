import React from 'react';
import '../App.css';
import aboutImage from '../images/Container.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Tag ABOVE header */}
        <div className="about-tag-container">
          <span className="about-tag">Discover About Us</span>
        </div>

        {/* Header: Title on left, paragraph on right */}
        <div className="about-header-flex">
          <h1 className="about-title">Agriculture Matters to the Future of Development</h1>
          <div className="about-paragraph">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even.
            </p>
          </div>
        </div>

        {/* Main content: image and table side by side */}
        <div className="about-main-content">
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Agriculture" className="about-image" />
          </div>

          <div className="about-table">
            <table>
              <tbody>
                <tr className="highlight-row">
                  <td>01</td>
                  <td>Schedule Your<br />Experience</td>
                  <td>Plan your farm visit in advance</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Get Professional<br />Advice</td>
                  <td>Expert tips on sustainable farming</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Meet Our Expert<br />Farmer</td>
                  <td>Learn from industry veterans</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Now Get a Best<br />Products</td>
                  <td>Access top-quality organic goods</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NEW Section: Six Cards */}
        <div className="about-cards-section">
          <div className="about-cards-grid">
            {[
              { title: "Innovation", desc: "We bring modern farming methods to life." },
              { title: "Sustainability", desc: "Commitment to eco-friendly practices." },
              { title: "Community", desc: "Supporting local farmers and families." },
              { title: "Quality", desc: "Delivering only top-quality products." },
              { title: "Growth", desc: "Helping farms reach their full potential." },
              { title: "Trust", desc: "Building strong, lasting partnerships." },
            ].map((card, i) => (
              <div className="about-card" key={i}>
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-circle"></div>
                </div>
                <hr className="card-divider" />
                <p className="card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
