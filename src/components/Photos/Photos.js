import React, { useState } from 'react'
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

// Importing photos

// 4
import baby from '../../assets/photo-album/photos/baby.jpg';
import baba from '../../assets/photo-album/photos/baba.jpg';
import beach from '../../assets/photo-album/photos/beach.jpg';
import blackhat from '../../assets/photo-album/photos/blackhat.jpg';

import brooklyn from '../../assets/photo-album/photos/brooklyn.jpg';
import chelsea from '../../assets/photo-album/photos/chelsea.png';
import city from '../../assets/photo-album/photos/city.jpg';
import cousin from '../../assets/photo-album/photos/cousin.jpg';

import friends from '../../assets/photo-album/photos/friends.png';
import knicks from '../../assets/photo-album/photos/knicks.jpg';
import mama from '../../assets/photo-album/photos/mama.jpg';
import nyc from '../../assets/photo-album/photos/nyc.jpg';

import timhortons from '../../assets/photo-album/photos/timhortons.jpg';

export const Photos = () => {
  return (
    <div id='photos-container' className='container'>
        <div className='d-flex justify-content-center align-items-center'>
            <h1 id="photos-title" className='text-center py-5 my-5'> Take a glance at a snapshot of my life </h1>
            <img className="photos-smiley-icon pb-2" src={Smile} />
        </div>
        <div className='row py-5'>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={baby}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={baba}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={beach}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={blackhat}/>
            </div>
        </div>
        <div className='row py-5'>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={brooklyn}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={chelsea}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={city}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={cousin}/>
            </div>
        </div>
        <div className='row py-5'>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={friends}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={knicks}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={mama}/>
            </div>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={nyc}/>
            </div>
        </div>
        <div className='row py-5'>
            <div className='col photo-item-wrapper'>
                <img className='photo-item' src={timhortons}/>
            </div>
        </div>

    </div>
  )
}
