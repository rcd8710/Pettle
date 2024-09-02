import React, { useState, useCallback} from 'react';
import hamster from "../Assets/Animal_images/hamster.png";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
    const PasswordResetForm = ({ formVals, updateForm, backToLoginForgot2}) => {
        const [isShow, setIsShow] = useState(false)
        const toggleShow = useCallback(() =>{
          setIsShow(prev => !prev)
        })
      
      
        const [message, setMessage] = useState('');
          const verifyCode = async () => {
            if (formVals.passwordVal.length() < 6) {
              setMessage("Please choose a password 6 characters or longer")
              return
            }
            if (formVals.passwordVal !== formVals.confirmpasswordVal) {
              console.log(formVals.passwordVal, formVals.confirmpasswordVal)
              setMessage("Passwords do not match");
              return;  // Exit the function early if passwords don't match
            }
            try{
            const codeVerifyResults = await axios.post("http://localhost:5000/verify-code", {
              codeVal: formVals.codeVal,
              passwordVal: formVals.passwordVal,
              confirmpasswordVal: formVals.confirmpasswordVal
            });
            if (codeVerifyResults.status == 200) {
              setMessage(codeVerifyResults.data)
            
            }
            if (codeVerifyResults.status == 404) {
              setMessage(codeVerifyResults.data)
            }
          }
          catch(error){
           setMessage(`Error: ${error.response.data}`);
          }
          }
          return (
        <div>
           <div className='tur'><img src={hamster} className='rab' alt="Turtle" /></div>
          <p className='fp'>Please input code sent to email and set a new password</p>
          <div className="password">
            <input className="PassInput" name = 'codeVal' placeholder="Enter code here..." value={formVals.codeVal}
              onChange={updateForm} />
          </div>
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
              icon={isShow ? faEye : faEyeSlash } onClick={toggleShow}></FontAwesomeIcon> 
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
              <div>{message}</div>
          <button className='passwordDataReset' onClick={verifyCode} >Confirm your new Password</button>
          <p className='BLogin3' onClick={backToLoginForgot2}>Back to Login</p>
        </div>
          )
      }
      export default React.memo(PasswordResetForm)