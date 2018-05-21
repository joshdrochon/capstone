import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  flexParent: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    overflow: 'hidden'
  }
}

const Header = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #banner-about{
          width: 100%;
          display: block;
        }
      `}
      </style>
      <div style={styles.flxImgC}>
        <img id='banner-about' src={require('./../../assets/images/banners/banner_about.jpg')}/>
      </div>
    </div>
  );
}

export default Header;
