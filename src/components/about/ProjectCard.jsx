import React from 'react';
import { FaApple, FaGooglePlay, FaGlobe, FaLock } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <div className="project-icon-wrapper">
                    <img src={project.icon} alt={project.title} className="project-icon" />
                </div>
                <h3 className="project-title">{project.title}</h3>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="card-actions">
                {project.isInternal ? (
                    <span className="internal-badge"><FaLock /> Internal Use Only</span>
                ) : (
                    <div className="store-links">
                        {project.links.appStore && <a href={project.links.appStore} style={{ color: '#007AFF' }}><FaApple /></a>}
                        {project.links.playStore && <a href={project.links.playStore} style={{ color: '#EA4335' }}><FaGooglePlay /></a>}
                        {project.links.web && <a href={project.links.web} style={{ color: '#fff' }}><FaGlobe /></a>}
                    </div>
                )}
            </div>

            <div className="phone-mockup-container">
                <div className="phone-mockup">
                    <div className="phone-notch"></div>
                    <img src={project.screenshot} alt={`${project.title} screenshot`} className="phone-screen" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
