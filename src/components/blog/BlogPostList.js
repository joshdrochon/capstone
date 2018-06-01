import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const BlogPostList = props => {
  console.log(props.opacity)

  let selectedPost = null;
  let selectedStory = null;
  if(props.selectedPost != null){
    selectedPost = props.blogPostList[props.selectedPost];
    selectedStory = selectedPost.story;
  }

  return(
    <div id='blog-list'>
      <style>{`
        #blog-list>:last-child{
          padding-bottom: 60px;
        }
      `}
      </style>
      {Object.keys(props.blogPostList).map(postId => {
        let post = props.blogPostList[postId];
        return <BlogPost
          fadeIn={props.fadeIn}
          opacity={props.opacity}
          author={post.author}
          title={post.title}
          publishDate={post.publishDate}
          preview={post.preview}
          story={post.story}
          image={post.image}
          key={postId}
          postId={postId}
          onBlogPostSelection={props.onBlogPostSelection}
          selectedPost={props.selectedPost}

          selectedStory={selectedStory}
          />;
      })}
    </div>
  );
}

BlogPostList.propTypes = {
  blogPostList: PropTypes.object,
  onBlogPostSelection: PropTypes.func,
  selectedPost: PropTypes.string
}

export default BlogPostList;
