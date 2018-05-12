import React, { Component, Fragment } from 'react';
import Form from './Form';
import Header from './Header';


class ContactPage extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <Form/>
      </Fragment>
    );
  }
}

export default ContactPage;
