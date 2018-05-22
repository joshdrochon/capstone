import React, { Fragment } from 'react';

const Form = () => {
  return (
    <form id='form'>
      <style>{`
        #form{
          width: 100%;
          height: max-content;
        }
        #form*:hover:not(#comment-btn){
          transform: scale(1.02);
          box-shadow: 5px 5px 5px;
          background-color: ghostwhite;
        }
        #form input, textarea{
          display: block;
          width: 90%;
          margin: auto;
          margin-top: 40px;
          font-size: 28px;
          transition: transform .1s;
          font-family: 'indie flower';
        }
        #form textarea{
          height: 200px;
          resize: none;
        }
        #comment-btn{
          padding: 30px;
          margin-top: 50px;
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
  );
}

export default Form;
