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

  const lat = 10.996801955657424;
  const lng = 77.34504697481902;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.403194424817!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90f21eb322afb%3A0x55882e6bb343843b!2sPreethi%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1732192200000!5m2!1sen!2sin`;
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
                <div className="meta-text">123 Luxurious Lane, Anna Nagar, Tirupur - 641603</div>
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
                  Mon–Fri: 10:00 AM – 8:00 PM<br/>
                  Saturday: 10:00 AM – 6:00 PM<br/>
                  Sunday: Closed
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
