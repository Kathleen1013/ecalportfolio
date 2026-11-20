import React, { useState } from 'react';
import './App.css';

import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';

const PITCH_DECKS = [
  { id: 'lol', title: 'LEAGUE OF LEGENDS THEME' },
  { id: 'valorant', title: 'VALORANT THEME' },
  { id: 'bokura', title: 'BOKURA THEME' },
  { id: 'page-flip', title: 'SIMPLE PAGE FLIP STYLE' },
  { id: 'club-penguin', title: 'CLUB PENGUIN THEME' },
  { id: 'aotr', title: 'AOTR THEME' },
];

export default function PitchDecksPage({
  onBackToWorks,
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
  onSelectDeck,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="decks-container page-enter">
      {/* Top Navigation */}
      <header className="decks-header">
        <button
          type="button"
          className="decks-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="decks-nav">
          <a
            href="#work"
            className="active"
            onClick={(e) => {
              e.preventDefault();
              onBackToWorks?.();
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
          type="button"
          className="hamburger-btn decks-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-nav decks-mobile-nav">
            <a
              href="#work"
              className="active"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onBackToWorks?.();
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

      {/* Main Content */}
      <main className="decks-main">
        <div className="decks-top-bar">
          <button
            type="button"
            className="decks-back-btn"
            onClick={() => onBackToWorks?.()}
          >
            ← BACK TO WORKS
          </button>
        </div>

        <div className="decks-grid">
          {PITCH_DECKS.map((deck) => (
            <article key={deck.id} className="deck-arch-card">
              <div className="deck-arch-artwork" aria-hidden="true">
                {/* Drop custom theme artwork/illustration here */}
              </div>
              <div className="deck-arch-overlay">
                <h2 className="deck-arch-title">{deck.title}</h2>
                <button
                  type="button"
                  className="deck-arch-btn"
                  onClick={() => onSelectDeck?.(deck.id)}
                >
                  VIEW DECK
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Bottom Wave Layers */}
      <div className="decks-waves" aria-hidden="true">
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