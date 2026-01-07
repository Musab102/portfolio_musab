import React from 'react';
import { FaSearch, FaPalette, FaLaptopCode, FaRocket } from 'react-icons/fa';

const strategies = [
    {
        icon: <FaSearch color="#90CAF9" />, // Light Blue
        title: "Planning & Strategy",
        description: "I analyze your goals, target users, and key features to create a roadmap for your app's success."
    },
    {
        icon: <FaPalette color="#FFCC80" />, // Orange
        title: "Pixel-Perfect UI/UX Design",
        description: "I create intuitive, visually appealing, and user-friendly interfaces that enhance engagement and usability."
    },
    {
        icon: <FaLaptopCode color="#80CBC4" />, // Teal/Cyan
        title: "Efficient Development & Seamless Integration",
        description: "I build high-performance, scalable applications with clean, maintainable code. I integrate essential features like API connections, third-party services, and IAP to enhance functionality."
    },
    {
        icon: <FaRocket color="#EF9A9A" />, // Red
        title: "Launch & Post-Launch Support",
        description: "I ensure a hassle-free deployment and provide ongoing updates, optimizations, and support to keep your app running flawlessly."
    }
];

const StrategySection = () => {
    return (
        <section id="strategy" className="section">
            <h2 className="section-title">Strategic Implementation Pathway</h2>

            <div className="strategy-grid">
                {strategies.map((item, index) => (
                    <div key={index} className="strategy-card">
                        <div className="strategy-icon">{item.icon}</div>
                        <h3 className="strategy-title">{item.title}</h3>
                        <p className="strategy-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StrategySection;
