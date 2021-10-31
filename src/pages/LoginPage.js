import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('Loginpage', props);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
