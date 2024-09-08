import React, { useCallback, useState } from 'react'; // Import useCallback and useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LeftNav = () => { // Capitalized component name
  const navigate = useNavigate();

  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const [showNavBar, setShowNavBar] = useState(false);

  const updateShowNav = useCallback(() => {
    setShowNavBar((prevShowNavBar) => !prevShowNavBar);
  }, []);

  return (
    <>
      <span className='bars' onClick={updateShowNav}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <nav className={`navigation ${showNavBar ? 'show' : ''}`}>
        <a href='#classroom' className='one' onClick={() => handleNavigate('/classroom')}>
          Classroom
        </a>
        <a href='#english' onClick={() => handleNavigate('/english')}>English</a>
        <a href='#math' onClick={() => handleNavigate('/math')}>Math</a>
        <a href='#science' onClick={() => handleNavigate('/science')}>Science</a>
        <a href='#history' onClick={() => handleNavigate('/history')}>History</a>
        <a href='#health' onClick={() => handleNavigate('/health')}>Health</a>
        <a href='#logout' onClick={() => handleNavigate('/')}>
          Logout
        </a>
      </nav>
    </>
  );
};

export default React.memo(LeftNav); // Export with capitalized component name
