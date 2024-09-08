import React, { useEffect, useState } from 'react';
import Pup1 from '../../public/Pup1';
import Pup2 from '../../public/Pup2';
import Bugbud from '../../public/Bugbud';
import Tiger1 from '../../public/Tiger1';
import Tiger2 from '../../public/Tiger2';
import Spider1 from '../../public/Spider1';
import socket from './SocketComp';


export default function Animal() {
  const [index, setIndex] = useState();
  const [zoo] = useState([<Tiger1 />, <Pup1 />, <Pup2 />, <Bugbud />, <Tiger2 />, <Spider1 />]);

  socket.emit("give-stuid");

  useEffect(() => {
    const handleSocketIndex = (data) => {
      console.log(data.count);
      setIndex(data.count);
      console.log("socket on give stu");
    };

    socket.on("stuid-give", handleSocketIndex);

    return () => {
      socket.off("stuid-give", handleSocketIndex); // Correct cleanup for the "stuid-give" event
    };
  }, []); // Empty array ensures this runs only once after mounting

  return zoo[index] || null

}
