import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const Blog = (props) => {
  console.log(props.blogPostList[0].title);

  // componentDidMount(){
  //   window.scrollTo(0,0)
  // }

  return(
    <div id='blog'>
      <BlogList blogPostList={props.blogPostList}/>
    </div>
  );
}

Blog.propTypes = {
  blogPostList: PropTypes.array
};

export default Blog ;
