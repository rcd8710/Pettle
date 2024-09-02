import React from 'react'
import LeftNav from './LeftNav'
import NavHeader from './NavHeader'
import CurrencyAmount from './CurrencyAmount';
import NavHeader2 from './NavHeader2';

    const AppNav = () => (
        <>
            <div className='headerOuter2'>
              <LeftNav ></LeftNav>
              <NavHeader></NavHeader>
              <CurrencyAmount />
          </div>
          <NavHeader2></NavHeader2>
          </>
      );
export default React.memo(AppNav);

