import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = React.forwardRef((props, ref) => {
  return (
    // min-h-[90vh] bg-background flex items-center justify-center p-4 sm:p-12 border-b border-gray-100 -> hero-container
    <section ref={ref} id="hero" className="hero-container">
      {/* max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 -> hero-content-wrapper */}
      <div className="hero-content-wrapper">
        
        {/* Left: Content */}
        {/* flex-1 text-center lg:text-left pt-12 lg:pt-0 -> hero-text-area */}
        <div className="hero-text-area">
          {/* flex items-center justify-center lg:justify-start text-sm font-semibold uppercase text-accent mb-3 -> hero-tagline */}
          <p className="hero-tagline">
            <Sparkles className="h-4 w-4 mr-2" /> Elevate Your Look
          </p>
          {/* text-6xl font-extrabold text-gray-900 tracking-tighter leading-tight mb-6 -> hero-title */}
          <h1 className="hero-title">
            Preethi's Parlour: <br className="hidden md:inline" />
            {/* text-primary is applied inline */}
            Where <span style={{ color: 'var(--color-primary)' }}>Beauty Meets Art.</span>
          </h1>
          {/* text-xl text-gray-600 max-w-lg mb-8 mx-auto lg:mx-0 -> hero-subtitle */}
          <p className="hero-subtitle">
            Discover bespoke styling, personalized skin care, and the latest trends in hair and makeup. Book your next glow-up now.
          </p>
          {/* This uses btn-large-pink, which is already defined in index.css */}
          <a href="#booking" className="btn btn-large-pink">
            Explore Services <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
        
        {/* Right: Placeholder Image Box */}
        {/* flex-1 w-full lg:max-w-lg min-h-[450px] bg-gray-200 rounded-3xl shadow-2xl overflow-hidden border-8 border-white/50 flex items-center justify-center relative -> hero-image-box */}
        <div className="hero-image-box">
            {/* absolute inset-0 bg-primary/20 flex items-center justify-center -> hero-image-overlay */}
            <div className="hero-image-overlay">
              {/* text-xl font-medium text-primary-900 -> hero-image-placeholder-text */}
              <p className="hero-image-placeholder-text">High-Resolution Image Placeholder</p>
            </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;