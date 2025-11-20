import React from 'react';
import { Camera, Film } from 'lucide-react';

const GallerySection = React.forwardRef((props, ref) => {
  const mediaItems = [
    // Original colors are used inline via style
    { type: 'Image', backgroundColor: '#eef2ff', icon: Camera, label: 'Hair Styling Result' }, // bg-indigo-100
    { type: 'Image', backgroundColor: '#fff1f2', icon: Camera, label: 'Makeup Transformation' }, // bg-rose-100
    { type: 'Video', backgroundColor: '#f0fff4', icon: Film, label: 'Behind the Scenes Video' }, // bg-green-100
    { type: 'Image', backgroundColor: '#faf5ff', icon: Camera, label: 'Nail Art Design' }, // bg-purple-100
  ];

  return (
    // Replaced py-20 bg-white with section-padding, using bg-white for clarity
    <section ref={ref} id="gallery" className="section-padding" style={{ backgroundColor: 'white' }}>
      {/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -> container text-center */}
      <div className="container text-center">
        {/* text-sm font-semibold uppercase text-primary mb-2 tracking-widest -> text-primary-label */}
        <h2 className="text-primary-label">Inspiration</h2>
        {/* text-4xl font-extrabold text-gray-900 mb-12 -> Customized heading */}
        <h3 className="mb-12" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827' }}>Visual Showcase of Our Work</h3>
        
        {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -> gallery-grid-layout */}
        <div className="gallery-grid-layout">
          {mediaItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-card" 
              style={{ backgroundColor: item.backgroundColor }}
            >
              {/* absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-4 -> gallery-card-overlay */}
              <div className="gallery-card-overlay">
                {/* h-8 w-8 text-gray-700/80 group-hover:text-primary transition-colors duration-300 -> gallery-card-icon */}
                <item.icon className="gallery-card-icon" />
                {/* mt-2 text-sm font-medium text-gray-700 -> gallery-card-label */}
                <p className="gallery-card-label">{item.label}</p>
              </div>
              {/* w-full h-full border-dashed border-2 border-gray-400 opacity-50 -> gallery-placeholder */}
              <div className="gallery-placeholder"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;