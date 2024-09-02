import React, {} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins } from '@fortawesome/free-solid-svg-icons';

const CurrencyAmount = () => (
        <div className='currency'>
          <FontAwesomeIcon icon={faCoins} />1000
        </div>
        
);

export default React.memo(CurrencyAmount);
