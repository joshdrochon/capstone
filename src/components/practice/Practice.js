import React, { Component, Fragment } from 'react';
import Header from './Header';
import PracticeView1 from './PracticeView1';
import PracticeView2 from './PracticeView2';

class Practice extends Component{
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
    window.scrollTo(0, 0);
  }
  render(){
    return(
      <Fragment>
        <Header
          fadeIn={this.fadeIn.bind(this)}
          opacity={this.state.opacity}
        />
        <PracticeView1/>
        <PracticeView2/>
      </Fragment>
    );
  }
}

export default Practice;
