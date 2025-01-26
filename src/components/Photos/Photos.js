import React, { useEffect, useState, useRef } from 'react'
import { Modal } from 'bootstrap';
import Smile from '../../assets/photo-album/Smile.png';
import './Photos.css';

const NUMBER_PHOTOS_TO_LOAD_PER_SCROLL = 4
const NUMBER_PHOTOS_TO_START_WITH = 8

export const Photos = () => {
    const photos = useRef(importPhotoAlbum(require.context('../../assets/photo-album/photos', false, /\.(png|jpe?g|svg)$/)));
    const [numPhotos, setNumPhotos] = useState([NUMBER_PHOTOS_TO_START_WITH, NUMBER_PHOTOS_TO_START_WITH + NUMBER_PHOTOS_TO_LOAD_PER_SCROLL]); // prevValue, newValue
    const lastImageObserver = useRef(null);
    const [imageModal, setImageModal] = useState(null);
    // const [showModal, setShowModal] = useState(null);

    function importPhotoAlbum(source) {
      const uniqueFiles = new Set();
      
      return source.keys()
          .map(path => path.split('/').pop())
          .filter(filename => {
              if (uniqueFiles.has(filename)) return false;
              uniqueFiles.add(filename);
              return true;
          })
          .map(filename => source(`./${filename}`))
          .sort(() => Math.random() - 0.5);
   }

    function openModal(e) {
        e.preventDefault();
        var imageModal = new Modal(document.getElementById("imageModal"), {});
        setImageModal(e.target.src);
        imageModal.toggle();
    }

    useEffect(() => {
        // Observe last image and if intersecting add more numphotos
        lastImageObserver.current = new IntersectionObserver 
        (
            function(entries, self) 
            {
                const lastImage = entries[0]; // only watching one image, so can access first entry.
                if (!lastImage.isIntersecting) 
                {
                    return; // If it's not intersecting, just return
                }
                else if (lastImage.isIntersecting) 
                {
                    self.unobserve(lastImage.target); // Get old last image and unobserve
                    setNumPhotos((numPhotos) => [numPhotos[1], (numPhotos[1] + NUMBER_PHOTOS_TO_LOAD_PER_SCROLL) <= Object.keys(photos.current).length ? (numPhotos[1] + NUMBER_PHOTOS_TO_LOAD_PER_SCROLL) : Object.keys(photos.current).length]);
                }
            },
            { 
                threshold: 1,
                // rootMargin: "-10px"
            }
        )
        lastImageObserver.current.observe(document.querySelector(".photo-item-wrapper:last-child")); // get new last image and observe
    }, []) // Triggers the useEffect function to run when photos / numPhotos state changes


    // Will re-activate every time numPhotos changes
    useEffect(() => {
        // Add more photos to show in the photo album
        if (photos.current && numPhotos[0] < Object.keys(photos.current).length) 
        {
            for (let i = numPhotos[0]; i <= numPhotos[1] - 1; i++) 
            {
                // Fetch parent container
                const photosContainer = document.getElementById("photo-items-container");

                // Create element
                const imageDiv = document.createElement('div');
                imageDiv.classList.add('col');
                imageDiv.classList.add('col-sm-6')
                imageDiv.classList.add('col-lg-3')
                imageDiv.classList.add('photo-item-wrapper')
                imageDiv.classList.add('photo-enter')
                const imageContent = document.createElement('img');
                imageContent.classList.add('photo-item');
                imageContent.src=photos.current[i];
                imageContent.key={i};
                imageContent.addEventListener('click', (e) => openModal(e));
                imageDiv.append(imageContent);

                // Append to parent container
                photosContainer.append(imageDiv);

                // if last image being added, observe
                if (i === numPhotos[1] - 1) 
                {
                    lastImageObserver.current.observe(imageDiv);
                }                    
            }
        }
    }, [numPhotos])

    return (

        <div id='photos-container' className='container'>

            {/* Image Modal */}
            <div id="imageModal" className="modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xs modal-sm modal-md modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            {/* <div className='container'> */}
                                <div> 
                                    <img src={imageModal ? imageModal : ''} width={'100%'} alt="modal-snap"></img>
                                </div> 
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <div>
                <div className='d-flex justify-content-center align-items-center pt-5 my-5' style={{flexWrap: 'wrap'}}> 
                    <h1 id="photos-title" className='text-center'> A snapshot of my life </h1>
                    <img className="photos-smiley-icon mb-3 ms-3" src={Smile} alt="Smile"/>
                    <div className='w-100'> </div>
                    <h5 style={{opacity: 0.7}}> Scroll to view more photos </h5>
                </div>
            </div>

            {/* Photos */}
            <div id="photo-items-container" className='row py-5'>
                {/* Dynamically Loading Images From Photos State */}
                {
                    photos.current != null ? (photos.current.filter(function (image,index) { return index < NUMBER_PHOTOS_TO_START_WITH }).map((image, index) => {
                        return (
                            <div className='col col-sm-6 col-lg-3 photo-item-wrapper photo-enter' key={index} >
                                <img className='photo-item' key={index} src={image} alt="life-snap" onClick={(e) => openModal(e)}/>
                            </div>
                        )})) : 'Loading photos...'
                }
            </div>
        </div>
    )
}