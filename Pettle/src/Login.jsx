import React, { useState } from 'react';
import "./LoginRegistrationStyles.css";
import { useNavigate } from 'react-router-dom';
import parrot from "./parrot.png"
import fish from "./transfish.png"
import kitten from "./transkit1.png"
import puppy from "./transpup.png"
import turtle from "./transturtle.png"
import flowers from "./trflow.png"


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
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

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
  
  function toggleTeacher(){
    setIsTeacher(!isTeacher)
  }

    
  function toggleStudent(){
    setIsStudent(!isStudent)
  }

  function toggleTeacher2() {
    setIsTeacher(!isTeacher)
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

  const teach = (<div><h2 className=''>Please Register</h2>
  <img src = {turtle} className='kitten'></img>
  <p className='email UserName'><input className ='Email UserInput' placeholder='Email' value={emailVal} onChange={updateEmailVal}></input></p>
  <p className='Password'><input className='PassInput' placeholder='Password' value={passwordVal} onChange={updatePassVal}></input></p>
  <p className='conPassword'><input className='PassInput' placeholder='Confirm Password' value={confirmpasswordVal} onChange={updateConfirmPasswordval}></input></p>
  <button className='Login'>Register</button>
  <p className='BLogin1' onClick={toggleTeacher2}>Back to Login</p></div>
);

  return (
    <>
      <div className='logPage'>
      <div className='headerOuter'><h1 className="headerInner">Pettle</h1></div>
      <div className='petCell'><img src = {puppy} className='dog'></img></div>
      <div className='loginComp'>
        {isSignUp ? (
          
          <>
  {(!isTeacher && !isStudent) && (
    <div className='piece1'>
      <img src={parrot} className='parrot' alt='parrot' />
      <button className='teach1' onClick={toggleTeacher}>Are you a teacher?</button>
      <button className='student1' onClick={toggleStudent}>Are you a student?</button>
      <p className='BLogin' onClick={toggleSignUp}>Back to Login</p>
    </div>
  )}
  {isTeacher ? (
    <>
      {teach}
    </>
  ) : (
    <>
      
    </>
  )}
  {isStudent ? (
    <>
     <img src={fish} className='parrot' alt='parrot' />
     <h2 className=''>Class Code:</h2>
     <div className="input-container">
  <input type="text" className="input-bar" placeholder="Enter code here..." />
</div>

     <button className='Login1'>Submit</button>
    </>
  ) : (
    <>
      
    </>
  )}
</>

          
        ) : (
          <>
            <h2 className=''>Welcome to Pettle!</h2>
            <img src = {kitten} className='kitten'></img>
            <p className='UserName'><input className='UserInput' placeholder='Username' value={loginVal} onChange={updateLoginVal}></input></p>
            <p className='Password'><input className='PassInput' placeholder='Password' value={passwordVal} onChange={updatePassVal}></input></p>
            <div className='but1'> 
            <button className='Login' onClick={handleLogin}>Login</button>
            <button className='SignUp' onClick={toggleSignUp}>SignUp</button>
            </div>
          </>
        )}
      </div>
      </div>
     
      {/*<img src = {fish} className='petimg'></img>
      <img src = {kitten} className='petimg'></img>
      <img src = {parrot} className='petimg'></img>
      <h2 className=''>Please Register</h2>
          <img src = {turtle} className='kitten'></img>
          <p className='email UserName'><input className ='Email UserInput' placeholder='Email' value={emailVal} onChange={updateEmailVal}></input></p>
          <p className='Password'><input className='PassInput' placeholder='Password' value={passwordVal} onChange={updatePassVal}></input></p>
          <p className='conPassword'><input className='PassInput' placeholder='Confirm Password' value={confirmpasswordVal} onChange={updateConfirmPasswordval}></input></p>
          <button className='Login'>Register</button>
          <button className='SignUp'>Forgot password</button>
          <p className='BLogin' onClick={toggleSignUp}>Back to Login</p>
      <img src = {turtle} className='petimg'></img>
      */}

    </>
  );
}
