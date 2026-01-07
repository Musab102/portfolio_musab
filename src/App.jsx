import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './Layout.css';
import Layout from './components/Layout';
import AboutPage from './pages/About';
import ExpertisePage from './pages/Expertise';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPage />} />
            <Route path="expertise" element={<ExpertisePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App

