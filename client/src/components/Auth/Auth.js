import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';
import {Button} from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login';
import {Container} from 'react-bootstrap';
import {BsGoogle} from 'react-icons/bs'
function Auth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    return (
        <Container>
            <GoogleLogin
            clientId="599031345246-ith4e1moa0rg7irgu9mhk4ki07s9ciar.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button  variant="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">
                <BsGoogle></BsGoogle> Sign in using Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
        </Container>
    )
}

export default Auth
