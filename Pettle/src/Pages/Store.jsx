import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/AppHomeStyles.css"
import "../Styles/StoreStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import AppNav from '../Components/AppNav';




export default function Pet() {

    
    

  return (
    <>
        <AppNav></AppNav>
        <span className='currency'><FontAwesomeIcon icon={faCoins}/>1000</span>
        <div className='StoreCon'>
        <div className='Scon Scon1'><div className = 'label'></div><div className = 'price'><FontAwesomeIcon icon={faCoins}/>1000</div></div>
        <div className='Scon Scon2'><div className = 'label'></div><div className = 'price'><FontAwesomeIcon icon={faCoins}/>1000</div></div>
        <div className='Scon Scon3'><div className = 'label'></div><div className = 'price'><FontAwesomeIcon icon={faCoins}/>1000</div></div>
        <div className='Scon Scon4'><div className = 'label'></div><div className = 'price'><FontAwesomeIcon icon={faCoins}/>1000</div></div>
      </div>
    </>
  )
}
