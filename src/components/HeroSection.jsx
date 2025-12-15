// src/components/HeroSection.jsx
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import "./HeroSection.css";

// import your image from src/assets
import previewImage from "../assets/bridal-pht.jpg";

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
            Preethi's Makeup and Beauty Parlour:{" "}
            <br className="hero-title-break" />
            Where{" "}
            <span className="hero-title-highlight">Beauty Meets Art.</span>
          </h1>

          <p className="hero-subtitle">
            Discover bespoke styling, personalized skin care, and the latest
            trends in hair and makeup. Book your next glow-up now.
          </p>

          {/* WRAP BUTTON HERE */}
          <div className="hero-cta-row">
            <a
              href="#booking"
              className="btn btn-large-pink hero-cta"
              aria-label="Book and Appointment"
            >
              Explore Services
              <ArrowRight className="hero-cta-icon" />
            </a>
            <a
              href="#gallery"
              className="btn btn-ghost hero-cta-ghost"
              aria-label="View Gallery"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="hero-image-box" aria-hidden="true">
          <div className="hero-image-glow" />
          <img
            src={previewImage}
            alt="Preethi applying bridal makeup"
            className="hero-image"
            loading="lazy"
          />

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Bridal artistry specialist
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
