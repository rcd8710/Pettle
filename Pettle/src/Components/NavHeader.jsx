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
    <>
    <div className="headerWrapper">
  <div className='headerInner2'>
  
  </div>
  </div>
  
</>
);
};

export default React.memo(NavHeader);
