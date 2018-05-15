import React, { Fragment } from 'react';
import Header from './Header';
import ContactView1 from './ContactView1';
import ContactView2 from './ContactView2';

const ContactPage = () => {
  return(
    <Fragment>
      <Header/>
      <ContactView1/>
      <ContactView2/>
    </Fragment>
  );
}

export default ContactPage;
