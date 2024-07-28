import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faPaw,faBars,faCoins } from "@fortawesome/free-solid-svg-icons";
import discoBall from "./disco-ball(1).png"
import "./DiscoStyles.css"
import ballRoom from "./ballroom.png"


export default function Pet() {

    const [showNavBar,setShowNavBar] = useState(false)


    const updateShowNav = () =>{
        setShowNavBar(!showNavBar)
    }

    

  return (
    <>
        
      <div className='headerOuter2-1'>
      <span className='bars' onClick={updateShowNav}><FontAwesomeIcon icon={faBars}/></span>
      <h1 className="headerInner-1">
        <button className='TopB'><FontAwesomeIcon icon={faHouse} /></button>
        <button className='TopB'><FontAwesomeIcon icon={faPaw}/></button>
        <button className='TopB2'><img src = {discoBall} className='disco'></img></button>
        <button className='TopB'><FontAwesomeIcon icon={faShop}/></button></h1>
      
        <nav className={`navigation ${showNavBar ? 'show' : ''}`}>
          <a href="#home" className='one'>Classroom</a>
          <a href="#shop">English</a>
          <a href="#pets">Math</a>
          <a href="#profile">Science</a>
          <a href="#profile">History</a>
          <a href="#profile">Health</a>
        </nav>
        <img src = {ballRoom} className='ballRoom'></img>
      
    </div>
    </>
  )
}
