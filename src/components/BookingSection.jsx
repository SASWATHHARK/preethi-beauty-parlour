import React from 'react';
import { ClipboardList, X } from 'lucide-react';
import './BookingSection.css';

const BookingSection = React.forwardRef((props, ref) => {
  // ✅ Correct Google Form embed link
  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSeK3PL3iC_f5wuIGnqpktuENefTPFWIFyQzHJx-Fu4xPWHZVQ/viewform?embedded=true';

  const [showForm, setShowForm] = React.useState(false);

  return (
    <section ref={ref} id="booking" className="section-padding" aria-labelledby="booking-heading">
      <div className="container">

        {/* Heading */}
        <h2 id="booking-heading" className="text-primary-label">Secure Your Slot</h2>
        <h3 className="heading-primary">Start Your Registration Process</h3>

        <p
          className="text-lg"
          style={{
            color: '#666',
            maxWidth: '38rem',
            margin: '0 auto 2.5rem',
            lineHeight: '1.65'
          }}
        >
          To provide you with the best personalized service, we require a few details.
          Click the button below to complete our secure registration form.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => setShowForm(prev => !prev)}
          className="btn btn-primary btn-large-pink"
          aria-expanded={showForm}
          aria-controls="booking-form-embed"
        >
          <ClipboardList className="icon-inline" aria-hidden="true" />
          <span className="btn-text">
            {showForm ? 'Hide Registration Form' : 'Complete Client Registration'}
          </span>
        </button>

        {/* GOOGLE FORM EMBED */}
        {showForm && (
          <div
            id="booking-form-embed"
            className="form-embed-container"
            role="region"
            aria-label="Registration form"
          >
            {/* Header bar inside embed box */}
            <div className="form-header">
              <span className="form-title">Secure Google Registration Form</span>
              <button
                onClick={() => setShowForm(false)}
                className="form-close-btn"
                aria-label="Close registration form"
              >
                <X className="icon-inline" aria-hidden="true" />
              </button>
            </div>

            <div className="form-embed-inner">
              <iframe
                title="Google Registration Form"
                src={GOOGLE_FORM_URL}
                width="100%"
                height="820"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
              >
                Loading External Form…
              </iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default BookingSection;
