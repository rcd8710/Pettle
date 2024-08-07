import React, { useState } from 'react';
import AppNav from '../Components/AppNav';
import "../Styles/ClassroomStyles.css";

export default function Classroom() {
  const [stuCount] = useState(4);

  const generateStudentTags = () => {
    return [...Array(stuCount)].map((_, index) => (
      <div className='stu' key={index}>
        <div className='tag'></div>
      </div>
    ));
  };

  return (
    <>
      <AppNav />
      <div className='classCon'>
        <div className='teach'>
          <div className='tag'></div>
        </div>
        {generateStudentTags()}
      </div>
    </>
  );
}
