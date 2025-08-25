import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        {/* Left: Form */}
        <div className="contact-form">
          <h2 className="contact-title">Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="tel" placeholder="Phone Number" className="contact-input" />
            <input type="email" placeholder="Email Address" className="contact-input" />
            <input type="text" placeholder="Subject" className="contact-input" />
            <textarea
              placeholder="Write your message..."
              className="contact-textarea"
              rows="5"
            />
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image from Picsum */}
        <div className="contact-image-wrapper">
          <img
            src="https://picsum.photos/600/500?grayscale"
            alt="Contact Us"
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}
