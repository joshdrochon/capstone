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

const Header = props => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <img onLoad={props.fadeIn} style={{opacity: props.opacity}} className='banner' src={require('./../../assets/images/banners/banner_practice.jpg')}/>
    </div>
  </div>
);

export default Header;
