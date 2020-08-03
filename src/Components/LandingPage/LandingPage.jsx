import React from 'react';
import './LandingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div className='background-img'>
        <div className='social-media-icons'>
          <FontAwesomeIcon 
            className='facebook-icon'
            icon={faFacebookSquare} 
            size='2x' 
          />
          <FontAwesomeIcon 
            className='instagram-icon'
            icon={faInstagram} 
            size='2x' 
          />
        </div>
      </div>
      <div className='logo-img'>
        
      </div>
    </div>
  );
}

export default LandingPage;