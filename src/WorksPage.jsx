import React, { useState } from 'react';
import './App.css';

import deckIcon from './Elements/deck.png';
import artCreamIcon from './Elements/artcream.png';
import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';

const WORK_CARDS = [
  {
    id: 'interactive-apps',
    numeral: 'I',
    title: 'INTERACTIVE APPLICATIONS',
    description:
      'End-to-end UI/UX and interactive frontend builds designed for intuitive, user-centered digital experiences.',
    cta: 'VIEW PROJECTS',
    elevated: false,
  },
  {
    id: 'visual-pitch-decks',
    numeral: 'II',
    title: 'VISUAL & PITCH DECKS',
    description:
      'Custom presentation systems, data storytelling, and editorial layouts crafted to communicate complex ideas clearly.',
    cta: 'VIEW DECKS',
    icon: deckIcon,
    iconAlt: 'Visual & Pitch Decks icon',
    elevated: true,
  },
  {
    id: 'digital-graphic-art',
    numeral: 'III',
    title: 'DIGITAL & GRAPHIC ART',
    description:
      'Original illustrations, character studies, and visual explorations blending moody aesthetics with clean composition.',
    cta: 'VIEW GALLERY',
    icon: artCreamIcon,
    iconAlt: 'Digital & Graphic Art icon',  
    elevated: false,
  },
];

export default function WorksPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
  onOpenInteractiveApps,
  onOpenPitchDecks,
  onOpenGraphicArt,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedIds, setFlippedIds] = useState({});

  const toggleCard = (id) => {
    setFlippedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="works-container landing page-enter">
      {/* Top Navigation */}
      <header className="works-header">
        <button
          type="button"
          className="works-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="works-nav">
          <a
            href="#work"
            className="active"
            onClick={(e) => {
              e.preventDefault();
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
          className="hamburger-btn works-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-nav works-mobile-nav">
            <a
              href="#work"
              className="active"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
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

      {/* Cards Grid */}
      <main className="works-main">
        <div className="works-grid">
          {WORK_CARDS.map((card) => {
            const isFlipped = !!flippedIds[card.id];

            return (
              <div
                key={card.id}
                className={`work-card-scene ${card.elevated ? 'card-elevated' : ''} ${
                  isFlipped ? 'is-flipped' : ''
                }`}
                onClick={() => toggleCard(card.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(card.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
              >
                <div className="work-card-inner">
                  {/* Initial Back/Cover Face: Numeral, Custom Icon Slot, and Title Only */}
                  <div className="work-card-face work-card-cover">
                    <span className="work-card-numeral">{card.numeral}</span>
                    <div className="work-card-icon-slot work-card-icon-slot--cover" aria-hidden="true">
                      {card.icon && (
                        <img
                          src={card.icon}
                          alt=""
                          className="work-card-icon work-card-icon--cover"
                        />
                      )}
                    </div>
                    <h2 className="work-card-cover-title">{card.title}</h2>
                  </div>

                  {/* Flipped Front Face: Full Layout from Reference */}
                  <div className="work-card-face work-card-details">
                    <span className="work-card-numeral">{card.numeral}</span>
                    <div className="work-card-content">
                      <div className="work-card-icon-slot work-card-icon-slot--details">
                        {card.icon && (
                          <button
                            type="button"
                            className="work-card-icon-btn"
                            aria-label={`Open ${card.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (card.id === 'interactive-apps') {
                                onOpenInteractiveApps?.();
                              } else if (card.id === 'visual-pitch-decks') {
                                onOpenPitchDecks?.();
                              } else if (card.id === 'digital-graphic-art') {
                                onOpenGraphicArt?.();
                              }
                            }}
                          >
                            <img
                              src={card.icon}
                              alt=""
                              className="work-card-icon work-card-icon--details"
                            />
                          </button>
                        )}
                      </div>
                      <h2 className="work-card-title">{card.title}</h2>
                      <p className="work-card-description">{card.description}</p>
                      <button
                        type="button"
                        className="work-card-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (card.id === 'interactive-apps') {
                            onOpenInteractiveApps?.();
                          } else if (card.id === 'visual-pitch-decks') {
                            onOpenPitchDecks?.();
                          } else if (card.id === 'digital-graphic-art') {
                            onOpenGraphicArt?.();
                          }
                        }}
                      >
                        {card.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Bottom Wave Layers */}
      <div className="works-waves" aria-hidden="true">
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