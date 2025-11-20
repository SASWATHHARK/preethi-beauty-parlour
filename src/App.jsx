import React, { useRef } from 'react';

// Import all components we will create in src/components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

// A simple utility function for smooth scrolling
const scrollToRef = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const App = () => {
  // 1. Define Refs for Navigation (used by Navbar to scroll)
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bookingRef = useRef(null);

  // 2. Define the section configuration passed to the Navbar
  const sections = [
    { name: 'Home', ref: heroRef },
    { name: 'Services', ref: servicesRef },
    { name: 'Gallery', ref: galleryRef },
    { name: 'Reviews', ref: testimonialsRef },
    { name: 'Book Now', ref: bookingRef },
  ];

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
        <BookingSection ref={bookingRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;