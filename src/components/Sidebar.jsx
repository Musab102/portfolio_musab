import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
                <h2 className="profile-name">Musab <br />Bin Mukhtar</h2>
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
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="value"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {personal.email}
                        </a>
                    </div>
                </div>
                <div className="widget">
                    <div className="icon-box"><FaMapMarkerAlt /></div>
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
                        <a
                            key={index}
                            href={social.url}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon />
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};


export default Sidebar;
