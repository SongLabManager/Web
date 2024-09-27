import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Professors from './pages/Professors.js';
import Members from './pages/Members.js';
import Research from './pages/Research.js';
import Publication from './pages/Publication';  // Publication 페이지 import
import Conference from './pages/Conference';
import MapPage from './pages/MapPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css'; // App.css 파일을 import


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/members" element={<Members />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/research" element={<Research />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/conference" element={<Conference />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
