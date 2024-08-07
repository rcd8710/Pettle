import React from 'react'
import LeftNav from './LeftNav'
import NavHeader from './NavHeader'

    const AppNav = () => (
        <div className='page'>
            <div className='headerOuter2'>
              <NavHeader></NavHeader>
              <LeftNav ></LeftNav>
          </div>
        </div>
      
      );
export default React.memo(AppNav);

