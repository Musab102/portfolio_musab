import React from 'react';
import { portfolioData } from '../data/portfolio';

const Expertise = () => {
    const { expertise } = portfolioData;

    return (
        <section id="expertise" className="section expertise-section">
            <h1 className="section-title">{expertise.title}</h1>
            <div className="divider"></div>

            <div className="expertise-content">
                {expertise.sections.map((section, index) => (
                    <div key={index} className="expertise-category">
                        <div className="category-header">
                            <span className="category-icon">
                                <section.icon />
                            </span>
                            <h2 className="category-title">{section.title}</h2>
                        </div>

                        <div className="tech-tree">
                            {section.subSections.map((sub, subIndex) => (
                                <div key={subIndex} className="tree-node">
                                    <div className="node-connector">
                                        <div className="dot"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="node-content">
                                        <h3 className="node-title">{sub.title}</h3>
                                        <div className="skills-grid">
                                            {sub.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="skill-chip">
                                                    <span className="skill-icon" style={{ color: skill.color }}>
                                                        <skill.icon />
                                                    </span>
                                                    <span className="skill-name">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
