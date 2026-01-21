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
        setSubmitStatus(null);

        try {
            const formDataObj = new FormData();
            formDataObj.append("name", formData.fullName);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);
            formDataObj.append("_subject", `New Portfolio Message from ${formData.fullName}`);
            formDataObj.append("_captcha", "false"); // Disables captcha for smoother UX

            const response = await fetch("https://formsubmit.co/ajax/1605c88f7825ca80587983d62a4373f5", {
                method: "POST",
                body: formDataObj
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ fullName: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
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
