import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const styles = {
  flexParent: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    overflow: 'hidden'
  },
  tagline: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    color: 'white',
    fontWeight: 'lighter',
    fontSize: 'calc(30px + 2.5vw)',
    transition: 'text-shadow 0.5s ease-in-out',
    textDecoration: 'none'
  }
}

const Header = () => {
  return(
    <div style={styles.flexParent}>
      <div style={styles.flxImgC}>
        <Carousel />
      </div>
      <p style={styles.tagline}>ABOUT US</p>
    </div>
  );
}

export default Header;
