import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import lolVideo from './Elements/LoL.mp4';
import valorantVideo from './Elements/Valorant.mp4';
import aotrVideo from './Elements/aotr.mp4';
import flipStyleVideo from './Elements/Flip-Style.mp4';
import clubPenguinVideo from './Elements/ClubPenguin.mp4';
import bokuraVideo from './Elements/Bokura.mp4';

import lol1 from './Elements/lol1.png';
import lol2 from './Elements/lol2.png';
import lol3 from './Elements/lol3.png';
import lol4 from './Elements/lol4.png';

import valo1 from './Elements/valo1.png';
import valo2 from './Elements/valo2.png';
import valo3 from './Elements/valo3.png';
import valo4 from './Elements/valo4.png';

import bokura1 from './Elements/bokura1.png';
import bokura2 from './Elements/bokura2.png';
import bokura3 from './Elements/bokura3.png';
import bokura4 from './Elements/bokura4.png';

import flip1 from './Elements/flip1.png';
import flip2 from './Elements/flip2.png';
import flip3 from './Elements/flip3.png';
import flip4 from './Elements/flip4.png';

import club1 from './Elements/club1.png';
import club2 from './Elements/club2.png';
import club3 from './Elements/club3.png';
import club4 from './Elements/club4.png';

import aotr1 from './Elements/aotr1.png';
import aotr2 from './Elements/aotr2.png';
import aotr3 from './Elements/aotr3.png';
import aotr4 from './Elements/aotr4.png';

const DECK_DATA = {
  lol: {
    id: 'lol',
    title: 'LEAGUE OF LEGENDS THEME',
    tagline: 'Interactive Presentation & Visual Deck',
    description:
      'A high-contrast presentation deck inspired by League of Legends’ game UI, and bold visual hierarchy.',
    editionLabel: 'DECK 01',
    videoSrc: lolVideo,
    slides: [
      { id: 'lol-1', label: 'Slide 01 · Title & Concept', caption: 'Opening title framing and core theme direction.', image: lol1 },
      { id: 'lol-2', label: 'Slide 02 · Narrative Arc', caption: 'Visual flow and key story beats across the presentation.', image: lol2 },
      { id: 'lol-3', label: 'Slide 03 · Layout System', caption: 'Typography pairing, contrast blocks, and focal accents.', image: lol3 },
      { id: 'lol-4', label: 'Slide 04 · Key Takeaways', caption: 'Summary highlights and final closing slide.', image: lol4 },
    ],
  },
  valorant: {
    id: 'valorant',
    title: 'VALORANT THEME',
    tagline: 'Tactical Clarity. Sharp Contrast.',
    description:
      'Built around crisp angular framing, high-legibility callouts, and rapid visual transitions tailored for energetic pitch delivery.',
    editionLabel: 'DECK 02',
    videoSrc: valorantVideo,
    slides: [
      { id: 'val-1', label: 'Slide 01 · Briefing', caption: 'High-impact cover slide with tactical grid cues.', image: valo1 },
      { id: 'val-2', label: 'Slide 02 · Problem & Angle', caption: 'Clear breakdown of core challenge and positioning.', image: valo2 },
      { id: 'val-3', label: 'Slide 03 · Visual Rhythm', caption: 'Pacing slides to keep audience attention locked in.', image: valo3 },
      { id: 'val-4', label: 'Slide 04 · Recap', caption: 'Actionable wrap-up and closing statement.', image: valo4 },
    ],
  },
  bokura: {
    id: 'bokura',
    title: 'BOKURA THEME',
    tagline: 'Quiet Worlds. Shared Perspective.',
    description:
      'An atmospheric deck emphasizing dual viewpoints, calm tonal shifts, and thoughtful visual storytelling between slides.',
    editionLabel: 'DECK 03',
    videoSrc: bokuraVideo,
    slides: [
      { id: 'bok-1', label: 'Slide 01 · Threshold', caption: 'Atmospheric opening mood and palette.', image: bokura1 },
      { id: 'bok-2', label: 'Slide 02 · Two Perspectives', caption: 'Contrasting viewpoints side by side.', image: bokura2 },
      { id: 'bok-3', label: 'Slide 03 · Quiet Moments', caption: 'Restrained spacing that lets visuals breathe.', image: bokura3 },
      { id: 'bok-4', label: 'Slide 04 · Resolution', caption: 'Closing reflection tying the narrative together.', image: bokura4 },
    ],
  },
  'page-flip': {
    id: 'page-flip',
    title: 'SIMPLE PAGE FLIP STYLE',
    tagline: 'Editorial Simplicity. Smooth Turns.',
    description:
      'A clean, distraction-free deck format modeled after tactile page turns—ideal when content and clarity take center stage.',
    editionLabel: 'DECK 04',
    videoSrc: flipStyleVideo,
    slides: [
      { id: 'flip-1', label: 'Slide 01 · Cover Sheet', caption: 'Minimalist cover with balanced margins.', image: flip1 },
      { id: 'flip-2', label: 'Slide 02 · Chapter Spread', caption: 'Structured two-column editorial flow.', image: flip2 },
      { id: 'flip-3', label: 'Slide 03 · Slide Detail', caption: 'Focused visual block with concise notes.', image: flip3 },
      { id: 'flip-4', label: 'Slide 04 · Index & Close', caption: 'Clean final page for Q&A or handoff.', image: flip4 },
    ],
  },
  'club-penguin': {
    id: 'club-penguin',
    title: 'CLUB PENGUIN THEME',
    tagline: 'Playful Spirit. Nostalgic Charm.',
    description:
      'A lighthearted, approachable presentation deck bringing nostalgic charm, friendly color cues, and lively visual energy.',
    editionLabel: 'DECK 05',
    videoSrc: clubPenguinVideo,
    slides: [
      { id: 'cp-1', label: 'Slide 01 · Welcome', caption: 'Playful opener setting a warm, inviting tone.', image: club1 },
      { id: 'cp-2', label: 'Slide 02 · World Tour', caption: 'Segmented slides organized like distinct zones.', image: club2 },
      { id: 'cp-3', label: 'Slide 03 · Interactive Beats', caption: 'Highlights and moments designed for engagement.', image: club3 },
      { id: 'cp-4', label: 'Slide 04 · Finale', caption: 'Upbeat closing slide with clear next steps.', image: club4 },
    ],
  },
  aotr: {
    id: 'aotr',
    title: 'AOTR THEME',
    tagline: 'Scale, Tension & Momentum.',
    description:
      'Designed with dramatic scale, bold typographic weight, and intense pacing to give key slides extra narrative gravity.',
    editionLabel: 'DECK 06',
    videoSrc: aotrVideo,
    slides: [
      { id: 'aotr-1', label: 'Slide 01 · Vanguard', caption: 'Commanding title frame with dramatic contrast.', image: aotr1 },
      { id: 'aotr-2', label: 'Slide 02 · Stakes', caption: 'Framing urgency and core objectives.', image: aotr2 },
      { id: 'aotr-3', label: 'Slide 03 · Execution', caption: 'Structured progression from plan to outcome.', image: aotr3 },
      { id: 'aotr-4', label: 'Slide 04 · Horizon', caption: 'Final slide looking ahead.', image: aotr4 },
    ],
  },
};

export default function DeckDetailPage({
  deckId,
  onBackToDecks,
  onBackToWorks,
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [cleanVideoMode, setCleanVideoMode] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const videoRef = useRef(null);

  const deck = DECK_DATA[deckId] || DECK_DATA.lol;
  const slides = deck.slides || [];
  const activeSlide = slides[activeSlideIndex] || slides[0];

  useEffect(() => {
    setActiveSlideIndex(0);
    setLightboxOpen(false);
    setIsMuted(true);
    setCleanVideoMode(false);
  }, [deckId]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isMuted]);

  const handleToggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`deck-detail-container page-enter ${
        cleanVideoMode ? 'is-clean-video' : ''
      }`}
    >
      {/* Full-Bleed Video Background */}
      <div className="deck-video-bg" aria-hidden="true">
        {deck.videoSrc ? (
          <video
            ref={videoRef}
            key={deck.videoSrc}
            className="deck-bg-video"
            src={deck.videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
        ) : (
          <div className="deck-video-fallback" />
        )}
        <div className="deck-video-vignette" />
      </div>

      {/* Consistent Top Navigation */}
      <header className="deck-detail-header">
        <button
          type="button"
          className="deck-detail-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="deck-detail-nav">
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
          className="hamburger-btn deck-detail-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <nav className="mobile-nav deck-detail-mobile-nav">
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

      {/* Main Showcase Layout */}
      <main className="deck-detail-main">
        {/* Back Arrow to PitchDecksPage + Clean Video Toggle + Audio Toggle */}
        <div className="deck-detail-top-controls">
          <button
            type="button"
            className="deck-back-arrow-btn"
            onClick={() => onBackToDecks?.()}
            aria-label="Back to Pitch Decks"
          >
            <span className="deck-arrow-icon" aria-hidden="true">←</span>
            <span>PITCH DECKS</span>
          </button>

          <div className="deck-action-pills">
            <button
              type="button"
              className={`deck-mode-btn ${cleanVideoMode ? 'is-active' : ''}`}
              onClick={() => setCleanVideoMode((prev) => !prev)}
              aria-pressed={cleanVideoMode}
            >
              {cleanVideoMode ? 'SHOW DECK UI' : 'CLEAN VIDEO VIEW'}
            </button>

            <button
              type="button"
              className={`deck-sound-btn ${!isMuted ? 'is-unmuted' : ''}`}
              onClick={handleToggleSound}
              aria-pressed={!isMuted}
            >
              <span className="material-symbols-outlined deck-sound-icon" aria-hidden="true">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
              <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
            </button>
          </div>
        </div>

        {/* Overlay Content (can be hidden cleanly in Clean Video View) */}
        {!cleanVideoMode && (
          <>
            <div className="deck-hero-row">
              <h1 className="deck-hero-title">{deck.title}</h1>
              <p className="deck-hero-tagline">{deck.tagline}</p>
            </div>

            <div className="deck-lower-grid">
              <div className="deck-info-column">
                <button
                  type="button"
                  className="deck-inspect-btn"
                  onClick={() => setLightboxOpen(true)}
                >
                  <span>SCREENSHOTS</span>
                  <span aria-hidden="true">→</span>
                </button>

                <p className="deck-hero-description">{deck.description}</p>
              </div>

              <div className="deck-screenshots-column">
                <div className="deck-screenshots-header">
                  <span className="deck-screenshots-label">SLIDE SCREENSHOTS</span>
                  <span className="deck-edition-label">{deck.editionLabel}</span>
                </div>

                <div
                  className="deck-thumbs-row"
                  role="tablist"
                  aria-label="Presentation slide screenshots"
                >
                  {slides.map((slide, idx) => {
                    const selected = idx === activeSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        className={`deck-slide-thumb ${selected ? 'is-selected' : ''}`}
                        onClick={() => setActiveSlideIndex(idx)}
                      >
                        {slide.image ? (
                          <img src={slide.image} alt={slide.label} />
                        ) : (
                          <span className="deck-slide-thumb-num">
                            0{idx + 1}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {activeSlide && (
                  <div
                    className="deck-slide-preview-card"
                    onClick={() => setLightboxOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightboxOpen(true);
                      }
                    }}
                  >
                    {activeSlide.image ? (
                      <img
                        src={activeSlide.image}
                        alt={activeSlide.label}
                        className="deck-slide-preview-img"
                      />
                    ) : (
                      <div className="deck-slide-preview-placeholder">
                        <span>{activeSlide.label}</span>
                        <small>Click to open screenshot viewer</small>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Full Slide Screenshot Lightbox Modal */}
      {lightboxOpen && activeSlide && (
        <div
          className="deck-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={activeSlide.label}
        >
          <div
            className="deck-lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="deck-lightbox-top">
              <span className="deck-lightbox-title">{activeSlide.label}</span>
              <button
                type="button"
                className="deck-lightbox-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close slide preview"
              >
                ✕
              </button>
            </div>

            <div className="deck-lightbox-stage">
              <button
                type="button"
                className="deck-lightbox-nav"
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                ←
              </button>

              <div className="deck-lightbox-frame">
                {activeSlide.image ? (
                  <img src={activeSlide.image} alt={activeSlide.label} />
                ) : (
                  <div className="deck-lightbox-empty">
                    <span>{activeSlide.label}</span>
                    <p>{activeSlide.caption}</p>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="deck-lightbox-nav"
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            <p className="deck-lightbox-caption">{activeSlide.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}