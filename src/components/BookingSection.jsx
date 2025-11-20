import React from 'react';
import { ClipboardList, X } from 'lucide-react';

const BookingSection = React.forwardRef((props, ref) => {
  // IMPORTANT: Replace this with your actual Google Form 'embed' URL
  // Example structure: https://docs.google.com/forms/d/e/1FAIpQLScz7tX8y_YOUR_FORM_ID_HERE/viewform?embedded=true
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScz7tX8y_YOUR_FORM_ID_HERE/viewform?embedded=true';
  const [showForm, setShowForm] = React.useState(false);

  return (
    // Replaced py-20 bg-white with a custom class combining spacing and background
    <section ref={ref} id="booking" className="section-padding" style={{ backgroundColor: 'white' }}>
      {/* Replaced max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center with container and text-center */}
      <div className="container text-center">
        
        {/* Customized heading styles */}
        <h2 className="text-primary-label">Secure Your Slot</h2>
        <h3 className="heading-primary mb-10">Start Your Registration Process</h3>
        
        {/* Replaced text-lg text-gray-600 mb-8 max-w-3xl mx-auto with a paragraph style and max-width in style */}
        <p className="text-lg mb-8" style={{ color: '#666', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
          To provide you with the best personalized service, we require a few details. Click the button below to complete our secure registration form.
        </p>
        
        {/* Applied custom .btn-primary with additional icon spacing */}
        <button
          onClick={() => setShowForm(prev => !prev)}
          className="btn btn-primary btn-large-pink"
        >
          {/* Added margin-right via inline style to keep icon spacing clean */}
          <ClipboardList className="h-6 w-6" style={{ marginRight: '0.75rem' }} /> 
          {showForm ? 'Hide Registration Form' : 'Complete Client Registration'}
        </button>

        {/* Google Form Embed Area */}
        {showForm && (
          // Adjusted form container styling
          <div className="form-embed-container">
            <div className="form-header">
              <span className="font-medium text-sm">Secure Google Registration Form</span>
              <button 
                  onClick={() => setShowForm(false)}
                  className="form-close-btn"
                  aria-label="Close form"
              >
                  <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              title="Google Registration Form"
              src={GOOGLE_FORM_URL}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              // Removed Tailwind class, replaced with plain style
              style={{ width: '100%', backgroundColor: 'white' }}
            >
              Loading External Form…
            </iframe>
          </div>
        )}

      </div>
    </section>
  );
});

export default BookingSection;

// Adding custom styles for Booking Section that weren't global
/* This is a comment block demonstrating the CSS classes 
applied in the component that need to be added to src/index.css
*/
/*
.text-primary-label {
    font-size: 0.875rem; // text-sm
    font-weight: 600; // font-semibold
    text-transform: uppercase; // uppercase
    color: var(--color-primary); // text-primary
    margin-bottom: 0.5rem; // mb-2
    letter-spacing: 0.1em; // tracking-widest
}

.heading-primary { // Reused from global CSS for consistency
    font-size: 2.25rem; // text-4xl
    font-weight: 800; // font-extrabold
    color: var(--color-text); // text-gray-900
    margin-bottom: 2.5rem; // mb-10
}

.btn-large-pink {
    // Custom button style for the main CTA
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem; // px-8 py-4
    font-size: 1.25rem; // text-xl
    background-color: var(--color-primary); // bg-accent (using primary defined in index.css)
    border-radius: var(--border-radius-base); // rounded-xl
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // shadow-xl
    transition: all 0.3s ease;
    transform: none; // initial scale
}

.btn-large-pink:hover {
    background-color: #e65c9f; // Slightly darker pink
    transform: scale(1.05); // hover:scale-105
}

.form-embed-container {
    margin-top: 3rem; // mt-12
    width: 100%;
    max-width: 80rem; // max-w-5xl
    margin-left: auto;
    margin-right: auto; // mx-auto
    border: 4px solid #f3f4f6; // border-4 border-gray-100
    border-radius: 1rem; // rounded-2xl
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); // shadow-2xl
    transition: all 0.5s;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem; // p-3
    background-color: var(--color-primary); // bg-primary
    color: white; // text-white
}

.form-close-btn {
    padding: 0.25rem; // p-1
    border-radius: 9999px; // rounded-full
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form-close-btn:hover {
    background-color: rgba(255, 255, 255, 0.2); // hover:bg-white/20
}
*/