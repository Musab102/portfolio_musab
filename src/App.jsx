import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './Layout.css';
import Layout from './components/Layout';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./pages/About'));
const ExpertisePage = lazy(() => import('./pages/Expertise'));
const ResumePage = lazy(() => import('./pages/Resume'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#64FFDA' }}>
    Loading...
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AboutPage />} />
              <Route path="expertise" element={<ExpertisePage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App


