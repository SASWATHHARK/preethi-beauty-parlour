import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './HeroSection.css';

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

          <a href="#booking" className="btn btn-large-pink hero-cta">
            Explore Services 
            <ArrowRight className="hero-cta-icon" />
          </a>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="hero-image-box">
            <div className="hero-image-overlay">
              <p className="hero-image-placeholder-text">High-Resolution Image Placeholder</p>
            </div>
        </div>

      </div>
    </section>
  );
});

export default HeroSection;
