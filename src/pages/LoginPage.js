import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('Loginpage', props);
  console.log(props.match.params.id);
  props.history.goBack();
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
