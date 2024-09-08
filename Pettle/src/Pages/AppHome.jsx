import React, { useEffect, useState, Suspense } from 'react';
import '../Styles/AppHomeStyles.css';
import AppNav from '../Components/AppNav';
import { Canvas } from '@react-three/fiber';
import pizza from "../Assets/Objects/slice.png"
import droplet from "../Assets/Objects/droplet.png"
import bolt from "../Assets/Objects/light.png"
import dumbell from "../Assets/Objects/dumbell.png"
import speaker from "../Assets/Objects/speaker.png"
import { Environment, OrbitControls } from '@react-three/drei';
import Animal from '../Components/Animal';

//Optimize images for web

export default function AppHome() {
  const [currentXp, setCurrentXp] = useState(80); // Initial XP value
  const [currLvl, setCurrLvl] = useState(1); // Initial level
  const [maxXp, setMaxXp] = useState(100);//Initial max xp

  
  const XpBar = ({ currentXp, maxXp, currLvl }) => {
    const xpPercentage = (currentXp / maxXp) * 100;
  
    return (
      <>
            <p className='Lvl'>Lvl {currLvl}</p>
             <div className='xp-container'>
       
               <div className='xp'>
                  <div
                  className='xp-fill'
                  //built in feature
                  style={{ width: `${xpPercentage}%` }}
                 >
                  <div className='xpA'>{currentXp}/{maxXp}</div>
               </div>
               </div>
            </div>
      </>
    );
  }

  //Allows "side effects in functional componenets" an example of this would be fetching data in an api. This is because useEffect lets you dictate the conditions in which something rerenders, these conditions can be when the value of something changes, in this case, currentXp or maxXp chaning will trigger the function. Notice that the effect will happen when the componenet initally "mounts"
  useEffect(() => {
    if (currentXp >= maxXp) {
      setCurrLvl((prevLvl) => prevLvl + 1);
      setCurrentXp(0);
      setMaxXp(Math.round(maxXp * 1.1));
    }
  }, [currentXp, maxXp]);

  const StatsCheck = () => (
     <div className='leftDiv'>
    <div className='happinessMeter'>Happiness<div className='heart'></div><div className='heart'></div><div className='heart'></div><div className='heart'></div><div className='heart'></div></div>
    <div className='hungerMeter'>Hunger<img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img><img src = {pizza} className='slice'></img></div>
    <div className='thirstMeter'>Thirst<img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img><img src = {droplet} className='droplet'></img></div>
    <div className='energyMeter'>Energy<img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img><img src ={bolt} className='bolt'></img></div>
    <div className='socialMeter'>Social<img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img><img src = {speaker} className='speak'></img></div>
    <div className='exerciseMeter'>Exercise<img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img><img src={dumbell} className='weight'></img></div>
    </div>
  )
  //Note confusion on {StatsCheck} vs <StatsCheck>
  return (
    <>
    <div className='page'>
      <AppNav />
    
      <div className='centerDiv'>
          <StatsCheck></StatsCheck>
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
            <Animal/>

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
