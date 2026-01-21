import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">Ready to Turn Your Idea Into Reality?</h2>
                <p className="cta-text">
                    Whether you have a groundbreaking app idea or need a skilled developer to elevate your existing project, I'm here to help. Let's build something world-class together.
                </p>
                <Link to="/contact" className="cta-button">
                    Let's Connect
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
