import React from 'react';
import { Camera, Film } from 'lucide-react';
import './GallerySection.css';

const GallerySection = React.forwardRef((props, ref) => {
  const mediaItems = [
    // Use background class names (no inline styles)
    { type: 'Image', bgClass: 'bg-indigo', icon: Camera, label: 'Hair Styling Result' },
    { type: 'Image', bgClass: 'bg-rose', icon: Camera, label: 'Makeup Transformation' },
    { type: 'Video', bgClass: 'bg-green', icon: Film, label: 'Behind the Scenes Video' },
    { type: 'Image', bgClass: 'bg-purple', icon: Camera, label: 'Nail Art Design' },
  ];

  return (
    <section ref={ref} id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="text-primary-label">Inspiration</h2>
        <h3 className="gallery-heading">Visual Showcase of Our Work</h3>

        <div className="gallery-grid-layout" role="list">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className={`gallery-card ${item.bgClass}`}
                role="listitem"
                tabIndex={0}
              >
                <div className="gallery-card-overlay" aria-hidden="true">
                  <Icon className="gallery-card-icon" />
                  <p className="gallery-card-label">{item.label}</p>
                </div>

                <div className="gallery-placeholder" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;
