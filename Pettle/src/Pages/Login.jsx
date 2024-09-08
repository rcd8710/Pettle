import React, { useState, useCallback } from 'react';
import "../Styles/LoginRegistrationStyles.css";
import parrot from "../Assets/Animal_images/parrot.png";
import puppy from "../Assets/Animal_images/transpup.png"; //login
import LoginComp from '../Components/LoginComp';
import TeacherComp from '../Components/TeacherComp';
import ForgotPassSendEmailForm from '../Components/ForgotPassSendEmailForm';
import PasswordResetComp from '../Components/PasswordResetComp';
import Student from '../Components/Student';

//Important to optimize images for webpreformance, can use web analytic and code analytic tools to aid in this
export default function Login() {
  

  //Use state variables. What is useState?
  //Allows rerenders to be triggered based on changing the value
  const [formVals, setFormVals] = useState({
    loginVal: '',
    passwordVal: '',
    confirmpasswordVal: '',
    emailVal: '',
    codeVal: '',
  });

  //So when ever these values change the componenet that houses them will rerender

  const [isSignUp, setIsSignUp] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [isnewPass, setIsnewPass] = useState(false)

//These values are used to signal different React components to load



  //Use call back uses Memoization on a function. What is memoization, its when the output for inputs is stored and used when the same inputs are given
  //Basically skipping the calculation/function/black box part. 

  //Whenever a function is defined or called, it is stored in the memory. useCallback just checks the inputs and calls the stored functions here instead of 
  //allocating and adding a new instance of something like "toggleForgetPassword" into the memory.
  //prev makes sure you working with the latest val
  const toggleForgotPassword = useCallback(() => {
    setIsSignUp(prev => !prev);
    setIsForgotPassword(prev => !prev);
  }, []);
  
  const toggleNewPass = useCallback(() => {
    setIsnewPass(prev => !prev)

  }, []);

  //Look for the attribute of the formVal object, match the name and update the value for that name.
  // Note the use of the spread operator here, it copies the previous state to make sure only a speicifc value is being updated.
  const updateForm = useCallback((e) => {
    const { name, value } = e.target;
    setFormVals(prev => ({ ...prev, [name]: value }));
  }, []);
  

  const toggleSignUp = useCallback(() => {
    setIsSignUp(prev => !prev);
  }, []);
  

  const toggleCheckStuOrTeach = useCallback((role) => {
    if (role === 'teach') {
      setIsTeacher(prev => !prev);
    } else if (role === 'stu') {
      setIsStudent(prev => !prev);
    }
  }, []);
  

  const backToLogin = useCallback((role) => () => {
    if (role === 'teach') {
      setIsTeacher(prev => !prev);
      setIsSignUp(!isSignUp)
    } else if (role === 'stu') {
      setIsStudent(prev => !prev);
      setIsSignUp(!isSignUp)
    }
  }, []);

  const backToLoginForgot = useCallback(() => {
    setIsSignUp(prev => !prev);
    setIsForgotPassword(prev => !prev)
  }, []);

  const backToLoginForgot2 = useCallback(() => {
    setIsSignUp(prev => !prev);
    setIsForgotPassword(prev => !prev)
    setIsnewPass(prev => !prev)
  }, []);

  




  const renderForm = () => {
    //If signup is true
    if(isSignUp){
      //Check if your if one trigger went off but the other is still naturally off
      if (isForgotPassword && !isnewPass){
        return <ForgotPassSendEmailForm formVals={formVals} updateForm={updateForm}  backToLoginForgot={backToLoginForgot} toggleNewPass={toggleNewPass}/>
      }
      //Check if the second one went off
      if (isnewPass && isForgotPassword){
        return <PasswordResetComp formVals={formVals} updateForm={updateForm}  backToLoginForgot2={backToLoginForgot2}></PasswordResetComp>
      }
      
      else{
        //If teacher nor student have been clicked this page shows
        if (!isTeacher && !isStudent) { 
          return (
          <div className='piece1'>
            <div className='par'><img src={parrot} className='parrot'/></div>
            <button className='teach1' onClick={() => toggleCheckStuOrTeach('teach')}>Are you a teacher?</button>
            <button className='student1' onClick={() => toggleCheckStuOrTeach('stu')}>Are you a student?</button>
            <p className='BLogin' onClick={toggleSignUp}>Back to Login</p>
          </div>
          );
        }
    }
    //if is teacher is true, else if student is true else nothing
    return isTeacher ? (
        <TeacherComp formVals={formVals} updateForm={updateForm} backToLogin={backToLogin("teach")}/>
      ) : isStudent ? (
        <Student formVals={formVals} updateForm = {updateForm} backToLogin={backToLogin("stu")}/>
      ) : null
    }
    else{
    //This is the natural state, previously It was triggered at the end after going through all other condiitions and checking if they were wrong, now it should go after isSign up is checked to be incorrect
    return (
      <LoginComp formVals={formVals} updateForm={updateForm} toggleSignUp={toggleSignUp} toggleForgotPassword={toggleForgotPassword}/>
    )
  }
  }
  
  return (
    <div className='logPage'>
      <div className='headerOuter'>
        <h1 className="headerInner">Pettle</h1>
      </div>
      <div className='petCell'>
        <img src={puppy} className='dog' alt="Puppy" />
      </div>
      <div className='loginComp'>
        {renderForm()}
      </div>
    </div>
  );

}