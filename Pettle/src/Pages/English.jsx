import React from 'react'
import AppNav from '../Components/AppNav'
import "../Styles/MathStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
export default function English() {
  return (
    <>
    <div className='englishPage'>
    <AppNav></AppNav>
    <div className='midEng'>
        <div className='bookShelf'>
        <FontAwesomeIcon  icon={faCaretLeft}></FontAwesomeIcon>
            <div className='bookPick'></div>
        <FontAwesomeIcon  icon={faCaretRight}></FontAwesomeIcon>
        </div>
    
    </div>
    <div className='bottomSelect'>
        <div className='engBox box1'></div>
        <div className='engBox box2'></div>
        <div className='engBox box3'></div>
    </div>

    </div>
    </>

  )
}
