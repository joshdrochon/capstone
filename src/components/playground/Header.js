import React from 'react';
import bannerPlayground from './banner_playground.jpg';

const styles = {
  header: {
    width: '100vw',
    height: '700px',
    textAlign: 'center',
    position: 'fixed',
    top: '80px',
    backgroundImage: `url(${bannerPlayground})`,
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
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const Header = () => {
  return(
    <div id='header' style={styles.header}>
      <style>{`
        @media(min-width: 700px){
          #header{
            background-size: cover !important;
          }
        }
        @media(max-width: 700px){
          #tagline-lg{
            display: none;
          }
        }
      `}
      </style>
      <p id='tagline-lg' style={styles.tagline}>X</p>
    </div>
  );
}

export default Header;
