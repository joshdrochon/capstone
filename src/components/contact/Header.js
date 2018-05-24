import React from 'react';
import { Link } from 'react-router-dom';
import { scrollable } from './../../helpers';

const styles = {
  flexParent: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    textAlign: 'center',
    overflow: 'hidden'
  }
}

const Header = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #banner-img{
          width: 100%;
          display: block;
        }
        #tagline{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: max-content;
          color: white;
          font-size: calc(30px + 2.5vw);
          transition: text-shadow 0.5s ease-in-out;
        }
        #tagline:hover{
          text-shadow: 0px 0px 10px;
          cursor: pointer;
        }
        @media(max-width: 700px){
          #tagline{
            font-size: 40px;
          }
        }
        @media(max-width: 500px){
          #tagline{
            font-size: 35px;
          }
        }
      `}
      </style>
      <div style={styles.flxImgC}>
        <img id='banner-img' src={require('./../../assets/images/contact/reach-out.jpg')}/>
      </div>
      <p id='tagline' onClick={scrollable}>CONTACT US</p>
    </div>
  );
}

export default Header;
