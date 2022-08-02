import React from 'react';
import './HomeNav.css';
import about from '../../assets/homepage/stick_figures/about_me.png';
import skills from '../../assets/homepage/stick_figures/skills.png';
import photos from '../../assets/homepage/stick_figures/stroll_photos.png';
import work from '../../assets/homepage/stick_figures/work.png';
import photos_resized from '../../assets/homepage/stick_figures/stroll_photos_resized.png';

export default function HomeNav() {
  return (
    <div id="home-nav-wrapper" className='container'>
        <div className='row'> 
            <div className='offset-md-2 col-md-4'>
                <div> 
                    <img src={about}/>
                    <br/>
                    <span className='home-nav-font'> Learn a little bit about me and the start of my career as a software engineer </span>
                    <br/>
                    <br/>
                    <a className='home-nav-link'> About Me </a>
                </div>
            </div>
            <div className='offset-md-1 col-md-4'>
                <img src={skills}/>
                <br/>
                <span className='home-nav-font'> View a list of my skills and abilities to see if I have what you’re looking for </span>
                <br/>
                <br/>
                <a className='home-nav-link'> My Skills </a>
            </div>
        </div>
        <br/> <br/> <br/> <br/> <br/> 
        <div className='row'>
            <div className='offset-md-2 col-md-4'>
                <img src={work}/>
                <br/>
                <span className='home-nav-font'> Jog through a list of personal projects that I dedicate my time building </span>
                <br/>
                <br/>
                <a className='home-nav-link'> My Work </a>
            </div>
            <div className='offset-md-1 col-md-4'>
                <img src={photos_resized}/>
                <br/>
                <span className='home-nav-font'> Take a stroll through an album of pictures I took sometime during my life </span>
                <br/>
                <br/>
                <a className='home-nav-link'> Photo Album </a>
            </div>
        </div>
    </div>
  )
}
