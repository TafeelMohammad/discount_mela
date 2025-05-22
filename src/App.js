import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import PromoCardGrid from './components/PromoCardGrid';
import HeroCarousel from './components/HeroCarousel';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import './App.css';

// Wrapper component to access `useLocation` outside Routes
const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Hide Sidebar & button on login and signup pages
  const hideSidebar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="App">
      <Navbar />
      {!hideSidebar && (
        <>
          <button className="toggle-button" onClick={toggleSidebar}>
            ☰
          </button>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          {isSidebarOpen && <div className="overlay" onClick={toggleSidebar} />}
        </>
      )}

      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
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
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
