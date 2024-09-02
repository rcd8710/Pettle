import React, { useState} from 'react';
import rabbit from "../Assets/Animal_images/rabbit.png";
import axios from 'axios';

    const ForgotPasswordForm = ({ formVals, updateForm, backToLoginForgot, toggleNewPass}) => {
        const [message, setMessage] = useState('');
       
    
    
        const sendCode = async () => {
          if (formVals.emailVal == '') {
            setMessage("Please input an email")
          }
          try{
          const codeTransfer = await axios.post("http://localhost:5000/send-code", {
            emailVal: formVals.emailVal
          });
          if (codeTransfer.status == 200) {
            setMessage(codeTransfer.data)
            
              setTimeout(() => {
                setMessage("Going to next page...");
              }, 2000);
            
              setTimeout(() => {
                toggleNewPass(); 
              }, 4000);
            }
            
          if (codeTransfer.status == 404) {
            setMessage( codeTransfer.data)
          }
        }
        catch(error){
         setMessage(`Error checking email: ${error.message}`);
        }
        }
        return (
        <div>
           <div className='tur'><img src={rabbit} className='rab' alt="Turtle" /></div>
          <h2>Forgot your password?</h2>
          <p className='fp'>
          Please enter the email linked to your 
          <br />
          Pettle account to get a reset code
        </p>
              
          <p className='email UserName'>
            <input
              className='Email femailInput'
              name='emailVal'
              placeholder='Email'
              value={formVals.emailVal}
              onChange={updateForm}
            />
          </p>
          <p>{message}</p>
          <button className='resetPasswordButton' onClick={sendCode}>Reset your password</button>
          <p className='BLogin3' onClick={backToLoginForgot}>Back to Login</p>
        </div>
    )}

    export default React.memo(ForgotPasswordForm)