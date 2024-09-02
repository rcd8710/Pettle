import React from 'react'
import AppNav from '../Components/AppNav'
import "../Styles/HealthStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
export default function Health() {
  return (
    <>
    <div className='healthPage'>
    <AppNav></AppNav>
    <div className='midHealth'>
        <div className='healthShelf'>
        <FontAwesomeIcon  className= "health" icon={faCaretLeft}></FontAwesomeIcon>
            <div className='sciencePick'></div>
        <FontAwesomeIcon className= "health" icon={faCaretRight}></FontAwesomeIcon>
        </div>
    
    </div>
    <div className='bottomSelect'>
        <div className='healthBox box1'></div>
        <div className='healthBox box2'></div>
        <div className='healthBox box3'></div>
    </div>

    </div>
    </>
)}
