import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import './Footer.css';
const Footer = () => {
  return (
    // Replaced bg-gray-900 text-white py-12 with the custom .footer class
    <footer className="footer">
      {/* Replaced max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 
          with .container and custom grid class. */}
      <div className="container footer-grid-layout">
        
        {/* Brand/Logo */}
        <div>
          {/* Flex items-center mb-4 */}
          <div className="flex items-center mb-4" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Sparkles icon color is set via style property since it uses a custom accent color */}
            <Sparkles className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
            {/* ml-2 text-2xl font-extrabold text-white tracking-tight */}
            <span className="ml-2" style={{ marginLeft: '0.5rem', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em' }}>Preethi's Parlour</span>
          </div>
          {/* text-sm text-gray-400 - using custom text color and font size */}
          <p className="footer-text-secondary">
            Dedicated to bringing out your unique beauty with professional care and a luxurious experience.
          </p>
        </div>
        
        {/* Contact Info */}
        <div>
          {/* text-lg font-bold mb-4 text-primary - using custom heading style */}
          <h4 className="footer-heading">Contact</h4>
          {/* space-y-3 text-sm - using custom spacing class */}
          <div className="space-y-3 footer-links-list">
            <p className="flex items-start footer-text-secondary" style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* h-4 w-4 mr-2 mt-1 text-accent - adjusted spacing and color via style */}
                <MapPin className="h-4 w-4" style={{ marginRight: '0.5rem', marginTop: '0.25rem', color: 'var(--color-primary)' }} /> 
                123 Luxurious Lane, Anna Nagar, Chennai - 600040
            </p>
            <p className="flex items-center footer-text-secondary" style={{ display: 'flex', alignItems: 'center' }}>
                {/* h-4 w-4 mr-2 text-accent - adjusted spacing and color via style */}
                <Phone className="h-4 w-4" style={{ marginRight: '0.5rem', color: 'var(--color-primary)' }} /> 
                +91 98765 43210
            </p>
            <p className="flex items-center footer-text-secondary" style={{ display: 'flex', alignItems: 'center' }}>
                {/* h-4 w-4 mr-2 text-accent - adjusted spacing and color via style */}
                <Mail className="h-4 w-4" style={{ marginRight: '0.5rem', color: 'var(--color-primary)' }} /> 
                booking@preethisparlour.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Explore</h4>
          {/* space-y-2 text-sm - using custom spacing class */}
          <ul className="space-y-2 footer-links-list">
            <li><a href="#services" className="footer-link">Services Menu</a></li>
            <li><a href="#gallery" className="footer-link">Our Portfolio</a></li>
            <li><a href="#reviews" className="footer-link">Client Feedback</a></li>
          </ul>
        </div>
        
        {/* Operating Hours (Placeholder) */}
        <div>
          <h4 className="footer-heading">Hours</h4>
          {/* space-y-2 text-sm text-gray-400 - using custom spacing and text class */}
          <ul className="space-y-2 footer-links-list footer-text-secondary">
            <li>Mon - Fri: 10:00 AM - 8:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

      </div>
      {/* mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500 */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Preethi's Parlour. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;