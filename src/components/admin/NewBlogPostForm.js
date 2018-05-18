import React from 'react';
import PropTypes from 'prop-types';

const NewBlogPostForm = () => {
  let title = null;
  let body = null;
  let image = null;

  function handleNewBlogPostFormSubmission(e) {
    e.preventDefault();
    props.onNewPostCreation({title: title.value, body: body.value, image: image.value});

    title.value = '';
    body.value = '';
    image.value = '';
  }
  return(
    <div>
      <form onSubmit={handleNewBlogPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title here'
          ref={(input) => {title = input;}}/>
        <textarea
          type='text'
          id='body'
          placeholder='Post here'
          ref={(input) => {body = input;}}/>
        <input
          id='image'
          placeholder='Copy and paste image url here'
          ref={(input) => {image = input;}}/>
        <button type='submit'>Publish!</button>
      </form>
    </div>
  );
}

NewBlogPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewBlogPostForm ;
