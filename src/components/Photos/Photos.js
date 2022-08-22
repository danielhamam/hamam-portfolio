import React, { useEffect, useState } from 'react'
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

export const Photos = () => {
    const [photos, setPhotos] = useState(null)

    function importPhotoAlbum(source) {
        // Fetch photos, randomly sort them, place into map
        return source.keys().sort(function(a,b) { return Math.random() - 0.5;}).map(source);
    }

    useEffect(() => {
        // Receive photos and set it as state so it renders
        if (!photos) setPhotos(importPhotoAlbum(require.context('../../assets/photo-album/photos', false, /\.(png|jpe?g|svg)$/)));
    }, [photos])

    return (
        <div id='photos-container' className='container'>
            <div className='d-flex justify-content-center align-items-center py-5 my-5'>
                <h1 id="photos-title" className='text-center'> Take a glance at a snapshot of my life </h1>
                <img className="photos-smiley-icon mb-3 ms-3" src={Smile} alt="Smile"/>
            </div>
            <div className='row py-5'>
                {/* Dynamically Loading Images From Photos State */}
                {
                    photos != null ? (photos.map((image, index) => {
                        return (
                            <div className='col col-sm-6 col-lg-3 photo-item-wrapper'>
                                <img className='photo-item' key={index} src={image} alt="life-snap"/>
                            </div>
                        )})) : 'Loading...'
                }
            </div>
        </div>
    )
}
