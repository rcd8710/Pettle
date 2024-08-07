import React, {} from 'react'
import "../Styles/AppHomeStyles.css"
import "../Styles/PetStyles.css" 
import stage from "../Assets/Objects/stagePlat.png"
import AppNav from '../Components/AppNav';



export default function Pet() {

  return (
    <>
      <AppNav></AppNav>
    <div className='imageH1'><img src = {stage} className='petRoomStage'></img></div>
    <div className='petInfoDiv'></div>
    </>
  )
}
