import React, { useEffect, useState, Suspense } from 'react';
import '../Styles/AppHomeStyles.css';
import CurrencyAmount from '../Components/CurrencyAmount';
import AppNav from '../Components/AppNav';
import { Canvas } from '@react-three/fiber';
import pizza from "../Assets/Objects/slice.png"
import droplet from "../Assets/Objects/droplet.png"
import bolt from "../Assets/Objects/light.png"
import dumbell from "../Assets/Objects/dumbell.png"
import speaker from "../Assets/Objects/speaker.png"
import { Environment, OrbitControls } from '@react-three/drei';
import stage from "../Assets/Objects/redstage.png";
import Pup1 from '../../public/Pup1';
import Pup2 from '../../public/Pup2';
import Bugbud from '../../public/Bugbud'
import Tiger1 from '../../public/Tiger1';
import Tiger2 from '../../public/Tiger2';

const XpBar = ({ currentXp, maxXp, currLvl }) => {
  const xpPercentage = (currentXp / maxXp) * 100;

  return (
    <>
          <p className='Lvl'>Lvl {currLvl}</p>
           <div className='xp-container'>
     
             <div className='xp'>
                <div
                className='xp-fill'
                style={{ width: `${xpPercentage}%` }}
               >
                <div className='xpA'>{currentXp}/{maxXp}</div>
             </div>
             </div>
          </div>
    </>
  );
}

export default function AppHome() {
  const [currentXp, setCurrentXp] = useState(80); // Initial XP value
  const [currLvl, setCurrLvl] = useState(1); // Initial level
  const [maxXp, setMaxXp] = useState(100);

  useEffect(() => {
    if (currentXp >= maxXp) {
      setCurrLvl((prevLvl) => prevLvl + 1);
      setCurrentXp(0);
      setMaxXp(Math.round(maxXp * 1.1));
    }
  }, [currentXp, maxXp]);

  function increaseXP() {
    setCurrentXp(prev => prev + 20);
  }

  return (
    <>
    <div className='page'>
      <AppNav />
      <div className='centerDiv'>
      <div className='leftDiv'>
      <div className='happinessMeter'>Happiness<div className='heart'></div><div className='heart'></div><div className='heart'></div><div className='heart'></div><div className='heart'></div></div>
      <div className='hungerMeter'>Hunger<img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img></div>
      <div className='thirstMeter'>Thirst<img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img></div>
      <div className='energyMeter'>Energy<img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img></div>
      <div className='socialMeter'>Social<img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img></div>
      <div className='exerciseMeter'>Exercise<img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img></div>
      </div>
            <div className='middleDiv'>
          <div className='canDiv'>
          <Canvas>
            <ambientLight />
            <OrbitControls 
              enableZoom={false} 
              enableRotate={true}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={1.9 * Math.PI / 3} 
            />
            <Suspense fallback={null}>
            <Pup2/>

            </Suspense>
            <Environment preset='sunset' />
          </Canvas>
          </div>
          </div>
            <div className='rightDiv'><div className = 'label2'>DAILY EVENT</div></div>
      </div>
      <div className='bottomDiv'> 
      <XpBar currentXp={currentXp} maxXp={maxXp} currLvl={currLvl} />

      </div>
      </div>
    </>
  );
}
