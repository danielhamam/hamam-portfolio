import React from 'react'
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

export const Photos = () => {
  return (
    <div id='photos-container' className='container-sm'>
        <div className='d-flex justify-content-center align-items-center'>
            <h1 className='text-center py-5 pe-2'> Take a glance at a snapshot of my life </h1>
            <img className="photos-smiley-icon pb-2" src={Smile} />
        </div>
    </div>
  )
}
