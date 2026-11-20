import React, { useEffect, useState } from 'react';
import './App.css';

import bgCover from './Elements/cover.webp';
import bgBlue from './Elements/blue.webp';
import bgViolet from './Elements/violet.webp';
import bgOc from './Elements/oc.webp';

const ARTWORK_ITEMS = [
  {
    id: 'cover-cliff',
    chapter: 'I',
    title: 'BOOK COVER: MEMORY AT THE CLIFF',
    description:
      'Book cover illustration created in Adobe Illustrator for a 2nd-year Ethics storybook project, depicting a girl alone on the cliff remembering her friend, the little boy.',
    image: bgCover,
    bgColor: '#ffffff',
    theme: 'dark-text',
  },
  {
    id: 'blue-leviathan',
    chapter: 'II',
    title: 'ETHICS STORYBOOK: FALL INTO THE LEVIATHAN',
    description:
      'Storybook illustration created in Adobe Illustrator for a 2nd-year Ethics project, showing the little boy falling from a high cliff into the ocean and encountering the area’s infamous leviathan.',
    image: bgBlue,
    bgColor: 'var(--blue)',
    theme: 'light-text',
  },
  {
    id: 'violet-marionette',
    chapter: 'III',
    title: 'ETHICS STORYBOOK: BETRAYAL & STOLEN WEALTH',
    description:
      'Storybook illustration created in Adobe Illustrator for a 2nd-year Ethics project, portraying betrayal and the discovery of wealth stolen from the community.',
    image: bgViolet,
    bgColor: '#895b9b',
    theme: 'light-text',
  },
  {
    id: 'oc-portrait',
    chapter: 'IV',
    title: 'ORIGINAL CHARACTER: MUZENIKART INSPIRED',
    description:
      'Original character illustration created in ibisPaint, inspired by Muzenikart’s art style.',
    image: bgOc,
    bgColor: '#E5D584',
    theme: 'dark-text',
  },
];

export default function GraphicArtPage({ onBackToWorks, onNavigateHome, onNavigateAbout, onNavigateContact, }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeArt = ARTWORK_ITEMS[selectedIndex] || ARTWORK_ITEMS[0];
  const isLightText = activeArt.theme === 'light-text';

  useEffect(() => {
    const nextIndex = (selectedIndex + 1) % ARTWORK_ITEMS.length;
    const prevIndex = (selectedIndex - 1 + ARTWORK_ITEMS.length) % ARTWORK_ITEMS.length;

    [nextIndex, prevIndex].forEach((idx) => {
      const src = ARTWORK_ITEMS[idx]?.image;
      if (src) {
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
      }
    });
  }, [selectedIndex]);

  return (
    <div
      className={`art-gallery-container page-enter ${
        isLightText ? 'art-theme-light' : 'art-theme-dark'
      }`}
      style={{ '--art-bg-color': activeArt.bgColor || '#101b31' }}
    >
      {activeArt.image && (
        <img
          key={activeArt.id}
          src={activeArt.image}
          alt={activeArt.title}
          className={`art-bg-image art-bg--${activeArt.id} art-bg-enter`}
          data-art={activeArt.id}
        />
      )}

      {/* Top Navigation */}
      <header className="art-header">
        <button
          type="button"
          className="art-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="art-nav">
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
          className="hamburger-btn art-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-nav art-mobile-nav">
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

      {/* Main Layout */}
      <main className="art-main">
        <div className="art-top-bar">
          <button
            type="button"
            className="art-back-btn"
            onClick={() => onBackToWorks?.()}
          >
            ← BACK TO WORKS
          </button>
        </div>

        <div className="art-mobile-stage">
          {activeArt.image && (
            <img
              src={activeArt.image}
              alt={activeArt.title}
              className="art-mobile-artwork"
              decoding="async"
            />
          )}
        </div>

        <div className="art-content-grid">
          {/* Whimsical Storybook Chapter Click Boxes (No Art Previews) */}
          <div className="art-thumbs-grid" role="tablist" aria-label="Storybook artwork pages">
            {ARTWORK_ITEMS.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`art-thumb-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedIndex(index)}
                  title={`Page ${item.chapter}`}
                >
                  <span className="art-page-numeral">{item.chapter}</span>
                  <span className="art-page-label">PAGE</span>
                </button>
              );
            })}
          </div>

          {/* Right Caption Block */}
          <aside key={activeArt.id} className="art-info-panel art-info-enter">
            <h1 className="art-info-title">{activeArt.title}</h1>
            <p className="art-info-description">{activeArt.description}</p>
          </aside>
        </div>
      </main>
    </div>
  );
}