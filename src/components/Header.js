import React from 'react';
import rocks from './../assets/images/banners/banner_splash.jpg';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    width: '100vw',
    height: '85vh',
    backgroundImage: `url(${rocks})`,
    backgroundSize: 'cover',
    textAlign: 'center'
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
    textDecoration: 'none',
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
          @media (max-width: 500px){
            #tagline{
              font-size: 36px !important;
            }
          }
      `}
      </style>
      <Link id='tagline' style={styles.tagline} to='/services'><text>YOUR JOURNEY AWAITS</text></Link>
    </div>
  );
}

export default Header ;
