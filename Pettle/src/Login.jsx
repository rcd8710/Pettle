import React, { useState, useCallback } from 'react';
import "./LoginRegistrationStyles.css";
import { useNavigate } from 'react-router-dom';
import parrot from "./parrot.png";
import fish from "./transfish.png";
import kitten from "./transkit1.png";
import puppy from "./transpup.png";
import turtle from "./transturtle.png";

const LoginForm = ({ formVals, updateForm, handleLogin, toggleSignUp }) => (
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
  </>
);

const TeacherForm = ({ formVals, updateForm, handleRegister,backToLogin }) => (
  <div>
    <h2>Please Register</h2>
    <img src={turtle} className='kitten' alt="Turtle" />
    <p className='email UserName'>
      <input
        className='Email UserInput'
        name='emailVal'
        placeholder='Email'
        value={formVals.emailVal}
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
    <p className='conPassword'>
      <input
        className='PassInput'
        name='confirmpasswordVal'
        placeholder='Confirm Password'
        value={formVals.confirmpasswordVal}
        onChange={updateForm}
      />
    </p>
    <button className='Login' onClick={handleRegister} >Register</button>
    <p className='BLogin1' onClick={() => backToLogin("teach")}>Back to Login</p>
  </div>
);

const StudentForm = ({formVals, updateForm,backToLogin}) => (
  <>
    <img src={fish} className='kitten' alt='Fish' />
    <h2>Class Code:</h2>
    <div className="input-container">
      <input type="text" className="input-bar" placeholder="Enter code here..." value={formVals.codeVal}
        onChange={updateForm} />
    </div>
    <button className='Login1'>Submit</button>
    <p className='BLogin1' onClick={() => backToLogin("teach")}>Back to Login</p>

  </>
);

export default function Login() {
  const navigate = useNavigate();
  
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

//confusion on use call back


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


  const handleLogin = () => {
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/home');
  };

  return (
    <div className='logPage'>
      <div className='headerOuter'>
        <h1 className="headerInner">Pettle</h1>
      </div>
      <div className='petCell'>
        <img src={puppy} className='dog' alt="Puppy" />
      </div>
      <div className='loginComp'>
        {isSignUp ? (
          !isTeacher && !isStudent ? (
            <div className='piece1'>
              <img src={parrot} className='parrot' alt='Parrot' />
              <button className='teach1' onClick={() => toggleCheckStuOrTeach('teach')}>Are you a teacher?</button>
              <button className='student1' onClick={() => toggleCheckStuOrTeach('stu')}>Are you a student?</button>
              <p className='BLogin' onClick={toggleSignUp}>Back to Login</p>
            </div>
          ) : isTeacher ? (
            <TeacherForm formVals={formVals} updateForm={updateForm} handleRegister={handleRegister} backToLogin={backToLogin("teach")}/>
          ) : isStudent ? (
            <StudentForm formVals={formVals} updateForm = {updateForm} backToLogin={backToLogin("stu")}/>
          ) : null
        ) : (
          <LoginForm formVals={formVals} updateForm={updateForm} handleLogin={handleLogin} toggleSignUp={toggleSignUp} />
        )}
      </div>
    </div>
  );
}
