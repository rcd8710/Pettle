import React, {useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaw, faShop } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import discoBall from '../Assets/Objects/disco-ball(1).png';
  

const NavHeader2 = () => {
   const navigate = useNavigate()


  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
  <div className='headerInner3'>
    <div className='headerInner4'>
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
  </div>
</div>
);
};

export default React.memo(NavHeader2);
