import React, { Component, Fragment } from 'react';
import AboutView1 from './AboutView1';
import Header from './Header';
import Carousel from './Carousel';

class About extends Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <AboutView1/>
        <Carousel/>
      </Fragment>
    );
  }
}

export default About;
