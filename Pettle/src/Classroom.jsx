import React, { useCallback, useState } from 'react'
import "./AppHomeStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faPaw,faBars,faCoins } from "@fortawesome/free-solid-svg-icons";
import discoBall from "./disco-ball(1).png"
import stage from "./stagePlat.png"
import "./ClassroomStyles.css"
import { useNavigate } from 'react-router-dom';



export default function Pet() {

    const [showNavBar,setShowNavBar] = useState(false)


    const updateShowNav = () =>{
        setShowNavBar(!showNavBar)
    }
    const navigate = useNavigate()
    

  return (
    <>
      <div className='page'>
      <div className='headerOuter2'>
      <span className='bars' onClick={updateShowNav}><FontAwesomeIcon icon={faBars}/></span>
      <h1 className="headerInner">
      <button className='TopB'button onClick={() => navigate('/home')}><FontAwesomeIcon icon={faHouse} /></button>
        <button className='TopB' button onClick={() => navigate('/pet')}><FontAwesomeIcon icon={faPaw}/></button>
        <button className='TopB2' button onClick={() => navigate('/disco')}><img src = {discoBall} className='disco'></img></button>
        <button className='TopB' button onClick={() => navigate('/store')}><FontAwesomeIcon icon={faShop}/></button></h1>

        <nav className={`navigation ${showNavBar ? 'show' : ''}`}>
          <a href="#classroom" className='one'>Classroom</a>
          <a href="#english">English</a>
          <a href="#math">Math</a>
          <a href="#science">Science</a>
          <a href="#history">History</a>
          <a href="#health">Health</a>
          <a href="#logout" onClick={() => navigate('/')}>Logout</a>
        </nav>
        <div className='classCon'>
            <div className='teach'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
            <div className='stu'><div className='tag'></div></div>
        
        </div>      
    </div>
    </div>
    </>
  )
}
