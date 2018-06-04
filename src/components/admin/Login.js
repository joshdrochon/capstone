import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <Fragment>
    <style>{`
      #password{
        margin-right: 10px;
        font-size: 24px;
      }
      #login{
        height: 24px;
        padding: 5px;
        border: 0px solid transparent;
        background-color: darkgray;
      }
      #login-form{
        margin: 50px 0px 0px 30px;
      }
    `}
    </style>
    <form id='login-form'>
      <input
        type='password'
        id='password'
        placeholder='Enter password'
      />
      <button
        id='login' onClick={props.onHandleLoginConfirmation} type='button'>Submit</button>
    </form>
  </Fragment>
);


Login.propTypes = {
  onHandleLoginConfirmation: PropTypes.func
};

export default Login;
