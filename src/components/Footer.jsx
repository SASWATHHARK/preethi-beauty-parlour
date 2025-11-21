import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container footer-grid">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-brand-row">
            <Sparkles className="footer-icon" />
            <span className="footer-brand-text">Preethi's Parlour</span>
          </div>

          <p className="footer-text">
            Dedicated to bringing out your unique beauty with professional care
            and a luxurious experience.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="footer-heading">Contact</h4>

          <div className="footer-list">
            <p className="footer-text">
              <MapPin className="footer-small-icon" />
              14/29 First Cross Street Valayankadu V.O.C Nagar, Tirupur - 641603
            </p>

            <p className="footer-text">
              <Phone className="footer-small-icon" />
              +91 96295 29333
            </p>

            <p className="footer-text">
              <Mail className="footer-small-icon" />
              preethirajendran841@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-list">
            <li><a href="#services" className="footer-link">Services Menu</a></li>
            <li><a href="#gallery" className="footer-link">Our Portfolio</a></li>
            <li><a href="#reviews" className="footer-link">Client Feedback</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="footer-heading">Hours</h4>
          <ul className="footer-list">
            <li className="footer-text">Mon - Fri: 10:00 AM - 8:30 PM</li>
            <li className="footer-text">Saturday & Sunday: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>

      </div>

      {/* Social Media Section */}
      <div style={{ marginTop: '1.8rem', textAlign: 'left' }}>
        <h4 className="footer-heading">Follow Us</h4>

        <a
          href="https://www.instagram.com/_makeup_by_preethi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <Instagram className="instagram-icon" />
          <span>@_makeup_by_preethi_</span>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Preethi's Parlour. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
