import React from 'react'
import AppNav from '../Components/AppNav'
import "../Styles/HistoryStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
export default function History() {
    return (
        <>
        <div className='historyPage'>
        <AppNav></AppNav>
        <div className='midHistory'>
            <div className='historyShelf'>
            <FontAwesomeIcon  className= "history" icon={faCaretLeft}></FontAwesomeIcon>
                <div className='historyPick'></div>
            <FontAwesomeIcon className= "history" icon={faCaretRight}></FontAwesomeIcon>
            </div>
        
        </div>
        <div className='bottomSelect'>
            <div className='historyBox box1'></div>
            <div className='historyBox box2'></div>
            <div className='historyBox box3'></div>
        </div>
    
        </div>
        </>
    )}
