import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import Skills from './Skills';

const Resume = () => {
    const { resume } = portfolioData;

    return (
        <section id="resume" className="section resume-section">
            <h1 className="section-title">{resume.title}</h1>
            <div className="divider"></div>

            <div className="resume-content">
                <div className="experience-header">
                    <div className="icon-box">
                        <FaBookOpen size={20} color="#64FFDA" />
                    </div>
                    <h2 className="category-title">Experience</h2>
                </div>

                <div className="timeline">
                    {resume.experience.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h3 className="timeline-title">{item.title}</h3>
                            <div className="timeline-company">{item.company}</div>
                            <div className="timeline-date">{item.date}</div>
                            {item.description && (
                                <p className="timeline-description">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <Skills />
        </section>
    );
};

export default Resume;

