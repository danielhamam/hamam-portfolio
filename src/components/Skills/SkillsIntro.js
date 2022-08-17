import React, { useEffect } from 'react';
import './SkillsIntro.css';
import { createWordSphere } from './Wordsphere';

let tagCloud = null
window.addEventListener("resize", handleResize)
function handleResize() { 
    let width = window.innerWidth - (window.innerWidth * .85);
    tagCloud = createWordSphere(tagCloud, width); 
}

export default function SkillsIntro() {

    useEffect(() => {
        let width = window.innerWidth - (window.innerWidth * .85);
        tagCloud = createWordSphere(tagCloud, width); 
    });
  return (
    <div id="skills-wrapper" className="container-fluid d-flex justify-content-center align-items-center">
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
