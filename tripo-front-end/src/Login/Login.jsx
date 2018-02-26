import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { LoginWrapper, LoginBox, SignupBox } from './LoginStyles';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <Link to="/landing">
          <FlatButton label="Login" fullWidth={true} />
        </Link>
      </LoginBox>
      <SignupBox>
        <Link to="/landing">
          <FlatButton label="Signup" fullWidth={true} />
        </Link>
      </SignupBox>
    </LoginWrapper>
  )
}

export default Login;