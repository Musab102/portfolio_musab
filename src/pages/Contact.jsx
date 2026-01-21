import React from 'react';
import SEO from '../components/common/SEO';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { personal } = portfolioData;

    return (
        <>
            <SEO
                title="Contact"
                description="Get in touch with Musab bin Mukhtar for Flutter development projects, mobile app consultations, or collaboration opportunities. Available for freelance work worldwide."
                keywords="Contact Musab bin Mukhtar, Hire Flutter Developer, Freelance Mobile Developer, App Development Inquiry, Flutter Consultation"
                path="/contact"
            />

            <section id="contact" className="section contact-page">
                <h1 className="section-title">Contact</h1>
                <div className="divider"></div>

                <p className="contact-intro">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>

                <div className="contact-content">
                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        <div className="contact-info-card">
                            <div className="contact-icon-box">
                                <FaEnvelope size={20} />
                            </div>
                            <div className="contact-info-details">
                                <span className="contact-info-label">Email</span>
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info-value"
                                >
                                    {personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-icon-box">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div className="contact-info-details">
                                <span className="contact-info-label">Location</span>
                                <span className="contact-info-value">{personal.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </section>
        </>
    );
};

export default Contact;
