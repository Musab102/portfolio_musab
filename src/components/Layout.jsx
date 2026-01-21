import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <Navbar />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
