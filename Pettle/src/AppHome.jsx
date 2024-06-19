import React from 'react'
import "./AppHomeStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faShop,faPaw,faBars } from "@fortawesome/free-solid-svg-icons";
import discoBall from "./disco-ball(1).png"
export default function AppHome() {
  return (
    <>
        
      <div className='headerOuter2'>
      <span className='bars'><FontAwesomeIcon icon={faBars}/></span>
      <h1 className="headerInner">
        <button className='TopB'><FontAwesomeIcon icon={faHouse} /></button>
        <button className='TopB'><FontAwesomeIcon icon={faPaw}/></button>
        <button className='TopB2'><img src = {discoBall} className='disco'></img></button>
        <button className='TopB'><FontAwesomeIcon icon={faShop}/></button></h1>

      
      <span className='bars'><FontAwesomeIcon icon={faHouse}/></span>
      </div>
    </>
  )
}
