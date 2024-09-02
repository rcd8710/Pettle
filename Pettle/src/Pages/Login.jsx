import React, { useState, useCallback } from 'react';
import "../Styles/LoginRegistrationStyles.css";
import parrot from "../Assets/Animal_images/parrot.png";
import puppy from "../Assets/Animal_images/transpup.png"; //login
import LoginComp from '../Components/LoginComp';
import TeacherComp from '../Components/TeacherComp';
import ForgotPassSendEmailForm from '../Components/ForgotPassSendEmailForm';
import PasswordResetComp from '../Components/PasswordResetComp';
import Student from '../Components/Student';









export default function Login() {
  
  const [formVals, setFormVals] = useState({
    loginVal: '',
    passwordVal: '',
    confirmpasswordVal: '',
    emailVal: '',
    codeVal: '',
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [isnewPass, setIsnewPass] = useState(false)
//confusion on use call back
  const toggleForgotPassword = useCallback(() => {
    setIsSignUp(prev => !prev);
    setIsForgotPassword(prev => !prev);
  }, []);
  
  const toggleNewPass = useCallback(() => {
    setIsnewPass(prev => !prev)

  }, []);

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
    if(isSignUp){
      if (isForgotPassword && !isnewPass){
        return <ForgotPassSendEmailForm formVals={formVals} updateForm={updateForm}  backToLoginForgot={backToLoginForgot} toggleNewPass={toggleNewPass}/>
      }
      if (isnewPass && isForgotPassword){
        return <PasswordResetComp formVals={formVals} updateForm={updateForm}  backToLoginForgot2={backToLoginForgot2}></PasswordResetComp>
      }
      else{
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
      
      return isTeacher ? (
        <TeacherComp formVals={formVals} updateForm={updateForm} backToLogin={backToLogin("teach")}/>
      ) : isStudent ? (
        <Student formVals={formVals} updateForm = {updateForm} backToLogin={backToLogin("stu")}/>
      ) : null
    }
    return (
      <LoginComp formVals={formVals} updateForm={updateForm} toggleSignUp={toggleSignUp} toggleForgotPassword={toggleForgotPassword}/>
    )
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