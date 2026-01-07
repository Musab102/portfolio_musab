import React from 'react';
import { portfolioData } from '../data/portfolio';

const Sidebar = () => {
    const { personal, socials } = portfolioData;

    return (
        <aside className="sidebar">
            <div className="profile-card">
                <div className="avatar-container">
                    <div className="avatar-placeholder">
                        <img src={personal.avatar} alt="Profile" />
                    </div>
                    <span className="online-status"></span>
                </div>
                <h2 className="profile-name">{personal.name}</h2>
                <div className="profile-role">{personal.role}</div>
            </div>

            <div className="contact-widgets">
                <div className="widget">
                    <div className="icon-box">
                        {(() => {
                            const EmailIcon = socials.find(s => s.label === "Google")?.icon;
                            return EmailIcon ? <EmailIcon /> : null;
                        })()}
                    </div>
                    <div className="info">
                        <span className="label">EMAIL</span>
                        <span className="value">{personal.email}</span>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-box"><span style={{ fontSize: '1.2em' }}>📍</span></div>
                    <div className="info">
                        <span className="label">LOCATION</span>
                        <span className="value">{personal.location}</span>
                    </div>
                </div>
            </div>

            <div className="social-links">
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a key={index} href={social.url} aria-label={social.label}>
                            <Icon />
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};


export default Sidebar;
