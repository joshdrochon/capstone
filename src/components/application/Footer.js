import React from 'react';
import insta from './../../assets/images/social/fb-icon.svg';
import fb from './../../assets/images/social/insta-icon.svg';

const styles = {
  footer: {
    display: 'flex',
    height: '90px',
    justifyContent: 'space-between',
    borderTop: '1px solid darkgray'
  },
  icon: {
    width: '36px',
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '20px'

  },
  copyright: {
    fontFamily: 'helvetica',
    fontSize: '16px',
    fontWeight: 'lighter',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '20px'
  },
  social: {
    //styles
  },
  hr: {
    margin: '5px 5px'
  }
}

const Footer = () => {
  return(
    <div id='footer' style={styles.footer}>
      <span style={styles.copyright}>YOGA WITH NATALI &#x24B8; 2018 <hr style={styles.hr}/>BUILT WITH LOVE BY JOSH ROCHON</span>
      <span style={styles.social}>
        <a target='_blank' href='https://facebook.com/natalicoronel'><img style={styles.icon} src={fb}/></a>
        <a target='_blank' href='https://instagram.com'><img style={styles.icon} src={insta}/></a>
      </span>
    </div>
  );
}

export default Footer;
