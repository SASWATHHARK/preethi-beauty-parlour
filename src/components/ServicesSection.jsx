import React from 'react';
import { Scissors, Zap, Heart, Sparkle } from 'lucide-react';

// Service Card component refactored to use custom CSS classes
const ServiceCard = ({ icon: Icon, title, description }) => (
    // Replaced all utility classes with 'service-card' for styling, hover, and shadow effects.
    <div className="service-card">
        {/* 'service-icon' handles size, color, and centering */}
        <Icon className="service-icon" />
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
    </div>
);

const ServicesSection = React.forwardRef((props, ref) => {
    const services = [
        { icon: Scissors, title: "Hair Styling & Colour", description: "From expert cuts to vibrant, custom color blends using premium products." },
        { icon: Zap, title: "Facials & Skin Care", description: "Rejuvenating treatments, deep cleansing, and personalized anti-aging therapies." },
        { icon: Heart, title: "Manicure & Pedicure", description: "Luxury hand and foot care, including gel polish, spa treatments, and nail art." },
        { icon: Sparkle, title: "Bridal & Party Makeup", description: "Flawless, long-lasting looks for your special occasions, tailored to perfection." },
    ];

    return (
        // Using 'section-padding' and utility classes for background/border
        <section 
            ref={ref} 
            className="section-padding bg-background border-t border-gray-100" 
        >
            {/* Using 'container' and 'text-center' */}
            <div className="container text-center">
                {/* Custom label style: text-primary-label */}
                <h2 className="text-primary-label">Our Specialties</h2>
                {/* Custom large title style: section-main-title */}
                <h3 className="section-main-title">Discover Our Full Range of Services</h3>
                
                {/* Custom responsive grid style: services-grid (handles 1/2/4 columns) */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ServicesSection;