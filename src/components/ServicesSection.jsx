import React from 'react';
import { Scissors, Zap, Heart, Sparkle } from 'lucide-react';
import './ServicesSection.css';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="service-card">
        <Icon className="service-icon" />
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
    </div>
);

const ServicesSection = React.forwardRef((props, ref) => {
    const services = [
        { icon: Scissors, title: "Hair Styling ", description: "Soft, elegant hairstyles crafted to enhance your natural beauty with a flawless, polished finish." },
        { icon: Zap, title: "Facials & Skin Care", description: "Rejuvenating treatments, deep cleansing, and personalized anti-aging therapies." },
        { icon: Heart, title: "Mehendi", description: "Modern and traditional mehendi patterns blended with elegance for all celebrations and events." },
        { icon: Sparkle, title: "Bridal & Party Makeup", description: "Flawless, long-lasting looks for your special occasions, tailored to perfection." },
    ];

    return (
        <section ref={ref} id="services" className="services-section">
            <div className="services-container">
                <h2 className="text-primary-label">Our Specialties</h2>
                <h3 className="section-main-title">
                    Discover Our Full Range of Services
                </h3>

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
