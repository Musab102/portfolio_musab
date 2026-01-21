import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data/portfolio';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = portfolioData.projects[parseInt(id)];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <Helmet>
                <title>{project.title} - Portfolio - {portfolioData.personal.name}</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <section className="section project-details-section">
                {/* Back Button */}
                <button className="back-button" onClick={() => navigate('/portfolio')}>
                    <FaArrowLeft /> Back to Portfolio
                </button>

                {/* Project Header */}
                <div className="project-header-top">
                    <div>
                        <h1 className="section-title">{project.title}</h1>
                        <div className="divider"></div>
                        <p className="project-description">{project.description}</p>
                    </div>
                </div>

                {/* Project Screenshot/Hero */}
                {project.screenshot && (
                    <div className="project-hero">
                        <img src={project.screenshot} alt={project.title} />
                    </div>
                )}

                {/* Tech Stack Section */}
                {project.techStack && (
                    <div className="project-section">
                        <h2 className="project-section-title">🔧 Tech Stack & Tools</h2>
                        <div className="tech-stack-grid">
                            {project.techStack.map((tech, index) => (
                                <div key={index} className="tech-badge">
                                    {tech.icon && <tech.icon style={{ color: tech.color }} />}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Features Section */}
                {project.features && (
                    <div className="project-section">
                        <h2 className="project-section-title">🔥 Key Features</h2>
                        <div className="features-grid">
                            {project.features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">
                                        {feature.icon && <feature.icon />}
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <ul className="feature-list">
                                        {feature.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Project Highlights */}
                {project.highlights && (
                    <div className="project-section">
                        <h2 className="project-section-title">⭐ Project Highlights</h2>
                        <div className="highlights-container">
                            {project.highlights.map((highlight, index) => (
                                <div key={index} className="highlight-item">
                                    <img src={highlight.image} alt={highlight.title} />
                                    <div className="highlight-badge">{highlight.badge}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ProjectDetails;
