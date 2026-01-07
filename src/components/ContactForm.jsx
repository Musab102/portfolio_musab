import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        try {
            // You can integrate with EmailJS, Formspree, or your own backend
            await new Promise(resolve => setTimeout(resolve, 1000));

            // For now, open mailto link as fallback
            const mailtoLink = `mailto:musabbinmukhtar123@gmail.com?subject=Contact from ${formData.fullName}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.fullName}%0AEmail: ${formData.email}`;
            window.location.href = mailtoLink;

            setSubmitStatus('success');
            setFormData({ fullName: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Form</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-textarea"
                    />
                </div>

                <div className="form-actions">
                    <button
                        type="submit"
                        className={`send-button ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                    >
                        <FaPaperPlane className="send-icon" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </div>

                {submitStatus === 'success' && (
                    <div className="form-message success">
                        Message sent successfully!
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="form-message error">
                        Failed to send message. Please try again.
                    </div>
                )}
            </form>
        </section>
    );
};

export default ContactForm;
