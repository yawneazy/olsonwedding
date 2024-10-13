import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from "./pages/Gallery";
import MainGallery from './pages/MainGallery';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<MainGallery />} />
      <Route path="/maingallery" element={<MainGallery />} />
      <Route path="/maingallery/:section" element={<Gallery/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
