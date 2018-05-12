import React from 'react';
import openHands from './../../assets/images/banners/banner_services.jpg';

const styles = {
  header: {
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${openHands})`,
    backgroundSize: 'cover'
  }
}

const Header = () => {
  return(
    <div style={styles.header}></div>
  );
}

export default Header;
