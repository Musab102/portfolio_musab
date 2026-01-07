import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { resume } = portfolioData;
    const skills = resume.skills;
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="skills-section">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-info">
                            <span className="skill-name-bar">{skill.name}</span>
                            <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="skill-bar-track">
                            <div
                                className="skill-bar-fill"
                                style={{
                                    width: animated ? `${skill.percentage}%` : '0%',
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
