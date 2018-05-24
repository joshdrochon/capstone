import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const Blog = props => {
  return(
    <div>
      <BlogList
        blogPostList={props.blogPostList}
        onBlogPostSelection={props.onBlogPostSelection}
        selectedPost={props.selectedPost}
      />
    </div>
  );
}

Blog.propTypes = {
  blogPostList: PropTypes.object,
  onBlogPostSelection: PropTypes.func,
  selectedPost: PropTypes.string
};

export default Blog;
