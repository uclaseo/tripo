import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { LoginWrapper, StyledLoginBox, StyledSignupBox } from './LoginStyles';

const Login = () => {
  return (
    <LoginWrapper>
      <StyledLoginBox>
        <Link to="/landing">
          <FlatButton label="Login" />
        </Link>
      </StyledLoginBox>
      <StyledSignupBox>
        <Link to="/landing">
          <FlatButton label="Signup" />
        </Link>
      </StyledSignupBox>
    </LoginWrapper>
  )
}

export default Login;