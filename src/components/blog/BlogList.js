import React, { Fragment } from 'react';
import BlogPost from './BlogPost';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    margin: '0px',
    overflow: 'hidden',
  }
}

const BlogList = () => {
  return(
    <BlogPost/>
  );
}

export default BlogList;
