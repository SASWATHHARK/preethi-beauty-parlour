// src/components/GallerySection.jsx
import React from 'react';
import { Camera, Film } from 'lucide-react';
import imgHair from '../assets/hairstyled.jpg';
import imgFacial from '../assets/preview.jpg';
import imgMehendi from '../assets/mehendi.jpeg';
import imgSaree from '../assets/saree-draping.jpg';
import imgBridal from '../assets/bridal-look.webp';
import './GallerySection.css';

const GallerySection = React.forwardRef((props, ref) => {
  // Use imported images — Vite will resolve and copy them for you
  const images = [imgHair, imgFacial, imgMehendi, imgSaree, imgBridal];

  const labels = [
    'Hair Styled',
    'Facial & Skin Care',
    'Mehendi Design',
    'Saree Draping',
    'Bridal Look'
  ];

  const [index, setIndex] = React.useState(0);
  const count = images.length;
  const autoplayRef = React.useRef(null);

  // autoplay (pause on hover)
  React.useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((s) => (s + 1) % count);
    }, 4500);

    return () => clearInterval(autoplayRef.current);
  }, [count]);

  const stopAutoplay = () => clearInterval(autoplayRef.current);
  const restartAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((s) => (s + 1) % count);
    }, 4500);
  };

  const prev = () => {
    stopAutoplay();
    setIndex((i) => (i - 1 + count) % count);
  };

  const next = () => {
    stopAutoplay();
    setIndex((i) => (i + 1) % count);
  };

  const goTo = (i) => {
    stopAutoplay();
    setIndex(i);
  };

  // keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []); // no deps — attach once

  return (
    <section ref={ref} id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="text-primary-label">Inspiration</h2>
        <h3 className="gallery-heading">Visual Showcase of Our Work</h3>

        <div
          className="slider"
          role="region"
          aria-roledescription="carousel"
          aria-label="Gallery slides"
          onMouseEnter={stopAutoplay}
          onMouseLeave={restartAutoplay}
        >
          {/* slides track */}
          <div
            className="slides-wrapper"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div
                className="slide"
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count} — ${labels[i]}`}
              >
                <img
                  src={src}
                  alt={labels[i] || `Gallery ${i + 1}`}
                  className="slide-image"
                />
                <div className="slide-overlay">
                  <div className="slide-label">{labels[i]}</div>
                </div>
              </div>
            ))}
          </div>

          {/* prev/next buttons */}
          <button className="slider-btn prev" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className="slider-btn next" onClick={next} aria-label="Next slide">
            ›
          </button>

          {/* dots */}
          <div className="slider-dots" role="tablist" aria-label="Slide navigation">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-selected={i === index}
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* optional small preview grid */}
        <div className="gallery-grid-layout" aria-hidden="true">
          {labels.map((lbl, idx) => (
            <article key={idx} className="gallery-card small">
              <div className="gallery-card-overlay small">
                <Camera className="gallery-card-icon" />
                <p className="gallery-card-label">{lbl}</p>
              </div>
              <div className="gallery-placeholder" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;
