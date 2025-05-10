import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import LocationFinder from './pages/LocationFinder';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/locations" element={<LocationFinder />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;