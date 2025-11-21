// src/components/HeroSection.jsx
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './HeroSection.css';

// import your image from src/assets
import previewImage from '../assets/preview.jpg';

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="hero" className="hero-container">
      <div className="hero-content-wrapper">

        {/* LEFT TEXT AREA */}
        <div className="hero-text-area">
          <p className="hero-tagline">
            <Sparkles className="hero-tagline-icon" />
            Elevate Your Look
          </p>

          <h1 className="hero-title">
            Preethi's Parlour: <br className="hero-title-break" />
            Where <span className="hero-title-highlight">Beauty Meets Art.</span>
          </h1>

          <p className="hero-subtitle">
            Discover bespoke styling, personalized skin care, and the latest trends
            in hair and makeup. Book your next glow-up now.
          </p>

          <a href="#booking" className="btn btn-large-pink hero-cta" aria-label="Explore Services">
            Explore Services
            <ArrowRight className="hero-cta-icon" />
          </a>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="hero-image-box" aria-hidden="true">
          {/* decorative overlay shapes remain via CSS ::before */}
          {/* actual image fills the box and is behind overlay text */}
          <img src={previewImage} alt="Preethi's Parlour preview" className="hero-image" />
          <div className="hero-image-overlay">
            <p className="hero-image-placeholder-text"></p>
          </div>
        </div>

      </div>
    </section>
  );
});

export default HeroSection;
