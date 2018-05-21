import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const Blog = props => {
  return(
    <div>
      <BlogList
        blogPostList={props.blogPostList}
        onBlogPostSelection={props.onBlogPostSelection}
      />
    </div>
  );
}

Blog.propTypes = {
  blogPostList: PropTypes.array,
  onBlogPostSelection: PropTypes.func
};

export default Blog;
