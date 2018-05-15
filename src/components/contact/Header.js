import React from 'react';
import reachOut from './../../assets/images/banners/banner_contact.jpg';
import { scrollable } from './../../helpers';

const styles = {
  header: {
    width: '100vw',
    height: '90vh',
    textAlign: 'center',
    position: 'fixed',
    backgroundImage: `url(${reachOut})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
}
const Header = () => {
  return(
    <div id='header' style={styles.header}>
      <style>{`
        #pointer-lg{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: max-content;
          color: white;
          font-size: 70px;
          transition: text-shadow 0.5s ease-in-out;
        }
        @media(min-width: 700px){
          #header{
            background-size: cover !important;
          }
        }
        @media(max-width: 700px){
          #pointer-lg{
            display: none;
          }
        }
      `}
      </style>
      <p onClick={scrollable} id='pointer-lg'>Contact Us</p>
    </div>
  );
}

export default Header;
