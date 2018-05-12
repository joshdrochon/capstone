import React, { Component } from 'react';
import { expand } from './../../helpers';

class Form extends Component {
  render(){
    return(
      <div>
        <style>{`
          #contact-form{
            padding: 25px;
            background-color: white;
            margin: auto;
            margin-top: 50px;
            width: 40vw;
            overflow-y: hidden;
          }
          #contact-form:hover{
            cursor: pointer;
          }
          .expand{
            transform: scale(1.15);
            z-index: 100;
          }
          .focus{
            body{
              background-color: darkgray;
            }
          }
          #contact-form *{
            font-family: 'Indie Flower', cursive;
            font-weight: lighter;
            letter-spacing: 1px;
          }
          #contact-form input{
            border: none;
            border: 1px solid black;
            background: white;
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
          .input-label{
            display: block;
            margin-bottom: 35px;
          }
          .input-label label{
            font-size: 32px;
            color: #202020;
          }
          .input-label input{
            border-radius: 10px;
            font-size: 32px;
            color: #202020;
            width:72%;
          }
          .input-label input:focus{
            outline: none;
          }
        `}
        </style>
        <form onClick={expand} id='contact-form'>
          <span className='input-label'><label>Firstname: </label><input maxLength='17' type='text' required/></span>
          <span className='input-label'><label>Lastname: </label><input maxLength='17' type='text' required /></span>
          <span className='input-label'><label>Email: </label><input maxLength='22' type='email' required /></span>
          <h1 id='comment-tag'>Drop a comment</h1><textarea id='comment-field'></textarea>
          <button id='submit-btn' type='submit'>Get in touch!</button>
        </form>
      </div>
    );
  }
}

export default Form;
