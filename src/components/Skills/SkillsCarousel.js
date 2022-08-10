import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './SkillsCarousel.css';

export const SkillsCarousel = (props) => {
    
    const options= {
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
    };

  return (
    <div className="container skills">
        <div className='row skills-heading'>
            <div className='col-md-12 text-center pt-5'>
                <h2>
                    <span className='skills-heading'> {props.title} </span>
                </h2>
            </div>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
            {Object.keys(props.skills).map((skill) => {
                return (
                    <div className="item text-center">
                        <img src={props.skills[skill][0]} alt="Skill"/>
                        <div className='item-text'> 
                            <div className="pt-4"> 
                                {skill}
                                <span className='custom-br-title'></span>
                                <Rating ratingValue={props.skills[skill][1]} /* Star Rating */ />
                            </div>
                        </div>
                     </div>
                );
            })}
        </OwlCarousel>
    </div>
  )
}
