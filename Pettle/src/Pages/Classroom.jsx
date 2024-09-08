import React, { useState, useEffect } from 'react';
import AppNav from '../Components/AppNav';
import "../Styles/ClassroomStyles.css";
import socket from '../Components/SocketComp';

export default function Classroom() {
  const [stuCount, setStuCount] = useState(0);
  const [message, setMessage] = useState("booyyy");
  const updateStuCount = (val) => {
    setStuCount(val)
  }
  useEffect(() => {
    // Request the student count on mount
    socket.emit("add-students");

    // Listener for student count updates
    socket.on("count-students", (data) => {
      console.log("Received student count:", data.count);
      updateStuCount(data.count);
    });

    return () => {
      socket.off("add-students")
      socket.off("count-students");
      console.log("`User Disconnected: ${socket.id}`")
    };
  }, []);

  const renderStudentTags = () => {
    const tags = [];
    for (let i = 0; i < stuCount; i++) {
      tags.push(
        <div className='stu' key={i}>
          <div className='tag'></div>
        </div>
      );
    }
    return tags;
  };


  return (
    <>
      <AppNav />
      <div className='classCon'>
        <div className='teach'>
          Hello?
          <div className='tag'>{message}</div>
        </div>
          {renderStudentTags()} 
      </div>
    </>
  );
}
