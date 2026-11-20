import React, { useState } from 'react';
import './App.css';

import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';

import detectiveImg from './Elements/ceas-oc.webp';
import ceas1 from './Elements/ceas (1).jpg';
import ceas2 from './Elements/ceas (2).jpg';
import ceas3 from './Elements/ceas (3).jpg';
import ceas4 from './Elements/ceas (4).jpg';
import ceas5 from './Elements/ceas (5).jpg';
import ceas6 from './Elements/ceas (6).jpg';
import ceas7 from './Elements/ceas (7).jpg';
import ceas8 from './Elements/ceas (8).jpg';
import ceas9 from './Elements/ceas (9).jpg';
import ceas10 from './Elements/ceas (10).jpg';
import ceas11 from './Elements/ceas (11).jpg';
import ceas12 from './Elements/ceas (12).jpg';

const ROMAN_NUMERALS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
];

const SCREENSHOT_CAPTIONS = [
  'Campus lost-and-found portal landing view.',
  'Institutional school email sign-in.',
  'Filterable lost and found item directory.',
  'Item listing with hidden sensitive details.',
  'Lost item report submission form.',
  'Found item logging flow by location.',
  'Secret Detail ownership claim form.',
  'Claimant verification status tracker.',
  'Student council claim review queue.',
  'Official item turnover log.',
  'Automated SMTP status notifications.',
  'Council moderation and records view.',
];

const SCREENSHOT_IMAGES = [
  ceas1,
  ceas2,
  ceas3,
  ceas4,
  ceas5,
  ceas6,
  ceas7,
  ceas8,
  ceas9,
  ceas10,
  ceas11,
  ceas12,
];

const CEAS_FIND_PROJECT = {
  name: 'CEASFind',
  type: 'CAMPUS (CEAS DEPARTMENT) LOST-AND-FOUND MANAGEMENT PORTAL',
  description:
    'A web-based lost-and-found portal for Gordon College CEAS with school email login, Secret Detail claim checks, and email alerts.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  caseStudy: {
    role: 'Team Lead & Backend Developer (Group mk²)',
    timeline: '2026',
    overview:
      'Built with my group mk² for Gordon College CEAS and the CEAS Student Council, replacing scattered social posts with a clear campus lost-and-found flow.',
    problem:
      'Lost-and-found posts were spread across chats and pages, making items hard to track, risky to claim, and slow for student council officers to manage.',
    targetUsers:
      'Made for CEAS students and faculty reporting or claiming items, plus CEAS Student Council officers and their adviser handling moderation and turnover.',
    process:
      'Developed through iterative Agile milestones from initial faculty review to CEAS Student Council presentation, refining login checks, claims, and officer tools.',
    designs:
      'Keeps public listings clean with filters for category, place, and date while hiding private item details until a claim is reviewed.',
    solution:
      'Restricts access to school emails, requires a Secret Detail to verify ownership, and sends automated SMTP emails as item and claim statuses change.',
    lessonsLearned:
      'Adapting the system from class prototype to real council use showed how closely backend rules and moderation flows must match actual campus routines.',
    privacyNotice:
      'Private institutional deployment — live demo and source code are not public.',
  },
  screenshots: SCREENSHOT_IMAGES.map((image, idx) => ({
    id: `shot-${idx + 1}`,
    numeral: ROMAN_NUMERALS[idx],
    label: `${String(idx + 1).padStart(2, '0')} · CEASFind Screen ${idx + 1}`,
    caption: SCREENSHOT_CAPTIONS[idx],
    image,
  })),
};

const STORY_PAGES = [
  { id: 'overview', heading: 'Overview', text: CEAS_FIND_PROJECT.caseStudy.overview },
  { id: 'problem', heading: 'The Problem', text: CEAS_FIND_PROJECT.caseStudy.problem },
  { id: 'users', heading: 'Target Users', text: CEAS_FIND_PROJECT.caseStudy.targetUsers },
  { id: 'process', heading: 'Process', text: CEAS_FIND_PROJECT.caseStudy.process },
  { id: 'ui', heading: 'UI & Privacy', text: CEAS_FIND_PROJECT.caseStudy.designs },
  { id: 'solution', heading: 'Solution', text: CEAS_FIND_PROJECT.caseStudy.solution },
  { id: 'lessons', heading: 'Lessons Learned', text: CEAS_FIND_PROJECT.caseStudy.lessonsLearned },
];

const TOTAL_SCREENS = 1 + STORY_PAGES.length + 1;

export default function InteractiveAppsPage({
  detectiveSrc = detectiveImg,
  onBackToWorks,
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [activeShotIndex, setActiveShotIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { caseStudy, screenshots, technologies } = CEAS_FIND_PROJECT;
  const isTitleScreen = screenIndex === 0;
  const isGalleryScreen = screenIndex === TOTAL_SCREENS - 1;
  const storyPage =
    !isTitleScreen && !isGalleryScreen ? STORY_PAGES[screenIndex - 1] : null;
  const activeShot = screenshots[activeShotIndex] || screenshots[0];

  const handlePrevScreen = () => {
    setScreenIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextScreen = () => {
    setScreenIndex((prev) => (prev < TOTAL_SCREENS - 1 ? prev + 1 : prev));
  };

  const handlePrevShot = () => {
    setActiveShotIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextShot = () => {
    setActiveShotIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const screenLabel = isTitleScreen
    ? 'TITLE'
    : isGalleryScreen
      ? 'SCREENSHOTS'
      : `CHAPTER ${screenIndex} OF ${STORY_PAGES.length}`;

  return (
    <div className="app-case-container page-enter">
      <header className="app-case-header">
        <button
          type="button"
          className="app-case-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        <nav className="app-case-nav">
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

        <button
          type="button"
          className="hamburger-btn app-case-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menuOpen && (
          <nav className="mobile-nav app-case-mobile-nav">
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

      <main className="app-case-main">
        <div className="app-case-top-bar">
          <button
            type="button"
            className="app-case-back-btn"
            onClick={() => onBackToWorks?.()}
          >
            ← Works
          </button>

          <span className="app-case-screen-tag">
            {screenLabel} · {screenIndex + 1} / {TOTAL_SCREENS}
          </span>
        </div>

        <section
          key={screenIndex}
          className="app-case-stage app-case-fade"
          aria-live="polite"
        >
          {isTitleScreen && (
            <div className="app-case-title-screen">
              <div className="app-case-title-copy">
                <span className="app-case-kicker">{CEAS_FIND_PROJECT.type}</span>
                <h1 className="app-case-title">{CEAS_FIND_PROJECT.name}</h1>
                <p className="app-case-lead">{CEAS_FIND_PROJECT.description}</p>
                <p className="app-case-role-line">
                  {caseStudy.role} · {caseStudy.timeline}
                </p>

                <div className="app-case-tech-row" aria-label="Technologies used">
                  {technologies.map((tech) => (
                    <span key={tech} className="app-case-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {detectiveSrc && (
                <div className="app-case-mascot-box">
                  <img
                    src={detectiveSrc}
                    alt="CEASFind detective character"
                    className="app-case-mascot-img"
                    decoding="async"
                  />
                </div>
              )}
            </div>
          )}

          {storyPage && (
            <div className="app-case-story-screen">
              <span className="app-case-kicker">
                CEASFIND · {caseStudy.role} ({caseStudy.timeline})
              </span>
              <h2 className="app-case-story-heading">{storyPage.heading}</h2>
              <p className="app-case-story-text">{storyPage.text}</p>
              {storyPage.id === 'lessons' && (
                <p className="app-case-privacy-note">{caseStudy.privacyNotice}</p>
              )}
            </div>
          )}

          {isGalleryScreen && activeShot && (
            <div className="app-case-gallery-screen">
              <div className="app-case-gallery-header">
                <span className="app-case-kicker">
                  VISUAL ARCHIVE · {activeShot.numeral} OF XII
                </span>
                <div className="app-case-shot-arrows">
                  <button
                    type="button"
                    className="app-case-mini-arrow"
                    onClick={handlePrevShot}
                    aria-label="Previous screenshot"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="app-case-mini-arrow"
                    onClick={handleNextShot}
                    aria-label="Next screenshot"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="app-case-shot-frame-wrap">
                <div
                  className="app-case-shot-stage"
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
                  <img
                    src={activeShot.image}
                    alt={activeShot.label}
                    className="app-case-shot-img"
                    decoding="async"
                  />
                </div>

                <div className="app-case-shot-footer">
                  <p className="app-case-shot-caption">{activeShot.caption}</p>
                  <button
                    type="button"
                    className="app-case-expand-btn"
                    onClick={() => setLightboxOpen(true)}
                  >
                    Inspect Full
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="app-case-pager">
          <button
            type="button"
            className="app-case-nav-btn"
            onClick={handlePrevScreen}
            disabled={screenIndex === 0}
          >
            ← Previous
          </button>

          <div className="app-case-dots" aria-hidden="true">
            {Array.from({ length: TOTAL_SCREENS }).map((_, idx) => (
              <span
                key={idx}
                className={`app-case-dot ${idx === screenIndex ? 'is-active' : ''}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="app-case-nav-btn is-primary"
            onClick={handleNextScreen}
            disabled={screenIndex === TOTAL_SCREENS - 1}
          >
            Next →
          </button>
        </div>
      </main>

      <div className="app-case-waves" aria-hidden="true">
        <img src={wave1} alt="" className="wave-1" />
        <img src={wave2} alt="" className="wave-2" />
        <img src={wave3} alt="" className="wave-3" />
        <img src={wave4} alt="" className="wave-4" />
        <img src={wave5} alt="" className="wave-5" />
        <img src={wave6} alt="" className="wave-6" />
      </div>

      {lightboxOpen && activeShot && (
        <div
          className="deck-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={activeShot.label}
        >
          <div className="deck-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <div className="deck-lightbox-top">
              <span className="deck-lightbox-title">{activeShot.label}</span>
              <button
                type="button"
                className="deck-lightbox-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close screenshot preview"
              >
                ✕
              </button>
            </div>

            <div className="deck-lightbox-stage">
              <button
                type="button"
                className="deck-lightbox-nav"
                onClick={handlePrevShot}
                aria-label="Previous screenshot"
              >
                ←
              </button>

              <div className="deck-lightbox-frame">
                <img src={activeShot.image} alt={activeShot.label} />
              </div>

              <button
                type="button"
                className="deck-lightbox-nav"
                onClick={handleNextShot}
                aria-label="Next screenshot"
              >
                →
              </button>
            </div>

            <p className="deck-lightbox-caption">{activeShot.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}