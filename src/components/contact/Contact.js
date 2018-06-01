import React, { Component, Fragment } from 'react';
import Header from './Header';
import ContactView1 from './ContactView1';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: 0
    }
  }

  fadeIn(){
    this.setState({
      opacity: 1
    })
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return(
      <Fragment>
        <Header
          fadeIn={this.fadeIn.bind(this)}
          opacity={this.state.opacity}
        />
        <ContactView1/>
      </Fragment>
    );
  }
}

export default Contact;
