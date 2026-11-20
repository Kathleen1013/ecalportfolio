import React, { useState } from 'react';
import './App.css';

import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';

export default function ContactPage({
  onNavigateHome,
  onNavigateWorks,
  onNavigateAbout,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product & UI/UX Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container landing page-enter">
      {/* Consistent Top Navigation */}
      <header className="contact-header">
        <button
          type="button"
          className="contact-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="contact-nav">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              onNavigateWorks?.();
            }}
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigateAbout?.();
            }}
          >
            About
          </a>
          <a
            href="#contact"
            className="active"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="hamburger-btn contact-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-nav contact-mobile-nav">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onNavigateWorks?.();
              }}
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onNavigateAbout?.();
              }}
            >
              About
            </a>
            <a
              href="#contact"
              className="active"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
              }}
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Main Contact Layout */}
      <main className="contact-main">
        {/* Left Whimsical Letter Intro */}
        <section className="contact-intro" aria-label="Contact invitation">
          <span className="contact-kicker">SEND A NOTE ACROSS THE WAVES</span>
          <h1 className="contact-title">LET’S CRAFT SOMETHING</h1>
          <p className="contact-description">
            Have a product idea, a pitch deck to bring to life, or a whimsical visual
            collaboration in mind? Share a few details and I’ll get back to you.
          </p>

          <div className="contact-direct-card">
            <div className="contact-detail-row">
              <span className="contact-detail-label">STUDIO</span>
              <span className="contact-detail-value">Kathleen Ecal · Product Design</span>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">EMAIL</span>
              <a href="mailto:kathleengayleecal@gmail.com" className="contact-detail-link">
                kathleengayleecal@gmail.com
              </a>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">OPEN TO</span>
              <span className="contact-detail-value">
                Product Design · Visual Decks · Collaborations
              </span>
            </div>
          </div>
        </section>

        {/* Right Storybook Message Card */}
        <section className="contact-form-panel" aria-label="Message form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-email">EMAIL ADDRESS</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-topic">PROJECT FOCUS</label>
              <select
                id="contact-topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="Product & UI/UX Design">Product &amp; UI/UX Design</option>
                <option value="Visual & Pitch Decks">Visual &amp; Pitch Decks</option>
                <option value="Digital & Graphic Art">Digital &amp; Graphic Art</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">MESSAGE</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="This area is not connected to smtp. Still in progress. You can use the email provided on the left for contact, thank you."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              SEND MESSAGE →
            </button>

          </form>
        </section>
      </main>

      {/* Bottom Wave Layers */}
      <div className="contact-waves" aria-hidden="true">
        <img src={wave1} alt="" className="wave-1" />
        <img src={wave2} alt="" className="wave-2" />
        <img src={wave3} alt="" className="wave-3" />
        <img src={wave4} alt="" className="wave-4" />
        <img src={wave5} alt="" className="wave-5" />
        <img src={wave6} alt="" className="wave-6" />
      </div>
    </div>
  );
}