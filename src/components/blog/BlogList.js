import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const BlogList = (props) => {
  console.log(props);
  return(
    <div id='blog-list'>
      <style>{`
        #blog-list>:last-child{
          padding-bottom: 60px;
        }
      `}
      </style>
      {props.blogPostList.map((post, index) =>
      <BlogPost
        title={post.title}
        body={post.body}
        image={post.image}
        key={index}/>
      )}
      <BlogPost/>
    </div>
  );
}

BlogList.propTypes = {
  blogPostList: PropTypes.array
}

export default BlogList;
