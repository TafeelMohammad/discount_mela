import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PromoCardGrid from './components/PromoCardGrid';
import HeroCarousel from './components/HeroCarousel';
// import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Mobile overlay */}
        {isSidebarOpen && <div className="overlay" onClick={toggleSidebar} />}

        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <PromoCardGrid />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
