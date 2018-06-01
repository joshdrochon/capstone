import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from './../../helpers.js';
import TextEditor from './TextEditor';

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
      for(let i=0;i<50;i++){
        prevArr.push(strArr.shift());
      }
      splitArr.push(prevArr, strArr);
      return splitArr;
    }

    let globalArr = splitify(body.value);
    let preview = globalArr[0].join(' ');
    let story = globalArr[1].join(' ');

    props.onNewPostCreation({author: author.value, title: title.value, preview: preview, story: story, image: image.value, publishDate: formatDate()});

    author.value = '';
    title.value = '';
    body.value = '';
    image.value = '';
  }

  return(
    <div>
      <style>{`
          #bp-form *{
            box-sizing: border-box;
          }
          #bp-form input{
            height: 50px;
            margin-bottom: 10px;
            border: 1px solid darkgray;
            display: inline-block;
            font-size: 24px;
            width: 49%;
          }
          #body{
            width: 100%;
            display: block;
            font-size: 20px;
            margin-bottom: 10px;
          }
          #publish-btn{
            border-radius: 5px;
            display: block;
            padding: 15px;
            font-size: 20px;
            color: white;
            background-color: darkgray;
          }
          #title, #publish-btn{
            float: right;
          }
      `}
      </style>
      <form id='bp-form' style={styles.form} onSubmit={handleFormSubmission}>
        <input
          type='text'
          id='author'
          placeholder='Author'
          maxLength='20'
          ref={(input) => {author = input;}}
          required
        />
        <input
          type='text'
          id='title'
          placeholder='Title'
          maxLength='36'
          ref={(input) => {title = input;}}
          required
        />
        {/*}<span id='textarea'>
          <TextEditor
            id='body'
            onChange={props.handleChange}
          />
        </span>*/}
        <textarea
          type='text'
          id='body'
          placeholder='Write post here'
          ref={(input) => {body = input;}}
          maxLength='3000'
          minLength='100'
          required
        />
        <input
          type='text'
          id='image'
          placeholder='Image url'
          ref={(input) => {image = input;}}
          required
        />
        <button id='publish-btn' type='submit'>Publish!</button>
      </form>
    </div>
  );
}

NewBlogPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewBlogPostForm;
