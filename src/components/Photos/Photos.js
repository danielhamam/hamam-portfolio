import React, { useEffect, useState } from 'react'
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

export const Photos = () => {
    const [photos, setPhotos] = useState(null);
    const [numPhotos, setNumPhotos] = useState(12);
    const [showLoadingPhotos, setShowLoadingPhotos] = useState(false)

    function importPhotoAlbum(source) {
        // Fetch photos, randomly sort them, place into map
        return source.keys().sort(function(a,b) { return Math.random() - 0.5;}).map(source);
    }

    useEffect(() => {
        // Receive photos and set it as state so it renders
        if (!photos) { setPhotos(importPhotoAlbum(require.context('../../assets/photo-album/photos', false, /\.(png|jpe?g|svg)$/))); }

        // Check if user reached bottom of page
        const loadImages = () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
                if (photos && numPhotos < Object.keys(photos).length) {
                    let amountPhotosAfterLoad = numPhotos + 12 <= Object.keys(photos).length ? numPhotos + 12 : Object.keys(photos).length;
                    // console.log('Loading more photos into album: ' + (amountPhotosAfterLoad) + '/' +  Object.keys(photos).length)
                    setShowLoadingPhotos(true)
                    setNumPhotos(amountPhotosAfterLoad);
                    setShowLoadingPhotos(false)
                }
            }
        }
        window.addEventListener('scroll', loadImages);

        // Imitating componentWillUnmount
        return () => { window.removeEventListener('scroll', loadImages); }
    }, [photos, numPhotos]) // Triggers the useEffect function to run when photos or numPhotos state changes

    return (
        <div id='photos-container' className='container'>
            <div className='d-flex justify-content-center align-items-center py-5 my-5'>
                <h1 id="photos-title" className='text-center'> Take a glance at a snapshot of my life </h1>
                <img className="photos-smiley-icon mb-3 ms-3" src={Smile} alt="Smile"/>
            </div>
            <div className='row py-5'>
                {/* Dynamically Loading Images From Photos State */}
                {
                    photos != null ? (photos.filter(function (image,index) { return index < numPhotos }).map((image, index) => {
                        return (
                            <div className='col col-sm-6 col-lg-3 photo-item-wrapper' key={index} >
                                <img className='photo-item' key={index} src={image} alt="life-snap"/>
                            </div>
                        )})) : 'Loading photos...'
                }

                {/* Check if More Photos are Loading */}
                { showLoadingPhotos === true ? <div className='text-center mt-5' style={{fontWeight: 800}}> <span> Loading more photos...</span> </div> : ''}

            </div>
        </div>
    )
}
