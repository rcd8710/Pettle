import React, { useCallback, useState } from 'react'; // Import useCallback and useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaw, faShop, faBars } from '@fortawesome/free-solid-svg-icons';
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
        <a href='#english'>English</a>
        <a href='#math'>Math</a>
        <a href='#science'>Science</a>
        <a href='#history'>History</a>
        <a href='#health'>Health</a>
        <a href='#logout' onClick={() => handleNavigate('/')}>
          Logout
        </a>
      </nav>
    </>
  );
};

export default React.memo(LeftNav); // Export with capitalized component name
