import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/home-logo.svg';
import '../styles.css'

function Home() {
  return (
    <div className="Home">
      <div className="svg-logo">
        <img src={logoSvg} alt="Logo SVG" />
      </div>
      <Link to="/maingallery" className="gallery-link-text">Gallery</Link>
    </div>
  );
}

export default Home;
