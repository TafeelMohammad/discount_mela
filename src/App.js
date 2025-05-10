import React, { useState } from 'react';
import Sidebar from './components/sidebar';
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
    <div className="App">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Mobile overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar} />}

      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
      <div className="App">
      <HeroCarousel />
      <PromoCardGrid />
    </div>
      </div>
    </div>
  );
}

export default App;
