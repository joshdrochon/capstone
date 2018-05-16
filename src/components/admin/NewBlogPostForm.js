import React from 'react';

const NewBlogPostForm = () => {
  let title = null;
  let body = null;
  let image = null;

  function handleNewBlogPostFormSubmission(e) {
    e.preventDefault();
    console.log(title.value);
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

export default NewBlogPostForm ;
