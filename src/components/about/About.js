import React, { Component, Fragment } from 'react';
import AboutView1 from './AboutView1';
import AboutView2 from './AboutView2';
import Header from './Header';

class About extends Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <AboutView1/>
        <AboutView2/>
      </Fragment>
    );
  }
}

export default About;
