import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import AboutView1 from './AboutView1';
import AboutView2 from './AboutView2';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      opacity: 0
    };
  }

  fadeIn(){
    this.setState({
      opacity: 1
    });
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render(){
    return(
      <Fragment>
        <Header
          fadeIn={this.fadeIn.bind(this)}
          opacity={this.state.opacity}
        />
        <AboutView1/>
        <AboutView2/>
      </Fragment>
    );
  }
}

export default About;
