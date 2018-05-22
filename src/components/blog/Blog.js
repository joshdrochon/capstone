import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const Blog = props => {
  return(
    <div>
      <BlogList
        blogPostList={props.blogPostList}
        onBlogPostSelection={props.onBlogPostSelection}
        selectedStory={props.selectedStory}
      />
    </div>
  );
}

Blog.propTypes = {
  blogPostList: PropTypes.array,
  onBlogPostSelection: PropTypes.func,
  selectedStory: PropTypes.string
};

export default Blog;
