import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <Link to="/landing">
          <FlatButton label="Login" />
        </Link>
      </div>
      <div className="signup-box">
        <Link to="/landing">
          <FlatButton label="Signup" />
        </Link>
      </div>
    </div>
  )
}

export default Login;