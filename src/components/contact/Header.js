import React from 'react';
import reachOut from './../../assets/images/banners/banner_contact.jpg';

const styles = {
  header: {
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${reachOut})`,
    backgroundSize: 'cover'
  },
  pointer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'calc(30px + 2.5vw)',
    color: 'white',
    fontWeight: 'lighter',
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const Header = () => {
  return(
    <div style={styles.header}>
      <style>{`
        #contact-pointer:hover{
          text-shadow: 0px 0px 10px;
          cursor: pointer;
        }
        #contact-pointer a{
          text-decoration: none;
          color: inherit;
        }
      `}
      </style>
      <span style={styles.pointer} id='contact-pointer' style={styles.pointer}><a href='#contact-form'>CONTACT US</a></span>
    </div>
  );
}

export default Header;
