import React, { Component } from 'react';

const styles = {
  form: {
    width: '100%',
    height: '600px',
    border: 'none',
    backgroundColor: 'red',
    padding: '0px',
    margin: '0px'
  },
  input: {
    display: 'block'
  },
  textarea: {
    border: 'none',
    backgroundColor: 'green'
  }
}

const Form = () => {
  return(
    <form id='contact-form' style={styles.form}>
      <label>Name:</label><input id='input-name' style={styles.input}/>
      <label>Email:</label><input id='input-email' style={styles.input}/>
      <label>Comment:</label><textarea id='text-area' style={styles.textarea}/>
    </form>
  );
}

export default Form;
