import React, { useState, useCallback } from 'react';
import LoadingIntro from './LoadingIntro';
import LandingPage from './Landing-page';
import WorksPage from './WorksPage';
import InteractiveAppsPage from './InteractiveAppsPage';
import PitchDecksPage from './PitchDecksPage';
import DeckDetailPage from './DeckDetailPage';
import GraphicArtPage from './GraphicArtPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedDeckId, setSelectedDeckId] = useState('lol');

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  const goHome = () => setCurrentPage('landing');
  const goWorks = () => setCurrentPage('works');
  const goAbout = () => setCurrentPage('about');
  const goContact = () => setCurrentPage('contact');
  const goInteractiveApps = () => setCurrentPage('interactive-apps');
  const goPitchDecks = () => setCurrentPage('pitch-decks');
  const goGraphicArt = () => setCurrentPage('graphic-art');

  if (showIntro) {
    return <LoadingIntro onComplete={handleIntroComplete} />;
  }

  if (currentPage === 'about') {
    return (
      <AboutPage
        onNavigateHome={goHome}
        onNavigateWorks={goWorks}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
      />
    );
  }

  if (currentPage === 'contact') {
    return (
      <ContactPage
        onNavigateHome={goHome}
        onNavigateWorks={goWorks}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
      />
    );
  }

  if (currentPage === 'interactive-apps') {
    return (
      <InteractiveAppsPage
        onBackToWorks={goWorks}
        onNavigateHome={goHome}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
      />
    );
  }

  if (currentPage === 'deck-detail') {
    return (
      <DeckDetailPage
        deckId={selectedDeckId}
        onBackToDecks={goPitchDecks}
        onBackToWorks={goWorks}
        onNavigateHome={goHome}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
      />
    );
  }

  if (currentPage === 'pitch-decks') {
    return (
      <PitchDecksPage
        onBackToWorks={goWorks}
        onNavigateHome={goHome}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
        onSelectDeck={(deckId) => {
          setSelectedDeckId(deckId);
          setCurrentPage('deck-detail');
        }}
      />
    );
  }

  if (currentPage === 'graphic-art') {
    return (
      <GraphicArtPage
        onBackToWorks={goWorks}
        onNavigateHome={goHome}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
      />
    );
  }

  if (currentPage === 'works') {
    return (
      <WorksPage
        onNavigateHome={goHome}
        onNavigateAbout={goAbout}
        onNavigateContact={goContact}
        onOpenInteractiveApps={goInteractiveApps}
        onOpenPitchDecks={goPitchDecks}
        onOpenGraphicArt={goGraphicArt}
      />
    );
  }

  return (
    <LandingPage
      onNavigateWorks={goWorks}
      onNavigateAbout={goAbout}
      onNavigateContact={goContact}
    />
  );
}

export default App;