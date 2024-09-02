import React from 'react';
import fish from "../Assets/Animal_images/transfish.png";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5001");

const StudentForm = ({ formVals, updateForm, backToLogin }) => {
  const joinClass = () => {
    socket.emit("join-class", formVals.codeVal);
  };

  return (
    <>
      <img src={fish} className="kitten" alt="Fish" />
      <h2>Class Code:</h2>
      <div className="input-container">
        <input
          type="text"
          name="codeVal"
          className="input-bar"
          placeholder="Enter code here..."
          value={formVals.codeVal}
          onChange={updateForm}
        />
      </div>
      <button className="Login1" onClick={joinClass}>
        Submit
      </button>
      <p className="BLogin1" onClick={() => backToLogin("teach")}>
        Back to Login
      </p>
    </>
  );
};

export default React.memo(StudentForm);
