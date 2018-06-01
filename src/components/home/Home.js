import React, { Component, Fragment } from 'react';
import Header from './Header';
import HomeView1 from './HomeView1';
import { fetchQuote } from './../../helpers';

class Home extends Component {
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
    fetchQuote();
  }
  render(){
    return(
      <Fragment>
        <Header
          fadeIn={this.fadeIn.bind(this)} opacity={this.state.opacity}
        />
        <HomeView1/>
      </Fragment>
    );
  }
}

export default Home;
