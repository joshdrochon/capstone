import React, { Component } from 'react';

class Form extends Component {
  render(){
    return(
      <div>
        <style>{`
          #contact-form{
            padding: 25px;
            border: 1px solid black;
            margin: auto;
            margin-top: 50px;
            width: 400px;
            height: 400px;
            overflow-y: hidden;
            margin-top: auto;
            margin-bottom: auto;
          }
          #contact-form *{
            font-weight: lighter;
            letter-spacing: 1px;
          }
          #contact-form input{
            display: block;
            width: 100%;
            border: 1px solid black;
            background: snow;
            border-radius: 10px 8px 25px 10px;
            font-size: 32px;
            color: #202020;
          }
          #contact-form input:focus{
            outline: none;
          }
          #submit-btn{
            font-size: 50px;
            background: transparent;
            color: #202020;
            border: none;
            display: block;
            margin: auto;
            margin-top: 20px;
          }
          #submit-btn:hover{
            cursor: pointer;
            text-shadow: 0px 0px 15px darkgray;
          }
          #comment-tag{
            width: max-content;
            margin: auto;
          }
          #comment-field{
            width: 100%;
            height: 250px;
            background: white;
            font-size: 32px;
            border-radius: 15px;
            resize: none;
          }
          #comment-field:focus{
            outline: none;
          }
          .input-label input:focus{
            outline: none;
          }
        `}
        </style>
        <form id='contact-form'>
          <h2>Firstname: </h2><input maxLength='17' type='text' required/>
          <h2>Lastname: </h2><input maxLength='17' type='text' required />
          <h2>Email: </h2><input maxLength='22' type='email' required />
          <h1 id='comment-tag'>Drop a comment</h1><textarea id='comment-field'></textarea>
          <button id='submit-btn' type='submit'>Get in touch!</button>
        </form>
      </div>
    );
  }
}

export default Form;
