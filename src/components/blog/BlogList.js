import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const BlogList = props => {
  return(
    <div id='blog-list'>
      <style>{`
        #blog-list>:last-child{
          padding-bottom: 60px;
        }
      `}
      </style>
      {props.blogPostList.map((post) =>
      <BlogPost
        author={post.author}
        title={post.title}
        preview={post.preview}
        story={post.story}
        image={post.image}
        updatedPublishDate={post.updatedPublishDate}
        key={post.id}
        onBlogPostSelection={props.onBlogPostSelection}
        selectedStory={props.selectedStory}/>
      )}
    </div>
  );
}



BlogList.propTypes = {
  blogPostList: PropTypes.array,
  onBlogPostSelection: PropTypes.func,
  selectedStory: PropTypes.string
}

export default BlogList;
