import React from 'react';
import rocks from './../assets/images/banners/banner_splash.jpg';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    position: 'absolute',
    width: '100vw',
    height: '85vh',
    textAlign: 'center',
    backgroundImage: `url(${rocks})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
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
    <div id='header' style={styles.header}>
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
          @media (min-width: 1100px){
            #header{
              background-size: cover !important;
            }
          }
      `}
      </style>
      <Link id='tagline' style={styles.tagline} to='/services'><p>YOUR JOURNEY AWAITS</p></Link>
    </div>
  );
}

export default Header ;
