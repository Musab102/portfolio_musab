import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data/portfolio';
import PortfolioCard from '../components/portfolio/PortfolioCard';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filterCategories = ['All', 'Mobile Applications', 'Programming Language'];

    const filteredProjects = activeFilter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(project => project.category === activeFilter);

    return (
        <>
            <Helmet>
                <title>Portfolio - {portfolioData.personal.name}</title>
                <meta name="description" content="Browse my portfolio of mobile applications and programming projects" />
            </Helmet>

            <section className="section portfolio-section">
                <h1 className="section-title">Portfolio</h1>
                <div className="divider"></div>

                <div className="filter-tabs">
                    {filterCategories.map((category) => (
                        <button
                            key={category}
                            className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => {
                        // Get the original index from the full projects array
                        const originalIndex = portfolioData.projects.indexOf(project);
                        return (
                            <PortfolioCard key={index} project={project} index={originalIndex} />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Portfolio;
