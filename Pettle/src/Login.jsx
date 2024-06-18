import React from 'react'


export default function Login() {
  return (
    <>
        <div className='headerOuter'><h1 className = "headerInner">Pettle</h1></div> 
        <div className='loginComp'>
            <h2 className='Wel'>Welcome to Pettle!</h2>
            <p className='UserName'><input className ='UserInput' placeholder='Username'></input></p>
            <p className='Password'><input className='PassInput' placeholder='Password'></input></p>
            <button className='Login'>Login</button>
            <button className='SignUp'>Sign Up</button>
        </div>


    </>
  )
}
