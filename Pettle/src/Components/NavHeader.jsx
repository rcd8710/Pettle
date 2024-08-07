import React, {useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaw, faShop } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import discoBall from '../Assets/Objects/disco-ball(1).png';
  

const NavHeader = () => {
   const navigate = useNavigate()


  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
  <h1 className='headerInner'>
    <button className='TopB' onClick={() => handleNavigate('/home')}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
    <button className='TopB' onClick={() => handleNavigate('/pet')}>
      <FontAwesomeIcon icon={faPaw} />
    </button>
    <button className='TopB2' onClick={() => handleNavigate('/disco')}>
      <img src={discoBall} className='disco'/>
    </button>
    <button className='TopB' onClick={() => handleNavigate('/store')}>
      <FontAwesomeIcon icon={faShop} />
    </button>
  </h1>
);
};

export default React.memo(NavHeader);
