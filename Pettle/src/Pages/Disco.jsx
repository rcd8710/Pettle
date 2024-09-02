import React, {useState } from 'react'

import ballRoom from "../Assets/Backgrounds/ballroom.png"
import "../Styles/DiscoStyles.css"
import { useNavigate } from 'react-router-dom';
import AppNav from '../Components/AppNav';

export default function Disco() {

    const [showNavBar,setShowNavBar] = useState(false)


    const updateShowNav = () =>{
        setShowNavBar(!showNavBar)
    }

    const navigate = useNavigate()

    

  return (
    <>
        <div className='discoPage'>
        <AppNav></AppNav>
        <div className='backDiv'>
          <div className='chatBox'>
            <div className='textBox'></div>
            <div className='inputBar'>
              <input type="text" className='inputText'></input>
              <button className='textB'>Send</button>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
