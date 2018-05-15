import React from 'react';
import reachOut from './../../assets/images/banners/banner_contact.jpg';

const styles = {
  header: {
    width: '100vw',
    height: '90vh',
    textAlign: 'center',
    backgroundImage: `url(${reachOut})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
}
const Header = () => {
  return(
    <div id='header' style={styles.header}>
      <style>{`
        @media(min-width: 1100px){
          #header{
            background-size: cover !important;
          }
        }
      `}
      </style>
    </div>
  );
}

export default Header;
