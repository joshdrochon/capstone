import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    textAlign: 'center',
    overflow: 'hidden'
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
    transition: 'text-shadow 0.5s ease-in-out',
    textDecoration: 'none'
  }
}

const Header = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #banner-home{
          width: 100%;
          display: block;
        }
        #tagline:hover{
          text-shadow: 0px 0px 10px;
          cursor: pointer;
        }
        @media(max-width: 700px){
          #tagline{
            font-size: 40px !important;
          }
        }
        @media(max-width: 500px){
          #tagline{
            font-size: 35px !important;
          }
        }
      `}
      </style>
      <div style={styles.flxImgC}>
        <img id='banner-home' src={require('./../../assets/images/banners/banner_home.jpg')}/>
      </div>
      <p><Link id='tagline' style={styles.tagline} to='/practice'>YOUR JOURNEY AWAITS</Link></p>
    </div>
  );
}

export default Header;