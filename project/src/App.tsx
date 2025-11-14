import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import AuthSuccess from './components/AuthSuccess';
import Footer from './components/Footer';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img 
            src="https://i.postimg.cc/pX6RYmLQ/Adobe-Express-file.png" 
            alt="RR Hospital Logo" 
            className="h-32 w-32 object-contain animate-pulse"
          />
        </div>
        <h2 className="text-white text-2xl font-bold mt-6">RR Hospital</h2>
        <p className="text-blue-100 mt-2">Excellence in Healthcare</p>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="bg-hospital-wallpaper"></div>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/auth-success" element={<AuthSuccess />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;