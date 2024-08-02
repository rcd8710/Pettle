import React, { useCallback, useState } from 'react'
import "./AppHomeStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faPaw,faBars,faCoins } from "@fortawesome/free-solid-svg-icons";
import discoBall from "./disco-ball(1).png"
import podium from "./Gold_Podium_Stage_Transparent_PNG_Clip_Art_Image.png"
import { useNavigate } from 'react-router-dom';

export default function AppHome() {
    const navigate = useNavigate();
    const [showNavBar,setShowNavBar] = useState(false)


    const updateShowNav = () =>{
        setShowNavBar(!showNavBar)
    }

  return (
    <>
        
      <div className='headerOuter2'>
      <span className='bars' onClick={updateShowNav}><FontAwesomeIcon icon={faBars}/></span>
      <h1 className="headerInner">
        <button className='TopB'button onClick={() => navigate('/home')}><FontAwesomeIcon icon={faHouse} /></button>
        <button className='TopB' button onClick={() => navigate('/pet')}><FontAwesomeIcon icon={faPaw}/></button>
        <button className='TopB2' button onClick={() => navigate('/disco')}><img src = {discoBall} className='disco'></img></button>
        <button className='TopB' button onClick={() => navigate('/store')}><FontAwesomeIcon icon={faShop}/></button></h1>
      
        <nav className={`navigation ${showNavBar ? 'show' : ''}`}>
          <a href="#classroom" className='one' onClick={() => navigate('/classroom')}>Classroom</a>
          <a href="#english">English</a>
          <a href="#math">Math</a>
          <a href="#science">Science</a>
          <a href="#history">History</a>
          <a href="#health">Health</a>
          <a href="#logout" onClick={() => navigate('/')}>Logout</a>
        </nav>
      
      
      <span className='currency'><FontAwesomeIcon icon={faCoins}/>1000</span>
      <div className='dailyCon'>
        <div className='con'></div>
        <div className='con'></div>
        <div className='con'></div>
      </div>
      </div>
      <div class="xp-container">
        <div class="xp">
        <div class="xp-fill"></div>
        </div>
    </div>
    <img src = {podium} className='pod'></img>
    </>
  )
}
