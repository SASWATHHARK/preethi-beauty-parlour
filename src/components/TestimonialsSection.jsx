import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const ReviewCard = ({ quote, name, service }) => (
    <div className="review-card">
        <div className="review-rating">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon" />
            ))}
        </div>

        <p className="review-quote">"{quote}"</p>

        <div className="review-meta">
            <p className="review-name">— {name}</p>
            <p className="review-service">{service}</p>
        </div>
    </div>
);

const TestimonialsSection = React.forwardRef((props, ref) => {
    const reviews = [
        { quote: "Absolutely loved the makeup. It lasted all night, and Preethi was so professional and attentive to detail.", name: "Swathiga", service: "Bridal Makeup" },
        { quote: "My hair color has never looked better! The staff is friendly, and the atmosphere is incredibly relaxing.", name: "Deepika", service: "Global Hair Colour" },
        { quote: "Preethi did an amazing job! The makeup looked flawless in all my photos and felt so light on my skin.", name: "Harini", service: "Reception Makeup" },
        { quote: "Loved her patience and creativity. She understood exactly what I wanted and delivered the perfect look.", name: "Subha Shree", service: "Engagement Makeup" },
        { quote: "The makeup was elegant and stayed fresh for hours. Preethi made the whole process so comfortable.", name: "Pooja", service: "Bridal Makeup" },
        { quote: "Very professional and friendly. My hairstyle and makeup complemented each other beautifully!", name: "Shona", service: "Party Makeup" },
        { quote: "Highly recommended! Preethi gave me a natural yet stunning look. Everyone loved it!", name: "Pooja Nandhini", service: "Photoshoot Makeup" },
    ];

    return (
        <section ref={ref} id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                
                <h2 className="text-primary-label">Client Love</h2>
                <h3 className="section-main-title">Hear From Our Happy Customers</h3>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default TestimonialsSection;
