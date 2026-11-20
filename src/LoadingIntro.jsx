import React, { useEffect, useState } from 'react';
import './App.css';

import stoolImg from './Elements/Stool.png';
import catBodyImg from './Elements/Black_Cat_Body.png';
import catHeadImg from './Elements/Black_Cat_Head.png';
import catTailImg from './Elements/Black_Cat_Tail.png';

export default function LoadingIntro({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 1800);

    const doneTimer = setTimeout(() => {
      onComplete?.();
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`intro-screen ${fadingOut ? 'intro-fade-out' : ''}`}
      onClick={() => {
        setFadingOut(true);
        setTimeout(() => onComplete?.(), 400);
      }}
    >
      {/* Oversized Repeating PORTFOLIO Backdrop */}
      <div className="intro-bg-words" aria-hidden="true">
        <div className="intro-row row-dark row-left">
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="intro-row row-muted row-right">
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="intro-row row-muted row-left">
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
          <span>PORTFOLIO</span>
        </div>
      </div>

      {/* Centered Cat + Stool */}
      <div className="intro-centerpiece">
        <div className="intro-cat-assembly">
          <img src={catTailImg} alt="" className="cat-tail" />
          <img src={catBodyImg} alt="" className="cat-body" />
          <img src={catHeadImg} alt="" className="cat-head" />
        </div>
        <img src={stoolImg} alt="" className="intro-stool" />
      </div>
    </div>
  );
}