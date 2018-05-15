import React, { Fragment } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  return(
    <Fragment>
      <BlogPost key={1}/>
      <BlogPost key={2}/>
      <BlogPost key={3}/>
    </Fragment>
  );
}

export default BlogList;
