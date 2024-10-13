import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-image-lightbox/style.css';
import '../gallery.css';
import gettingReadyThumb from '../images/getting-ready-thumbnail.jpg'
import ceremonyThumb from '../images/ceremony-thumbnail.jpg'
import famAndBridalThumb from '../images/family-bridal.jpg'
import brideGroomThumb from '../images/bride-groom.jpg'
import receptionThumb from '../images/reception-thumbnail.jpg'

export default function MainGallery() {
  return (
  <div>
            <h1 className="gallery-header">Gallery</h1>
    <div className="gallery-page">
      <div className="sections">
        <Link to="/maingallery/getting-ready" className="thumbnail-link">
            <div className="thumbnail">
              <img src={gettingReadyThumb} alt="Getting Ready" className="thumbnail-img" />
              <div className="overlay">
                <div className="thumbnail-text">Getting Ready</div>
              </div>
            </div>
          </Link>
  
      <Link to="/maingallery/ceremony" className="thumbnail-link">
      <div className="thumbnail">
          <img src={ceremonyThumb} alt="Ceremony" className="thumbnail-img"/>
          <div className="overlay">
            <div className="thumbnail-text">Ceremony</div>
          </div>
      </div>
      </Link>

      <Link to="/maingallery/family-bridal" className="thumbnail-link">
      <div className="thumbnail">
          <img src={famAndBridalThumb} alt="Family & Bridal Party" className="thumbnail-img"/>
          <div className="overlay">
            <div className="thumbnail-text">Family & Bridal Party</div>
          </div>
      </div>
      </Link>

      <Link to="/maingallery/bride-groom" className="thumbnail-link">
      <div className="thumbnail">
          <img src={brideGroomThumb} alt="Bride & Groom" className="thumbnail-img"/>
          <div className="overlay">
            <div className="thumbnail-text">Bride & Groom</div>
          </div>
      </div>
      </Link>

      <Link to="/maingallery/reception" className="thumbnail-link">
      <div className="thumbnail">
          <img src={receptionThumb} alt="Reception" className="thumbnail-img"/>
          <div className="overlay">
            <div className="thumbnail-text">Reception</div>
          </div>
      </div> </Link>
  </div>
  </div>
  </div>

  );
}
