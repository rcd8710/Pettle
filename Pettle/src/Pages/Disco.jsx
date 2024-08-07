import React, {useState } from 'react'

import ballRoom from "../Assets/Backgrounds/ballroom.png"
import "../Styles/DiscoStyles.css"
import { useNavigate } from 'react-router-dom';
import AppNav from '../Components/AppNav';

export default function Pet() {

    const [showNavBar,setShowNavBar] = useState(false)


    const updateShowNav = () =>{
        setShowNavBar(!showNavBar)
    }

    const navigate = useNavigate()

    

  return (
    <>
        
        <AppNav></AppNav>
        <div className='backDiv'></div>
        <img src = {ballRoom} className='ballRoom'></img>
      
    </>
  )
}
