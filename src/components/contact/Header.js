import React from 'react';
import { Link } from 'react-router-dom';
import { scrollable } from './../../helpers';

const styles = {
  flexParent: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    textAlign: 'center',
    overflow: 'hidden'
  }
}

const Header = props => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <img onLoad={props.fadeIn} className='banner' style={{opacity: props.opacity}} src={require('./../../assets/images/contact/reach-out.jpg')}/>
    </div>
    <p className='tagline' onClick={scrollable}>CONTACT US</p>
  </div>
);

export default Header;
