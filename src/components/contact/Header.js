import React from 'react';
import reachOut from './../../assets/images/banners/banner_contact.jpg';

function scrollable(){
  let target = document.getElementById('contact-form').getBoundingClientRect();
  window.scrollTo(0, target.top);

  console.log(target.top, target.right, target.bottom, target.left);
}

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
        #pointer:hover{
          text-shadow: 0px 0px 10px;
          cursor: pointer;
        }
      `}
      </style>
      <span style={styles.pointer} onClick={scrollable} id='pointer' style={styles.pointer}>CONTACT US</span>
    </div>
  );
}

export default Header;
