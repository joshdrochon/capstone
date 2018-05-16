import React, { Component } from 'react';
import ContactView1 from './ContactView1';
import Form from './Form';
import ContactDetails from './ContactDetails';

const styles = {
  contactWrapper: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'white',
    top: '83vh',
    height: 'max-content'
  }
}

const ContactWrapper = () => {
  return(
    <div id='contact-wrapper' style={styles.contactWrapper}>
      <style>{`
        @media(max-width: 700px){
          #contact-wrapper{
            top: 50vh !important;
          }
      `}
      </style>
      <ContactView1/>
      <Form/>
      <ContactDetails/>
    </div>
  );
}

export default ContactWrapper;
