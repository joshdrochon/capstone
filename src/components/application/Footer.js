import React from 'react';
import insta from './../../assets/images/social/fb-icon.svg';
import fb from './../../assets/images/social/insta-icon.svg';
import { fbLink } from './Content.js';

const styles = {
  footer: {
    display: 'flex',
    height: '90px',
    justifyContent: 'space-between',
    padding: '5px'
  },
  copyright: {
    fontFamily: 'helvetica',
    fontSize: '16px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '20px'
  },
  icon: {
    width: '36px',
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '20px'
  }
}

const Footer = () => (
  <div id='footer' style={styles.footer}>
    <style>{`
        @media(max-width: 500px){
          #cr{
            margin-left: 2px !important;
            font-size: 12px !important;
          }
          #icons img{
            margin-right: 2px !important;
            width: 24px !important;
            height: 24px !important;
          }
          #footer{
            height: max-content !important;
          }
        }
    `}
    </style>
    <span id='cr' style={styles.copyright}>YOGA WITH NATALI &#x24B8; 2018</span>
    <span id='icons' style={styles.social}>
      <a target='_blank' href={fbLink}><img style={styles.icon} src={fb}/></a>
      <a target='_blank' href='https://instagram.com'><img style={styles.icon} src={insta}/></a>
    </span>
  </div>
);

export default Footer;
