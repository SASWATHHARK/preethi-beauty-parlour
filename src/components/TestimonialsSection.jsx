import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const ReviewCard = ({ quote, name, service, rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    return (
        <div className="review-card">
            <div className="review-rating">
                {[...Array(5)].map((_, i) => {
                    let extraClass = '';

                    if (i < fullStars) {
                        extraClass = 'star-full';
                    } else if (i === fullStars && hasHalf) {
                        extraClass = 'star-half';
                    } else {
                        extraClass = 'star-empty';
                    }

                    return <Star key={i} className={`star-icon ${extraClass}`} />;
                })}
            </div>

            <p className="review-quote">"{quote}"</p>

            <div className="review-meta">
                <p className="review-name">— {name}</p>
                <p className="review-service">{service}</p>
            </div>
        </div>
    );
};

const TestimonialsSection = React.forwardRef((props, ref) => {
    const reviews = [
        {
            quote: "Absolutely loved the makeup. It lasted all night, and Preethi was so professional and attentive to detail.",
            name: "Priyanka",
            service: "Bridal Makeup",
            rating: 5,
        },
        {
            quote: "My look has never been this stunning! She’s so friendly, and the whole session felt incredibly relaxing.",
            name: "Deepika",
            service: "Global Hair Colour",
            rating: 4.5,
        },
        {
            quote: "Preethi did an amazing job! The makeup looked flawless in all my photos and felt so light on my skin.",
            name: "Shruthe",
            service: "Reception Makeup",
            rating: 4,
        },
        {
            quote: "Loved her patience and creativity. She understood exactly what I wanted and delivered the perfect look.",
            name: "Dhakshitha",
            service: "Engagement Makeup",
            rating: 5,
        },
        {
            quote: "The makeup was elegant and stayed fresh for hours. Preethi made the whole process so comfortable.",
            name: "Kanishka",
            service: "Bridal Makeup",
            rating: 4.5,
        },
        {
            quote: "Very professional and friendly. My hairstyle and makeup complemented each other beautifully!",
            name: "Janani",
            service: "Party Makeup",
            rating: 4,
        },
        {
            quote: "Highly recommended! Preethi gave me a natural yet stunning look. Everyone loved it!",
            name: "Samuythuka",
            service: "Photoshoot Makeup",
            rating: 5,
        },
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
