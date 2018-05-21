import React from 'react';

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
        #banner-practice{
          width: 100%;
          display: block;
        }
      `}
      </style>
      <div style={styles.flxImgC}>
        <img id='banner-practice' src={require('./../../assets/images/banners/banner_practice.jpg')}/>
      </div>
    </div>
  );
}

export default Header;
