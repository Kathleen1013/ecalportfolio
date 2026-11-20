import React, { useRef, useState } from 'react';
import './App.css';

import wave1 from './Elements/mainwave1.png';
import wave2 from './Elements/mainwave2.png';
import wave3 from './Elements/mainwave3.png';
import wave4 from './Elements/mainwave4.png';
import wave5 from './Elements/mainwave5.png';
import wave6 from './Elements/mainwave6.png';
import self from './Elements/self.png';

import python1Pdf from './Elements/Python1.pdf';
import python2Pdf from './Elements/Python2.pdf';
import html1Pdf from './Elements/HTML1.pdf';
import html2Pdf from './Elements/HTML2.pdf';
import cssPdf from './Elements/CSS.pdf';
import nse1Pdf from './Elements/NSE1Cert.pdf';
import cybersecCertPdf from './Elements/CybersecCert.pdf';
import dataPrivacyCertPdf from './Elements/DataPrivacyCert.pdf';

const SKILLS = [
  'UI / UX & Product Design',
  'Interactive Prototyping',
  'Visual & Pitch Storytelling',
  'Frontend & Motion UI',
  'Digital & Character Art',
];

const CERTIFICATES = [
  {
    id: 'python-1',
    numeral: 'I',
    title: 'PYTHON I',
    issuer: 'Programming & Foundations',
    year: '2026',
    summary: 'Core Python syntax, control flow, data structures, and problem solving.',
    file: python1Pdf,
  },
  {
    id: 'python-2',
    numeral: 'II',
    title: 'PYTHON II',
    issuer: 'Programming & Foundations',
    year: '2026',
    summary: 'Functions, modular code, file handling, and intermediate Python concepts.',
    file: python2Pdf,
  },
  {
    id: 'html-1',
    numeral: 'III',
    title: 'HTML I',
    issuer: 'Web Fundamentals',
    year: '2026',
    summary: 'Semantic document structure, elements, and accessible web markup.',
    file: html1Pdf,
  },
  {
    id: 'html-2',
    numeral: 'IV',
    title: 'HTML II',
    issuer: 'Web Fundamentals',
    year: '2026',
    summary: 'Forms, media integration, structured layouts, and multi-page markup.',
    file: html2Pdf,
  },
  {
    id: 'css',
    numeral: 'V',
    title: 'CSS',
    issuer: 'Styling & Responsive Layout',
    year: '2026',
    summary: 'Flexbox, grid systems, typography, visual polish, and responsive design.',
    file: cssPdf,
  },
  {
    id: 'nse-1',
    numeral: 'VI',
    title: 'NSE 1',
    issuer: 'Network Security',
    year: '2026',
    summary: 'Foundational threat landscape awareness and network security concepts.',
    file: nse1Pdf,
  },
  {
    id: 'cybersec-cert',
    numeral: 'VII',
    title: 'CYBERSECURITY CERTIFICATE',
    issuer: 'Security & Defense',
    year: '2026',
    summary: 'Core cybersecurity principles, risk awareness, and defensive practices.',
    file: cybersecCertPdf,
  },
  {
    id: 'data-privacy-cert',
    numeral: 'VIII',
    title: 'DATA PRIVACY CERTIFICATE',
    issuer: 'Privacy & Compliance',
    year: '2026',
    summary: 'Data protection principles, responsible handling, and privacy standards.',
    file: dataPrivacyCertPdf,
  },
];

export default function AboutPage({
  portraitSrc = '',
  onNavigateHome,
  onNavigateWorks,
  onNavigateAbout,
  onNavigateContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const [selectedCert, setSelectedCert] = useState(null);

  const headingText =
    activeTab === 'story'
      ? 'I’M KATHLEEN ECAL'
      : activeTab === 'skills'
        ? 'CRAFT & SKILLS'
        : 'CREDENTIALS';

  return (
    <div className="about-container landing page-enter">
      <header className="about-header">
        <button
          type="button"
          className="about-logo"
          onClick={() => onNavigateHome?.()}
        >
          Kathleen Ecal
          <span className="desktop-subtitle">
            <span className="logo-divider">|</span> Product Designer
          </span>
        </button>

        <nav className="about-nav">
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
            className="active"
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
          className="hamburger-btn about-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menuOpen && (
          <nav className="mobile-nav about-mobile-nav">
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
              className="active"
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

      <main className="about-main">
        <div className="about-stage-grid">
          <section className="about-left-panel" aria-label="About, skills, and credentials">
            <div className="about-top-group">
                <div className="about-chapter-tabs" role="tablist" aria-label="About sections">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'story'}
                        className={`about-tab-btn ${activeTab === 'story' ? 'is-active' : ''}`}
                        onClick={() => setActiveTab('story')}
                    >
                        I · STORY
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'credentials'}
                        className={`about-tab-btn ${activeTab === 'credentials' ? 'is-active' : ''}`}
                        onClick={() => setActiveTab('credentials')}
                    >
                        II · CREDENTIALS
                    </button>
                </div>

                    <h1 className="about-title">
                    {activeTab === 'story' ? 'I’M KATHLEEN ECAL' : 'CREDENTIALS'}
                    </h1>
            </div>

            {activeTab === 'story' && (
            <div className="about-story-block">
                <div className="about-story-copy">
                <p>
                    Product designer blending whimsical storybook charm and graphic
                    illustration with interactive web experiences.
                </p>
                <p>
                    Shaping pitch decks, playful interfaces, and digital art into
                    memorable, human-centered worlds.
                </p>
                </div>

                <ul className="about-skills-list" aria-label="Skills">
                {SKILLS.map((skill) => (
                    <li key={skill} className="about-skill-chip">
                    {skill}
                    </li>
                ))}
                </ul>
            </div>
            )}

            {activeTab === 'credentials' && (
                <div className="about-certs-list">
                    {CERTIFICATES.map((cert) => (
                    <button
                        key={cert.id}
                        type="button"
                        className="about-cert-card"
                        onClick={() => setSelectedCert(cert)}
                    >
                        <span className="about-cert-numeral">{cert.numeral}</span>
                        <div className="about-cert-meta">
                        <strong className="about-cert-title">{cert.title}</strong>
                        <span className="about-cert-sub">
                            {cert.issuer} · {cert.year}
                        </span>
                        </div>
                        <span className="about-cert-arrow" aria-hidden="true">→</span>
                    </button>
                    ))}
                </div>
            )}

           
          </section>

          <div className="about-arch-stage">
            <div className="about-arch-frame">
              <img
                src={portraitSrc || self}
                alt="Kathleen Ecal"
                className="about-arch-img self"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </main>
      
      <div className="about-waves" aria-hidden="true">
        <img src={wave1} alt="" className="wave-1" />
        <img src={wave2} alt="" className="wave-2" />
        <img src={wave3} alt="" className="wave-3" />
        <img src={wave4} alt="" className="wave-4" />
        <img src={wave5} alt="" className="wave-5" />
        <img src={wave6} alt="" className="wave-6" />
      </div>

      {selectedCert && (
        <div
          className="about-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div className="about-modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="about-modal-top">
              <span className="about-modal-badge">
                CERTIFICATE {selectedCert.numeral} · {selectedCert.year}
              </span>
              <button
                type="button"
                className="about-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            <h3 className="about-modal-title">{selectedCert.title}</h3>
            <p className="about-modal-issuer">{selectedCert.issuer}</p>

            {selectedCert.file && (
              <div className="about-modal-img-wrap">
                {/\.pdf($|\?)/i.test(selectedCert.file) ? (
                  <iframe
                    src={`${selectedCert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={selectedCert.title}
                    className="about-modal-pdf"
                  />
                ) : (
                  <img src={selectedCert.file} alt={selectedCert.title} />
                )}
              </div>
            )}

            <p className="about-modal-summary">{selectedCert.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}