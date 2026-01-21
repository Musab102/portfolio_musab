import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './Layout.css';
import Layout from './components/Layout';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./pages/About'));
const ExpertisePage = lazy(() => import('./pages/Expertise'));
const ResumePage = lazy(() => import('./pages/Resume'));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetails'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#64FFDA' }}>
    Loading...
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Layout Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#fff', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#64FFDA', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<AboutPage />} />
                <Route path="expertise" element={<ExpertisePage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="portfolio/:id" element={<ProjectDetailsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  )
}

export default App



