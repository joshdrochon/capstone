import React, { Fragment } from 'react';
import AboutView1 from './AboutView1';
import AboutView2 from './AboutView2';
import Header from './Header';

const About = () => {
  return(
    <Fragment>
      <Header/>
      <AboutView1/>
      <AboutView2/>
    </Fragment>
  );
}

export default About;
