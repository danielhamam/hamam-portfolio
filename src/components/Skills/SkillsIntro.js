import React, { useEffect, useRef, useState } from 'react';
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
    <div id="skills-container" className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row w-100">
            <div className='col-7 d-flex justify-content-end align-items-center'>
                <div className='mt-5 text-center'> 
                    <span id='skills-desc' className=''> 
                    I program in all different <br/> kinds of ways. Catch me on all <br/> sides of the stack! 
                    </span>
                    <span className='custom-br-position'></span>
                    <button id='skills-button'> SCROLL DOWN </button>
                </div>
            </div>
            <div className='col-5 d-flex justify-content-start align-items-center ps-5'>
                <span className="wordsphere"></span>
            </div>
        </div>
    </div>
  )
}
