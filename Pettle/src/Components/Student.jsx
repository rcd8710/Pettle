import React, { useCallback, useEffect, useState  } from 'react';
import fish from "../Assets/Animal_images/transfish.png";
import { useNavigate} from 'react-router-dom';
import socket from './SocketComp.jsx'; // Adjust the path as needed

const StudentForm = ({ formVals, updateForm, backToLogin }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const joinClass = () => {
    socket.emit("join-class", {codeVal:formVals.codeVal, loginVal: formVals.loginVal});
  };

  useEffect(() => {
    const handleStudentJoin = () => {
      handleNavigate("/beg-page");
    };

    socket.on("student-join", handleStudentJoin);

    // Clean up the event listener on unmount
    return () => {
      socket.off("student-join", handleStudentJoin);
      console.log("`User Disconnected: ${socket.id}`")
    };
  }, [handleNavigate]);
  socket.on("student-exists", () => {
    setMessage("This username already exists")
  })
  return (
    <>
      <img src={fish} className="kitten" alt="Fish" />
      <h2>Add you class code and username</h2>
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
      <input
              className='UserInput'
              name='loginVal'
              placeholder='Username'
              value={formVals.loginVal}
              onChange={updateForm}
            />
      <button className="Login1" onClick={joinClass}>
        Submit
      </button>
      <p>{message}</p>
      <p className="BLogin1" onClick={() => backToLogin("teach")}>
        Back to Login
      </p>
    </>
  );
};

export default React.memo(StudentForm);
