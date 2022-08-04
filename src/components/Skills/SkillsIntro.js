import React, { useEffect, useRef } from 'react';
import './SkillsIntro.css';
import { createWordSphere } from './Wordsphere';

export default function SkillsIntro() {
    const tagCloudLoaded = useRef(false); // useRef does not re-render when updated
    useEffect(() => {
        if (tagCloudLoaded.current) return;
        createWordSphere();
        tagCloudLoaded.current = true;
    });
  return (
    <div id="skills-container" className="container-fluid ps-5 pe-5 d-flex justify-content-center align-items-center">
        <div className="row">
            <div className='col-6 container d-flex justify-content-center align-items-center'>
                <div className='mt-5 float-end text-center'> 
                    <span id='skills-desc' className=''> 
                    I program in all different kinds of ways. Catch me on all sides of the stack! 
                    </span>
                    <span className='custom-br-position'></span>
                    <button id='skills-button'> SCROLL DOWN </button>
                </div>
            </div>
            <div className='col-6 container d-flex justify-content-center align-items-center'>
                <span className="wordsphere"></span>
            </div>
        </div>
    </div>
  )
}
