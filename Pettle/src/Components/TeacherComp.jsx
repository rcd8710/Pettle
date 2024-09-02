import React, { useState, useCallback } from 'react';
import turtle from "../Assets/Animal_images/transturtle.png";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


    const TeacherForm = ({ formVals, updateForm, backToLogin }) => {
        const [message, setMessage] = useState('');
        
        const sendVerificationEmail = async () => {
          if (formVals.passwordVal.length < 6) {
            setMessage("Please choose a password 6 characters or longer")
            return
          }
          if (formVals.passwordVal !== formVals.confirmpasswordVal) {
            console.log(formVals.passwordVal, formVals.confirmpasswordVal)
            setMessage("Passwords do not match");
            return;  // Exit the function early if passwords don't match
          }
          if (!formVals.emailVal || !formVals.passwordVal || !formVals.loginVal) {
            setMessage("All felids required")
            return
          }
          
          try {
            // Check if the email already exists in the database
            const emailCheck = await axios.post("http://localhost:5000/check-email", {
              emailVal: formVals.emailVal
            });
        
            if (emailCheck.status === 200) {
              try {
                const userCheck = await axios.post('http://localhost:5000/check-username', {
                  loginVal: formVals.loginVal,
                });
                if (userCheck.status === 200) {
                  try {
                    // If the email doesn't exist, proceed with sending the verification email
                    const response = await axios.post('http://localhost:5000/send-verification-email', {
                      emailVal: formVals.emailVal,
                      passwordVal: formVals.passwordVal,
                      loginVal: formVals.loginVal,
                    });
                    setMessage(response.data);
                  } 
                  catch (error) {
                    setMessage('Error sending email');
                  }
                }
              } 
              catch (error) {
                setMessage(`Username in use already`);
              }
              
            }
            } catch (error) {
            // Use `error.response` to get detailed error information
            if (error.response && error.response.status === 404) {
              setMessage("Verification already sent to this email");
            } else {
              setMessage(`Error checking email: ${error.message}`);
            }
          }
        }
        const [isShow, setIsShow] = useState(false)
        const toggleShow = useCallback(() =>{
          setIsShow(prev => !prev)
        })
        return (
          <div>
            <h2>Please Register</h2>
            <div className='tur'><img src={turtle} className='turtle' alt="Turtle" /></div>
            <p className='email UserName'>
              <input
                className='Email UserInput'
                name='emailVal'
                placeholder='Set Email'
                value={formVals.emailVal}
                onChange={updateForm}
              />
      
            </p>
            <input
              className='UserInput'
              name='loginVal'
              placeholder='Username'
              value={formVals.loginVal}
              onChange={updateForm}
            />
            <p className='Password'>
              <input
                type={isShow ? 'text' : 'password'}
                className='PassInput'
                name='passwordVal'
                placeholder='Set Password'
                value={formVals.passwordVal}
                onChange={updateForm}
                
              />
              <FontAwesomeIcon
              icon={isShow ? faEye : faEyeSlash} onClick={toggleShow}></FontAwesomeIcon> 
              </p> 
            <p className='conPassword'>
              <input
                type={isShow ? 'text' : 'password'}
                className='PassInput'
                name='confirmpasswordVal'
                placeholder='Confirm Password'
                value={formVals.confirmpasswordVal}
                onChange={updateForm}
              />
              <FontAwesomeIcon
              icon={isShow ? faEye : faEyeSlash} onClick={toggleShow}></FontAwesomeIcon>  
            </p>
            <button className='Login' onClick={sendVerificationEmail}>Register</button>
            <p className='message'>{message}</p>
            <p className='BLogin1' onClick={() => backToLogin("teach")}>Back to Login</p>
          </div>
        );
      };
      export default React.memo(TeacherForm)
