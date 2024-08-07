import React, {} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins } from '@fortawesome/free-solid-svg-icons';

const CurrencyAmount = () => (
        <>
        <span className='currency'>
          <FontAwesomeIcon icon={faCoins} />1000
        </span>
        <div className='dailyCon'>
          <div className='con'></div>
          <div className='con'></div>
          <div className='con'></div>
        </div>
        </>
);

export default React.memo(CurrencyAmount);
