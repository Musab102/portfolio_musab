import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PortfolioCard = ({ project, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/portfolio/${index}`);
    };

    return (
        <div className="portfolio-card" onClick={handleClick}>
            <div className="portfolio-card-hover-overlay">
                <FaEye className="portfolio-card-eye-icon" />
            </div>
            <div className="portfolio-card-logo">
                <img src={project.icon} alt={`${project.title} logo`} />
            </div>
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-category">{project.category}</p>
        </div>
    );
};

export default PortfolioCard;
