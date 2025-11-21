import React, { useRef } from 'react';

// Import all components we will create in src/components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';

// A simple utility function for smooth scrolling
const scrollToRef = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const App = () => {
  // 1. Define Refs for Navigation (used by Navbar to scroll)
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const findUsRef = useRef(null);      // <-- new
  const bookingRef = useRef(null);

  // 2. Define the section configuration passed to the Navbar
  // Added "Find Us" before "Book Now" so it appears in the nav
  const sections = [
    { name: 'Home', ref: heroRef },
    { name: 'Services', ref: servicesRef },
    { name: 'Gallery', ref: galleryRef },
    { name: 'Reviews', ref: testimonialsRef },
    { name: 'Find Us', ref: findUsRef },   // <-- new section
    { name: 'Book Now', ref: bookingRef },
  ];

  // local preview image path (system-hosted). Your environment will serve it.
  const previewImagePath = "";

  return (
    <div className="min-h-screen bg-background text-gray-800 antialiased">
      {/* 3. Pass sections and scrollToRef function to the Navbar */}
      <Navbar sections={sections} scrollToRef={scrollToRef} />

      <main>
        {/* 4. Attach Refs to each section */}
        <HeroSection ref={heroRef} />
        <ServicesSection ref={servicesRef} />
        <GallerySection ref={galleryRef} />
        <TestimonialsSection ref={testimonialsRef} />

        {/* FindUsSection wrapped in a div that holds the ref (component not forwardRef) */}
        <div ref={findUsRef}>
          <FindUsSection imageSrc={previewImagePath} />
        </div>

        <BookingSection ref={bookingRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
