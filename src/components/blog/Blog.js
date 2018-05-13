import React, { Component } from 'react';
import Header from './Header';
import BlogView1 from './BlogView1';
import Carousel from './Carousel';

class Blog extends Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <div id='blog'>
        <Header/>
        <BlogView1/>
        <Carousel/>
      </div>
    );
  }
}

export default Blog ;
