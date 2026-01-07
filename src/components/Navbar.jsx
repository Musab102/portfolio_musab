import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                    <li><NavLink to="/expertise" className={({ isActive }) => isActive ? "active" : ""}>Expertise</NavLink></li>
                    <li><NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink></li>
                    <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
