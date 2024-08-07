import React, { useCallback, useState } from 'react';
import '../Styles/AppHomeStyles.css';
import podium from '../Assets/Objects/Gold_Podium_Stage_Transparent_PNG_Clip_Art_Image(1).png';
import CurrencyAmount from '../Components/CurrencyAmount';
import AppNav from '../Components/AppNav';



const XpBar = () => (
  <div className='xp-container'>
        <div className='xp'>
          <div className='xp-fill'></div>
        </div>
      </div>
)



export default function AppHome() {
  
  return (
    <>
    <AppNav></AppNav>
    <div>
        <XpBar></XpBar>
        <CurrencyAmount></CurrencyAmount>
        <div className='podium-container'><img src={podium} className='pod'/></div>
    </div>
    </>
  );
}
