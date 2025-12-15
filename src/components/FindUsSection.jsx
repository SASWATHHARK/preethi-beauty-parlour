// src/components/FindUsSection.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './FindUsSection.css';

// Import the preview image from src/assets (only if you placed it there).
// If you used public/preview.png, comment out the import and pass '/preview.png' as imageSrc prop.
import previewImg from '../assets/preview.jpg';

const FindUsSection = ({ imageSrc }) => {
  // finalImage will prefer prop, then imported asset, then null
  const finalImage = imageSrc || previewImg || null;

  const lat = 11.123944;
  const lng = 77.327472;
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=18&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="findus-section" aria-labelledby="findus-heading">
      <div className="findus-container">
        <div className="findus-info">
          <h2 id="findus-heading" className="findus-title">Find Us</h2>
          <p className="findus-sub">Visit Preethi's Parlour for bespoke styling and professional care.</p>

          <div className="findus-meta">
            <div className="meta-row">
              <MapPin className="meta-icon" aria-hidden="true" />
              <div>
                <div className="meta-label">Address</div>
                <div className="meta-text">14/29 First Cross Street Valayankadu V.O.C Nagar, Tirupur - 641603</div>
              </div>
            </div>

            <div className="meta-row">
              <Phone className="meta-icon" aria-hidden="true" />
              <div>
                <div className="meta-label">Phone</div>
                <a className="meta-link" href="tel:+919629529333">+91 96295 29333</a>
              </div>
            </div>

            <div className="meta-row">
              <Mail className="meta-icon" aria-hidden="true" />
              <div>
                <div className="meta-label">Email</div>
                <a className="meta-link" href="mailto:preethirajendran841@gmail.com">preethirajendran841@gmail.com</a>
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-icon-placeholder" />
              <div>
                <div className="meta-label">Hours</div>
                <div className="meta-text">
                  Monday–Sunday: <strong>10:00 AM – 8:30 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="findus-cta-row">
            <a className="btn-directions" href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
            <a className="btn-call" href="tel:+919629529333">Call Now</a>
          </div>

          {/* Preview image: show only if finalImage is truthy */}
          {finalImage ? (
            <div className="findus-image-preview" aria-hidden="true">
              <img src={finalImage} alt="Preview of Preethi's Parlour" />
            </div>
          ) : (
            <div className="findus-image-preview placeholder">
              <div className="placeholder-shape" />
            </div>
          )}
        </div>

        <div className="findus-map-wrap" role="presentation">
          <div className="map-toolbar">
            <span className="map-label">Map — Preethi's Parlour</span>
            <a
              className="map-directions-top"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open directions in Google Maps"
            >
              Get directions →
            </a>
          </div>

          <div className="map-frame">
            <iframe
              title="Preethi's Parlour location"
              src={embedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
