import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './SkillsCarousel.css';

// Frontend
import htmlcss from '../../assets/skills/htmlcss.png';
import react from '../../assets/skills/react-icon.png';
import javascript from '../../assets/skills/javascript.png';
import angular from '../../assets/skills/angular.png';
import figma from '../../assets/skills/figma.png'

// Backend
import python from '../../assets/skills/python.png';
import java from '../../assets/skills/java.png';
import sql from '../../assets/skills/sql.png';
import springboot from '../../assets/skills/spring-boot.png';
import bash from '../../assets/skills/bash.png';

// Tools, Frameworks & Others
import git from '../../assets/skills/git2.png';
import agile from '../../assets/skills/agile.png';
import salesforce from '../../assets/skills/salesforce.png';
import dns from '../../assets/skills/DNS.png';
import fcp from '../../assets/skills/fcp.png';

export default function SkillsCarousel() {
    const [options, setOptions] = useState({
        loop: true,
        nav: true,
        dots : true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
    console.log(options)
  return (
    <div className="container skills">
        <div className='row skills-heading'>
            <div className='col-md-12 text-center pt-5'>
                <h2>
                    <span className='skills-heading'> Frontend </span>
                </h2>
            </div>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item text-center">
                <img src={htmlcss} alt="htmlcss"/>
                <div className='item-text'> 
                    <div className="pt-4">
                        HTML / CSS
                        <span className='custom-br-title'></span>
                        (Proficient)
                    </div>
                </div>
            </div>
            <div className="item text-center">
                <img src={react} alt="ReactJS"/>
                <div className='item-text'> 
                    <div className="pt-4"> 
                        ReactJS 
                        <span className='custom-br-title'></span>
                        (Proficient)
                    </div>
                </div>
            </div>
            <div className="item text-center">
                <img src={javascript} alt="JavaScript"/>
                <div className='item-text'> 
                    <div className="pt-4"> 
                        JavaScript
                        <span className='custom-br-title'></span>     
                        (Proficient) 
                     </div>
                </div>
            </div>
            <div className="item text-center">
                <img src={angular} alt="AngularJS"/>
                <div className='item-text'> 
                    <div className="pt-4"> 
                        AngularJS
                        <span className='custom-br-title'></span>
                        (Proficient) 
                    </div>
                </div>
            </div>
            <div className="item text-center">
                <img src={figma} alt="Figma"/>
                <div className='item-text'> 
                    <div className="pt-4"> 
                        Figma
                        <span className='custom-br-title'></span>
                        (Proficient) 
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </div>
  )
}
