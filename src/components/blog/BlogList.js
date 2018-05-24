import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const BlogList = props => {

  let selectedPost = null;
  let selectedStory = null;
  if(props.selectedPost != null){
    selectedPost = props.blogPostList[props.selectedPost];
    selectedStory = selectedPost.story;
  }
  //blog list is receiving the ticklist. Here we can grab selectedPost. And then pass that post's story down via props.
  console.log(props.selectedPost);
  return(
    <div id='blog-list'>
      <style>{`
        #blog-list>:last-child{
          padding-bottom: 60px;
        }
      `}
      </style>
      {Object.keys(props.blogPostList).map((postId) => {
        let post = props.blogPostList[postId];
        return <BlogPost
          author={post.author}
          title={post.title}
          preview={post.preview}
          story={post.story}
          image={post.image}
          updatedPublishDate={post.updatedPublishDate}
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

//notice can't use key as prop. Therefore using postId in BlogPost we mast pass different prop name
BlogList.propTypes = {
  blogPostList: PropTypes.object,
  onBlogPostSelection: PropTypes.func,
  selectedPost: PropTypes.string
}

export default BlogList;
