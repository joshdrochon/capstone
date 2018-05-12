import React from 'react';
import Header from './Header';
import BlogView1 from './BlogView1';
import Carousel from './Carousel';

const Blog = () => {
  return(
    <div id='blog'>
      <Header/>
      <BlogView1/>
      <Carousel/>
    </div>
  );
}

export default Blog ;
