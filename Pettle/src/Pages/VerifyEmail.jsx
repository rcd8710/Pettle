import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const verifyEmailRan = useRef(false);

  useEffect(() => {
    if (verifyEmailRan.current) return;
    verifyEmailRan.current = true;

    const verifyEmail = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');

      if (!token) {
        setMessage('Token is missing');
        return;
      }

      try {
        console.log("Verifying email...");
        const response = await axios.get(`http://localhost:5000/verify-email?token=${token}`);
        setMessage(response.data);

        navigate('/'); // Adjust the route as needed
      } catch (error) {
        console.error('Verification error:', error);
        setMessage('Error verifying email');
      }
    };

    verifyEmail();
  }, [location.search, navigate]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
