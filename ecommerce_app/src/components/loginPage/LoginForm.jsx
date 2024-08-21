import React, { useState } from 'react';
import InputField from '../commonUtils/InputField';
import logo from '../../assets/LoginStyles/logo.png';
import Button from '../commonUtils/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userName: '', password: '' });
  const navigate = useNavigate()

  function validateFields() {
    let isValid = true;
    const errors = {};

    if (!userName) {
      errors.userName = 'Username is required';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

 
  function loginAction() {
    if (validateFields()) {
      console.log('Login::::::::::::', { userName, password });
      navigate('/home')
    }
  }

  function fieldFocus(field){
    setErrors((previouseErrors)=>({...previouseErrors,[field]:''}))

  }

  return (
    <div className='cardBackground'>
      <div className='formContainer'>
        <div>
          <img src={logo} alt='logo' className='logoImg' />
          <h2 className='loginClass'>Sign In</h2>
        </div>
        <br />
        
        <div >
          <InputField
            label="Username"
            type="text"
            className="input"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onFocus = {()=>fieldFocus('userName')}
          />
          <p className={`errorField ${errors.userName ? 'visible' : 'hidden'}`}>
            {errors.userName}
          </p>
        </div>
        
        <div >
          <InputField
            label="Password"
            type="password"
            className="input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={()=>fieldFocus('password')}
          />
          <p className={`errorField ${errors.password ? 'visible' : 'hidden'}`}>
            {errors.password}
          </p>
        </div>
        
        <br />
        <Button type="submit" className="loginButton" buttonValue="Login" onClick={loginAction}></Button>
      </div>
    </div>
  );
}

export default LoginForm;
