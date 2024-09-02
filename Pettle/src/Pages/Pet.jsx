import React, { useState, useEffect,Suspense } from 'react';
import "../Styles/AppHomeStyles.css";
import "../Styles/PetStyles.css"; 
import AppNav from '../Components/AppNav';
import lights from '../Assets/Objects/lights.png'
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Pup2 from '../../public/Pup2';
import Bugbud from '../../public/Bugbud'
import stage from "../Assets/Objects/stagePlat.png"



export default function Pet() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open the curtain when the component mounts
        setIsOpen(true);
        
        // Set a timer to remove the curtain after the animation duration
        const timer = setTimeout(() => {
            document.querySelector(".curtain").classList.add("hidden")
        }, 4800); // Duration should match the CSS transition time

        return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }, []);

    return (
        <>
        <div className='stagePage'>
            <AppNav />
            <img src={lights} className='stageLights'></img>
            <div className='cenStage'>
              <div className='midStage'>
          <Canvas className='can2'>
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
          <img src={stage} className='petRoomStage' alt="Stage" />
              </div>
              <div className='rightStage'><div className='petInfoDiv'>
                <h2>Palehound Puppy Entry</h2>
                <p>
                    The Palehound puppy is a delightful bundle with a fluffy, velvety coat in cream, light beige, and silver. Its rounded, floppy ears and large, soulful eyes add to its charm.
                </p>
                <h3>Traits:</h3>
                <ul>
                    <li><strong>Appearance:</strong> Fluffy coat, rounded ears, and expressive eyes.</li>
                    <li><strong>Temperament:</strong> Playful yet calm, affectionate, and gentle with family and pets.</li>
                    <li><strong>Intelligence:</strong> Quick learner and eager to please, showing early signs of intelligence.</li>
                    <li><strong>Unique Ability:</strong> Early display of "Empathy Sense," responding to emotional needs.</li>
                    <li><strong>Exercise Needs:</strong> Enjoys gentle play and mental stimulation, not overly energetic.</li>
                </ul>
                <p>
                    The Palehound puppy’s soft appearance and gentle nature make it a loving companion and easy to train.
                </p>
            </div></div>
            </div>
            <div>
                <div className={`curtain ${isOpen ? 'open' : ''}`}>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            
            </div>
        </>
    );
}
