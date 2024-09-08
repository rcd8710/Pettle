import React, { useState } from 'react';
import AppNav from '../Components/AppNav';
import "../Styles/MathStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';

export default function English() {
  const bookList = [
    'https://www.gutenberg.org/cache/epub/23322/pg23322-images.html',
    'https://www.gutenberg.org/cache/epub/67098/pg67098-images.html',
    'https://www.gutenberg.org/cache/epub/14304/pg14304-images.html'
    // Add more URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current book index
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Manage the popup visibility
  const [isDim, setisDim] = useState(false)
  const handleNext = () => {
    if (currentIndex < bookList.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next book
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous book
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup visibility
    setisDim(!isDim)
  };

  return (
    <>
      <div className={`englishPage ${isDim ? 'dim' : ""}`}>
        <AppNav />
        <div className='midEng'>
          
          <div className='bookShelf' onClick={togglePopup}>
         
            <FontAwesomeIcon 
              icon={faCaretLeft} 
              onClick={handlePrevious} 
              className={currentIndex === 0 ? 'disabled' : ''} // Disable left arrow if at the start
            />
             
            <div className='bookPick' onClick={togglePopup} >
              {/* Display only the current book */}
              <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              onClick={togglePopup} 
              className="zoom" // Disable right arrow if at the end
            />
              <embed  onClick={togglePopup} src={bookList[currentIndex]}  className='book'  />
            </div>
            <FontAwesomeIcon 
              icon={faCaretRight} 
              onClick={handleNext} 
              className={currentIndex === bookList.length - 1 ? 'disabled' : ''} // Disable right arrow if at the end
            />
          </div>
        </div>
        
        <div className='bottomSelect'>
          <div className='engBox box1'></div>
          <div className='engBox box2'></div>
          <div className='engBox box3'></div>
        </div>

        {/* Pop-up component */}
        <Popup open={isPopupOpen}>
          <div className="popupContent">
            <span className="close" onClick={togglePopup}>&times;</span>
            <embed src={bookList[currentIndex]} type="text/html" className='bookPop'/>
          </div>
        </Popup>
      </div>
    </>
  );
}
