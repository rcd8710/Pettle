import React from 'react'
import AppNav from '../Components/AppNav'
import "../Styles/ScienceStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
export default function Science() {
  return (
    <>
    <div className='sciencePage'>
    <AppNav></AppNav>
    <div className='midScience'>
        <div className='scienceShelf'>
        <FontAwesomeIcon  className= "science" icon={faCaretLeft}></FontAwesomeIcon>
            <div className='sciencePick'></div>
        <FontAwesomeIcon className= "science" icon={faCaretRight}></FontAwesomeIcon>
        </div>
    
    </div>
    <div className='bottomSelect'>
        <div className='scienceBox box1'></div>
        <div className='scienceBox box2'></div>
        <div className='scienceBox box3'></div>
    </div>

    </div>
    </>
)}
