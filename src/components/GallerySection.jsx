// src/components/GallerySection.jsx
import React from 'react';
import { Camera, Film } from 'lucide-react';
import './GallerySection.css';

/*
  Two ways to supply images:
  1) Import images at top (uncomment and use)
     import img1 from '../assets/hair1.jpg';
     import img2 from '../assets/facial1.jpg';
     ...
  2) Or use file paths (strings) in the `images` array below.
     Example file path included from your local upload for testing:
     '/mnt/data/fddca9b7-e399-43af-acb2-3b59a44dbba8.png'
*/

const GallerySection = React.forwardRef((props, ref) => {
  // Replace these with your actual image imports or public paths
  const images = [
    '/src/assets/hairstyled.jpg', // example (replace)
    '/src/assets/preview.jpg',                      // example relative path
    '/src/assets/mehendi.jpeg',
    '/src/assets/saree-draping.jpg',
    '/src/assets/bridal-look.webp'
  ];

  // Optional labels to show on each slide
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

  // autoplay (optional)
  React.useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % count);
    }, 4500);

    return () => clearInterval(autoplayRef.current);
  }, [count]);

  // keyboard left/right
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const prev = () => {
    clearInterval(autoplayRef.current);
    setIndex(i => (i - 1 + count) % count);
  };
  const next = () => {
    clearInterval(autoplayRef.current);
    setIndex(i => (i + 1) % count);
  };
  const goTo = (i) => {
    clearInterval(autoplayRef.current);
    setIndex(i);
  };

  return (
    <section ref={ref} id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="text-primary-label">Inspiration</h2>
        <h3 className="gallery-heading">Visual Showcase of Our Work</h3>

        <div className="slider" role="region" aria-roledescription="carousel" aria-label="Gallery slides">
          {/* Slides */}
          <div className="slides-wrapper" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((src, i) => (
              <div className="slide" key={i} aria-roledescription="slide" aria-label={`${i+1} of ${count}`}>
                <img src={src} alt={labels[i] || `Gallery image ${i+1}`} className="slide-image" />
                <div className="slide-overlay">
                  <div className="slide-label">{labels[i]}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="slider-btn prev" onClick={prev} aria-label="Previous slide">‹</button>
          <button className="slider-btn next" onClick={next} aria-label="Next slide">›</button>

          {/* Dots */}
          <div className="slider-dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i+1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </div>

        {/* grid preview below (optional) */}
        <div className="gallery-grid-layout" aria-hidden="true">
          {/* optional: keep the previous grid layout as preview thumbnails */}
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
