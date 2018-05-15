import React, { Component } from 'react';
import BlogList from './BlogList';

class Blog extends Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <div id='blog'>
        <BlogList/>
      </div>
    );
  }
}

export default Blog ;
