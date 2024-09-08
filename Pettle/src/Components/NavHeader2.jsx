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
//Returning the memoized version means that the componenet will only rerender if its props change, in this case it has no props.
//So it will not unnessicarily rerender, note this is different from usecallback in there is no last call/cahched value to reference, it
//just emphasizes not rerendering until props change
export default React.memo(NavHeader2);
