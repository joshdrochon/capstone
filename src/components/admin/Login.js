import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  let password = null;
  return (
    <div>
      <form>
        <input
          type='text'
          id='password'
          placeholder='Please enter your password'
          ref={(input) => {password = input;}}/>
        <button onClick={props.onHandleLoginConfirmation} type='button'>Submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  onHandleLoginConfirmation: PropTypes.func
};

export default Login;
