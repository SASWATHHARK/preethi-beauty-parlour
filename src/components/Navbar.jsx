import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/preethi-logo.jpg';

const Navbar = ({ sections, scrollToRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bookNowRef = sections.find(s => s.name === 'Book Now')?.ref;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Brand */}
          <a className="navbar-brand-wrapper" href="#hero" aria-label="Go to hero">
            <img src={logo} alt="Preethi's logo" className="navbar-logo" loading="lazy" />
            <span className="navbar-logo-text">Preethi's Makeup and Beauty Parlour</span>
          </a>

          {/* Desktop Links */}
          <nav className="navbar-links-desktop">
            {sections
              .filter(s => s.name !== 'Book Now')
              .map(({ name, ref }) => (
                <button
                  key={name}
                  onClick={() => scrollToRef(ref)}
                  className="navbar-link-button"
                >
                  {name}
                </button>
              ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="navbar-cta-desktop">
            <button
              onClick={() => scrollToRef(bookNowRef)}
              className="btn btn-small-accent"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Links */}
        <div
          id="mobile-menu"
          className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}
        >
          {sections.map(({ name, ref }) => (
            <button
              key={name}
              onClick={() => {
                scrollToRef(ref);
                setIsOpen(false);
              }}
              className="navbar-link-button-mobile"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
