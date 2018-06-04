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
  }
}

const Header = props => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <Carousel
        fadeIn={props.fadeIn}
        opacity={props.opacity}
      />
    </div>
    <p className='tagline'>ABOUT US</p>
  </div>
);

export default Header;
