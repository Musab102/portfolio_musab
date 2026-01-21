import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const handleNavLinkClick = (e, to) => {
        // Prevent clicking if we are already on that page
        if (location.pathname === to) {
            e.preventDefault();
        }
    };

    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li><NavLink to="/" onClick={(e) => handleNavLinkClick(e, "/")} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                    <li><NavLink to="/expertise" onClick={(e) => handleNavLinkClick(e, "/expertise")} className={({ isActive }) => isActive ? "active" : ""}>Expertise</NavLink></li>
                    <li><NavLink to="/resume" onClick={(e) => handleNavLinkClick(e, "/resume")} className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={(e) => handleNavLinkClick(e, "/portfolio")} className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" onClick={(e) => handleNavLinkClick(e, "/contact")} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
