import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import kitten from "../Assets/Animal_images/transkit1.png";
import axios from 'axios';


  const LoginComp = ({ formVals, updateForm, toggleSignUp, toggleForgotPassword,}) => { 
        const [message, setMessage] = useState('');

        const navigate = useNavigate()
      
      
        const handleNavigate = useCallback((path) => {
          navigate(path);
        }, [navigate]);
        
        const handleLogin = async () => {
          try {
            const response = await axios.post('http://localhost:5000/login', {
              username: formVals.loginVal,
              password: formVals.passwordVal,
            });
            if (response.status === 200) {
              localStorage.setItem('token', response.data.token); // Store token
              handleNavigate("/home")
            }
          } catch (error) {
            setMessage(`Login Failed: Invalid username or password`);
          }
        };
        return (
        <>
          <h2>Welcome to Pettle!</h2>
          <img src={kitten} className='kitten' alt="Kitten" />
          <p className='UserName'>
            <input
              className='UserInput'
              name='loginVal'
              placeholder='Username'
              value={formVals.loginVal}
              onChange={updateForm}
            />
          </p>
          <p className='Password'>
            <input
              className='PassInput'
              name='passwordVal'
              placeholder='Password'
              value={formVals.passwordVal}
              onChange={updateForm}
            />
          </p>
          <div className='but1'>
            <button className='Login' onClick={handleLogin}>Login</button>
            <button className='SignUp' onClick={toggleSignUp}>SignUp</button>
            
          </div>
          <button className='Fbutton' onClick={toggleForgotPassword}>Forgot Password?</button>
          <p className='message'>{message}</p>
        </>)
      
        }
        export default React.memo(LoginComp)