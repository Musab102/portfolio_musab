import React from 'react';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import pdfPrinterImg from '../../assets/images/pdf_printer_app.jpeg';


import StrategySection from './StrategySection';
import CTASection from './CTASection';

const About = () => {
    const { about, stats, projects } = portfolioData;

    return (
        <>
            <section id="about" className="section">
                <h1 className="section-title">{about.title}</h1>
                <div className="divider"></div>

                <div className="bio">
                    {about.bio.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            <p dangerouslySetInnerHTML={{
                                __html: paragraph.replace(about.highlight, `<span class="highlight">${about.highlight}</span>`)
                            }} />
                            {index < about.bio.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
            </section>

            <section id="milestones" className="section">
                <h2 className="section-title">🚀 Milestones & Achievements</h2>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="portfolio" className="section">
                <h2 className="section-title">Here's Some Of Our Work</h2>
                <p className="subtitle">Don't just take my word for it — here's a look at what I've built 🚀</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            <StrategySection />

            <CTASection />
        </>
    );
};

export default About;
