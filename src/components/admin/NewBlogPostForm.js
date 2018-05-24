import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const styles = {
  form: {
    width: '90%',
    height: 'max-content',
    margin: 'auto',
    backgroundColor: 'whitesmoke',
    marginTop: '40px',
    marginBottom: '75px',
    padding: '10px'
  }
}

const NewBlogPostForm = props => {
  let author = null;
  let title = null;
  let body = null;
  let image = null;

  function handleFormSubmission(e) {
    e.preventDefault();

    let splitify = str => {
      let strArr = str.split(' ');
      let prevArr = [];
      let splitArr = [];
      for(let i=0;i<25;i++){
        prevArr.push(strArr.shift());
      }
      splitArr.push(prevArr, strArr);
      return splitArr;
    }

    let globalArr = splitify(body.value);
    let preview = globalArr[0].join(' ');
    let story = globalArr[1].join(' ');

    props.onNewPostCreation({author: author.value, title: title.value, preview: preview, story: story, image: image.value, publishDate: new Moment()});

    author.value = '';
    title.value = '';
    body.value = '';
    image.value = '';
  }

  return(
    <div>
      <style>{`
        #publish{
            height: 24px;
            padding: 5px;
            border: 0px solid transparent;
            background-color: darkgray;
          }
          #bp-form *{
            margin:10px;
          }
          #bp-form input{
            display: inline-block;
            font-size: 24px;
            width: 40%;

          }
          #bp-form textarea{
            width: 100%;
            height: 500px;
            display: block;
            margin: auto;
            font-size: 20px;
          }
      `}
      </style>
      <form id='bp-form' style={styles.form} onSubmit={handleFormSubmission}>
        <label>Author</label>
        <input
          type='text'
          id='author'
          placeholder='Natali Coronel'
          ref={(input) => {author = input;}}/>
        <label>Title</label>
        <input
          type='text'
          id='title'
          placeholder='Title here'
          ref={(input) => {title = input;}}/>
        <textarea
          type='text'
          id='body'
          placeholder='Write post here'
          ref={(input) => {body = input;}}/>
        <input
          id='image'
          placeholder='Image url here'
          ref={(input) => {image = input;}}/>
        <button id='publish' type='submit'>Publish!</button>
      </form>
    </div>
  );
}

NewBlogPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewBlogPostForm ;
