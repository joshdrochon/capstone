import React, { Fragment } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  return(
    <div id='blog-list'>
      <style>{`
          #blog-list>:last-child{
            padding-bottom: 70px;
          }
      `}
      </style>
      <BlogPost key={1}/>
      <BlogPost key={2}/>
    </div>
  );
}

export default BlogList;
