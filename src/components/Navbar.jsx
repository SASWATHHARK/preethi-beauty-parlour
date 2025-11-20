import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ sections, scrollToRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const bookNowRef = sections.find(s => s.name === 'Book Now')?.ref;

  return (
   
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-content">
          
          {/* Logo / Brand Name */}
          <div className="navbar-brand-wrapper">
            <Sparkles className="navbar-icon" />
            <span className="navbar-logo-text">
              Preethi's Parlour
            </span>
          </div>
          
          {/* Navigation Links (Desktop) */}
          <nav className="navbar-links-desktop">
            {/* Filter out 'Book Now' as it's typically a separate CTA button */}
            {sections.filter(s => s.name !== 'Book Now').map(({ name, ref }) => (
              <button
                key={name}
                onClick={() => scrollToRef(ref)}
                className="navbar-link-button"
              >
                {name}
              </button>
            ))}
          </nav>
          
          {/* Call to Action Button (Desktop Only) */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToRef(bookNowRef)}
              // Custom button class for CTA: btn-small-accent
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu (visible when isOpen is true) */}
        <div 
          id="mobile-menu"
          className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}
          // Use style for transition effect
          style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
        >
          {sections.map(({ name, ref }) => (
            <button
              key={name}
              onClick={() => {
                scrollToRef(ref);
                setIsOpen(false); // Close menu on click
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