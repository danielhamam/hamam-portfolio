import React, { useEffect, useRef } from 'react';
import './SkillsIntro.css';
import { createWordSphere } from './Wordsphere';

export default function SkillsIntro() {
    const tagCloud = useRef(null);

    useEffect(() => {
        if (tagCloud.current === null) { tagCloud.current = createWordSphere(null, window.innerWidth - (window.innerWidth * .85)) }
        function handleResize() { tagCloud.current = createWordSphere(tagCloud.current, window.innerWidth - (window.innerWidth * .85)); }
        window.addEventListener("resize", handleResize)
    });
  return (
    <div id="skills-wrapper" className="container d-flex justify-content-center align-items-center">
        <div className="row">
            <div className='col-7 col-xxl-7 d-flex justify-content-start align-items-center'>
                <div id="skills-desc-wrapper" className='mt-5 text-center'> 
                    <span id='skills-desc'> 
                        I program in all different <br/> kinds of ways. Catch me on all <br/> sides of the stack! 
                    </span>
                </div>
            </div>
            <div className='col-5 col-xxl-5 ps-2 pt-3 d-flex align-items-center'>
                <span className="wordsphere"></span>
            </div>
        </div>
    </div>
  )
}
