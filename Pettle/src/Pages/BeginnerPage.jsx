import React, { useState } from 'react';
import "../Styles/BeginnerStyles.css";

export default function BeginnerStudentPage() {
  const [disName, setDisName] = useState("");
  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  const handleDisName = (event) => {
    setDisName(event.target.value);
  };

  const handleSetShowStep1 = () => {
    setShowStep1(false);
    setShowStep2(true);
  };

  const handleSetShowStep2 = () => {
    setShowStep2(false);
    setShowStep3(true);
  };

  return (
    <div className='begPage'>
      {showStep1 && (
        <div className='openCard'>
          <p>Hey! Welcome student, to the land of Pettle!</p>
          <p>What would you like your display name to be?</p>
          <input
            type="text"
            name="disName"
            className="input-bar"
            placeholder="Enter display name..."
            value={disName}
            onChange={handleDisName}
          />
          <button onClick={handleSetShowStep1}>Continue</button>
        </div>
      )}
      
      {showStep2 && (
        <div className='step2'>
          <p>Now check to see if your teacher has let you in...</p>
          <button onClick={handleSetShowStep2}>Go next</button>
        </div>
      )}

      {showStep3 && (
        <div className='step3'>
          <p>Ok, you're in! Now click the present for a special surprise!</p>
          <div className='gift-icon'>🎁</div>
          <p>Wow! This is your pet! Feed, play, and take care of it to watch it grow!</p>
         
        </div>
      )}
    </div>
  );
}
