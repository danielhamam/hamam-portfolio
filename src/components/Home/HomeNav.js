import React from 'react';
import './HomeNav.css';
import about from '../../assets/homepage/stick_figures/about_me.png';
import skills from '../../assets/homepage/stick_figures/skills.png';
import work from '../../assets/homepage/stick_figures/work.png';
import photos from '../../assets/homepage/stick_figures/photos.png';

export default function HomeNav() {
  return (
    <div id="home-nav-wrapper"> 
        <div id="home-nav" className='container px-5'>
            <div className='row gx-5'> 
                <div className='offset-2 col-4'>
                    <div> 
                        <img className='home-nav-image' src={about} alt="Figure 1"/>
                        <br/>
                        <span className='home-nav-font'> Learn a little bit about me and the start of my career as a software engineer </span>
                        <br/>
                        <br/>
                        <a className='home-nav-link' href="/about"> About Me </a>
                    </div>
                </div>
                <div className='col-4'>
                    <img className='home-nav-image' src={skills} alt="Figure 1"/>
                    <br/>
                    <span className='home-nav-font'> View a list of my skills and abilities to see if I have what you’re looking for </span>
                    <br/>
                    <br/>
                    <a className='home-nav-link' href="/skills"> My Skills </a>
                </div>
            </div>
            <span className='home-nav-row-margin'> </span>
            <div className='row gx-5'>
                <div className='offset-2 col-4'>
                    <img className='home-nav-image' src={work} alt="Figure 3"/>
                    <br/>
                    <span className='home-nav-font'> Jog through a list of personal projects that I dedicate my time building </span>
                    <br/>
                    <br/>
                    <a className='home-nav-link' href='/portfolio'> My Work </a>
                </div>
                <div className='col-4'>
                    <img className='home-nav-image' src={photos} alt="Figure 4"/>
                    <br/>
                    <span className='home-nav-font'> Take a stroll through an album of pictures I took sometime during my life </span>
                    <br/>
                    <br/>
                    <a className='home-nav-link' href='/photos'> Photo Album </a>
                </div>
            </div>
        </div>
    </div>
  )
}
