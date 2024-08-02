import React, { useState } from 'react';
import "./LoginRegistrationStyles.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Perform login logic
    navigate('/home'); // Navigate to the AppHome page after login
  };
  const [loginVal, setLoginVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [confirmpasswordVal, setConfirmPasswordVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  function updateEmailVal(e) {
    setEmailVal(e.target.value);
  }

  function updateLoginVal(e) {
    setLoginVal(e.target.value);
  }

  function updatePassVal(e) {
    setPasswordVal(e.target.value);
  }

  function updateConfirmPasswordval(e) {
    setConfirmPasswordVal(e.target.value);
  }

  function toggleSignUp() {
    setIsSignUp(!isSignUp);
  }

 

 

  function printLogPass() {
    console.log('Username:', loginVal);
    console.log('Email:', emailVal);
    console.log('Password:', passwordVal);
    console.log('Confirm Password:', confirmpasswordVal);
  }

  const handleRegister = () => {
    // Perform registration logic
    navigate('/home'); // Navigate to the AppHome page after registration
  };

  return (
    <>
      <div className='headerOuter'><h1 className="headerInner">Pettle</h1></div>
      <div className='loginComp'>
        {isSignUp ? (
          <>
          <h2 className=''>Please Register</h2>
          <p className='email UserName'><input className ='Email UserInput' placeholder='Email' value={emailVal} onChange={updateEmailVal}></input></p>
          <p className='Password'><input className='PassInput' placeholder='Password' value={passwordVal} onChange={updatePassVal}></input></p>
          <p className='conPassword'><input className='PassInput' placeholder='Confirm Password' value={confirmpasswordVal} onChange={updateConfirmPasswordval}></input></p>
          <button className='Login'>Register</button>
          <button className='SignUp'>Forgot password</button>
          <p className='BLogin' onClick={toggleSignUp}>Back to Login</p>
        </>
          
        ) : (
          <>
            <h2 className=''>Welcome to Pettle!</h2>
            <p className='UserName'><input className='UserInput' placeholder='Username' value={loginVal} onChange={updateLoginVal}></input></p>
            <p className='Password'><input className='PassInput' placeholder='Password' value={passwordVal} onChange={updatePassVal}></input></p>
            <button className='Login' onClick={handleLogin}>Login</button>
            <button className='SignUp' onClick={handleRegister}>SignUp</button>
          </>
        )}
      </div>
    </>
  );
}
