import React from 'react';
import rocks from './../assets/images/banners/banner_splash.jpg';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    width: '100vw',
    height: '90vh',
    textAlign: 'center',
    backgroundImage: `url(${rocks})`,
    backgroundSize: 'cover'
  },
  logoContainer: {
    position: 'absolute',
    width: '70vw',
    height: 'max-content',
    fontSize: 'inherit',
    border: '1px solid black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  logo: {
    fontSize: 'inherit',
    color: 'white',
    fontWeight: 'lighter'
  },
  tagline: {
    fontSize: '40px',
    color: 'white',
    fontWeight: 'lighter',
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const Header = () => {
  return(
    <div style={styles.header}>
      <style>{`
          #tagline:hover{
            text-shadow: 0px 0px 10px;
            cursor: pointer;
          }
          #tagline a{
            text-decoration: none;
            color: inherit;
          }
      `}</style>
      <span style={styles.logoContainer}>
        <span id='logo' style={styles.logo}>YOGA WITH NATALI</span><br/>
        <span id='tagline' style={styles.tagline}><Link to='/services'>START YOUR JOURNEY</Link></span>
      </span>
    </div>
  );
}

export default Header ;
