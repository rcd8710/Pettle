import React, { useState, useRef, useEffect } from 'react';
import "../Styles/DiscoStyles.css";
import { useNavigate } from 'react-router-dom';
import AppNav from '../Components/AppNav';
import socket from '../Components/SocketComp';
export default function Disco() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [discoMessage, setDiscoChat] = useState("");
  const [messages, setMessages] = useState([]);
  
  // Ref for scrolling to the bottom
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleDiscoChat = (e) => {
    const val = e.target.value;
    setDiscoChat(val);
  };

  const updateShowNav = () => {
    setShowNavBar(!showNavBar);
  };


  const sendMessage = () => {
    if (discoMessage.trim()) {
      setMessages([...messages, discoMessage]); // Add new message to the list
      setDiscoChat(""); // Clear the input field
    }
  };

  socket.emit("send-disco-message", ({discoMessage: discoMessage}) => {
    socket.on("")
  })


  return (
    <>
      <div className='discoPage'>
        <AppNav />
        <div className='backDiv'>
          <div className='chatBox'>
            <div className='textBox'>
              {messages.map((theMessage, index) => (
                <div key={index} className='messageBox'>
                  <p>{theMessage}</p>
                </div>
              ))}
              {/* Scroll target */}
              <div ref={endOfMessagesRef} />
            </div>
            <div className='inputBar'>
              <input
                type="text"
                name="discoMessage"
                className='inputText'
                value={discoMessage}
                onChange={handleDiscoChat}
              />
              <button className='textB' onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
