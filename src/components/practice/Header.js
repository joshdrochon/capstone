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
    <style>{`
      {/*sequence delay */}

      .sd{
        opacity: 0;
        animation: sd 1s ease-in forwards;
      }
      @keyframes sd {
        100%{
          opacity: 1;
        }
      }
      .this{
        {/* for clarity */}
        animation-delay: 0s;
      }
      .is{
        animation-delay: 1s;
      }
      .bal{
        animation-delay: 2s;
      }
    `}
    </style>
    <div style={styles.flxImgC}>
      <img onLoad={props.fadeIn} style={{opacity: props.opacity}} className='banner' src={require('./../../assets/images/banners/banner_practice.jpg')}/>
    </div>
    <p className='tagline'><span className='sd this'>this. </span><span className='sd is'>is. </span><span className='sd bal'>balance</span></p>
  </div>
);

export default Header;
