import React, { Fragment } from 'react';

let styles = {
  form: {
    backgroundColor:'#d9c5c7',
    width: '100%',
    height: '100%'
  }
}

const Form = () => {
  return (
    <div id='form-cont'>
      <style>{`
        #form-cont{
          width: 100%;
          height: 550px;
          border: 1px solid #d9c5c7;
          background: #d9c5c7;
        }
        input {
          width: 90%;
          border: none;
          font-size: 32px;
          font-family: 'indie flower';
          display: block;
          margin: auto;
          margin-top: 40px;
        }
        input:focus{
          outline: none;
        }
        input:hover{
          transform: scale(1.02);
          box-shadow: 5px 5px 5px;
          background-color: ghostwhite;
        }
        textarea{
          width: 90%;
          border: none;
          height: 200px;
          margin: auto;
          margin-top: 40px;
          font-size: 36px;
          font-family: 'indie flower';
          resize: none;
        }
        textarea:focus{
          outline: none;
        }
        #comment-btn{
          width:100px;
          height: 70px;
          font-size: 25px;
          margin-top: 50px;
          border: none;
          box-shadow: 5px 5px 10px;
        }
        textarea:hover{
          transform: scale(1.02);
          box-shadow: 5px 5px 5px;
          background-color: ghostwhite;
        }
        #comment-btn:active{
          outline: none;
          background-color: ghostwhite;
          transform: scale(.96);
          box-shadow: 0px 0px 0px;
        }
      `}
      </style>
      <form style={styles.form} id='form'>
        <input
          type='text'
          id='name'
          placeholder='Name'
          required />
        <input
          type='text'
          id='location'
          placeholder='Email'
          required />
        <textarea
          id='comment'
          placeholder='Comment' required />
        <button id='comment-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
