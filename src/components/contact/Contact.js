import React, { Component, Fragment } from 'react';
import Header from './Header';
import ContactView1 from './ContactView1';


class ContactPage extends Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <ContactView1/>
      </Fragment>
    );
  }
}

export default ContactPage;
