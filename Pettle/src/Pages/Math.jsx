import React from 'react'
import AppNav from '../Components/AppNav'
import "../Styles/EnglishStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
export default function Math() {
    return(
    <>
    <div className='mathPage'>
    <AppNav></AppNav>
    <div className='midMath'>
        <div className='mathShelf'>
        <FontAwesomeIcon  className= "math" icon={faCaretLeft}></FontAwesomeIcon>
            <div className='mathPick'></div>
        <FontAwesomeIcon className= "math" icon={faCaretRight}></FontAwesomeIcon>
        </div>
    
    </div>
    <div className='bottomSelect2'>
        <div className='mathBox box1'></div>
        <div className='mathBox box2'></div>
        <div className='mathBox box3'></div>
    </div>

    </div>
    </>
    )
}
