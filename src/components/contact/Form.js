import React, { Fragment } from 'react';

const Form = () => {
  return (
    <form id='form'>
      <style>{`
        #form{
          padding: 10px;
          margin: auto;
          background-color: #d9c5c7;
        }
        #form input, textarea{
          display: block;
          border: none;
          width: 95%;
          margin: auto;
          margin-top: 30px;
          font-size: 28px;
          transition: transform .1s;
          font-family: 'indie flower';
        }
        #form textarea{
          height: 200px;
        }
        #comment-btn{
          padding: 30px;
          margin-top: 25px;
          margin-bottom: 20px;
          box-shadow: 5px 5px 10px;
        }
        input:hover, textarea:hover{
          transform: scale(1.02);
          box-shadow: 5px 5px 5px;
          background-color: ghostwhite;
        }
        #comment-btn:active{
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
