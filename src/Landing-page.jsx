import React, { useState } from 'react';
import './App.css';

import moonImg from './Elements/Moon.png';
import stoolImg from './Elements/Stool.png';
import catBodyImg from './Elements/Black_Cat_Body.png';
import catHeadImg from './Elements/Black_Cat_Head.png';
import catTailImg from './Elements/Black_Cat_Tail.png';

import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';

export default function LandingPage({
  onNavigateWorks,
  onNavigateAbout,
  onNavigateContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-container landing">
      {/* Top Navigation */}
      <header className="landing-header">
        <div className="landing-logo">
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="landing-nav">
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
            onClick={(e) => {
              e.preventDefault();
              onNavigateContact?.();
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-nav">
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
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onNavigateContact?.();
              }}
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="landing-main">
        <h1 className="landing-title">
          RENDERED<br />REALITIES
        </h1>
        <p className="landing-description">
          Product Designer Portfolio blending graphic aesthetics with interactive web apps.
        </p>
        <button
          type="button"
          className="landing-btn"
          onClick={() => onNavigateWorks?.()}
        >
          EXPLORE WORK
        </button>
      </main>

      {/* Container for your manual waves, moon, cat, and stool assets */}
      <div className="scene-layer" aria-hidden="true">
        <div className="hero-focal-group">
          <img src={moonImg} alt="" className="scene-moon" />

          <div className="cat-assembly">
            <img src={catTailImg} alt="" className="cat-tail" />
            <img src={catBodyImg} alt="" className="cat-body" />
            <img src={catHeadImg} alt="" className="cat-head" />
          </div>

          <img src={stoolImg} alt="" className="scene-stool" />
        </div>

        {/* Wave Layers (back to front) */}
        <img src={wave1} alt="" className="scene-wave wave-1" />
        <img src={wave2} alt="" className="scene-wave wave-2" />
        <img src={wave3} alt="" className="scene-wave wave-3" />
        <img src={wave4} alt="" className="scene-wave wave-4" />
        <img src={wave5} alt="" className="scene-wave wave-5" />
        <img src={wave6} alt="" className="scene-wave wave-6" />
      </div>
    </div>
  );
}