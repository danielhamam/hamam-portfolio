import React, { useEffect, useState, useRef } from 'react'
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

const NUMBER_PHOTOS_TO_LOAD_PER_SCROLL = 4
const NUMBER_PHOTOS_TO_START_WITH = 8

export const Photos = () => {
    const [photos, setPhotos] = useState(null);
    const [numPhotos, setNumPhotos] = useState(NUMBER_PHOTOS_TO_START_WITH);
    // const [showLoadingPhotos, setShowLoadingPhotos] = useState(false);
    const lastImageObserver = useRef(null);

    function importPhotoAlbum(source) {
        // Fetch photos, randomly sort them, place into map
        return source.keys().sort(function(a,b) { return Math.random() - 0.5;}).map(source);
    }

    useEffect(() => {
        // Receive photos and set it as state so it renders
        if (!photos) { setPhotos(importPhotoAlbum(require.context('../../assets/photo-album/photos', false, /\.(png|jpe?g|svg)$/))); }

        if (document.querySelector(".photo-item-wrapper:last-child")) {

            // Observe last image and if intersecting add more numphotos
            lastImageObserver.current = new IntersectionObserver(
                entries => {
                    const lastImage = entries[0]; // only watching one image, so can access first entry.
                    if (!lastImage.isIntersecting) return; // if it's not intersecting, just return
                    // once our last image starts to be visible, then load in a bunch of new images
                    loadImages();
                    lastImageObserver.current.unobserve(lastImage.target); // don't want to observe old image anymore
                    // lastImageObserver.current.observe(document.querySelector(".photo-item-wrapper:last-child")); // get new last card and observe
                },
                {
                    threshold: 1,
                    rootMargin : "1px", // Option - runs when element is 1px away from becoming on the screen
                }
            )

            // Watch the last image in the image list (runs after loading more photos or loading photos the first time)
            lastImageObserver.current.observe(document.querySelector(".photo-item-wrapper:last-child"));
        }

        const loadImages = () => {
            // Add more photos to show in the photo album
            if (photos && numPhotos < Object.keys(photos).length) {
                let amountPhotosAfterLoad = numPhotos + NUMBER_PHOTOS_TO_LOAD_PER_SCROLL <= Object.keys(photos).length ? numPhotos + NUMBER_PHOTOS_TO_LOAD_PER_SCROLL : Object.keys(photos).length;
                console.log('Loading more photos into album: ' + (amountPhotosAfterLoad) + '/' +  Object.keys(photos).length)
                setNumPhotos(amountPhotosAfterLoad);
            }
        }

    }, [photos, numPhotos]) // Triggers the useEffect function to run when photos / numPhotos state changes

    return (
        <div id='photos-container' className='container'>
            <div>
                <div className='d-flex justify-content-center align-items-center pt-5 my-5' style={{flexWrap: 'wrap'}}> 
                    <h1 id="photos-title" className='text-center'> Take a glance at a snapshot of my life </h1>
                    <img className="photos-smiley-icon mb-3 ms-3" src={Smile} alt="Smile"/>
                    <div className='w-100'> </div>
                    <h5 style={{opacity: 0.7}}> Scroll to the bottom of the page to view more photos </h5>
                </div>
            </div>
            <div className='row py-5'>
                {/* Dynamically Loading Images From Photos State */}
                {
                    photos != null ? (photos.filter(function (image,index) { return index < numPhotos }).map((image, index) => {
                        return (
                            <div className='col col-sm-6 col-lg-3 photo-item-wrapper photo-enter' key={index} >
                                <img className='photo-item' key={index} src={image} alt="life-snap"/>
                            </div>
                        )})) : 'Loading photos...'
                }

            </div>
        </div>
    )
}
